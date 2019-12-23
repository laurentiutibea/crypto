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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/authService */ "./services/authService.js");
/* harmony import */ var _services_cryptoService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/cryptoService */ "./services/cryptoService.js");
/* harmony import */ var _src_91_gif__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/91.gif */ "./src/91.gif");
/* harmony import */ var _src_91_gif__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_91_gif__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_crypto_text_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/crypto-text.png */ "./src/crypto-text.png");
/* harmony import */ var _src_crypto_text_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_src_crypto_text_png__WEBPACK_IMPORTED_MODULE_16__);









var _jsxFileName = "D:\\WEB\\crypto\\client\\pages\\saveddata.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;








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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SavedData, _Component);

  function SavedData() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SavedData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SavedData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      user: {},
      jwt: "",
      data: {
        graphs: []
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SavedData, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var user, jwt, _ref, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = _services_authService__WEBPACK_IMPORTED_MODULE_13__["default"].getCurrentUser();
                jwt = _services_authService__WEBPACK_IMPORTED_MODULE_13__["default"].getJwt();
                _context.next = 4;
                return _services_cryptoService__WEBPACK_IMPORTED_MODULE_14__["default"].getSavedData(user._id);

              case 4:
                _ref = _context.sent;
                data = _ref.data;
                console.log(data);
                this.setState({
                  user: user,
                  jwt: jwt,
                  data: data
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, this.state.data.graphs.length > 0 ? this.state.graphs.map(function (item, index) {
        return __jsx("div", {
          key: item.id,
          className: "pt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, __jsx("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }), __jsx("img", {
          src: item.image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }), __jsx("div", {
          className: "row mt-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, __jsx("div", {
          className: "col-md-9 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, !_this2.state.loading ? __jsx(react_highcharts__WEBPACK_IMPORTED_MODULE_12___default.a, {
          key: item.id,
          highcharts: highcharts__WEBPACK_IMPORTED_MODULE_11___default.a,
          config: item.chartOptions,
          ref: "chart",
          oneToOne: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }) : __jsx("img", {
          src: _src_91_gif__WEBPACK_IMPORTED_MODULE_15___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        })), __jsx("div", {
          className: "col-md-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, __jsx("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, __jsx("div", {
          className: "pt-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, __jsx("select", {
          name: "Cryptocurrency",
          onChange: function onChange(e) {
            return _this2.changeGraphCryptocurrency(e, index);
          },
          defaultValue: item.cryptocurrency,
          className: "form-control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, _this2.state.cryptocurrencies.map(function (i) {
          return __jsx("option", {
            value: i.id,
            key: i.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }, i.name, " - ", i.symbol);
        }))), __jsx("div", {
          className: "pt-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, __jsx("select", {
          name: "Currency",
          onChange: function onChange(e) {
            return _this2.changeGraphCryptocurrency(e, index);
          },
          defaultValue: item.currency,
          className: "form-control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, _this2.state.currencies.map(function (i) {
          return __jsx("option", {
            value: i.id,
            key: i.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, i.name, " - ", i.symbol);
        }))), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, __jsx("div", {
          className: "col-md-12 mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "Live data")), __jsx("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return _this2.changeGraphLive(e, index);
          },
          defaultValue: item.live,
          className: "form-control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        })), __jsx("div", {
          className: "col-md-6 mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Search")), __jsx("button", {
          className: "btn btn-warning",
          onClick: function onClick() {
            return _this2.refreshSingle(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx("i", {
          className: "fas fa-search",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }))), __jsx("div", {
          className: "col-md-6 mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "Refresh")), __jsx("button", {
          className: "btn btn-success",
          onClick: function onClick() {
            return _this2.refreshSingle(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("i", {
          className: "fas fa-redo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }))), __jsx("div", {
          className: "col-md-6 mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "Delete")), __jsx("button", {
          className: "btn btn-danger",
          onClick: function onClick() {
            return _this2.removeGraph(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, __jsx("i", {
          className: "fas fa-minus",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }))), __jsx("div", {
          className: "col-md-6 mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "Save")), __jsx("button", {
          className: "btn btn-primary",
          onClick: function onClick() {
            return _this2.saveGraph(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, __jsx("i", {
          className: "fas fa-save",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }))))))));
      }) : "");
    }
  }]);

  return SavedData;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=saveddata.js.4272e19b41794f640b0d.hot-update.js.map