webpackHotUpdate("static\\development\\pages\\saveddata.js",{

/***/ "./services/cryptoService.js":
/*!***********************************!*\
  !*** ./services/cryptoService.js ***!
  \***********************************/
/*! exports provided: getCryptocurrencies, getSavedData, getCurrencies, saveGraph, replaceGraph, createUserGraphs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCryptocurrencies", function() { return getCryptocurrencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedData", function() { return getSavedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencies", function() { return getCurrencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGraph", function() { return saveGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceGraph", function() { return replaceGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserGraphs", function() { return createUserGraphs; });
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpService */ "./services/httpService.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.json");
var _config__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config */ "./config.json", 1);


var apiEndpoit = _config__WEBPACK_IMPORTED_MODULE_1__["apiUrl"] + "/crypto";
function getCryptocurrencies() {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(apiEndpoit, "/cryptocurrencies"));
}
function getSavedData(userId) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(apiEndpoit, "/savedData"), {
    userId: userId
  });
}
function getCurrencies(cryptocurrency, currency) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(apiEndpoit, "/getInfo"), {
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
function replaceGraph(graph) {
  return _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(apiEndpoit, "/replace"), {
    graph: graph
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
  createUserGraphs: createUserGraphs,
  getSavedData: getSavedData,
  replaceGraph: replaceGraph
});

/***/ })

})
//# sourceMappingURL=saveddata.js.06b0a61bcf430ac89578.hot-update.js.map