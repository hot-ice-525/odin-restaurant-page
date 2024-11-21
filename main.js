/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeCreator: () => (/* binding */ homeCreator)\n/* harmony export */ });\n/* harmony import */ var _images_interior_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/interior.jpg */ \"./images/interior.jpg\");\n\n\nfunction homeCreator() {\n  const content = document.querySelector(\"#content\");\n\n  const title = document.createElement(\"h1\");\n  title.innerText = \"Welcome to our restaurant\";\n  content.appendChild(title);\n  \n  const image = document.createElement(\"img\");\n  image.setAttribute(\"src\", _images_interior_jpg__WEBPACK_IMPORTED_MODULE_0__);\n  content.appendChild(image);\n  \n  const description = document.createElement(\"p\");\n  description.innerHTML = \"Our restaurant is the ulimate place for all your hunger needs,<br>just wanna grab a quick bite while you are on road? YOU ARE MOST WELCOME\";\n  content.appendChild(description);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4Qzs7QUFFdkM7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlEQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanM/N2I0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5kb29ySW1nIGZyb20gXCIuLi9pbWFnZXMvaW50ZXJpb3IuanBnXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVDcmVhdG9yKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIldlbGNvbWUgdG8gb3VyIHJlc3RhdXJhbnRcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIFxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbmRvb3JJbWcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiT3VyIHJlc3RhdXJhbnQgaXMgdGhlIHVsaW1hdGUgcGxhY2UgZm9yIGFsbCB5b3VyIGh1bmdlciBuZWVkcyw8YnI+anVzdCB3YW5uYSBncmFiIGEgcXVpY2sgYml0ZSB3aGlsZSB5b3UgYXJlIG9uIHJvYWQ/IFlPVSBBUkUgTU9TVCBXRUxDT01FXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-load.js */ \"./src/initial-load.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\nconsole.log(\"hello\");\n(0,_initial_load_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();\n\nconst content = document.querySelector(\"div#content\");\nconst home = document.querySelector(\".home\");\nconst menu = document.querySelector(\".menu\");\n\nhome.addEventListener(\"click\", () => {\n  content.innerHTML = \"\";\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeCreator)();\n});\n\nmenu.addEventListener(\"click\", () => {\n  content.innerHTML = \"\";\n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.displayMenu)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFtRDtBQUNHO0FBQ2Y7O0FBRXZDO0FBQ0EsaUVBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHFEQUFXO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxxREFBVztBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxQYWdlTG9hZCB9IGZyb20gXCIuL2luaXRpYWwtbG9hZC5qc1wiXG5pbXBvcnQgeyBob21lQ3JlYXRvciBhcyBkaXNwbGF5SG9tZSB9IGZyb20gXCIuL2hvbWUuanNcIlxuaW1wb3J0IHsgZGlzcGxheU1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCJcblxuY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbmluaXRpYWxQYWdlTG9hZCgpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBkaXNwbGF5SG9tZSgpO1xufSk7XG5cbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBkaXNwbGF5TWVudSgpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/initial-load.js":
/*!*****************************!*\
  !*** ./src/initial-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad)\n/* harmony export */ });\n/* harmony import */ var _images_interior_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/interior.jpg */ \"./images/interior.jpg\");\n\n\nfunction initialPageLoad() {\n  const navbar = document.querySelector(\"header > nav\");\n  const content = document.querySelector(\"div#content\");\n\n\n  // Add nav buttons\n  const homeBtn = document.createElement(\"button\");\n  homeBtn.innerText = \"Home\";\n  homeBtn.classList.add(\"home\");\n  navbar.appendChild(homeBtn);\n\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.innerText = \"Menu\";\n  menuBtn.classList.add(\"menu\");\n  navbar.appendChild(menuBtn);\n\n\n  // Add h1\n  const h1 = document.createElement(\"h1\")\n  h1.innerText = \"Welcome to our restaurant\";\n  content.appendChild(h1);\n\n  // Add image\n  const image = document.createElement(\"img\");\n  image.setAttribute(\"src\", _images_interior_jpg__WEBPACK_IMPORTED_MODULE_0__);\n  content.appendChild(image);\n\n  // Add description\n  const p = document.createElement(\"p\");\n  p.innerHTML = \"Our restaurant is the ulimate place for all your hunger needs,<br>just wanna grab a quick bite while you are on road? YOU ARE MOST WELCOME\";\n  content.appendChild(p);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5pdGlhbC1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlEOztBQUVqRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQVc7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwtbG9hZC5qcz9lZGMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnRlcmlvckltZyBmcm9tIFwiLi4vaW1hZ2VzL2ludGVyaW9yLmpwZ1wiO1xuXG5mdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgPiBuYXZcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cblxuICAvLyBBZGQgbmF2IGJ1dHRvbnNcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdG4uaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChob21lQnRuKTtcblxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ0bi5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG5cbiAgLy8gQWRkIGgxXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gIGgxLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byBvdXIgcmVzdGF1cmFudFwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGgxKTtcblxuICAvLyBBZGQgaW1hZ2VcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW50ZXJpb3JJbWcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAvLyBBZGQgZGVzY3JpcHRpb25cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwLmlubmVySFRNTCA9IFwiT3VyIHJlc3RhdXJhbnQgaXMgdGhlIHVsaW1hdGUgcGxhY2UgZm9yIGFsbCB5b3VyIGh1bmdlciBuZWVkcyw8YnI+anVzdCB3YW5uYSBncmFiIGEgcXVpY2sgYml0ZSB3aGlsZSB5b3UgYXJlIG9uIHJvYWQ/IFlPVSBBUkUgTU9TVCBXRUxDT01FXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocCk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxQYWdlTG9hZCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/initial-load.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu)\n/* harmony export */ });\n/* harmony import */ var _images_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menu.jpg */ \"./images/menu.jpg\");\n\n\nfunction displayMenu() {\n  const content = document.querySelector(\"#content\");\n\n  const heading = document.createElement(\"h1\");\n  heading.innerText = \"Menu\";\n  content.appendChild(heading);\n  \n  const image = document.createElement(\"img\");\n  image.setAttribute(\"src\", _images_menu_jpg__WEBPACK_IMPORTED_MODULE_0__);\n  content.appendChild(image);\n  \n  const info = document.createElement(\"p\");\n  info.innerHTML = \"<i>Custom orders also available</i>\";\n  content.appendChild(info);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3Qzs7QUFFakM7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZDQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVudUltZyBmcm9tIFwiLi4vaW1hZ2VzL21lbnUuanBnXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIFxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBtZW51SW1nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIFxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm8uaW5uZXJIVE1MID0gXCI8aT5DdXN0b20gb3JkZXJzIGFsc28gYXZhaWxhYmxlPC9pPlwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGluZm8pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./images/interior.jpg":
/*!*****************************!*\
  !*** ./images/interior.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82742923ad5808874e61.jpg";

/***/ }),

/***/ "./images/menu.jpg":
/*!*************************!*\
  !*** ./images/menu.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5de99914a59ea3e0c090.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;