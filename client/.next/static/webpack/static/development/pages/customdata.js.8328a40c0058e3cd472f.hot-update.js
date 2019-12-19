webpackHotUpdate("static\\development\\pages\\customdata.js",{

/***/ "./node_modules/fbjs/lib/invariant.js":
false,

/***/ "./node_modules/immutability-helper/index.js":
/*!***************************************************!*\
  !*** ./node_modules/immutability-helper/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;
var toString = Object.prototype.toString;
function type(obj) {
    return toString.call(obj).slice(8, -1);
}
var assign = Object.assign || /* istanbul ignore next */ (function (target, source) {
    getAllKeys(source).forEach(function (key) {
        if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    });
    return target;
});
var getAllKeys = typeof Object.getOwnPropertySymbols === 'function'
    ? function (obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)); }
    /* istanbul ignore next */
    : function (obj) { return Object.keys(obj); };
function copy(object) {
    return Array.isArray(object)
        ? assign(object.constructor(object.length), object)
        : (type(object) === 'Map')
            ? new Map(object)
            : (type(object) === 'Set')
                ? new Set(object)
                : (object && typeof object === 'object')
                    ? assign(Object.create(Object.getPrototypeOf(object)), object)
                    /* istanbul ignore next */
                    : object;
}
var Context = /** @class */ (function () {
    function Context() {
        this.commands = assign({}, defaultCommands);
        this.update = this.update.bind(this);
        // Deprecated: update.extend, update.isEquals and update.newContext
        this.update.extend = this.extend = this.extend.bind(this);
        this.update.isEquals = function (x, y) { return x === y; };
        this.update.newContext = function () { return new Context().update; };
    }
    Object.defineProperty(Context.prototype, "isEquals", {
        get: function () {
            return this.update.isEquals;
        },
        set: function (value) {
            this.update.isEquals = value;
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.extend = function (directive, fn) {
        this.commands[directive] = fn;
    };
    Context.prototype.update = function (object, $spec) {
        var _this = this;
        var spec = (typeof $spec === 'function') ? { $apply: $spec } : $spec;
        if (!(Array.isArray(object) && Array.isArray(spec))) {
            invariant(!Array.isArray(spec), 'update(): You provided an invalid spec to update(). The spec may ' +
                'not contain an array except as the value of $set, $push, $unshift, ' +
                '$splice or any custom command allowing an array value.');
        }
        invariant(typeof spec === 'object' && spec !== null, 'update(): You provided an invalid spec to update(). The spec and ' +
            'every included key path must be plain objects containing one of the ' +
            'following commands: %s.', Object.keys(this.commands).join(', '));
        var nextObject = object;
        getAllKeys(spec).forEach(function (key) {
            if (hasOwnProperty.call(_this.commands, key)) {
                var objectWasNextObject = object === nextObject;
                nextObject = _this.commands[key](spec[key], nextObject, spec, object);
                if (objectWasNextObject && _this.isEquals(nextObject, object)) {
                    nextObject = object;
                }
            }
            else {
                var nextValueForKey = type(object) === 'Map'
                    ? _this.update(object.get(key), spec[key])
                    : _this.update(object[key], spec[key]);
                var nextObjectValue = type(nextObject) === 'Map'
                    ? nextObject.get(key)
                    : nextObject[key];
                if (!_this.isEquals(nextValueForKey, nextObjectValue)
                    || typeof nextValueForKey === 'undefined'
                        && !hasOwnProperty.call(object, key)) {
                    if (nextObject === object) {
                        nextObject = copy(object);
                    }
                    if (type(nextObject) === 'Map') {
                        nextObject.set(key, nextValueForKey);
                    }
                    else {
                        nextObject[key] = nextValueForKey;
                    }
                }
            }
        });
        return nextObject;
    };
    return Context;
}());
exports.Context = Context;
var defaultCommands = {
    $push: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$push');
        return value.length ? nextObject.concat(value) : nextObject;
    },
    $unshift: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$unshift');
        return value.length ? value.concat(nextObject) : nextObject;
    },
    $splice: function (value, nextObject, spec, originalObject) {
        invariantSplices(nextObject, spec);
        value.forEach(function (args) {
            invariantSplice(args);
            if (nextObject === originalObject && args.length) {
                nextObject = copy(originalObject);
            }
            splice.apply(nextObject, args);
        });
        return nextObject;
    },
    $set: function (value, _nextObject, spec) {
        invariantSet(spec);
        return value;
    },
    $toggle: function (targets, nextObject) {
        invariantSpecArray(targets, '$toggle');
        var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
        targets.forEach(function (target) {
            nextObjectCopy[target] = !nextObject[target];
        });
        return nextObjectCopy;
    },
    $unset: function (value, nextObject, _spec, originalObject) {
        invariantSpecArray(value, '$unset');
        value.forEach(function (key) {
            if (Object.hasOwnProperty.call(nextObject, key)) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                delete nextObject[key];
            }
        });
        return nextObject;
    },
    $add: function (values, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$add');
        invariantSpecArray(values, '$add');
        if (type(nextObject) === 'Map') {
            values.forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (nextObject === originalObject && nextObject.get(key) !== value) {
                    nextObject = copy(originalObject);
                }
                nextObject.set(key, value);
            });
        }
        else {
            values.forEach(function (value) {
                if (nextObject === originalObject && !nextObject.has(value)) {
                    nextObject = copy(originalObject);
                }
                nextObject.add(value);
            });
        }
        return nextObject;
    },
    $remove: function (value, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$remove');
        invariantSpecArray(value, '$remove');
        value.forEach(function (key) {
            if (nextObject === originalObject && nextObject.has(key)) {
                nextObject = copy(originalObject);
            }
            nextObject.delete(key);
        });
        return nextObject;
    },
    $merge: function (value, nextObject, _spec, originalObject) {
        invariantMerge(nextObject, value);
        getAllKeys(value).forEach(function (key) {
            if (value[key] !== nextObject[key]) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                nextObject[key] = value[key];
            }
        });
        return nextObject;
    },
    $apply: function (value, original) {
        invariantApply(value);
        return value(original);
    },
};
var defaultContext = new Context();
exports.isEquals = defaultContext.update.isEquals;
exports.extend = defaultContext.extend;
exports.default = defaultContext.update;
// @ts-ignore
exports.default.default = module.exports = assign(exports.default, exports);
// invariants
function invariantPushAndUnshift(value, spec, command) {
    invariant(Array.isArray(value), 'update(): expected target of %s to be an array; got %s.', command, value);
    invariantSpecArray(spec[command], command);
}
function invariantSpecArray(spec, command) {
    invariant(Array.isArray(spec), 'update(): expected spec of %s to be an array; got %s. ' +
        'Did you forget to wrap your parameter in an array?', command, spec);
}
function invariantSplices(value, spec) {
    invariant(Array.isArray(value), 'Expected $splice target to be an array; got %s', value);
    invariantSplice(spec.$splice);
}
function invariantSplice(value) {
    invariant(Array.isArray(value), 'update(): expected spec of $splice to be an array of arrays; got %s. ' +
        'Did you forget to wrap your parameters in an array?', value);
}
function invariantApply(fn) {
    invariant(typeof fn === 'function', 'update(): expected spec of $apply to be a function; got %s.', fn);
}
function invariantSet(spec) {
    invariant(Object.keys(spec).length === 1, 'Cannot have more than one key in an object with $set');
}
function invariantMerge(target, specValue) {
    invariant(specValue && typeof specValue === 'object', 'update(): $merge expects a spec of type \'object\'; got %s', specValue);
    invariant(target && typeof target === 'object', 'update(): $merge expects a target of type \'object\'; got %s', target);
}
function invariantMapOrSet(target, command) {
    var typeOfTarget = type(target);
    invariant(typeOfTarget === 'Map' || typeOfTarget === 'Set', 'update(): %s expects a target of type Set or Map; got %s', command, typeOfTarget);
}


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/react-addons-update/index.js":
false,

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/authService */ "./services/authService.js");
/* harmony import */ var _services_cryptoService__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/cryptoService */ "./services/cryptoService.js");
/* harmony import */ var _src_91_gif__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../src/91.gif */ "./src/91.gif");
/* harmony import */ var _src_91_gif__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_src_91_gif__WEBPACK_IMPORTED_MODULE_24__);

















