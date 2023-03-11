"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_partials_CardImage_js";
exports.ids = ["components_partials_CardImage_js"];
exports.modules = {

/***/ "./components/partials/CardImage.js":
/*!******************************************!*\
  !*** ./components/partials/CardImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ImageLoader */ \"./components/ImageLoader.js\");\n/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ \"react-bootstrap/OverlayTrigger\");\n/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Tooltip */ \"react-bootstrap/Tooltip\");\n/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst CardImage = ({ horizontal , images , href , badges , wishlistButton , light  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-img-top card-img-hover d-flex\",\n        children: [\n            horizontal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                src: images[0][0],\n                alt: images[0][1],\n                layout: \"fill\",\n                objectFit: \"cover\",\n                quality: 100,\n                light: light ? 1 : 0\n            }, void 0, false, {\n                fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                lineNumber: 10,\n                columnNumber: 21\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                src: images[0][0],\n                width: images[0][1],\n                height: images[0][2],\n                alt: images[0][3],\n                light: light ? 1 : 0\n            }, void 0, false, {\n                fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                lineNumber: 17,\n                columnNumber: 12\n            }, undefined),\n            href ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: href,\n                className: \"img-overlay\"\n            }, void 0, false, {\n                fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                lineNumber: 24,\n                columnNumber: 15\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"img-overlay\"\n            }, void 0, false, {\n                fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                lineNumber: 24,\n                columnNumber: 67\n            }, undefined),\n            badges && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"position-absolute start-0 top-0 pt-3 ps-3\",\n                children: badges.map((badge, indx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: `d-table badge bg-${badge[0]} mb-1`,\n                        children: badge[1]\n                    }, indx, false, {\n                        fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                        lineNumber: 27,\n                        columnNumber: 18\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                lineNumber: 25,\n                columnNumber: 18\n            }, undefined),\n            wishlistButton && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `${wishlistButton.active ? \"position-absolute zindex-5\" : \"content-overlay\"} end-0 top-0 pt-3 pe-3`,\n                children: wishlistButton.tooltip ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    placement: \"left\",\n                    overlay: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        children: wishlistButton.tooltip\n                    }, void 0, false, void 0, void 0),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        ...wishlistButton.props,\n                        type: \"button\",\n                        className: \"btn btn-icon btn-light btn-xs text-primary rounded-circle\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: wishlistButton.active ? \"fi-heart-filled\" : \"fi-heart\"\n                        }, void 0, false, {\n                            fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                    lineNumber: 31,\n                    columnNumber: 35\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    ...wishlistButton.props,\n                    type: \"button\",\n                    className: \"btn btn-icon btn-light btn-xs text-primary rounded-circle\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: wishlistButton.active ? \"fi-heart-filled\" : \"fi-heart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                    lineNumber: 42,\n                    columnNumber: 29\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n                lineNumber: 30,\n                columnNumber: 26\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/david/Documents/workspace_2023/medicalblvd/medicalblvd_real/components/partials/CardImage.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardImage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhcnRpYWxzL0NhcmRJbWFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDWTtBQUNtQjtBQUNkO0FBRTdDLE1BQU1JLFlBQVksQ0FBQyxFQUFFQyxXQUFVLEVBQUVDLE9BQU0sRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQUVDLGVBQWMsRUFBRUMsTUFBSyxFQUFFLEdBQUs7SUFFakYscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7O1lBQ1pQLDJCQUFhLDhEQUFDSixvREFBV0E7Z0JBQ3hCWSxLQUFLUCxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2pCUSxLQUFLUixNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2pCUyxRQUFPO2dCQUNQQyxXQUFVO2dCQUNWQyxTQUFTO2dCQUNUUCxPQUFPQSxRQUFRLElBQUksQ0FBQzs7Ozs7MENBQ2pCLDhEQUFDVCxvREFBV0E7Z0JBQ2ZZLEtBQUtQLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDakJZLE9BQU9aLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDbkJhLFFBQVFiLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDcEJRLEtBQUtSLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDakJJLE9BQU9BLFFBQVEsSUFBSSxDQUFDOzs7Ozt5QkFDcEI7WUFDREgscUJBQU8sOERBQUNQLGtEQUFJQTtnQkFBQ08sTUFBTUE7Z0JBQU1LLFdBQVU7Ozs7OzBDQUF3Qiw4REFBQ1E7Z0JBQUtSLFdBQVU7Ozs7O3lCQUFxQjtZQUNoR0osd0JBQVUsOERBQUNHO2dCQUFJQyxXQUFVOzBCQUN2QkosT0FBT2EsR0FBRyxDQUFDLENBQUNDLE9BQU9DLE9BQVM7b0JBQzNCLHFCQUFPLDhEQUFDSDt3QkFBZ0JSLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRVUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0NBQUdBLEtBQUssQ0FBQyxFQUFFO3VCQUEvREM7Ozs7O2dCQUNwQjs7Ozs7O1lBRURkLGdDQUFrQiw4REFBQ0U7Z0JBQUlDLFdBQVcsQ0FBQyxFQUFFSCxlQUFlZSxNQUFNLEdBQUcsK0JBQStCLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDOzBCQUNuSWYsZUFBZWdCLE9BQU8saUJBQUcsOERBQUN2Qix1RUFBY0E7b0JBQ3ZDd0IsV0FBVTtvQkFDVkMsdUJBQVMsOERBQUN4QixnRUFBT0E7a0NBQUVNLGVBQWVnQixPQUFPOzs4QkFFekMsNEVBQUNHO3dCQUNFLEdBQUduQixlQUFlb0IsS0FBSzt3QkFDeEJDLE1BQUs7d0JBQ0xsQixXQUFVO2tDQUVWLDRFQUFDbUI7NEJBQUVuQixXQUFXSCxlQUFlZSxNQUFNLEdBQUcsb0JBQW9CLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FFcEQsOERBQUNJO29CQUNsQixHQUFHbkIsZUFBZW9CLEtBQUs7b0JBQ3hCQyxNQUFLO29CQUNMbEIsV0FBVTs4QkFFViw0RUFBQ21CO3dCQUFFbkIsV0FBV0gsZUFBZWUsTUFBTSxHQUFHLG9CQUFvQixVQUFVOzs7Ozs7Ozs7OzZCQUM3RDs7Ozs7Ozs7Ozs7O0FBSWpCO0FBRUEsaUVBQWVwQixTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluZGVyLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9DYXJkSW1hZ2UuanM/MDc0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSAnLi4vSW1hZ2VMb2FkZXInXG5pbXBvcnQgT3ZlcmxheVRyaWdnZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL092ZXJsYXlUcmlnZ2VyJ1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Rvb2x0aXAnXG5cbmNvbnN0IENhcmRJbWFnZSA9ICh7IGhvcml6b250YWwsIGltYWdlcywgaHJlZiwgYmFkZ2VzLCB3aXNobGlzdEJ1dHRvbiwgbGlnaHQgfSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCBjYXJkLWltZy1ob3ZlciBkLWZsZXgnPlxuICAgICAge2hvcml6b250YWwgPyA8SW1hZ2VMb2FkZXJcbiAgICAgICAgc3JjPXtpbWFnZXNbMF1bMF19XG4gICAgICAgIGFsdD17aW1hZ2VzWzBdWzFdfVxuICAgICAgICBsYXlvdXQ9J2ZpbGwnXG4gICAgICAgIG9iamVjdEZpdD0nY292ZXInXG4gICAgICAgIHF1YWxpdHk9ezEwMH1cbiAgICAgICAgbGlnaHQ9e2xpZ2h0ID8gMSA6IDB9XG4gICAgICAvPiA6IDxJbWFnZUxvYWRlclxuICAgICAgICBzcmM9e2ltYWdlc1swXVswXX1cbiAgICAgICAgd2lkdGg9e2ltYWdlc1swXVsxXX1cbiAgICAgICAgaGVpZ2h0PXtpbWFnZXNbMF1bMl19XG4gICAgICAgIGFsdD17aW1hZ2VzWzBdWzNdfVxuICAgICAgICBsaWdodD17bGlnaHQgPyAxIDogMH1cbiAgICAgIC8+fVxuICAgICAge2hyZWYgPyA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9J2ltZy1vdmVybGF5Jz48L0xpbms+IDogPHNwYW4gY2xhc3NOYW1lPSdpbWctb3ZlcmxheSc+PC9zcGFuPn1cbiAgICAgIHtiYWRnZXMgJiYgPGRpdiBjbGFzc05hbWU9J3Bvc2l0aW9uLWFic29sdXRlIHN0YXJ0LTAgdG9wLTAgcHQtMyBwcy0zJz5cbiAgICAgICAge2JhZGdlcy5tYXAoKGJhZGdlLCBpbmR4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5keH0gY2xhc3NOYW1lPXtgZC10YWJsZSBiYWRnZSBiZy0ke2JhZGdlWzBdfSBtYi0xYH0+e2JhZGdlWzFdfTwvc3Bhbj5cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj59XG4gICAgICB7d2lzaGxpc3RCdXR0b24gJiYgPGRpdiBjbGFzc05hbWU9e2Ake3dpc2hsaXN0QnV0dG9uLmFjdGl2ZSA/ICdwb3NpdGlvbi1hYnNvbHV0ZSB6aW5kZXgtNScgOiAnY29udGVudC1vdmVybGF5J30gZW5kLTAgdG9wLTAgcHQtMyBwZS0zYH0+XG4gICAgICAgIHt3aXNobGlzdEJ1dHRvbi50b29sdGlwID8gPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgcGxhY2VtZW50PSdsZWZ0J1xuICAgICAgICAgIG92ZXJsYXk9ezxUb29sdGlwPnt3aXNobGlzdEJ1dHRvbi50b29sdGlwfTwvVG9vbHRpcD59XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB7Li4ud2lzaGxpc3RCdXR0b24ucHJvcHN9XG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4taWNvbiBidG4tbGlnaHQgYnRuLXhzIHRleHQtcHJpbWFyeSByb3VuZGVkLWNpcmNsZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e3dpc2hsaXN0QnV0dG9uLmFjdGl2ZSA/ICdmaS1oZWFydC1maWxsZWQnIDogJ2ZpLWhlYXJ0J30+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPiA6IDxidXR0b25cbiAgICAgICAgICB7Li4ud2lzaGxpc3RCdXR0b24ucHJvcHN9XG4gICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1pY29uIGJ0bi1saWdodCBidG4teHMgdGV4dC1wcmltYXJ5IHJvdW5kZWQtY2lyY2xlJ1xuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXt3aXNobGlzdEJ1dHRvbi5hY3RpdmUgPyAnZmktaGVhcnQtZmlsbGVkJyA6ICdmaS1oZWFydCd9PjwvaT5cbiAgICAgICAgPC9idXR0b24+fVxuICAgICAgPC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRJbWFnZVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZUxvYWRlciIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIkNhcmRJbWFnZSIsImhvcml6b250YWwiLCJpbWFnZXMiLCJocmVmIiwiYmFkZ2VzIiwid2lzaGxpc3RCdXR0b24iLCJsaWdodCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsInF1YWxpdHkiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iLCJtYXAiLCJiYWRnZSIsImluZHgiLCJhY3RpdmUiLCJ0b29sdGlwIiwicGxhY2VtZW50Iiwib3ZlcmxheSIsImJ1dHRvbiIsInByb3BzIiwidHlwZSIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/partials/CardImage.js\n");

/***/ })

};
;