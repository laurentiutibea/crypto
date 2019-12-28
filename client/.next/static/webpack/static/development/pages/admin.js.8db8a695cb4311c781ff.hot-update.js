webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Admin; });
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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/authService */ "./services/authService.js");
/* harmony import */ var _services_cryptoService__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/cryptoService */ "./services/cryptoService.js");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/userService */ "./services/userService.js");
/* harmony import */ var _utils_paginate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/paginate */ "./utils/paginate.js");
/* harmony import */ var _components_dataTable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/dataTable */ "./components/dataTable.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/pagination */ "./components/pagination.js");
/* harmony import */ var _src_91_gif__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../src/91.gif */ "./src/91.gif");
/* harmony import */ var _src_91_gif__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_src_91_gif__WEBPACK_IMPORTED_MODULE_25__);
















var _jsxFileName = "D:\\WEB\\crypto\\client\\pages\\admin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }












var Admin =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_14__["default"])(Admin, _Component);

  function Admin() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__["default"])(this, Admin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__["default"])(Admin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "state", {
      user: {},
      data: [],
      pageSize: 7,
      currentPage: 1,
      searchQuery: "",
      sortColumn: {
        path: "email",
        order: "asc"
      },
      columns: [{
        path: "email",
        label: "Email"
      }, {
        path: "name",
        label: "Name"
      }, {
        key: "isAdmin",
        label: "Admin",
        content: function content(data) {
          return __jsx("select", {
            name: "isAdmin",
            className: "form-control select-w",
            onChange: function onChange(e) {
              return _this.handleChangeBool(e, data);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, __jsx("option", {
            value: data.isAdmin,
            hidden: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, data.isAdmin), __jsx("option", {
            value: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, "true"), __jsx("option", {
            value: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, "false"));
        }
      }, {
        key: "update",
        content: function content(data) {
          return __jsx("button", {
            onClick: function onClick() {
              return _this.doUpdate(data);
            },
            className: "btn btn-warning btn-sm",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, "Update");
        }
      }, {
        key: "delete",
        content: function content(data) {
          return __jsx("button", {
            onClick: function onClick() {
              return _this.handleDelete(data);
            },
            className: "btn btn-danger btn-sm",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, "Delete");
        }
      }],
      disabled: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "getData",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_services_userService__WEBPACK_IMPORTED_MODULE_21__["getUsers"])().then(function (res) {
                console.log(res.data);

                var data = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(res.data);

                data.map(function (item) {
                  return item.isAdmin = item.isAdmin.toString();
                });

                _this.setState({
                  data: data
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "handlePageChange", function (page) {
      _this.setState({
        currentPage: page
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "handleSearch", function (query) {
      _this.setState({
        searchQuery: query.target.value,
        currentPage: 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "handleSort", function (sortColumn) {
      _this.setState({
        sortColumn: sortColumn
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "handleDelete",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2(data) {
        var originalData, allData;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                originalData = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_this.state.data);
                allData = originalData.filter(function (m) {
                  return m._id !== data._id;
                });

                _this.setState({
                  data: allData
                });

                _context2.prev = 3;
                _context2.next = 6;
                return Object(_services_userService__WEBPACK_IMPORTED_MODULE_21__["deleteUser"])(data._id);

              case 6:
                _context2.next = 8;
                return _this.getData();

              case 8:
                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](3);
                if (_context2.t0.response && _context2.t0.response.status === 404) console.log("This user was already deleted.");

                _this.setState({
                  data: originalData
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "handleChangeBool", function (e, data) {
      data[e.target.name] = e.target.value;

      var allData = _objectSpread({}, _this.state.data);

      for (var i = 0; i < allData.length; i++) {
        if (allData[i]._id === data._id) allData[i] = data;
      }

      allData = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(allData).map(function (key) {
        return allData[key];
      });

      _this.setState({
        data: allData
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "doUpdate",
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3(data) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                delete data.__v;
                data.isAdmin = JSON.parse(data.isAdmin);
                _context3.next = 5;
                return Object(_services_userService__WEBPACK_IMPORTED_MODULE_21__["updateAdmin"])(data);

              case 5:
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

                if (_context3.t0.response && _context3.t0.response.status === 400) {
                  console.log("Incorrectly data entered!");
                }

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__["default"])(_this), "getPageData", function () {
      var _this$state = _this.state,
          pageSize = _this$state.pageSize,
          currentPage = _this$state.currentPage,
          allData = _this$state.data,
          searchQuery = _this$state.searchQuery,
          sortColumn = _this$state.sortColumn;
      var filtered = allData;
      if (searchQuery) filtered = allData.filter(function (m) {
        return m.email.toLowerCase().startsWith(searchQuery.toLowerCase());
      });

      var sorted = lodash__WEBPACK_IMPORTED_MODULE_17___default.a.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

      var data = Object(_utils_paginate__WEBPACK_IMPORTED_MODULE_22__["paginate"])(sorted, currentPage, pageSize);
      return {
        totalCount: filtered.length,
        data: data
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__["default"])(Admin, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4() {
        var user;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                user = _services_authService__WEBPACK_IMPORTED_MODULE_19__["default"].getCurrentUser();
                this.setState({
                  user: user
                });
                _context4.next = 4;
                return this.getData();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      if ( true && !_services_authService__WEBPACK_IMPORTED_MODULE_19__["default"].getCurrentUser()) {
        window.location.replace("/login");
      } else {
        if ( true && this.state.user.isAdmin === false) {
          window.location.replace("/index");
        }

        var _this$state2 = this.state,
            pageSize = _this$state2.pageSize,
            currentPage = _this$state2.currentPage,
            searchQuery = _this$state2.searchQuery,
            sortColumn = _this$state2.sortColumn;

        var _this$getPageData = this.getPageData(),
            totalCount = _this$getPageData.totalCount,
            data = _this$getPageData.data;

        return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_18__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "Hello ", this.state.user.name, "! ADMINNDWIA"), __jsx("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, __jsx("div", {
          className: "col-md-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, __jsx("input", {
          type: "text",
          onChange: this.handleSearch,
          placeholder: "Search Users...",
          value: this.state.searchQuery,
          name: "searchQueryCryptocurrencies",
          className: "form-control shadow",
          style: {
            display: "inline-block"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "   ", __jsx("i", {
          className: "fas fa-search",
          style: {
            display: "inline-block"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }))), __jsx("div", {
          className: "col-md-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, !lodash__WEBPACK_IMPORTED_MODULE_17___default.a.isEmpty(this.state.data) ? __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, __jsx(_components_dataTable__WEBPACK_IMPORTED_MODULE_23__["default"], {
          data: data,
          sortColumn: sortColumn,
          onDelete: this.handleDelete,
          onSort: this.handleSort,
          columns: this.state.columns,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        })) : __jsx("img", {
          src: _src_91_gif__WEBPACK_IMPORTED_MODULE_25___default.a,
          alt: "loading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }), __jsx(_components_pagination__WEBPACK_IMPORTED_MODULE_24__["default"], {
          itemsCount: totalCount,
          pageSize: pageSize,
          currentPage: currentPage,
          onPageChange: this.handlePageChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }))));
      }
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_16__["Component"]);



/***/ })

})
//# sourceMappingURL=admin.js.8db8a695cb4311c781ff.hot-update.js.map