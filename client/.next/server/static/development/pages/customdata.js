module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\WEB\\crypto\\client\\components\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("p", {
      className: "m-0 pb-2 pt-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "\xA9 Laurentiu Tibea - Crypto ", __jsx("a", {
      href: "https://github.com/laurentiutibea/crypto",
      style: {
        color: "#000000"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("i", {
      className: "fab fa-github",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    })))));
  }

}

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\WEB\\crypto\\client\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Crypto"), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossOrigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("script", {
      src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
      crossOrigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
      integrity: "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",
      crossOrigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
      integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
      crossOrigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })), __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("div", {
      className: "container " + this.props.className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, this.props.children), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./components/link.js":
/*!****************************!*\
  !*** ./components/link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\WEB\\crypto\\client\\components\\link.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (({
  href,
  children
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  let className = children.props.className || '';
  if (router.pathname === href) className = `${className} active`;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    className
  }));
});

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./components/link.js");
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authService */ "./services/authService.js");
/* harmony import */ var _src_crypto_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/crypto.png */ "./src/crypto.png");
/* harmony import */ var _src_crypto_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_crypto_png__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\WEB\\crypto\\client\\components\\navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Navbar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      user: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleLogout", () => {
      _services_authService__WEBPACK_IMPORTED_MODULE_3__["default"].logout();
      window.location = "/index";
    });
  }

  componentDidMount() {
    const user = _services_authService__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentUser();
    this.setState({
      user
    });
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("nav", {
      className: "navbar navbar-expand-md navbar-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      className: "navbar-brand",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: _src_crypto_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }))), __jsx("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNav",
      "aria-controls": "navbarNav",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("span", {
      className: "navbar-toggler-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), __jsx("div", {
      className: "collapse navbar-collapse",
      id: "navbarNav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("ul", {
      className: "navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Dashboard")))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/customdata",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Custom Data Graphs")))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/saveddata",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Saved Data"))))), __jsx("ul", {
      className: "navbar-nav ml-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, this.state.user ? __jsx("li", {
      className: "nav-item dropdown mr-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link dropdown-toggle",
      href: "#",
      id: "navbarDropdown",
      role: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Hello ", this.state.user.name, "! ", __jsx("i", {
      className: "fas fa-user-circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }))), __jsx("div", {
      className: "dropdown-menu mx-auto",
      "aria-labelledby": "navbarDropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      className: "dropdown-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Change Password")), this.state.user.isAdmin && __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/admin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("a", {
      className: "dropdown-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Administration Panel")), __jsx("div", {
      className: "dropdown-divider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx("a", {
      href: "#",
      className: "dropdown-item text-danger",
      style: {
        display: "inline-block"
      },
      onClick: this.handleLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Disconnect ", __jsx("i", {
      className: "fas fa-power-off",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }))))) : __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      style: {
        display: "inline"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Login  ", __jsx("i", {
      className: "fas fa-sign-in-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })))), __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      style: {
        display: "inline"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Register  ", __jsx("i", {
      className: "fas fa-user-plus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })))))))));
  }

}

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: apiUrl, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiUrl\":\"http://localhost:3900/api\"}");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/customdata.js":
/*!*****************************!*\
  !*** ./pages/customdata.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomData; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "highcharts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highcharts-react-official */ "highcharts-react-official");
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/authService */ "./services/authService.js");
/* harmony import */ var _services_cryptoService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/cryptoService */ "./services/cryptoService.js");
/* harmony import */ var _src_91_gif__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/91.gif */ "./src/91.gif");
/* harmony import */ var _src_91_gif__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_91_gif__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_crypto_text_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/crypto-text.png */ "./src/crypto-text.png");
/* harmony import */ var _src_crypto_text_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_crypto_text_png__WEBPACK_IMPORTED_MODULE_15__);








var _jsxFileName = "D:\\WEB\\crypto\\client\\pages\\customdata.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }









