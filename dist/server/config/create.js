'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function (app) {
  app.get('/tbcreate', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var db;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = new _db2.default();
              _context.prev = 1;
              _context.next = 4;
              return db.create('CREATE TABLE IF NOT EXISTS user(\n        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, \n        name TEXT, \n        phone TEXT, \n        username TEXT UNIQUE, \n        email TEXT UNIQUE, \n        password TEXT, \n        address TEXT, \n        rental_address TEXT,\n        status INTEGER\n      )');

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context['catch'](1);

              res.status(404).json({ message: 'cannot create' });

            case 9:
              _context.prev = 9;

              db.dbclose();
              res.json({ message: 'Table Created Successfully' });
              return _context.finish(9);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 6, 9, 13]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};