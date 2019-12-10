webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./services/authService.js":
/*!*********************************!*\
  !*** ./services/authService.js ***!
  \*********************************/
/*! exports provided: login, confirmLogin, loginWithJwt, logout, getCurrentUser, getJwt, setJwtoken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmLogin", function() { return confirmLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginWithJwt", function() { return loginWithJwt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJwt", function() { return getJwt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setJwtoken", function() { return setJwtoken; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httpService */ "./services/httpService.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.json");
var _config__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config */ "./config.json", 1);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





var apiEndpoit = _config__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "/auth";
var tokenKey = "token";
function login(_x, _x2) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email, password) {
    var _ref, jwt;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _httpService__WEBPACK_IMPORTED_MODULE_2__["default"].post(apiEndpoit, {
              email: email,
              password: password
            });

          case 2:
            _ref = _context.sent;
            jwt = _ref.data;
            localStorage.setItem(tokenKey, jwt);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _login.apply(this, arguments);
}

function confirmLogin(_x3, _x4) {
  return _confirmLogin.apply(this, arguments);
}

function _confirmLogin() {
  _confirmLogin = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _httpService__WEBPACK_IMPORTED_MODULE_2__["default"].post(apiEndpoit, {
              email: email,
              password: password
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _confirmLogin.apply(this, arguments);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}
function logout() {
  return _logout.apply(this, arguments);
}

function _logout() {
  _logout = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            localStorage.removeItem(tokenKey);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _logout.apply(this, arguments);
}

function getCurrentUser() {
  try {
    var jwt = localStorage.getItem("token");
    _httpService__WEBPACK_IMPORTED_MODULE_2__["default"].setJwt(getJwt());
    return jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(jwt);
  } catch (ex) {
    return null;
  }
}
function getJwt() {
  var jwt = localStorage.getItem(tokenKey);
  return jwt;
}
function setJwtoken() {
  _httpService__WEBPACK_IMPORTED_MODULE_2__["default"].setJwt(getJwt());
}
/* harmony default export */ __webpack_exports__["default"] = ({
  login: login,
  confirmLogin: confirmLogin,
  loginWithJwt: loginWithJwt,
  logout: logout,
  getCurrentUser: getCurrentUser,
  getJwt: getJwt,
  setJwtoken: setJwtoken
});

/***/ })

})
//# sourceMappingURL=index.js.b35154ad086b1a741422.hot-update.js.map