var _jsxFileName = "D:\\WEB\\crypto\\client\\pages\\customdata.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



 // import HighchartsReact from 'highcharts-react-official';






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

var CustomData =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__["default"])(CustomData, _Component);

  function CustomData() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__["default"])(this, CustomData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__["default"])(CustomData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "state", {
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
      interval: [],
      chartOptions: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "addGraph", function () {
      var worker = new Worker("static/service-worker.js");

      var bkOptions = _objectSpread({}, chartOptions);

      var graphs = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.state.graphs);

      worker.onmessage = function (e) {
        console.log(e.data);
        bkOptions.title = {
          text: "".concat(_this.state.selectedCryptocurrency.name, " to ").concat(_this.state.selectedCurrency.name, " exchange rate over time")
        }, bkOptions.series = [{
          type: "line",
          name: "".concat(_this.state.selectedCryptocurrency.name, " to ").concat(_this.state.selectedCurrency.name),
          data: e.data.prices
        }];
        bkOptions.xAxis.categories = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(e.data.time);
        graphs.push({
          id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8___default()(),
          chartOptions: bkOptions,
          cryptocurrency: _this.state.selectedCryptocurrency.value,
          currency: _this.state.selectedCurrency.value,
          live: false
        });
        console.log(graphs);

        _this.setState({
          graphs: graphs,
          workers: _this.state.workers + 1,
          interval: ""
        });
      };

      worker.postMessage("".concat(_this.state.selectedCryptocurrency.value, ",").concat(_this.state.selectedCurrency.value, ",").concat(_this.state.jwt));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "findName", function (array, value) {
      for (var i = 0; i < _this.state[array].length; i++) {
        if (_this.state[array][i].id === value) {
          return _this.state[array][i].name;
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "changeCryptocurrency", function (e, array) {
      console.log(e.target.value);

      var name = _this.findName(array, e.target.value);

      console.log(name);

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])({}, "selected".concat(e.target.name), {
        value: e.target.value,
        name: name
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "changeGraphCryptocurrency", function (e, index) {
      console.log(e.target.value, index);

      var graphs = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.state.graphs);

      graphs[index][e.target.name.toLowerCase()] = e.target.value;

      _this.setState({
        graphs: graphs
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "refreshAll", function () {
      var workers = new Array(_this.state.workers);

      var graphs = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.state.graphs);

      _this.setState({
        loading: true
      });

      var _loop = function _loop(i) {
        workers[i] = new Worker("static/service-worker.js");

        workers[i].onmessage = function (e) {
          graphs[i].chartOptions.xAxis.categories = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(e.data.time);
          graphs[i].chartOptions.series = [{
            type: "line",
            name: _this.state.graphs[i].chartOptions.series[0].name,
            data: e.data.prices
          }];

          _this.setState({
            graphs: graphs,
            loading: false
          });
        };

        workers[i].postMessage("".concat(graphs[i].cryptocurrency, ",").concat(graphs[i].currency, ",").concat(_this.state.jwt));
      };

      for (var i = 0; i < _this.state.workers; i++) {
        _loop(i);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "refreshSingle", function (index) {
      var worker = new Worker("static/service-worker.js");

      var graphs = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.state.graphs); //this.setState({loading: true});


      worker.onmessage = function (e) {
        graphs[index].chartOptions.xAxis.categories = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(e.data.time);
        graphs[index].chartOptions.series = [{
          type: "line",
          name: _this.state.graphs[index].chartOptions.series[0].name,
          data: e.data.prices
        }];

        _this.setState({
          graphs: graphs //loading: false

        });
      };

      worker.postMessage("".concat(graphs[index].cryptocurrency, ",").concat(graphs[index].currency, ",").concat(_this.state.jwt));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "removeGraph", function (index) {
      var graphs = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.state.graphs);

      clearInterval(graphs[index].interval);
      graphs = graphs.filter(function (item, i) {
        return i !== index;
      });

      _this.setState({
        graphs: graphs
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "liveData", function (index) {
      console.log("LIVE", index);
      var worker = new Worker("static/service-worker.js");

      var graphs = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.state.graphs);

      worker.onmessage = function (e) {
        graphs[index].chartOptions.xAxis.categories.push(e.data.currentTime);
        graphs[index].chartOptions.series[0].data.push(e.data.currentPrice);
        graphs[index].chartOptions.series = [{
          type: "line",
          name: _this.state.graphs[index].chartOptions.series[0].name,
          data: graphs[index].chartOptions.series[0].data
        }];

        _this.setState({
          graphs: immutability_helper__WEBPACK_IMPORTED_MODULE_21___default()(_this.state.graphs, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])({}, index, {
            $set: graphs[index]
          }))
        });
      };

      worker.postMessage("".concat(graphs[index].cryptocurrency, ",").concat(graphs[index].currency, ",").concat(_this.state.jwt));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "changeGraphLive", function (e, index) {
      var graphs = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.state.graphs);

      if (e.target.checked) {
        graphs[index].interval = setInterval(function () {
          return _this.liveData(index);
        }, 4000);

        _this.setState({
          graphs: graphs
        });
      } else {
        clearInterval(graphs[index].interval);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "saveGraph",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(index) {
        var bkGraph, graph;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                bkGraph = _objectSpread({}, _this.state.graphs[index]);
                graph = {
                  categories: bkGraph.chartOptions.xAxis.categories,
                  series: bkGraph.chartOptions.series[0],
                  graphId: bkGraph.id,
                  cryptocurrency: bkGraph.cryptocurrency,
                  currency: bkGraph.currency,
                  date: new Date()
                };
                console.log(graph);
                _context.next = 5;
                return _services_cryptoService__WEBPACK_IMPORTED_MODULE_23__["default"].saveGraph(graph).then(function (res) {
                  console.log("SUCCESS!");
                })["catch"](function (err) {
                  return console.log("ERROR!", err);
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__["default"])(CustomData, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
        var _this2 = this;

        var user, jwt;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                user = _services_authService__WEBPACK_IMPORTED_MODULE_22__["default"].getCurrentUser();
                jwt = _services_authService__WEBPACK_IMPORTED_MODULE_22__["default"].getJwt();
                this.setState({
                  user: user,
                  jwt: jwt
                });
                _context2.next = 5;
                return _services_cryptoService__WEBPACK_IMPORTED_MODULE_23__["default"].getCryptocurrencies().then(function (res) {
                  console.log(res.data);

                  _this2.setState({
                    cryptocurrencies: res.data.cryptocurrencies,
                    currencies: res.data.currencies,
                    loaded: true
                  });
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Hello ", this.state.user.name), __jsx("div", {
        className: "form-group w-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, __jsx("select", {
        name: "Cryptocurrency",
        onChange: function onChange(e) {
          return _this3.changeCryptocurrency(e, "cryptocurrencies");
        },
        disabled: !this.state.loaded,
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, __jsx("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Select Cryptocurrency"), this.state.cryptocurrencies.map(function (item) {
        return __jsx("option", {
          value: item.id,
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }, item.name, " - ", item.symbol);
      })), __jsx("select", {
        name: "Currency",
        onChange: function onChange(e) {
          return _this3.changeCryptocurrency(e, "currencies");
        },
        disabled: !this.state.loaded,
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Select Currency"), this.state.currencies.map(function (item) {
        return __jsx("option", {
          value: item.id,
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, item.name, " - ", item.symbol);
      }))), __jsx("button", {
        className: "btn btn-primary",
        onClick: this.addGraph,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "ADD"), __jsx("button", {
        className: "btn btn-success",
        onClick: this.refreshAll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "REFRESH ALL"), this.state.graphs.length > 0 ? this.state.graphs.map(function (item, index) {
        return __jsx("div", {
          className: "row mt-4",
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        }, __jsx("div", {
          className: "col-md-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, __jsx("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, __jsx("select", {
          name: "Cryptocurrency",
          onChange: function onChange(e) {
            return _this3.changeGraphCryptocurrency(e, index);
          },
          defaultValue: item.cryptocurrency,
          className: "form-control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        }, _this3.state.cryptocurrencies.map(function (i) {
          return __jsx("option", {
            value: i.id,
            key: i.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 256
            },
            __self: this
          }, i.name, " - ", i.symbol);
        })), __jsx("select", {
          name: "Currency",
          onChange: function onChange(e) {
            return _this3.changeGraphCryptocurrency(e, index);
          },
          defaultValue: item.currency,
          className: "form-control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, _this3.state.currencies.map(function (i) {
          return __jsx("option", {
            value: i.id,
            key: i.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 257
            },
            __self: this
          }, i.name, " - ", i.symbol);
        })), __jsx("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return _this3.changeGraphLive(e, index);
          },
          defaultValue: item.live,
          className: "form-control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }), __jsx("button", {
          className: "btn btn-success",
          onClick: function onClick() {
            return _this3.refreshSingle(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, "REFRESH"), __jsx("button", {
          className: "btn btn-warning",
          onClick: function onClick() {
            return _this3.refreshSingle(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }, "SEARCH"), __jsx("button", {
          className: "btn btn-danger",
          onClick: function onClick() {
            return _this3.removeGraph(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, "DELETE"), __jsx("button", {
          className: "btn btn-primary",
          onClick: function onClick() {
            return _this3.saveGraph(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }, "SAVE"))), __jsx("div", {
          className: "col-md-9 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, !_this3.state.loading ? __jsx(react_highcharts__WEBPACK_IMPORTED_MODULE_20___default.a, {
          key: item.id,
          highcharts: highcharts__WEBPACK_IMPORTED_MODULE_19___default.a,
          config: item.chartOptions,
          ref: "chart",
          oneToOne: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }) : __jsx("img", {
          src: _src_91_gif__WEBPACK_IMPORTED_MODULE_24___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        })));
      }) : "");
    }
  }]);

  return CustomData;
}(react__WEBPACK_IMPORTED_MODULE_17__["Component"]);



/***/ })

})
//# sourceMappingURL=customdata.js.8328a40c0058e3cd472f.hot-update.js.map