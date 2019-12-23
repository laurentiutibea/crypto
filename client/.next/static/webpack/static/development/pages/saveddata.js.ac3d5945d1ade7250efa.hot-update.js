webpackHotUpdate("static\\development\\pages\\saveddata.js",{

/***/ "./pages/saveddata.js":
/*!****************************!*\
  !*** ./pages/saveddata.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SavedData; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/authService */ "./services/authService.js");
/* harmony import */ var _services_cryptoService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/cryptoService */ "./services/cryptoService.js");
/* harmony import */ var _src_91_gif__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/91.gif */ "./src/91.gif");
/* harmony import */ var _src_91_gif__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_91_gif__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_crypto_text_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/crypto-text.png */ "./src/crypto-text.png");
/* harmony import */ var _src_crypto_text_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_crypto_text_png__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "D:\\WEB\\crypto\\client\\pages\\saveddata.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var chartOptions = {
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

var SavedData =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SavedData, _Component);

  function SavedData() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SavedData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SavedData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      user: {},
      jwt: ""
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SavedData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var user = _services_authService__WEBPACK_IMPORTED_MODULE_11__["default"].getCurrentUser();
      var jwt = _services_authService__WEBPACK_IMPORTED_MODULE_11__["default"].getJwt();
      this.setState({
        user: user,
        jwt: jwt
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "HELLO!"));
    }
  }]);

  return SavedData;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=saveddata.js.ac3d5945d1ade7250efa.hot-update.js.map