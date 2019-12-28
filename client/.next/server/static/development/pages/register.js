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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: apiUrl, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiUrl\":\"http://localhost:3900/api\"}");

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

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/userService */ "./services/userService.js");
/* harmony import */ var _services_cryptoService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/cryptoService */ "./services/cryptoService.js");
/* harmony import */ var _src_crypto_text_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/crypto-text.png */ "./src/crypto-text.png");
/* harmony import */ var _src_crypto_text_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_crypto_text_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "D:\\WEB\\crypto\\client\\pages\\register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







class Login extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "state", {
      data: {
        name: "",
        email: "",
        password: ""
      },
      error: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "validate", () => {
      return !(this.state.data.name !== "" && this.state.data.email !== "" && this.state.data.password !== "");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleChange", e => {
      const data = _objectSpread({}, this.state.data);

      data[e.target.name] = e.target.value;
      this.setState({
        data
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "doSubmit", async e => {
      e.preventDefault();

      try {
        const {
          data
        } = this.state;
        const responseUser = await _services_userService__WEBPACK_IMPORTED_MODULE_9__["default"].register(data);
        await _services_cryptoService__WEBPACK_IMPORTED_MODULE_10__["default"].createUserGraphs(responseUser.data._id);
        window.location.replace("/login");
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          console.log(ex.response);
          this.setState({
            error: "Email is already registered!"
          });
        }
      }
    });
  }

  render() {
    return __jsx("div", {
      className: "container home",
      style: {
        paddingTop: "10%",
        paddingBottom: "13%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Register"), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), __jsx("div", {
      className: "card w-50 mx-auto shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-center pt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("img", {
      src: _src_crypto_text_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx("h1", {
      style: {
        fontFamily: "Courier New"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Register")), __jsx("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx("form", {
      onSubmit: this.doSubmit,
      method: "POST",
      className: "m-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("div", {
      className: "form-group input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      name: "name",
      placeholder: "Name",
      value: this.state.data.name,
      onChange: this.handleChange,
      className: "form-control mb-3 mt-2 shadow w-75 mx-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx("input", {
      type: "text",
      name: "email",
      placeholder: "Email",
      value: this.state.data.email,
      onChange: this.handleChange,
      className: "form-control mb-3 mt-2 shadow w-75 mx-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx("input", {
      type: "password",
      name: "password",
      placeholder: "Password",
      value: this.state.data.password,
      onChange: this.handleChange,
      className: "form-control mb-3 shadow w-75 mx-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx("button", {
      disabled: this.validate(),
      className: "btn btn-success mt-2 mb-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Register"))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("p", {
      className: "text-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, this.state.error))))));
  }

}

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

/***/ "./services/userService.js":
/*!*********************************!*\
  !*** ./services/userService.js ***!
  \*********************************/
/*! exports provided: getUsers, register, update, updateAdmin, deleteUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAdmin", function() { return updateAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./httpService */ "./services/httpService.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.json");
var _config__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config */ "./config.json", 1);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const apiEndpoit = _config__WEBPACK_IMPORTED_MODULE_8__["apiUrl"] + "/users";

function userUrl(id) {
  return `${apiEndpoit}/${id}`;
}

function adminUrl(id) {
  return `${apiEndpoit}/admin/${id}`;
}

function getUsers() {
  return _httpService__WEBPACK_IMPORTED_MODULE_7__["default"].get(apiEndpoit);
}
function register(user) {
  return _httpService__WEBPACK_IMPORTED_MODULE_7__["default"].post(apiEndpoit, {
    name: user.name,
    email: user.email,
    password: user.password,
    isAdmin: false
  });
}
function update(user) {
  if (user._id) {
    const body = _objectSpread({}, user);

    delete body._id;
    delete body.__v;
    return _httpService__WEBPACK_IMPORTED_MODULE_7__["default"].put(userUrl(user._id), body);
  }
}
function updateAdmin(user) {
  if (user._id) {
    const body = _objectSpread({}, user);

    delete body._id;
    delete body.__v;
    delete body.name;
    delete body.email;
    return _httpService__WEBPACK_IMPORTED_MODULE_7__["default"].put(adminUrl(user._id), body);
  }
}
function deleteUser(userId) {
  return _httpService__WEBPACK_IMPORTED_MODULE_7__["default"].delete(userUrl(userId));
}
/* harmony default export */ __webpack_exports__["default"] = ({
  getUsers,
  register,
  update,
  deleteUser,
  updateAdmin
});

/***/ }),

/***/ "./src/crypto-text.png":
/*!*****************************!*\
  !*** ./src/crypto-text.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/style.css":
/*!**************************!*\
  !*** ./static/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 7:
/*!*********************************!*\
  !*** multi ./pages/register.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WEB\crypto\client\pages\register.js */"./pages/register.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=register.js.map