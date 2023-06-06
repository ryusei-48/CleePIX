import { parentPort, workerData } from 'worker_threads';
import Database from "better-sqlite3-multiple-ciphers";

const port = parentPort;
if ( !port ) throw new Error('IllegalState');

const instanceDB = new Database( workerData.dbPath );

try {
  const result = instanceDB.prepare(
    `SELECT ch.* FROM clipboard_history AS ch
      JOIN clipboard_history_index ON ch.id = clipboard_history_index.rowid
      WHERE clipboard_history_index MATCH ?
        AND ch.register_time <= ?
        AND ch.register_time >= ?
      ORDER BY ch.register_time ASC LIMIT ?, 50`
  ).all(
    workerData.query, workerData.endDate, workerData.startDate, workerData.offset
  );
  port.postMessage( result );
}catch (e) {
  console.log(e);
  port.postMessage( null );
}

instanceDB.close();
port.close();