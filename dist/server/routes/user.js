'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _user = require('./../controllers/user');

var _auth = require('../mid/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const passportJWT = passport.authenticate('jwt', { session: false });
var router = (0, _expressPromiseRouter2.default)();

router.route('/login').options((0, _cors2.default)()).post(_user.LoginUser);
router.route('/signup').options((0, _cors2.default)()).post(_user.SignupUser);
router.route('/').options((0, _cors2.default)()).get(_auth.isAuth, _user.myProfile).put(_auth.isAuth, _user.updateProfile);
router.route('/approve/:username').get(_auth.isAuth, _user.getUser).put(_auth.isAuth, _user.approveUser);
router.route('/all').get(_user.getAllUser);
router.route('/check').get(_user.checkUser);

exports.default = router;