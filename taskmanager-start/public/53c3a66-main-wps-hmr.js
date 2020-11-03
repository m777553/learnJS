self["webpackHotUpdatetaskmanager_demo_project"]("main",{

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! namespace exports */
/*! export generateFilters [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateFilters": () => /* binding */ generateFilters
/* harmony export */ });
const filterNames = [
  `all`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Archive`,
];


const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 18),
    };
  });
};




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "1f3979b17164b1e0a73c"
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=53c3a66-main-wps-hmr.js.map