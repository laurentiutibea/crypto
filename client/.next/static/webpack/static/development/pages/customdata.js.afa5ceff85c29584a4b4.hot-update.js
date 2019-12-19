webpackHotUpdate("static\\development\\pages\\customdata.js",{

/***/ "./components/chart.js":
/*!*****************************!*\
  !*** ./components/chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chart; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "D:\\WEB\\crypto\\client\\components\\chart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var Chart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Chart, _Component);

  function Chart() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Chart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Chart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      data: {}
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        data: this.props.data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("select", {
        name: "Cryptocurrency",
        onChange: function onChange(e) {
          return _this2.changeGraphCryptocurrency(e, _this2.state.index);
        },
        defaultValue: this.state.item.cryptocurrency,
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.state.cryptocurrencies.map(function (i) {
        return __jsx("option", {
          value: i.id,
          key: i.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, i.name, " - ", i.symbol);
      })), __jsx("select", {
        name: "Currency",
        onChange: function onChange(e) {
          return _this2.changeGraphCryptocurrency(e, _this2.state.index);
        },
        defaultValue: this.state.item.currency,
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.state.currencies.map(function (i) {
        return __jsx("option", {
          value: i.id,
          key: i.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, i.name, " - ", i.symbol);
      })), __jsx("input", {
        type: "checkbox",
        onChange: function onChange(e) {
          return _this2.changeGraphLive(e, _this2.state.index);
        },
        defaultValue: this.state.item.live,
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx("button", {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.refreshSingle(_this2.state.index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "REFRESH"), __jsx("button", {
        className: "btn btn-warning",
        onClick: function onClick() {
          return _this2.refreshSingle(_this2.state.index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "SEARCH"), __jsx("button", {
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.removeGraph(_this2.state.index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "DELETE"), __jsx("button", {
        className: "btn btn-primary",
        onClick: function onClick() {
          return _this2.saveGraph(_this2.state.index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "SAVE"))), __jsx("div", {
        className: "col-md-9 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, !this.state.loading ? __jsx(react_highcharts__WEBPACK_IMPORTED_MODULE_8___default.a, {
        key: item.id,
        highcharts: highcharts__WEBPACK_IMPORTED_MODULE_9___default.a,
        config: item.chartOptions,
        ref: "chart",
        oneToOne: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }) : __jsx("img", {
        src: loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })));
    }
  }]);

  return Chart;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=customdata.js.afa5ceff85c29584a4b4.hot-update.js.map