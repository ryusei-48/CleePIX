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
const { fromStream } = require('file-type-cjs-fix');
const { createReadStream } = require('fs');

const file = createReadStream('url-request.js');
fromStream(file).then((res) => {
  console.log(res);
});