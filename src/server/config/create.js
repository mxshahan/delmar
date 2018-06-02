import DB from './db';

const db = new DB();
try {
  db.create(`CREATE TABLE IF NOT EXISTS user(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    email TEXT UNIQUE,
    password TEXT,
    address_id TEXT,
    status INTEGER,
    acc_type TEXT DEFAULT 'ordinary'
  )`);
} catch (e) {
  console.log(e);
} finally {
  db.dbclose();
}
