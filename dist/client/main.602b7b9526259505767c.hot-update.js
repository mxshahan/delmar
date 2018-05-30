exports.id = "main";
exports.modules = {

/***/ "./src/client/Components/Signup/index.js":
/*!***********************************************!*\
  !*** ./src/client/Components/Signup/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Loader = __webpack_require__(/*! ../Partials/Loader */ "./src/client/Components/Partials/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _Auth = __webpack_require__(/*! ../../Redux/Actions/Auth */ "./src/client/Redux/Actions/Auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      username: null,
      password: null,
      cpassword: null,
      err: false,
      loading: false,
      matched: null,
      success: false
    }, _this.onSignup = function (e) {
      e.preventDefault();
      if (_this.state.username && _this.state.password && _this.state.cpassword) {
        !_this.state.loading && _this.setState({
          loading: true
        });
        _axios2.default.post('/user/signup', {
          username: _this.state.username,
          password: _this.state.password,
          cpassword: _this.state.cpassword
        }).then(function (res) {
          _this.state.loading && _this.setState({
            loading: false
          });
          _this.props.LoginUser(res.data);
          _this.props.history.push('/dashboard');
          localStorage.setItem('auth', res.data.token);
        }).catch(function (err) {
          console.log(err);
          _this.setState({
            err: 'Something Error',
            loading: false
          });
        });
      } else {
        _this.setState({
          err: 'Field cannot be empty'
        });
      }
      _this.state.err && setTimeout(function () {
        _this.setState({
          err: false
        });
      }, 2000);
      _this.state.loading && setTimeout(function () {
        _this.setState({
          loading: false,
          err: 'Please try again'
        });
      }, 5000);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Signup, [{
    key: 'render',


    // checkUser = (e) => {
    //   Axios.get('/user/check', {
    //     headers: {
    //       'username': e.target.value
    //     }
    //   }).then((res) => {
    //     this.setState({
    //       success: true
    //     })
    //   }).catch((e) => {

    //     this.setState({
    //       success: false
    //     })
    //   })
    // }

    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'bg_image' },
        _react2.default.createElement(
          'div',
          { className: 'login_logodiv' },
          _react2.default.createElement(
            'span',
            { className: 'login_sidelogo' },
            _react2.default.createElement('i', { className: 'fa fa-clock-o', 'aria-hidden': 'true' })
          ),
          _react2.default.createElement(
            'h1',
            null,
            'DEL MAR VACATIONS'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'login_overalldiv' },
          _react2.default.createElement(
            'span',
            { className: 'login_portaltxt' },
            'Homeowner Portal'
          ),
          _react2.default.createElement(
            'div',
            { className: 'login_bg' },
            _react2.default.createElement(
              'h1',
              null,
              'LOGIN'
            ),
            _react2.default.createElement(
              'form',
              { onSubmit: this.onSignup },
              _react2.default.createElement(
                'ul',
                { className: 'login_ul' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement('input', {
                    type: 'text',
                    placeholder: 'Username',
                    onChange: function onChange(e) {
                      return _this2.setState({ username: e.target.value });
                    }
                  })
                ),
                this.state.success && _react2.default.createElement(
                  'span',
                  { className: 'login_note' },
                  'Username already exists'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement('input', {
                    type: 'password',
                    placeholder: 'Password',
                    onChange: function onChange(e) {
                      return _this2.setState({ password: e.target.value });
                    }
                  })
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement('input', {
                    type: 'password',
                    placeholder: 'Confirm Password',
                    onChange: function onChange(e) {
                      return _this2.setState({ cpassword: e.target.value });
                    },
                    onKeyUp: function onKeyUp(e) {
                      if (e.target.value === _this2.state.password) {
                        _this2.setState({
                          matched: true
                        });
                      } else {
                        _this2.setState({
                          matched: false
                        });
                      }
                    }
                  })
                ),
                this.state.matched === false && _react2.default.createElement(
                  'span',
                  { className: 'login_note' },
                  'Password does not matched'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
                )
              )
            ),
            this.state.err && _react2.default.createElement(
              'span',
              { className: 'err' },
              this.state.err
            ),
            this.state.loading && _react2.default.createElement(_Loader2.default, null),
            _react2.default.createElement(
              'span',
              { className: 'creat_acc' },
              'Already have an account? ',
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' },
                'Login'
              )
            ),
            _react2.default.createElement(
              'span',
              { className: 'login_note' },
              'NOTE: Use the email you use for streamline to create this account.'
            )
          )
        )
      );
    }
  }]);

  return Signup;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    LoginUser: function LoginUser(data) {
      return dispatch((0, _Auth.LoginUser)(data));
    }
  };
};

exports.default = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(Signup);

/***/ })

};
//# sourceMappingURL=main.602b7b9526259505767c.hot-update.js.map