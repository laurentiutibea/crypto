webpackHotUpdate("static/development/pages/customdata.js",{

/***/ "./services/cryptoService.js":
/*!***********************************!*\
  !*** ./services/cryptoService.js ***!
  \***********************************/
/*! exports provided: getCryptocurrencies, getCurrencies, saveGraph, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCryptocurrencies", function() { return getCryptocurrencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencies", function() { return getCurrencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGraph", function() { return saveGraph; });
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpService */ "./services/httpService.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.json");
var _config__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config */ "./config.json", 1);


var apiEndpoit = _config__WEBPACK_IMPORTED_MODULE_1__["apiUrl"] + "/crypto";
function getCryptocurrencies() {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].get(apiEndpoit);
}
function getCurrencies(cryptocurrency, currency) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(apiEndpoit, {
    cryptocurrency: cryptocurrency,
    currency: currency
  });
}
function saveGraph(graph) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(apiEndpoit, "/save"));
}
/* harmony default export */ __webpack_exports__["default"] = ({
  getCurrencies: getCurrencies,
  getCryptocurrencies: getCryptocurrencies,
  saveGraph: saveGraph
});

/***/ })

})
//# sourceMappingURL=customdata.js.1c0b06987ec1d0efb724.hot-update.js.map