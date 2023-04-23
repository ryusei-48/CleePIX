const db=require('better-sqlite3-multiple-ciphers')('test.db');
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