'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sqlite = require('sqlite3');

var _sqlite2 = _interopRequireDefault(_sqlite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sqlite = _sqlite2.default.verbose();

var DB = function () {
  function DB() {
    _classCallCheck(this, DB);

    this.db = new sqlite.Database('hrent.db', function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connect to the Database successfully');
    });
  }

  _createClass(DB, [{
    key: 'create',
    value: function create(query) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.db.run(query, function (err) {
          if (err) reject(err);
          resolve();
        });
      });
    }
  }, {
    key: 'insert',
    value: function insert(query) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.db.run(query, function (err) {
          if (err) reject(err);
          resolve();
        });
      });
    }
  }, {
    key: 'select',
    value: function select(query) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.db.all(query, function (err, rows) {
          if (err) reject(err);
          resolve(rows);
        });
      });
    }
  }, {
    key: 'selectOne',
    value: function selectOne(query) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.db.each(query, function (err, rows) {
          if (err) reject(err);
          resolve(rows);
        });
      });
    }
  }, {
    key: 'delete',
    value: function _delete(query) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.db.run(query, function (err) {
          if (err) reject(err);
          resolve();
        });
      });
    }
  }, {
    key: 'update',
    value: function update(query) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        _this6.db.run(query, function (err) {
          if (err) reject(err);
          resolve();
        });
      });
    }
  }, {
    key: 'dbclose',
    value: function dbclose() {
      this.db.close(function (err) {
        if (err) {
          return console.error(err.message);
        }
        console.log('Close the database connection.');
      });
    }
  }]);

  return DB;
}();

exports.default = DB;