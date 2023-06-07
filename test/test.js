/*
const kuromoji = require("kuromoji");
const { join } = require("path");

const dictPath = join(require.resolve('kuromoji'), '../../dict');

kuromoji.builder({ dicPath: dictPath }).build(function (err, tokenizer) {
  // tokenizer is ready
  var path = tokenizer.tokenize("【中華の闇】Amazonで800円の世界最安トナーは本当に使えるのか？【レーザープリンタ】");
  console.log(path.map((word) => word.surface_form).join(' '));
});
*/

const sql = `SELECT ch.*
FROM (
${
  [ "上記", "ボカロメドレー", "例" ].map((word) => {
    return `SELECT clip, 1 as matched
      FROM clipboard_history_index
      WHERE clip MATCH ${ `'` + word + `*'` }`;
  }).join(`\nUNION ALL\n`)
}
  ) AS chi
JOIN clipboard_history AS ch ON ch.id = chi.rowid
GROUP BY clip
ORDER BY SUM(matched) DESC, clip LIMIT 0, 50`;

console.log(sql);