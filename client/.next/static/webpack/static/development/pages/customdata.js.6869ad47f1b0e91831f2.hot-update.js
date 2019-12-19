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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "D:\\WEB\\crypto\\client\\components\\chart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var Chart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Chart, _Component);

  function Chart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Chart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Chart).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Chart, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("select", {
        name: "Cryptocurrency",
        onChange: function onChange(e) {
          return _this.changeGraphCryptocurrency(e, _this.props.data.index);
        },
        defaultValue: this.props.data.item.cryptocurrency,
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.props.data.cryptocurrencies.map(function (i) {
        return __jsx("option", {
          value: i.id,
          key: i.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, i.name, " - ", i.symbol);
      })))), __jsx("div", {
        className: "col-md-9 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, !this.state.loading ? __jsx(ReactHighcharts, {
        key: item.id,
        highcharts: Highcharts,
        config: item.chartOptions,
        ref: "chart",
        oneToOne: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }) : __jsx("img", {
        src: loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })));
    }
  }]);

  return Chart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=customdata.js.6869ad47f1b0e91831f2.hot-update.js.map