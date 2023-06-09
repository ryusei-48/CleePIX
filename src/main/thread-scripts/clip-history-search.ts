import { parentPort, workerData } from 'worker_threads';
import Database from "better-sqlite3-multiple-ciphers";

const port = parentPort;
if ( !port ) throw new Error('IllegalState');

const instanceDB = new Database( workerData.dbPath );

console.log(workerData);

let result:  any[];

try {
  if ( workerData.query.length > 0 ) {
    result = instanceDB.prepare(
      `SELECT ch.*
        FROM (
          ${
            workerData.query.map((word) => {
              return `SELECT rowid AS id, clip, 1 as matched
                FROM clipboard_history_index
                WHERE clip MATCH ?`;
            }).join(`\nUNION ALL\n`)
          }
          ${ workerData.query.length > 0 && workerData.image ? "UNION ALL" : '' }
          ${
            workerData.image ? `SELECT id, image, 0 as matched
            FROM clipboard_history
            WHERE image not NULL` : ''
          }
        ) AS chi
        JOIN clipboard_history AS ch ON ch.id = chi.id
        WHERE ch.register_time >= ? AND ch.register_time <= ?
        GROUP BY clip
        ORDER BY SUM(matched) DESC, clip LIMIT ?, 50`)
    .all( workerData.query, workerData.startDate, workerData.endDate, workerData.offset );
  } else {
    result = instanceDB.prepare(`SELECT *FROM clipboard_history
        WHERE image not NULL AND register_time >= ? AND register_time <= ? LIMIT ?, 50`)
      .all( workerData.startDate, workerData.endDate, workerData.offset );
  }
  port.postMessage( result );
}catch (e) {
  console.log(e);
  port.postMessage( null );
}

instanceDB.close();
port.close();