import {parentPort, workerData} from 'worker_threads';
import Database from "better-sqlite3-multiple-ciphers";
import { IBaseMark } from "bookmark-file-parser";

const port = parentPort;
if (!port) throw new Error('IllegalState');

const instanceDB = new Database( workerData.dbPath );

try {
  const bookmarks = instanceDB.prepare(
    `SELECT * FROM bookmarks
      WHERE EXISTS (
        SELECT group_concat(tags_tmp.id) AS tags
        FROM tags AS tags_tmp
        JOIN tags_bookmarks AS tbt ON tags_tmp.id = tbt.tags_id
        WHERE bookmarks.id = tbt.bookmark_id
        HAVING ${ workerData.tagIdChain.map(() => 'tags LIKE ?').join(' AND ') }
      )
      ORDER BY update_time DESC LIMIT 80`
  ).all( workerData.tagIdChain.map(t => `%${t}%`) );
  port.postMessage( bookmarks );
}catch (e) {
  console.log(e);
  port.postMessage( null );
}

instanceDB.close();
port.close();

/*
SELECT bookmarks.id, bookmarks.title, bookmarks.url, bookmarks.description,
      bookmarks.thunb, bookmarks.thunb_mime, bookmarks.memo, bookmarks.type, 
      bookmarks.update_time, bookmarks.register_time FROM bookmarks
      JOIN tags_bookmarks AS tbt ON bookmarks.ROWID = tbt.bookmark_id
      JOIN tags ON tbt.tags_id = tags.ROWID
      WHERE tags.ROWID IN (${ workerData.tagIdChain.map(() => '?').join(',') })
      GROUP BY bookmarks.ROWID HAVING COUNT( bookmarks.ROWID ) = ?
      ORDER BY bookmarks.update_time DESC LIMIT 80
*/

/*
SELECT * FROM get_bookmarks
      WHERE tags_id IN (${ workerData.tagIdChain.map(() => '?').join(',') })
      GROUP BY bookmark_id HAVING COUNT( bookmark_id ) = ?
      ORDER BY update_time DESC LIMIT 80
*/