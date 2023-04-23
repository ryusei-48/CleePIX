"use strict";
const worker_threads = require("worker_threads");
const Database = require("better-sqlite3-multiple-ciphers");
const port = worker_threads.parentPort;
if (!port)
  throw new Error("IllegalState");
const instanceDB = new Database(worker_threads.workerData.dbPath);
const selectTagsTable = instanceDB.prepare(`SELECT * FROM tags WHERE name = ?`);
const insertTagTable = instanceDB.prepare(`INSERT INTO tags ( name ) VALUES ( ? )`);
const selectTagsStructureTable = instanceDB.prepare(`SELECT * FROM tags_structure WHERE parent_id = ? AND child_id = ?`);
const insertTagStructureTable = instanceDB.prepare(`INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`);
const selectBookmarksTable = instanceDB.prepare(`SELECT * FROM bookmarks WHERE url = ?`);
const insertBookmarkTabale = instanceDB.prepare(`INSERT INTO bookmarks ( title, url, type ) VALUES ( ?, ?, ? )`);
const selectBookmarkTagsTable = instanceDB.prepare(`SELECT * FROM tags_bookmarks WHERE tags_id = ? AND bookmark_id = ?`);
const insertBookmarkTagsTable = instanceDB.prepare(`INSERT INTO tags_bookmarks ( tags_id, bookmark_id ) VALUES ( ?, ? )`);
port.postMessage(importBookmarks(worker_threads.workerData.bookmarks));
instanceDB.close();
port.close();
function importBookmarks(bookmarks, parentTagId = 0) {
  let errorLogs = [];
  bookmarks.forEach((item) => {
    try {
      if (item.type === "folder") {
        let tagId = 0;
        const selectedTag = selectTagsTable.get(item.name);
        if (selectedTag !== void 0 && parentTagId != selectedTag.id) {
          const selectedTagStructure = selectTagsStructureTable.get(parentTagId, selectedTag.id);
          tagId = selectedTag.id;
          if (selectedTagStructure === void 0) {
            insertTagStructureTable.run(parentTagId, selectedTag.id);
          }
        } else if (selectedTag === void 0) {
          const insertedTag = insertTagTable.run(item.name);
          tagId = insertedTag.lastInsertRowid;
          if (insertedTag.changes === 1) {
            insertTagStructureTable.run(parentTagId, insertedTag.lastInsertRowid);
          }
        }
        if (item.children.length > 0) {
          importBookmarks(item.children, tagId);
        }
      } else if (item.type === "site") {
        const selectedBookmark = selectBookmarksTable.get(item.href);
        if (selectedBookmark !== void 0) {
          const selectedTagBookmark = selectBookmarkTagsTable.get(parentTagId, selectedBookmark.id);
          if (selectedTagBookmark === void 0) {
            insertBookmarkTagsTable.run(parentTagId, selectedBookmark.id);
          }
        } else {
          let pageType = "general";
          if (item.href.match(/^https:\/\/www\.youtube\.com\/watch\?v=/)) {
            pageType = "youtube";
          }
          const insertedBookmark = insertBookmarkTabale.run(item.name, item.href, pageType);
          if (insertedBookmark.changes === 1) {
            insertBookmarkTagsTable.run(parentTagId, insertedBookmark.lastInsertRowid);
          }
        }
      }
    } catch (e) {
      console.log(e);
      errorLogs.push(e);
    }
  });
  return errorLogs;
}
