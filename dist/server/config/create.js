'use strict';

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _db2.default();
try {
  db.create('CREATE TABLE IF NOT EXISTS user(\n    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n    username TEXT UNIQUE,\n    email TEXT UNIQUE,\n    password TEXT,\n    address_id TEXT,\n    status INTEGER,\n    acc_type TEXT DEFAULT \'ordinary\'\n  )');
} catch (e) {
  console.log(e);
} finally {
  db.dbclose();
}