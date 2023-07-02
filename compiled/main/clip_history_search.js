"use strict";
const worker_threads = require("worker_threads");
const Database = require("better-sqlite3-multiple-ciphers");
const port = worker_threads.parentPort;
if (!port)
  throw new Error("IllegalState");
const instanceDB = new Database(worker_threads.workerData.dbPath);
console.log(worker_threads.workerData);
let result;
try {
  if (worker_threads.workerData.query.length > 0) {
    result = instanceDB.prepare(
      `SELECT ch.*
        FROM (
          ${worker_threads.workerData.query.map((word) => {
        return `SELECT rowid AS id, clip, 1 as matched
                FROM clipboard_history_index
                WHERE clip MATCH ?`;
      }).join(`
UNION ALL
`)}
          ${worker_threads.workerData.query.length > 0 && worker_threads.workerData.image ? "UNION ALL" : ""}
          ${worker_threads.workerData.image ? `SELECT id, image, 0 as matched
            FROM clipboard_history
            WHERE image not NULL` : ""}
        ) AS chi
        JOIN clipboard_history AS ch ON ch.id = chi.id
        WHERE ch.register_time >= ? AND ch.register_time <= ?
        GROUP BY clip
        ORDER BY SUM(matched) DESC, clip LIMIT ?, 50`
    ).all(worker_threads.workerData.query, worker_threads.workerData.startDate, worker_threads.workerData.endDate, worker_threads.workerData.offset);
  } else {
    result = instanceDB.prepare(`SELECT *FROM clipboard_history
        WHERE image not NULL AND register_time >= ? AND register_time <= ? LIMIT ?, 50`).all(worker_threads.workerData.startDate, worker_threads.workerData.endDate, worker_threads.workerData.offset);
  }
  port.postMessage(result);
} catch (e) {
  console.log(e);
  port.postMessage(null);
}
instanceDB.close();
port.close();
