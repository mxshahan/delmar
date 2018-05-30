'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkUser = exports.updateProfile = exports.myProfile = exports.SignupUser = exports.LoginUser = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _auth = require('../services/auth');

var _db = require('../config/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var token = void 0;
var user = void 0;
var updatedUser = void 0;

var LoginUser = exports.LoginUser = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var VerifyUser, _req$body, username, password, db;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            VerifyUser = void 0;
            _req$body = req.body, username = _req$body.username, password = _req$body.password;

            console.log(username, password);
            db = new _db2.default();
            _context.prev = 4;
            _context.next = 7;
            return db.selectOne('SELECT username, password FROM user WHERE username=\'' + username + '\'');

          case 7:
            user = _context.sent;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](4);

            res.status(406).json({
              error: _context.t0,
              message: 'Username or Passowrd Mismatch'
            });

          case 13:
            _context.prev = 13;

            if (!user) {
              _context.next = 18;
              break;
            }

            _context.next = 17;
            return (0, _bcryptjs.compareSync)(password, user.password);

          case 17:
            VerifyUser = _context.sent;

          case 18:
            if (!VerifyUser) {
              _context.next = 25;
              break;
            }

            _context.next = 21;
            return (0, _auth.generateJwt)({
              username: username
            });

          case 21:
            token = _context.sent;

            res.status(200).json({
              success: true,
              token: token
            });
            _context.next = 26;
            break;

          case 25:
            res.status(406).json({
              message: 'Username or Passowrd Mismatch'
            });

          case 26:
            return _context.finish(13);

          case 27:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[4, 10, 13, 27]]);
  }));

  return function LoginUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var SignupUser = exports.SignupUser = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var db, _req$body2, username, password, cpassword, salt, hash, _user;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            db = new _db2.default();
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password, cpassword = _req$body2.cpassword;

            console.log(req.body);

            if (!(password === cpassword)) {
              _context2.next = 30;
              break;
            }

            _context2.next = 6;
            return _bcryptjs2.default.genSalt(10);

          case 6:
            salt = _context2.sent;
            _context2.next = 9;
            return _bcryptjs2.default.hash(password, salt);

          case 9:
            hash = _context2.sent;

            password = hash;
            _context2.prev = 11;
            _context2.next = 14;
            return db.insert('INSERT INTO user(username, password) VALUES(\'' + username + '\', \'' + password + '\')');

          case 14:
            _user = _context2.sent;
            _context2.next = 17;
            return (0, _auth.generateJwt)({
              username: username
            });

          case 17:
            token = _context2.sent;
            _context2.next = 23;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2['catch'](11);

            res.status(406).json({
              error: _context2.t0,
              message: 'Unable To Create Account'
            });

          case 23:
            _context2.prev = 23;

            res.status(200).json({
              success: true,
              token: token
            });
            _context2.next = 27;
            return db.dbclose();

          case 27:
            return _context2.finish(23);

          case 28:
            _context2.next = 33;
            break;

          case 30:
            res.status(406).json({
              message: 'Password Mismatch'
            });
            _context2.next = 33;
            return db.dbclose();

          case 33:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[11, 20, 23, 28]]);
  }));

  return function SignupUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var myProfile = exports.myProfile = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var db;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            db = new _db2.default();
            _context3.prev = 1;
            _context3.next = 4;
            return db.selectOne('SELECT * FROM user WHERE username=\'' + req.user.username + '\'');

          case 4:
            user = _context3.sent;
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](1);

            res.status(404).json({
              error: _context3.t0,
              message: 'Unavailable!'
            });

          case 10:
            _context3.prev = 10;

            res.status(200).json({
              success: true,
              user: user
            });
            _context3.next = 14;
            return db.dbclose();

          case 14:
            return _context3.finish(10);

          case 15:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[1, 7, 10, 15]]);
  }));

  return function myProfile(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var updateProfile = exports.updateProfile = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var db, _req$body3, name, phone, email, password, address, rental_address, salt, hash;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            db = new _db2.default();
            _req$body3 = req.body, name = _req$body3.name, phone = _req$body3.phone, email = _req$body3.email, password = _req$body3.password, address = _req$body3.address, rental_address = _req$body3.rental_address;

            if (!password) {
              _context4.next = 10;
              break;
            }

            _context4.next = 5;
            return _bcryptjs2.default.genSalt(10);

          case 5:
            salt = _context4.sent;
            _context4.next = 8;
            return _bcryptjs2.default.hash(password, salt);

          case 8:
            hash = _context4.sent;

            password = hash;

          case 10:
            _context4.prev = 10;
            _context4.next = 13;
            return db.selectOne('SELECT * FROM user WHERE username=\'' + req.user.username + '\'');

          case 13:
            user = _context4.sent;
            _context4.next = 16;
            return db.update('UPDATE user \n      SET \n        name = \'' + name + '\',\n        phone = \'' + phone + '\',\n        email = \'' + email + '\',\n        password = \'' + (password ? password : user.password) + '\',\n        address = \'' + address + '\',\n        rental_address = \'' + rental_address + '\'\n      WHERE username=\'' + req.user.username + '\'');

          case 16:
            updatedUser = _context4.sent;
            _context4.next = 22;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4['catch'](10);

            res.status(404).json({
              error: _context4.t0,
              message: 'Cannot Update!'
            });

          case 22:
            _context4.prev = 22;
            _context4.prev = 23;
            _context4.next = 26;
            return db.selectOne('SELECT * FROM user WHERE username=\'' + req.user.username + '\'');

          case 26:
            user = _context4.sent;
            _context4.next = 32;
            break;

          case 29:
            _context4.prev = 29;
            _context4.t1 = _context4['catch'](23);

            res.status(404).json({
              error: _context4.t1,
              message: 'Cannot Update!'
            });

          case 32:
            res.status(200).json({
              success: true,
              user: user
            });
            _context4.next = 35;
            return db.dbclose();

          case 35:
            return _context4.finish(22);

          case 36:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[10, 19, 22, 36], [23, 29]]);
  }));

  return function updateProfile(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var checkUser = exports.checkUser = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var db;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            db = new _db2.default();
            _context5.prev = 1;
            _context5.next = 4;
            return db.selectOne('SELECT username FROM user WHERE username=\'' + req.headers.username + '\'');

          case 4:
            user = _context5.sent;
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](1);

            res.status(404).json({
              error: _context5.t0,
              message: 'Username not exist',
              success: true
            });

          case 10:
            _context5.prev = 10;

            res.status(200).json({
              success: false,
              message: 'Username already exists'
            });
            return _context5.finish(10);

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[1, 7, 10, 13]]);
  }));

  return function checkUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();