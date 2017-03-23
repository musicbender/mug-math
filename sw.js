var serviceWorkerOption = {
  "assets": [
    "/app.js",
    "/vendor.js"
  ]
};
        
        /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/MzY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// we'll version our cache (and learn how to delete caches in\n// some other post)\nvar assets = global.serviceWorkerOption.assets;\n\n\nvar cacheName = 'v1::static';\n\nself.addEventListener('install', function (e) {\n  // once the SW is installed, go ahead and fetch the resources\n  // to make this work offline\n  e.waitUntil(caches.open(cacheName).then(function (cache) {\n    return cache.addAll([].concat(_toConsumableArray(assets), ['/'])).then(function () {\n      return self.skipWaiting();\n    });\n  }));\n});\n\n// when the browser fetches a url, either response with\n// the cached object or go ahead and fetch the actual url\nself.addEventListener('fetch', function (event) {\n  event.respondWith(\n  // ensure we check the *right* cache to match against\n  caches.open(cacheName).then(function (cache) {\n    return cache.match(event.request).then(function (res) {\n      return res || fetch(event.request);\n    });\n  }));\n});\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc3cuanM/YWE1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB3ZSdsbCB2ZXJzaW9uIG91ciBjYWNoZSAoYW5kIGxlYXJuIGhvdyB0byBkZWxldGUgY2FjaGVzIGluXG4vLyBzb21lIG90aGVyIHBvc3QpXG5jb25zdCB7XG4gIGFzc2V0cyxcbn0gPSBnbG9iYWwuc2VydmljZVdvcmtlck9wdGlvbjtcblxuY29uc3QgY2FjaGVOYW1lID0gJ3YxOjpzdGF0aWMnO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBlID0+IHtcbiAgLy8gb25jZSB0aGUgU1cgaXMgaW5zdGFsbGVkLCBnbyBhaGVhZCBhbmQgZmV0Y2ggdGhlIHJlc291cmNlc1xuICAvLyB0byBtYWtlIHRoaXMgd29yayBvZmZsaW5lXG4gIGUud2FpdFVudGlsKFxuICAgIGNhY2hlcy5vcGVuKGNhY2hlTmFtZSkudGhlbihjYWNoZSA9PiB7XG4gICAgICByZXR1cm4gY2FjaGUuYWRkQWxsKFtcbiAgICAgICAgLi4uYXNzZXRzLFxuICAgICAgICAnLydcbiAgICAgIF0pLnRoZW4oKCkgPT4gc2VsZi5za2lwV2FpdGluZygpKTtcbiAgICB9KVxuICApO1xufSk7XG5cbi8vIHdoZW4gdGhlIGJyb3dzZXIgZmV0Y2hlcyBhIHVybCwgZWl0aGVyIHJlc3BvbnNlIHdpdGhcbi8vIHRoZSBjYWNoZWQgb2JqZWN0IG9yIGdvIGFoZWFkIGFuZCBmZXRjaCB0aGUgYWN0dWFsIHVybFxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGV2ZW50ID0+IHtcbiAgZXZlbnQucmVzcG9uZFdpdGgoXG4gICAgLy8gZW5zdXJlIHdlIGNoZWNrIHRoZSAqcmlnaHQqIGNhY2hlIHRvIG1hdGNoIGFnYWluc3RcbiAgICBjYWNoZXMub3BlbihjYWNoZU5hbWUpLnRoZW4oY2FjaGUgPT4ge1xuICAgICAgcmV0dXJuIGNhY2hlLm1hdGNoKGV2ZW50LnJlcXVlc3QpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcyB8fCBmZXRjaChldmVudC5yZXF1ZXN0KVxuICAgICAgfSk7XG4gICAgfSlcbiAgKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdy5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);