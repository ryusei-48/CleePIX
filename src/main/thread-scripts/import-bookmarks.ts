import {parentPort, workerData} from 'worker_threads';
import Database from "better-sqlite3-multiple-ciphers";
import { IBaseMark } from "bookmark-file-parser";

const port = parentPort;
if (!port) throw new Error('IllegalState');

const instanceDB = new Database( workerData.dbPath );

const selectTagsTable = instanceDB.prepare(`SELECT * FROM tags WHERE name = ?`);
const insertTagTable = instanceDB.prepare(`INSERT INTO tags ( name ) VALUES ( ? )`);
const selectTagsStructureTable = instanceDB.prepare(`SELECT * FROM tags_structure WHERE parent_id = ? AND child_id = ?`);
const insertTagStructureTable = instanceDB.prepare(`INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`);
const selectBookmarksTable = instanceDB.prepare(`SELECT * FROM bookmarks WHERE url = ?`);
const insertBookmarkTabale = instanceDB.prepare(`INSERT INTO bookmarks ( title, url, type ) VALUES ( ?, ?, ? )`);
const selectBookmarkTagsTable = instanceDB.prepare(`SELECT * FROM tags_bookmarks WHERE tags_id = ? AND bookmark_id = ?`);
const insertBookmarkTagsTable = instanceDB.prepare(`INSERT INTO tags_bookmarks ( tags_id, bookmark_id ) VALUES ( ?, ? )`);

const searchBelongToTags = instanceDB.prepare(`SELECT * FROM tags_bookmarks WHERE bookmark_id = ?`);
const searchBelongToTagsStructure = instanceDB.prepare(`SELECT * FROM tags_structure WHERE child_id = ?`);

port.postMessage( importBookmarks( workerData.bookmarks ) );
instanceDB.close();
port.close();

function importBookmarks(bookmarks: IBaseMark[], parentTagId: number | bigint = 0): any[] {
  const errorLogs: any[] = [];
  const importedBookmarksId: (number | bigint)[] = [];
  bookmarks.forEach(item => {
    try {
      if (item.type === 'folder') {
        let tagId: number | bigint = 0;
        const selectedTag = selectTagsTable.get(item.name);
        if (selectedTag !== undefined && parentTagId != selectedTag.id) {
          const selectedTagStructure = selectTagsStructureTable.get(parentTagId, selectedTag.id);
          tagId = selectedTag.id;
          if (selectedTagStructure === undefined) {
            insertTagStructureTable.run(parentTagId, selectedTag.id);
          }
        } else if (selectedTag === undefined) {
          const insertedTag = insertTagTable.run(item.name);
          tagId = insertedTag.lastInsertRowid;
          if (insertedTag.changes === 1) {
            insertTagStructureTable.run(parentTagId, insertedTag.lastInsertRowid);
          }
        }
        if (item.children.length > 0) {
          importBookmarks(item.children, tagId);
        }
      } else if (item.type === 'site') {
        const selectedBookmark = selectBookmarksTable.get(item.href);
        if (selectedBookmark !== undefined) {
          const selectedTagBookmark = selectBookmarkTagsTable.get(parentTagId, selectedBookmark.id);
          if (selectedTagBookmark === undefined) {
            insertBookmarkTagsTable.run(parentTagId, selectedBookmark.id);
          }
        } else {
          let pageType: string = "general";
          if (item.href.match(/^https:\/\/www\.youtube\.com\/watch\?v=/)) {
            pageType = "youtube";
          }
          const insertedBookmark = insertBookmarkTabale.run(item.name, item.href, pageType);
          importedBookmarksId.push( insertedBookmark.lastInsertRowid );
          if (insertedBookmark.changes === 1) {
            insertBookmarkTagsTable.run(parentTagId, insertedBookmark.lastInsertRowid);
          }
        }
      }
    } catch (e) { console.log(e); errorLogs.push( e ); }
  });

  try {
    importedBookmarksId.forEach(( bookmarkId ) => {
      const belongToTags = searchBelongToTags.all( bookmarkId );
      belongToTags.forEach(( tag ) => {
        let tmpTagId: number = tag.tags_id;
        while ( true ) {
          let tmpParentTag = searchBelongToTagsStructure.get( tmpTagId );
          if ( tmpParentTag.parent_id > 0 ) {
            insertBookmarkTagsTable.run( tmpParentTag.parent_id, bookmarkId );
            tmpTagId = tmpParentTag.parent_id;
          }else return;
        }
      });
    });
  }catch (e) { console.log(e); errorLogs.push( e ); }
  return errorLogs;
}