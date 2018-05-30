exports.id = "main";
exports.modules = {

/***/ "./src/client/Routes/Router.js":
/*!*************************************!*\
  !*** ./src/client/Routes/Router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexRouter = exports.Public = exports.Private = undefined;

var _Home = __webpack_require__(/*! ../Components/Home */ "./src/client/Components/Home/index.js");

var _Home2 = _interopRequireDefault(_Home);

var _Contact = __webpack_require__(/*! ../Components/Contact */ "./src/client/Components/Contact/index.js");

var _Contact2 = _interopRequireDefault(_Contact);

var _Login = __webpack_require__(/*! ../Components/Login */ "./src/client/Components/Login/index.js");

var _Login2 = _interopRequireDefault(_Login);

var _Signup = __webpack_require__(/*! ../Components/Signup */ "./src/client/Components/Signup/index.js");

var _Signup2 = _interopRequireDefault(_Signup);

var _Dashboard = __webpack_require__(/*! ../Components/Dashboard */ "./src/client/Components/Dashboard/index.js");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Private = exports.Private = [{ path: '/dashboard', exact: true, component: _Dashboard2.default }];

var Public = exports.Public = [{ path: '/', exact: true, component: _Login2.default }, { path: '/signup', exact: true, component: _Signup2.default }];

var indexRouter = exports.indexRouter = [{ path: '/', exact: true, component: _Home2.default }, { path: '/contact', exact: true, component: _Contact2.default }];

/***/ })

};
//# sourceMappingURL=main.a56cfa9f5c2b9cda1fbc.hot-update.js.map