exports.id = "main";
exports.modules = {

/***/ "./src/client/Routes/PrivateRoute.js":
/*!*******************************************!*\
  !*** ./src/client/Routes/PrivateRoute.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _sidebar = __webpack_require__(/*! ../Components/Dashboard/sidebar */ "./src/client/Components/Dashboard/sidebar.js");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _nav = __webpack_require__(/*! ../Components/Dashboard/nav */ "./src/client/Components/Dashboard/nav.js");

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
  var isAuthenticated = _ref.isAuthenticated,
      Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ['isAuthenticated', 'component']);

  return isAuthenticated ? _react2.default.createElement(
    'div',
    { className: 'dash_mainpage' },
    _react2.default.createElement(_sidebar2.default, null),
    _react2.default.createElement(_nav2.default, null),
    _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { component: function component(props) {
        return _react2.default.createElement(Component, props);
      } }))
  ) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PrivateRoute);

/***/ })

};
//# sourceMappingURL=main.528d78dd2101ea3020b0.hot-update.js.map