/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmartinfuglset%2FDev%2Fportfolio%2Fpages%2Findex.js&page=%2F!":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmartinfuglset%2FDev%2Fportfolio%2Fpages%2Findex.js&page=%2F! ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRm1hcnRpbmZ1Z2xzZXQlMkZEZXYlMkZwb3J0Zm9saW8lMkZwYWdlcyUyRmluZGV4LmpzJnBhZ2U9JTJGIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBDQUFrQjtBQUN6QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/NjFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmartinfuglset%2FDev%2Fportfolio%2Fpages%2Findex.js&page=%2F!\n"));

/***/ }),

/***/ "./components/Box.js":
/*!***************************!*\
  !*** ./components/Box.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Box = function(param) {\n    var num = param.num;\n    var categories = [\n        {\n            label: \"Projects\",\n            line1: \"Housing price analysis\",\n            line2: \"NLP image generation\",\n            line3: \"Monte Carlo simulation\",\n            dots: \"...\"\n        },\n        {\n            label: \"Abilities\",\n            line1: \"Python\",\n            line2: \"JavaScript\",\n            line3: \"R\",\n            dots: \"...\"\n        },\n        {\n            label: \"CV\",\n            line1: \"View\",\n            dots: \"\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/\" + categories[num].label.toLowerCase(),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"box-content h-32 w-80 border-t py-2 border-[#181818] dark:border-[#EFEFEF] hover:cursor-pointer\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"flex justify-between hover:underline\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: categories[num].label\n                        }, void 0, false, {\n                            fileName: \"/Users/martinfuglset/Dev/portfolio/components/Box.js\",\n                            lineNumber: 16,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/martinfuglset/Dev/portfolio/components/Box.js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"text-right\",\n                        children: [\n                            categories[num].line1,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/martinfuglset/Dev/portfolio/components/Box.js\",\n                                lineNumber: 19,\n                                columnNumber: 48\n                            }, _this),\n                            categories[num].line2,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/martinfuglset/Dev/portfolio/components/Box.js\",\n                                lineNumber: 20,\n                                columnNumber: 48\n                            }, _this),\n                            categories[num].line3,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/martinfuglset/Dev/portfolio/components/Box.js\",\n                                lineNumber: 21,\n                                columnNumber: 48\n                            }, _this),\n                            categories[num].dots\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/martinfuglset/Dev/portfolio/components/Box.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/martinfuglset/Dev/portfolio/components/Box.js\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/martinfuglset/Dev/portfolio/components/Box.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/martinfuglset/Dev/portfolio/components/Box.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, _this);\n};\n_c = Box;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Box);\nvar _c;\n$RefreshReg$(_c, \"Box\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JveC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUE0QjtBQUU1QixJQUFNQyxHQUFHLEdBQUcsZ0JBQWE7UUFBVkMsR0FBRyxTQUFIQSxHQUFHO0lBRWQsSUFBTUMsVUFBVSxHQUFHO1FBQ2Y7WUFBRUMsS0FBSyxFQUFFLFVBQVU7WUFBRUMsS0FBSyxFQUFFLHdCQUF3QjtZQUFFQyxLQUFLLEVBQUUsc0JBQXNCO1lBQUVDLEtBQUssRUFBRSx3QkFBd0I7WUFBRUMsSUFBSSxFQUFFLEtBQUs7U0FBQztRQUNsSTtZQUFFSixLQUFLLEVBQUUsV0FBVztZQUFFQyxLQUFLLEVBQUUsUUFBUTtZQUFFQyxLQUFLLEVBQUUsWUFBWTtZQUFFQyxLQUFLLEVBQUUsR0FBRztZQUFFQyxJQUFJLEVBQUUsS0FBSztTQUFDO1FBQ3BGO1lBQUVKLEtBQUssRUFBRSxJQUFJO1lBQUVDLEtBQUssRUFBRSxNQUFNO1lBQUVHLElBQUksRUFBRSxFQUFFO1NBQUM7S0FDMUM7SUFFRCxxQkFDSSw4REFBQ1Isa0RBQUk7UUFBQ1MsSUFBSSxFQUFFLEdBQUcsR0FBQ04sVUFBVSxDQUFDRCxHQUFHLENBQUMsQ0FBQ0UsS0FBSyxDQUFDTSxXQUFXLEVBQUU7a0JBQy9DLDRFQUFDQyxLQUFHO1lBQUNDLEtBQUssRUFBQyxpR0FBaUc7c0JBQ3hHLDRFQUFDRCxLQUFHO2dCQUFDQyxLQUFLLEVBQUMsc0NBQXNDOztrQ0FDN0MsOERBQUNELEtBQUc7a0NBQ0EsNEVBQUNFLEdBQUM7c0NBQUVWLFVBQVUsQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLEtBQUs7Ozs7O2lDQUFLOzs7Ozs2QkFDNUI7a0NBQ04sOERBQUNPLEtBQUc7d0JBQUNDLEtBQUssRUFBQyxZQUFZOzs0QkFDbEJULFVBQVUsQ0FBQ0QsR0FBRyxDQUFDLENBQUNHLEtBQUs7MENBQUMsOERBQUNTLElBQUU7Ozs7cUNBQU07NEJBQy9CWCxVQUFVLENBQUNELEdBQUcsQ0FBQyxDQUFDSSxLQUFLOzBDQUFDLDhEQUFDUSxJQUFFOzs7O3FDQUFNOzRCQUMvQlgsVUFBVSxDQUFDRCxHQUFHLENBQUMsQ0FBQ0ssS0FBSzswQ0FBQyw4REFBQ08sSUFBRTs7OztxQ0FBTTs0QkFDL0JYLFVBQVUsQ0FBQ0QsR0FBRyxDQUFDLENBQUNNLElBQUk7Ozs7Ozs2QkFDbkI7Ozs7OztxQkFDSjs7Ozs7aUJBQ0o7Ozs7O2FBQ0gsQ0FDVjtDQUNGO0FBekJHUCxLQUFBQSxHQUFHO0FBMkJQLCtEQUFlQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm94LmpzPzQyYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IEJveCA9ICh7IG51bSB9KSA9PiB7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gW1xuICAgICAgICB7IGxhYmVsOiAnUHJvamVjdHMnLCBsaW5lMTogJ0hvdXNpbmcgcHJpY2UgYW5hbHlzaXMnLCBsaW5lMjogJ05MUCBpbWFnZSBnZW5lcmF0aW9uJywgbGluZTM6ICdNb250ZSBDYXJsbyBzaW11bGF0aW9uJywgZG90czogJy4uLid9LFxuICAgICAgICB7IGxhYmVsOiAnQWJpbGl0aWVzJywgbGluZTE6ICdQeXRob24nLCBsaW5lMjogJ0phdmFTY3JpcHQnLCBsaW5lMzogJ1InLCBkb3RzOiAnLi4uJ30sXG4gICAgICAgIHsgbGFiZWw6ICdDVicsIGxpbmUxOiAnVmlldycsIGRvdHM6ICcnfSxcbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtcIi9cIitjYXRlZ29yaWVzW251bV0ubGFiZWwudG9Mb3dlckNhc2UoKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWNvbnRlbnQgaC0zMiB3LTgwIGJvcmRlci10IHB5LTIgYm9yZGVyLVsjMTgxODE4XSBkYXJrOmJvcmRlci1bI0VGRUZFRl0gaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57Y2F0ZWdvcmllc1tudW1dLmxhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllc1tudW1dLmxpbmUxfTxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXNbbnVtXS5saW5lMn08YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzW251bV0ubGluZTN9PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllc1tudW1dLmRvdHN9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEJveCJdLCJuYW1lcyI6WyJMaW5rIiwiQm94IiwibnVtIiwiY2F0ZWdvcmllcyIsImxhYmVsIiwibGluZTEiLCJsaW5lMiIsImxpbmUzIiwiZG90cyIsImhyZWYiLCJ0b0xvd2VyQ2FzZSIsImRpdiIsImNsYXNzIiwiYSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Box.js\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Box */ \"./components/Box.js\");\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-7xl leading-loose\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/Users/martinfuglset/Dev/portfolio/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"h-28\"\n            }, void 0, false, {\n                fileName: \"/Users/martinfuglset/Dev/portfolio/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                num: 0\n            }, void 0, false, {\n                fileName: \"/Users/martinfuglset/Dev/portfolio/pages/index.js\",\n                lineNumber: 10,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                num: 1\n            }, void 0, false, {\n                fileName: \"/Users/martinfuglset/Dev/portfolio/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                num: 2\n            }, void 0, false, {\n                fileName: \"/Users/martinfuglset/Dev/portfolio/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/martinfuglset/Dev/portfolio/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 7\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBbUM7QUFFcEIsU0FBU0MsSUFBSSxHQUFHO0lBQzdCLHFCQUNJLDhEQUFDQyxNQUFJOzswQkFDRCw4REFBQ0MsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLHdCQUF3QjswQkFBQyxXQUV2Qzs7Ozs7b0JBQUs7MEJBQ0wsOERBQUNDLEtBQUc7Z0JBQUNDLEtBQUssRUFBQyxNQUFNOzs7OztvQkFBTzswQkFDeEIsOERBQUNOLHVEQUFHO2dCQUFDTyxHQUFHLEVBQUUsQ0FBQzs7Ozs7b0JBQUc7MEJBQ2QsOERBQUNQLHVEQUFHO2dCQUFDTyxHQUFHLEVBQUUsQ0FBQzs7Ozs7b0JBQUc7MEJBQ2QsOERBQUNQLHVEQUFHO2dCQUFDTyxHQUFHLEVBQUUsQ0FBQzs7Ozs7b0JBQUc7Ozs7OztZQUNULENBQ1o7Q0FDRjtBQVp1Qk4sS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9Cb3gnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC03eGwgbGVhZGluZy1sb29zZVwiPlxuICAgICAgICAgICAgUG9ydGZvbGlvXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC0yOFwiPjwvZGl2PlxuICAgICAgICAgIDxCb3ggbnVtPXswfS8+XG4gICAgICAgICAgPEJveCBudW09ezF9Lz5cbiAgICAgICAgICA8Qm94IG51bT17Mn0vPlxuICAgICAgICA8L21haW4+XG4gIClcbn0iXSwibmFtZXMiOlsiQm94IiwiSG9tZSIsIm1haW4iLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsImNsYXNzIiwibnVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmartinfuglset%2FDev%2Fportfolio%2Fpages%2Findex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);