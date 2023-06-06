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

const kuromoji = require("kuromoji");
const { join } = require("path");

const dictPath = join(require.resolve('kuromoji'), '../../dict');

kuromoji.builder({ dicPath: dictPath }).build(function (err, tokenizer) {
  // tokenizer is ready
  var path = tokenizer.tokenize("【中華の闇】Amazonで800円の世界最安トナーは本当に使えるのか？【レーザープリンタ】");
  console.log(path.map((word) => word.surface_form).join(' '));
});