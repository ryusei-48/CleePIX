const { Database } = require('esqlite');

const db = new Database('./test.db');
db.open();

db.query(`CREATE TABLE tags ( name TEXT )`, ( err_1, result_1 ) => {
  if ( err_1 ) throw err_1;
  console.log( result_1 );
  db.query(`INSERT INTO tags ( name ) VALUES ( ? )`, ["あいうえお"], ( err_2, result_2 ) => {
    if ( err_2 ) throw err_2;
    console.log( result_2 );
    db.close();
  })
});