/*const db=require('better-sqlite3-multiple-ciphers')('test.db');
const readline=require('readline');

db.prepare(`CREATE TABLE tags ( name TEXT )`).run();
db.prepare(`INSERT INTO tags ( name ) VALUES ( ? )`).run('テスト');

const readInterface=readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readInterface.question("入力してください >",
  inputString => {
    db.close();
    readInterface.close();
    //console.log( `入力された文字：[${inputString }]`);
  });
*/

const clipboardListener = require('clipboard-event');

// To start listening
clipboardListener.startListening();

clipboardListener.on('change', () => {
    console.log('Clipboard changed');
});

// To stop listening
//clipboardListener.stopListening();