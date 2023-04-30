"use strict";
const worker_threads = require("worker_threads");
const Database = require("better-sqlite3-multiple-ciphers");
const port = worker_threads.parentPort;
if (!port)
  throw new Error("IllegalState");
const instanceDB = new Database(worker_threads.workerData.dbPath);
try {
  const bookmarks = instanceDB.prepare(
    `SELECT * FROM bookmarks
      WHERE EXISTS (
        SELECT group_concat(tags_tmp.id) AS tags
        FROM tags AS tags_tmp
        JOIN tags_bookmarks AS tbt ON tags_tmp.id = tbt.tags_id
        WHERE bookmarks.id = tbt.bookmark_id
        HAVING ${worker_threads.workerData.tagIdChain.map(() => "tags LIKE ?").join(" AND ")}
      )
      ORDER BY update_time DESC LIMIT 80`
  ).all(worker_threads.workerData.tagIdChain.map((t) => `%${t}%`));
  port.postMessage(bookmarks);
} catch (e) {
  console.log(e);
  port.postMessage(null);
}
instanceDB.close();
port.close();