const chartOptions = {
  chart: {
    zoomType: 'x'
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      day: '%d-%m-%Y - %h:%m'
    },
    title: {
      text: 'Date'
    }
  },
  yAxis: {
    title: {
      text: 'Exchange rate'
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [[0, "#7cb5ec"], [0.5, "#7cb5ec80"], [0.9, "#7cb5ff33"]]
      },
      marker: {
        radius: 2
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    }
  }
};
class CustomData extends react__WEBPACK_IMPORTED_MODULE_8__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "state", {
      user: {},
      jwt: "",
      data: [],
      graphs: [],
      cryptocurrencies: [],
      currencies: [],
      selectedCryptocurrency: {},
      selectedCurrency: {},
      workers: 0,
      loading: false,
      loaded: false,
      searchQueryCryptocurrencies: "",
      searchQueryCurrencies: "",
      interval: [],
      loadArr: [],
      chartOptions: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "addGraph", () => {
      const worker = new Worker("static/service-worker.js");

      const bkOptions = _objectSpread({}, chartOptions);

      const graphs = [...this.state.graphs];
      const loadArr = [...this.state.loadArr];

      worker.onmessage = e => {
        bkOptions.title = {
          text: `${this.state.selectedCryptocurrency.name} to ${this.state.selectedCurrency.name} exchange rate over time`
        };
        bkOptions.series = [{
          type: "line",
          name: `${this.state.selectedCryptocurrency.name} to ${this.state.selectedCurrency.name}`,
          data: e.data.prices,
          connectNulls: true
        }];
        bkOptions.xAxis.categories = [...e.data.time];
        graphs.push({
          id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default()(),
          chartOptions: bkOptions,
          cryptocurrency: this.state.selectedCryptocurrency.value,
          currency: this.state.selectedCurrency.value,
          live: false,
          image: e.data.image
        });
        loadArr.push(false);
        this.setState({
          graphs: graphs,
          workers: this.state.workers + 1,
          interval: "",
          loadArr
        });
      };

      worker.postMessage(`${this.state.selectedCryptocurrency.value},${this.state.selectedCurrency.value},${this.state.jwt}`);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "findName", (array, value) => {
      for (let i = 0; i < this.state[array].length; i++) {
        if (this.state[array][i].id === value) {
          return this.state[array][i].name;
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "changeCryptocurrency", (e, array) => {
      const name = this.findName(array, e.target.value);
      this.setState({
        [`selected${e.target.name}`]: {
          value: e.target.value,
          name: name
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "changeGraphCryptocurrency", (e, index) => {
      const graphs = [...this.state.graphs];
      graphs[index][e.target.name.toLowerCase()] = e.target.value;
      this.setState({
        graphs: graphs
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "refreshAll", () => {
      let workers = new Array(this.state.workers);
      const graphs = [...this.state.graphs];
      this.setState({
        loading: true
      });

      for (let i = 0; i < this.state.workers; i++) {
        workers[i] = new Worker("static/service-worker.js");

        workers[i].onmessage = e => {
          graphs[i].chartOptions.xAxis.categories = [...e.data.time];
          graphs[i].chartOptions.series = [{
            type: "line",
            name: this.state.graphs[i].chartOptions.series[0].name,
            data: e.data.prices,
            connectNulls: true
          }];
          this.setState({
            graphs: graphs,
            loading: false
          });
        };

        workers[i].postMessage(`${graphs[i].cryptocurrency},${graphs[i].currency},${this.state.jwt}`);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "refreshSingle", index => {
      const worker = new Worker("static/service-worker.js");
      const graphs = [...this.state.graphs];
      const loadArr = [...this.state.loadArr];
      loadArr[index] = true;
      this.setState({
        loadArr
      });

      worker.onmessage = e => {
        const cryptocurrency = this.findName("cryptocurrencies", graphs[index].cryptocurrency);
        const currency = this.findName("currencies", graphs[index].currency);
        graphs[index].chartOptions.title = {
          text: `${cryptocurrency} to ${currency} exchange rate over time`
        };
        graphs[index].chartOptions.xAxis.categories = [...e.data.time];
        graphs[index].image = e.data.image;
        graphs[index].chartOptions.series = [{
          type: "line",
          name: `${graphs[index].cryptocurrency} to ${graphs[index].currency}`,
          data: e.data.prices,
          connectNulls: true
        }];
        loadArr[index] = false;
        this.setState({
          graphs: graphs,
          loadArr
        });
      };

      worker.postMessage(`${graphs[index].cryptocurrency},${graphs[index].currency},${this.state.jwt}`);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "removeGraph", index => {
      let graphs = [...this.state.graphs];
      clearInterval(graphs[index].interval);
      graphs = graphs.filter((item, i) => i !== index);
      this.setState({
        graphs
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "liveData", index => {
      const worker = new Worker("static/service-worker.js");
      const graphs = [...this.state.graphs];
      const loadArr = [...this.state.loadArr];
      loadArr[index] = true;
      this.setState({
        loadArr
      });

      worker.onmessage = e => {
        graphs[index].chartOptions.xAxis.categories.push(e.data.currentTime);
        graphs[index].chartOptions.series[0].data.push(e.data.currentPrice);
        graphs[index].chartOptions.series = [{
          type: "line",
          name: this.state.graphs[index].chartOptions.series[0].name,
          data: graphs[index].chartOptions.series[0].data,
          connectNulls: true
        }];
        loadArr[index] = false;
        this.setState({
          graphs,
          loadArr
        });
      };

      worker.postMessage(`${graphs[index].cryptocurrency},${graphs[index].currency},${this.state.jwt}`);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "changeGraphLive", (e, index) => {
      const graphs = [...this.state.graphs];

      if (e.target.checked) {
        graphs[index].interval = setInterval(() => this.liveData(index), 4000);
        this.setState({
          graphs
        });
      } else {
        clearInterval(graphs[index].interval);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "saveGraph", async index => {
      const bkGraph = _objectSpread({}, this.state.graphs[index]);

      const cryptocurrency = this.findName("cryptocurrencies", bkGraph.cryptocurrency);
      const currency = this.findName("currencies", bkGraph.currency);
      const graph = {
        categories: bkGraph.chartOptions.xAxis.categories,
        series: bkGraph.chartOptions.series[0],
        graphId: bkGraph.id,
        cryptocurrency: {
          value: bkGraph.cryptocurrency,
          name: cryptocurrency
        },
        currency: {
          value: bkGraph.currency,
          name: currency
        },
        date: new Date(),
        image: bkGraph.image
      };
      await _services_cryptoService__WEBPACK_IMPORTED_MODULE_13__["default"].saveGraph(graph, this.state.user._id).catch(err => console.log("ERROR!", err));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "getFilteredCryptocurrencies", () => {
      const {
        cryptocurrencies: allData,
        searchQueryCryptocurrencies
      } = this.state;
      let filtered = allData;
      if (searchQueryCryptocurrencies) filtered = allData.filter(m => m.name.toLowerCase().startsWith(searchQueryCryptocurrencies.toLowerCase()));
      return {
        filtered
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "getFilteredCurrencies", () => {
      const {
        currencies: allData,
        searchQueryCurrencies
      } = this.state;
      let filtered = allData;
      if (searchQueryCurrencies) filtered = allData.filter(m => m.name.toLowerCase().startsWith(searchQueryCurrencies.toLowerCase()));
      return {
        filtered
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "handleSearch", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
  }

  async componentDidMount() {
    const user = _services_authService__WEBPACK_IMPORTED_MODULE_12__["default"].getCurrentUser();
    const jwt = _services_authService__WEBPACK_IMPORTED_MODULE_12__["default"].getJwt();
    this.setState({
      user,
      jwt
    });
    await _services_cryptoService__WEBPACK_IMPORTED_MODULE_13__["default"].getCryptocurrencies().then(res => {
      this.setState({
        cryptocurrencies: res.data.cryptocurrencies,
        currencies: res.data.currencies,
        loaded: true
      });
    });
  }

  render() {
    if (false) {} else {
      const {
        filtered: cryptocurrencies
      } = this.getFilteredCryptocurrencies();
      const {
        filtered: currencies
      } = this.getFilteredCurrencies();
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, __jsx("div", {
        className: "w-50 mx-auto text-center pt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, __jsx("img", {
        src: _src_crypto_text_png__WEBPACK_IMPORTED_MODULE_15___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }), __jsx("h1", {
        style: {
          fontFamily: "Courier New"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "Custom Data Graphs")), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      })), this.state.loaded ? __jsx("div", {
        className: "text-center pt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, __jsx("div", {
        className: "row w-75 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        onChange: this.handleSearch,
        placeholder: "Search Cryptocurrency...",
        value: this.state.searchQueryCryptocurrencies,
        name: "searchQueryCryptocurrencies",
        className: "form-control w-75 shadow",
        style: {
          display: "inline-block"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "   ", __jsx("i", {
        className: "fas fa-search",
        style: {
          display: "inline-block"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, __jsx("select", {
        name: "Cryptocurrency",
        onChange: e => this.changeCryptocurrency(e, "cryptocurrencies"),
        disabled: !this.state.loaded,
        className: "form-control shadow",
        style: {
          display: "inline-block",
          width: "90%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, __jsx("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "Select Cryptocurrency"), cryptocurrencies.map(item => __jsx("option", {
        value: item.id,
        key: item.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, item.name, " - ", item.symbol))), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "   ", __jsx("i", {
        className: "fas fa-hand-pointer",
        style: {
          display: "inline-block"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-6 mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        onChange: this.handleSearch,
        placeholder: "Search Currency...",
        value: this.state.searchQueryCurrencies,
        name: "searchQueryCurrencies",
        className: "form-control w-75 shadow",
        style: {
          display: "inline-block"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "   ", __jsx("i", {
        className: "fas fa-search",
        style: {
          display: "inline-block"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-6 mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, __jsx("select", {
        name: "Currency",
        onChange: e => this.changeCryptocurrency(e, "currencies"),
        disabled: !this.state.loaded,
        className: "form-control shadow",
        style: {
          display: "inline-block",
          width: "90%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, __jsx("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "Select Currency"), currencies.map(item => __jsx("option", {
        value: item.id,
        key: item.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, item.name, " - ", item.symbol))), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "   ", __jsx("i", {
        className: "fas fa-hand-pointer",
        style: {
          display: "inline-block"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-6 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Add graph for selected values")), __jsx("button", {
        className: "btn btn-primary",
        onClick: this.addGraph,
        disabled: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(this.state.selectedCryptocurrency).length === 0 || _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(this.state.selectedCurrency).length === 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-6 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "Refresh all graphs")), __jsx("button", {
        className: "btn btn-success",
        onClick: this.refreshAll,
        disabled: this.state.graphs.length === 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-sync",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      })))), this.state.graphs.length > 0 ? this.state.graphs.map((item, index) => __jsx("div", {
        key: item.id,
        className: "pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }), __jsx("img", {
        src: item.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }), __jsx("div", {
        className: "row mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-9 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, !this.state.loading && !this.state.loadArr[index] ? __jsx(highcharts_react_official__WEBPACK_IMPORTED_MODULE_11___default.a, {
        key: item.id,
        highcharts: highcharts__WEBPACK_IMPORTED_MODULE_10___default.a,
        options: item.chartOptions,
        allowChartUpdate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }) : __jsx("div", {
        className: "mx-auto text-center",
        style: {
          paddingTop: "20%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, __jsx("img", {
        src: _src_91_gif__WEBPACK_IMPORTED_MODULE_14___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, __jsx("div", {
        className: "pt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, __jsx("select", {
        name: "Cryptocurrency",
        onChange: e => this.changeGraphCryptocurrency(e, index),
        defaultValue: item.cryptocurrency,
        className: "form-control shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, this.state.cryptocurrencies.map(i => __jsx("option", {
        value: i.id,
        key: i.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, i.name, " - ", i.symbol)))), __jsx("div", {
        className: "pt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, __jsx("select", {
        name: "Currency",
        onChange: e => this.changeGraphCryptocurrency(e, index),
        defaultValue: item.currency,
        className: "form-control shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, this.state.currencies.map(i => __jsx("option", {
        value: i.id,
        key: i.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, i.name, " - ", i.symbol)))), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-12 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, "Live data")), __jsx("input", {
        type: "checkbox",
        onChange: e => this.changeGraphLive(e, index),
        defaultValue: item.live,
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      })), __jsx("div", {
        className: "col-md-6 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, "Search")), __jsx("button", {
        className: "btn btn-warning",
        onClick: () => this.refreshSingle(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-6 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "Refresh")), __jsx("button", {
        className: "btn btn-success",
        onClick: () => this.refreshSingle(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-redo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-6 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "Delete")), __jsx("button", {
        className: "btn btn-danger",
        onClick: () => this.removeGraph(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-minus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }))), __jsx("div", {
        className: "col-md-6 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "Save")), __jsx("button", {
        className: "btn btn-primary",
        onClick: () => this.saveGraph(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-save",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }))))))))) : "") : __jsx("div", {
        className: "w-50 mx-auto text-center",
        style: {
          paddingTop: "30vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, __jsx("img", {
        src: _src_91_gif__WEBPACK_IMPORTED_MODULE_14___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      })));
    }
  }

}

/***/ }),

/***/ "./services/authService.js":
/*!*********************************!*\
  !*** ./services/authService.js ***!
  \*********************************/
/*! exports provided: login, confirmLogin, loginWithJwt, logout, getCurrentUser, getJwt, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmLogin", function() { return confirmLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginWithJwt", function() { return loginWithJwt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJwt", function() { return getJwt; });
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpService */ "./services/httpService.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.json");
var _config__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config */ "./config.json", 1);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



const apiEndpoit = _config__WEBPACK_IMPORTED_MODULE_1__["apiUrl"] + "/auth";
const tokenKey = "token";
async function login(email, password) {
  const {
    data: jwt
  } = await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(apiEndpoit, {
    email,
    password
  });
  localStorage.setItem(tokenKey, jwt);
}
async function confirmLogin(email, password) {
  return await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(apiEndpoit, {
    email,
    password
  });
}
function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}
async function logout() {
  localStorage.removeItem(tokenKey);
}
function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].setJwt(getJwt());
    return jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(jwt);
  } catch (ex) {
    return null;
  }
}
function getJwt() {
  const jwt = localStorage.getItem(tokenKey);
  return jwt;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  login,
  confirmLogin,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
});

/***/ }),

/***/ "./services/cryptoService.js":
/*!***********************************!*\
  !*** ./services/cryptoService.js ***!
  \***********************************/
/*! exports provided: getCryptocurrencies, getSavedData, getInfo, saveGraph, replaceGraphs, createUserGraphs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCryptocurrencies", function() { return getCryptocurrencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedData", function() { return getSavedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGraph", function() { return saveGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceGraphs", function() { return replaceGraphs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserGraphs", function() { return createUserGraphs; });
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpService */ "./services/httpService.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.json");
var _config__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config */ "./config.json", 1);


const apiEndpoit = _config__WEBPACK_IMPORTED_MODULE_1__["apiUrl"] + "/crypto";
function getCryptocurrencies() {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${apiEndpoit}/cryptocurrencies`);
}
function getSavedData(userId) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${apiEndpoit}/savedData`, {
    userId
  });
}
function getInfo(cryptocurrency, currency) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${apiEndpoit}/getInfo`, {
    cryptocurrency,
    currency
  });
}
function saveGraph(graph, userId) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${apiEndpoit}/save`, {
    graph,
    userId
  });
}
function replaceGraphs(graphs) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${apiEndpoit}/replace`, graphs);
}
function createUserGraphs(userId) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${apiEndpoit}/create`, {
    userId
  });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  getInfo,
  getCryptocurrencies,
  saveGraph,
  createUserGraphs,
  getSavedData,
  replaceGraphs
});

/***/ }),

/***/ "./services/httpService.js":
/*!*********************************!*\
  !*** ./services/httpService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


axios__WEBPACK_IMPORTED_MODULE_1___default.a.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    console.log(error);
    alert("An unexpected error occurred");
  }

  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
});

function setJwt(jwt) {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common["x-auth-token"] = jwt;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get: axios__WEBPACK_IMPORTED_MODULE_1___default.a.get,
  post: axios__WEBPACK_IMPORTED_MODULE_1___default.a.post,
  put: axios__WEBPACK_IMPORTED_MODULE_1___default.a.put,
  delete: axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete,
  setJwt
});

/***/ }),

/***/ "./src/91.gif":
/*!********************!*\
  !*** ./src/91.gif ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "./src/crypto-text.png":
/*!*****************************!*\
  !*** ./src/crypto-text.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/crypto.png":
/*!************************!*\
  !*** ./src/crypto.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/crypto-1543ce0fdc8a5a80c0018d4c2d431e25.png";

/***/ }),

/***/ "./static/style.css":
/*!**************************!*\
  !*** ./static/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 9:
/*!***********************************!*\
  !*** multi ./pages/customdata.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WEB\crypto\client\pages\customdata.js */"./pages/customdata.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "highcharts":
/*!*****************************!*\
  !*** external "highcharts" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highcharts");

/***/ }),

/***/ "highcharts-react-official":
/*!********************************************!*\
  !*** external "highcharts-react-official" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highcharts-react-official");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=customdata.js.map