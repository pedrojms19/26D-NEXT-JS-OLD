"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ MeetUps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar DUMMY_MEETUPS = [\n    {\n        id: 1,\n        image: \"https://th.bing.com/th/id/R.729b2a612a1fc2a98ce751a5574811e7?rik=muQg0fEkHG5sCg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fHD-New-York-City-Wallpaper.jpg&ehk=Ev7kmTcu%2bDKK762nXWsXuqXTm2NyT4gnvpcgaGzM1ms%3d&risl=&pid=ImgRaw&r=0\",\n        title: \"New York\",\n        address: \"Right here\",\n        description: \"This is a test\"\n    },\n    {\n        id: 2,\n        image: \"https://th.bing.com/th/id/R.a38afb8d891a95c51c67797d752c62a9?rik=WZf0RZoGgDMcKg&riu=http%3a%2f%2ftaggmagazine.com%2fwp-content%2fuploads%2f2013%2f07%2fMadisonWisconsin-image.jpg&ehk=MNZQQHiZ%2fYZ414JT2PWUhuAuBP849%2fGFFC5PB1YUXE8%3d&risl=&pid=ImgRaw&r=0\",\n        title: \"Madison\",\n        address: \"I miss Wisconsin\",\n        description: \"This is a test 2\"\n    }, \n];\nvar __N_SSG = true;\nfunction MeetUps(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"MeetUps\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\26D OLD NEXT JS-onwards-to-a-bigger-project-starter\\\\06-onwards-to-a-bigger-project-starter\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                meetups: props.meetups\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\26D OLD NEXT JS-onwards-to-a-bigger-project-starter\\\\06-onwards-to-a-bigger-project-starter\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = MeetUps;\nvar _c;\n$RefreshReg$(_c, \"MeetUps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBEO0FBRzFELElBQU1DLGFBQWEsR0FBRztJQUNwQjtRQUNFQyxFQUFFLEVBQUUsQ0FBQztRQUNMQyxLQUFLLEVBQ0gsbVFBQW1RO1FBQ3JRQyxLQUFLLEVBQUUsVUFBVTtRQUNqQkMsT0FBTyxFQUFFLFlBQVk7UUFDckJDLFdBQVcsRUFBRSxnQkFBZ0I7S0FDOUI7SUFDRDtRQUNFSixFQUFFLEVBQUUsQ0FBQztRQUNMQyxLQUFLLEVBQ0gsK1BBQStQO1FBQ2pRQyxLQUFLLEVBQUUsU0FBUztRQUNoQkMsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQkMsV0FBVyxFQUFFLGtCQUFrQjtLQUNoQztDQUNGOztBQUVjLFNBQVNDLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO0lBQ3JDLHFCQUNFOzswQkFDRSw4REFBQ0MsSUFBRTswQkFBQyxTQUFPOzs7OztvQkFBSzswQkFDaEIsOERBQUNULHNFQUFVO2dCQUFDVSxPQUFPLEVBQUVGLEtBQUssQ0FBQ0UsT0FBTzs7Ozs7b0JBQWU7O29CQUNoRCxDQUNIO0FBQ0osQ0FBQztBQVB1QkgsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly90aC5iaW5nLmNvbS90aC9pZC9SLjcyOWIyYTYxMmExZmMyYTk4Y2U3NTFhNTU3NDgxMWU3P3Jpaz1tdVFnMGZFa0hHNXNDZyZyaXU9aHR0cCUzYSUyZiUyZnd3dy5waXhlbHN0YWxrLm5ldCUyZndwLWNvbnRlbnQlMmZ1cGxvYWRzJTJmMjAxNiUyZjA1JTJmSEQtTmV3LVlvcmstQ2l0eS1XYWxscGFwZXIuanBnJmVoaz1FdjdrbVRjdSUyYkRLSzc2Mm5YV3NYdXFYVG0yTnlUNGdudnBjZ2FHek0xbXMlM2QmcmlzbD0mcGlkPUltZ1JhdyZyPTBcIixcclxuICAgIHRpdGxlOiBcIk5ldyBZb3JrXCIsXHJcbiAgICBhZGRyZXNzOiBcIlJpZ2h0IGhlcmVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSB0ZXN0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vdGguYmluZy5jb20vdGgvaWQvUi5hMzhhZmI4ZDg5MWE5NWM1MWM2Nzc5N2Q3NTJjNjJhOT9yaWs9V1pmMFJab0dnRE1jS2cmcml1PWh0dHAlM2ElMmYlMmZ0YWdnbWFnYXppbmUuY29tJTJmd3AtY29udGVudCUyZnVwbG9hZHMlMmYyMDEzJTJmMDclMmZNYWRpc29uV2lzY29uc2luLWltYWdlLmpwZyZlaGs9TU5aUVFIaVolMmZZWjQxNEpUMlBXVWh1QXVCUDg0OSUyZkdGRkM1UEIxWVVYRTglM2QmcmlzbD0mcGlkPUltZ1JhdyZyPTBcIixcclxuICAgIHRpdGxlOiBcIk1hZGlzb25cIixcclxuICAgIGFkZHJlc3M6IFwiSSBtaXNzIFdpc2NvbnNpblwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHRlc3QgMlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWV0VXBzKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT5NZWV0VXBzPC9oMT5cclxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30+PC9NZWV0dXBMaXN0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLyogZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcmVxPSBjb250ZXh0LnJlcVxyXG4gIGNvbnN0IHJlcz0gY29udGV4dC5yZXNcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xyXG4gICAgfSxcclxuICB9O1xyXG59ICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9wZWRybzpwZWRyb21lbmRvemFAY2x1c3RlcjAuZDFicGsubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwXCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gKGF3YWl0IGNsaWVudCkuZGIoXCJEQjFcIik7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcz0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTWVldHVwTGlzdCIsIkRVTU1ZX01FRVRVUFMiLCJpZCIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJNZWV0VXBzIiwicHJvcHMiLCJoMSIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});