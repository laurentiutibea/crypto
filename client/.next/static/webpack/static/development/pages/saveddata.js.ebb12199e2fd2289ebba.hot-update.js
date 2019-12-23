webpackHotUpdate("static\\development\\pages\\saveddata.js",{

/***/ "./services/cryptoService.js":
/*!***********************************!*\
  !*** ./services/cryptoService.js ***!
  \***********************************/
/*! exports provided: getCryptocurrencies, getSavedData, getCurrencies, saveGraph, createUserGraphs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCryptocurrencies", function() { return getCryptocurrencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedData", function() { return getSavedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencies", function() { return getCurrencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGraph", function() { return saveGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserGraphs", function() { return createUserGraphs; });
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpService */ "./services/httpService.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.json");
var _config__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config */ "./config.json", 1);


var apiEndpoit = _config__WEBPACK_IMPORTED_MODULE_1__["apiUrl"] + "/crypto";
function getCryptocurrencies() {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(apiEndpoit, "/cryptocurrencies"));
}
function getSavedData(userId) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(apiEndpoit, "/"), {
    userId: userId
  });
}
function getCurrencies(cryptocurrency, currency) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(apiEndpoit, {
    cryptocurrency: cryptocurrency,
    currency: currency
  });
}
function saveGraph(graph, userId) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(apiEndpoit, "/save"), {
    graph: graph,
    userId: userId
  });
}
function createUserGraphs(userId) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(apiEndpoit, "/create"), {
    userId: userId
  });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  getCurrencies: getCurrencies,
  getCryptocurrencies: getCryptocurrencies,
  saveGraph: saveGraph,
  createUserGraphs: createUserGraphs
});

/***/ })

})
//# sourceMappingURL=saveddata.js.ebb12199e2fd2289ebba.hot-update.js.map