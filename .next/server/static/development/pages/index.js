module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const linkStyle = {
  marginRight: 15
};

const Header = () => // <div>
//   <Link href="/">
//     <a style={linkStyle}>Home</a>
//   </Link>
//   <Link href="/about">
//     <a style={linkStyle}>About</a>
//   </Link>
//   <Link href="/form_builder">
//     <a style={linkStyle}>Form Builder</a>
//   </Link>
// </div>
__jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
  className: "jsx-3137789357" + " " + "navbar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("span", {
  id: "js-navbar-toggle",
  className: "jsx-3137789357" + " " + "navbar-toggle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-3137789357" + " " + "fas fa-bars",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
})), __jsx("a", {
  href: "#",
  className: "jsx-3137789357" + " " + "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "logo"), __jsx("ul", {
  id: "js-menu",
  className: "jsx-3137789357" + " " + "main-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "HOME"))), __jsx("li", {
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "ABOUT"))), __jsx("li", {
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/form_builder",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "FORM BUILDER"))), __jsx("li", {
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "PRICING"))), __jsx("li", {
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "GLOSSARY"))), __jsx("li", {
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "FREE/BASIC FORMS")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/login",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-3137789357",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "LOGIN"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3137789357",
  __self: undefined
}, "*.jsx-3137789357{box-sizing:border-box;padding:0;margin:0;}body.jsx-3137789357{font-family:'Josefin Sans',sans-serif;}.navbar.jsx-3137789357{font-size:18px;padding-bottom:10px;}.main-nav.jsx-3137789357{list-style-type:none;display:none;}.nav-links.jsx-3137789357,.logo.jsx-3137789357{-webkit-text-decoration:none;text-decoration:none;color:white;}.main-nav.jsx-3137789357 li.jsx-3137789357{text-align:center;margin:15px auto;}.logo.jsx-3137789357{display:inline-block;font-size:22px;margin-top:10px;margin-left:20px;}.navbar-toggle.jsx-3137789357{position:absolute;top:10px;right:20px;cursor:pointer;color:black font-size:24px;}.active.jsx-3137789357{display:block;}@media screen and (min-width:768px){.navbar.jsx-3137789357{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:0;height:70px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.main-nav.jsx-3137789357{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:30px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.main-nav.jsx-3137789357 li.jsx-3137789357{margin:0;}.nav-links.jsx-3137789357{margin-left:40px;}.logo.jsx-3137789357{margin-top:0;}.navbar-toggle.jsx-3137789357{display:none;}.logo.jsx-3137789357:hover,.nav-links.jsx-3137789357:hover{color:rgba(255,255,255,1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFWSxBQUdtQyxBQU1pQixBQUl4QixBQUtNLEFBTUEsQUFLSCxBQUtHLEFBT0gsQUFTSixBQUtHLEFBUUEsQUFPSixBQUlRLEFBSUosQUFJQSxBQUtnQixTQWhCakMsSUFRQSxBQUlBLENBaENKLENBckN3QixFQTZEcEIsQ0E3Q2lCLEFBWVIsR0F2QkksQUFnQkUsQ0EvQkwsSUFvRlYsQ0E3Q1csS0F0Q0YsRUFlYixDQUxBLEFBZ0JBLENBS29CLEVBMUJwQixBQWtDbUIsR0F0Q25CLFNBb0JELEVBV3NCLENBU0YsU0FwQm5CLE9BWUEsS0FrQnNDLEFBUVosTUFqQjFCLFlBa0IyQixxRUFDTSw0QkFUUixpQkFDTCxZQUNPLHdDQVF2QixxREFQQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL3RheWxvclBhc3FMTEMvcGFzZW9uL3Bhc2Vvbi9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDE1LFxuXG59O1xuXG5cblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAvLyA8ZGl2PlxuICAvLyAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gIC8vICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Ib21lPC9hPlxuICAvLyAgIDwvTGluaz5cbiAgLy8gICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gIC8vICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cbiAgLy8gICA8L0xpbms+XG4gIC8vICAgPExpbmsgaHJlZj1cIi9mb3JtX2J1aWxkZXJcIj5cbiAgLy8gICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkZvcm0gQnVpbGRlcjwvYT5cbiAgLy8gICA8L0xpbms+XG4gIC8vIDwvZGl2PlxuPD5cbjxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG48c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgaWQ9XCJqcy1uYXZiYXItdG9nZ2xlXCI+XG4gICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIj48L2k+XG48L3NwYW4+XG48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxvZ29cIj5sb2dvPC9hPlxuPHVsIGNsYXNzTmFtZT1cIm1haW4tbmF2XCIgaWQ9XCJqcy1tZW51XCI+XG4gICAgPGxpPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5IT01FPC9hPlxuICAgIDwvTGluaz4gICAgXG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFCT1VUPC9hPlxuICAgICAgPC9MaW5rPiAgICBcbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvZm9ybV9idWlsZGVyXCI+XG4gICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkZPUk0gQlVJTERFUjwvYT5cbiAgICAgIDwvTGluaz4gICAgXG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PlBSSUNJTkc8L2E+XG4gICAgPC9MaW5rPiAgICBcbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+R0xPU1NBUlk8L2E+XG4gICAgPC9MaW5rPiAgICBcbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+RlJFRS9CQVNJQyBGT1JNUzwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+TE9HSU48L2E+XG4gICAgPC9MaW5rPiAgICAgXG4gICAgPC9saT5cblxuPC91bD5cbjwvbmF2PlxuPHN0eWxlIGpzeD57YFxuKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmJhciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLW5hdiB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1saW5rcyxcbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi1uYXYgbGkge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2YmFyLXRvZ2dsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiBibGFja1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAubmF2YmFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1haW4tbmF2IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYWluLW5hdiBsaSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2LWxpbmtzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZiYXItdG9nZ2xlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubG9nbzpob3ZlcixcbiAgICAgICAgICAgIC5uYXYtbGlua3M6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5gfTwvc3R5bGU+XG48Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/components/Header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/components/MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD',
// };

const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Index() {
  function initDivMouseOver() {
    var div = document.getElementById("mydiv");
    div.mouseIsOver = false;

    div.onmouseover = function () {
      this.mouseIsOver = true;
    };

    div.onmouseout = function () {
      this.mouseIsOver = false;
    };

    div.onclick = function () {
      if (this.mouseIsOver) {
        console.log('here!');
      }
    };
  }

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    id: "mydiv",
    style: {
      width: '100%',
      height: '700px'
    },
    onMouseEnter: () => console.log('hi'),
    className: "jsx-2900018845" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'relative',
      margin: '50px 0 30px 30px',
      color: 'white',
      width: '40%',
      padding: '20px'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: "6em",
      margin: "0 0 10px 0"
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "PASEON"), __jsx("p", {
    style: {
      fontSize: '1.4em'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Easy, customizable, copy and past submission forms. We handle all the backend so you have time to focus on the important stuff."), __jsx("button", {
    className: "jsx-2900018845" + " " + "action-button white-btn ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "LEARN MORE")), __jsx("div", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 500 150",
    preserveAspectRatio: "none",
    style: {
      height: '100%',
      width: '100%'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("linearGradient", {
    id: "gradient",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%",
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("stop", {
    offset: "0%",
    style: {
      stopColor: "#f83600"
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("stop", {
    offset: "100%",
    style: {
      stopColor: "#f9d423"
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx("g", {
    fill: "url(#gradient)",
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("path", {
    d: " M0,120 C200,100 300,150 500,140 L500,0 L0,0 Z ",
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, " "))))), __jsx("div", {
    style: {
      width: '80%',
      marginLeft: '10%'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-container grid-container--fit ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "COPY IT"), __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Simply copy one of several prebuilt paseaon form tags ready to go with all the functionality to start capturing and sending the information you need.")), __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "PASTE IT"), __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Paste any Paseon form tag anywhere you need, no need to worry about writting your own backend code!  We've got you covered."))), __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-container grid-container--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "SEND IT"), __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Simple as that! you are ready to start recieving information.  Go ahead and submit a test, then check your inbox to see the results.")), __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "CUSTOMIZE IT"), __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "All prebuilt forms are customizeable to suit your stylistic needs! Have your own form you want to use?  No prblem, simly nest it in the Paseon personal form tags.  All the backend logic is still handled for you.")))), __jsx("div", {
    style: {
      marginTop: '200px',
      width: '70%',
      marginLeft: '15%',
      fontSize: '1.1em',
      lineHeight: '1.4em'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginTop: '320px',
      marginBottom: '300px',
      padding: '50px',
      backgroundColor: '#F1F1F1',
      textAlign: 'center',
      fontSize: '1.1em',
      lineHeight: '1.4em'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Paseon offers a suit a prebuilt forms, form building tools, and integegrations, to handle processing and sending form information to where you need it to go. Follow the steps below to see an example of our basic contact form.  "), __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, " To see other services, prebuilt forms or to learn how to use your own form that utilizes our backend to process and send information where you need it to go click the button below "), __jsx("button", {
    className: "jsx-2900018845" + " " + "action-button black-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "LEARN MORE")), __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-container grid-container--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Try a test submission! Add your email inbetween the quotes in the HTML below then fill out and submit the form."), __jsx("div", {
    style: {
      backgroundColor: '#F1F1F1',
      padding: '30px'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "paseon-contact-form "), "recipient_email=\"", __jsx("span", {
    style: {
      backgroundColor: '#dcdcdc',
      padding: '2px',
      borderRadius: '5px'
    },
    contentEditable: "true",
    onChange: () => console.log('hello'),
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "YOUR_EMAIL"), "\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, " >"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "paseon-contact-form"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, ">"), __jsx("br", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "script"), " src=\"https://MYCDN\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, ">"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "script"), "  ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, ">"))), __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "This will be sent to: "), __jsx("form", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("input", {
    name: "name",
    type: "text",
    placeholder: "Your Name",
    required: true // .value="${this.form_obj.name}"
    // @input="${(e) => this.handleSetInputValues(e)}" 
    ,
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx("input", {
    name: "from",
    type: "text",
    placeholder: "Your Email",
    required: true // .value="${this.form_obj.from}"
    // @input="${(e) => this.handleSetInputValues(e)}" 
    ,
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx("input", {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    required: true // .value="${this.form_obj.subject}"
    // @input="${(e) => this.handleSetInputValues(e)}" 
    ,
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx("textarea", {
    name: "body",
    rows: "4",
    cols: "50",
    placeholder: "Talk to me Goose...",
    required: true // .value="${this.form_obj.body}"
    // @input="${(e) => this.handleSetInputValues(e)}" 
    ,
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("input", {
    type: "submit",
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })))), __jsx("div", {
    style: {
      width: '60%',
      marginLeft: '20%',
      marginTop: '300px',
      fontSize: '1.1em',
      lineHeight: '1.4em'
    },
    className: "jsx-2900018845" + " " + "grid-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Step 1"), __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Copy the following html tags.  Make sure to switch the bolded information to match the email address where you would like the contact information to be sent."), __jsx("div", {
    style: {
      backgroundColor: '#DCDCDC',
      padding: '30px'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "paseon-contact-form "), "recipient_email=\"", __jsx("span", {
    style: {
      backgroundColor: '#dcdcdc',
      padding: '2px',
      borderRadius: '5px'
    },
    contentEditable: "true",
    onChange: () => console.log('hello'),
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "YOUR_EMAIL"), "\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, " >"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "paseon-contact-form"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, ">"), __jsx("br", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "script"), " src=\"https://MYCDN\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, ">"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "script"), "  ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, ">")), __jsx("p", {
    style: {
      fontSize: '.75em'
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Have a SPA and need an NPM install?", __jsx("br", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), "Ignore the script tag and paste the following into your root directory")), __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Step 2"), __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Paste the tags to wherever you need a contact form on your site! Our tags are supported by any CRM that will let you add custom HTML")), __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Step 3"), __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "At this point you are ready to start recieving emails from your form submissions! Go ahead and send yourself a test email through the contact form.  You may need check the spam folder, if the email ends up there mark it as 'Not Spam' and all future emails will go straight into your inbox.")), __jsx("div", {
    className: "jsx-2900018845" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Step 4"), __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Customize the labels, colors, and success message of your form by adding and editing the HTML attributes of the Paseon tags. "), __jsx("p", {
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "To see a list of options click the button below."), __jsx("button", {
    className: "jsx-2900018845" + " " + "action-button black-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Learn More")))), __jsx("div", {
    style: {
      margin: '200px 0 0 0',
      height: '300px',
      width: '100%',
      backgroundImage: "linear-gradient(to right, #f9d423 0%, #f83600 100%)"
    },
    className: "jsx-2900018845",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2900018845",
    __self: this
  }, "input[type=text].jsx-2900018845,select.jsx-2900018845,textarea.jsx-2900018845{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-2900018845{width:100%;color:white;background:rgb(2,0,36);padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-2900018845:hover{opacity:0.7;}.action-button.jsx-2900018845{background-color:Transparent;background-repeat:no-repeat;cursor:pointer;padding:20px;font-weight:heavy;overflow:hidden;outline:none;font-size:.75em;}.white-btn.jsx-2900018845{color:white;border:3px solid white;background:linear-gradient(to right,#fff 0%,#fff 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.black-btn.jsx-2900018845{color:black;border:3px solid black;background:linear-gradient(to right,#000 0%,#000 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.white-btn.jsx-2900018845:hover{background-position:0 0;color:black;}.black-btn.jsx-2900018845:hover{background-position:0 0;color:white;}.grid-container.jsx-2900018845{display:grid;}.grid-container--fill.jsx-2900018845{grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.grid-container--fit.jsx-2900018845{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));}.grid-element.jsx-2900018845{padding:50px;}.dark-background.jsx-2900018845{background-color:#36454f;color:#fff;border:1px solid #fff;}.header.jsx-2900018845{grid-area:header;}.innerContainer.jsx-2900018845{position:absolute;top:0;width:100%;}svg.jsx-2900018845{display:inline-block;position:absolute;top:0;left:0;z-index:-1;}.container.jsx-2900018845{display:inline-block;position:relative;width:100%;padding-bottom:100%;vertical-align:middle;overflow:hidden;}h1.jsx-2900018845,a.jsx-2900018845{font-family:'Arial';}ul.jsx-2900018845{padding:0;}li.jsx-2900018845{list-style:none;margin:5px 0;}a.jsx-2900018845{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2900018845:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBMa0IsQUFJc0IsQUFVQSxBQWFDLEFBT2lCLEFBWWpCLEFBU0EsQUFXVyxBQUtBLEFBS1YsQUFJK0MsQUFJRCxBQUk5QyxBQUlZLEFBUVIsQUFJQSxBQU1JLEFBU0EsQUFXRCxBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsQ0FsSW9CLEFBVU4sQ0FjZCxBQWtCeUIsQUFTQSxBQTZGekIsQ0F4RUEsQUFZQSxHQWtEZSxDQXRDZixDQUlPLEVBMEJQLENBcEJvQixBQVNBLEVBeEdLLENBbURYLEFBS0EsQUFrQ0YsQ0FiQyxJQXZGRSxBQTZCYyxBQXlHN0IsTUE1RjZGLEFBU0EsQUFrRDdGLENBdkNBLEFBS0EsQUFxQndCLEdBa0JoQixBQVNLLEdBbEhVLEdBMEdkLENBL0ZXLElBd0dFLEFBc0JULEVBOUJBLEtBOUVHLEFBaURoQixDQUpBLEFBY0EsR0FrREEsRUF6SXdCLEFBMkd4QixDQWhHZSxNQXdHUyxFQXRGVCxLQWpCRCxRQVhNLEFBNkJBLElBakJBLEdBdUdGLFdBbEhNLEFBNkJOLElBakJELENBdUdqQixXQXJGYyxHQWpCZCxBQTBCNEIsQUFTQSxHQS9DNUIsT0E4QmtCLGdCQUVsQixBQU82QixBQVNBLDJCQVJTLEFBU0EsZ0ZBUnRDLEFBU0EiLCJmaWxlIjoiL1VzZXJzL3RheWxvcnBhc3F1YXJpZWxsby90YXlsb3JQYXNxTExDL3Bhc2Vvbi9wYXNlb24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiBcbiAgZnVuY3Rpb24gaW5pdERpdk1vdXNlT3ZlcigpICAge1xuICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWRpdlwiKTtcbiAgICAgZGl2Lm1vdXNlSXNPdmVyID0gZmFsc2U7XG4gICAgIGRpdi5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkgICB7XG4gICAgICAgIHRoaXMubW91c2VJc092ZXIgPSB0cnVlO1xuICAgICB9O1xuICAgICBkaXYub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkgICB7XG4gICAgICAgIHRoaXMubW91c2VJc092ZXIgPSBmYWxzZTtcbiAgICAgfVxuICAgICBkaXYub25jbGljayA9IGZ1bmN0aW9uKCkgICB7XG4gICAgICAgIGlmICh0aGlzLm1vdXNlSXNPdmVyKSAgIHtcbiAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUhJylcbiAgICAgICAgfVxuICAgICB9XG4gIH1cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuXG4gICAgICA8ZGl2IGlkPVwibXlkaXZcIiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0Oic3MDBweCd9fSBvbk1vdXNlRW50ZXI9eygpPT5jb25zb2xlLmxvZygnaGknKX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luOiAnNTBweCAwIDMwcHggMzBweCcsIGNvbG9yOiAnd2hpdGUnLCB3aWR0aDogJzQwJScsIHBhZGRpbmc6ICcyMHB4J319PlxuICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiBcIjZlbVwiLCBtYXJnaW46XCIwIDAgMTBweCAwXCJ9fT5QQVNFT048L2gxPlxuICAgICAgICAgIDxwICBzdHlsZT17e2ZvbnRTaXplOiAnMS40ZW0nfX0+RWFzeSwgY3VzdG9taXphYmxlLCBjb3B5IGFuZCBwYXN0IHN1Ym1pc3Npb24gZm9ybXMuIFdlIGhhbmRsZSBhbGwgdGhlIGJhY2tlbmQgc28geW91IGhhdmUgdGltZSB0byBmb2N1cyBvbiB0aGUgaW1wb3J0YW50IHN0dWZmLjwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b24gd2hpdGUtYnRuIFwiPkxFQVJOIE1PUkU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUwMCAxNTBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScsfX0+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwiZ3JhZGllbnRcIiB4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMTAwJVwiIHkyPVwiMCVcIj5cbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0eWxlPXt7c3RvcENvbG9yOlwiI2Y4MzYwMFwifX0gLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3R5bGU9e3tzdG9wQ29sb3I6XCIjZjlkNDIzXCJ9fSAvPlxuICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgPGcgZmlsbD1cInVybCgjZ3JhZGllbnQpXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCIgTTAsMTIwIEMyMDAsMTAwIDMwMCwxNTAgNTAwLDE0MCBMNTAwLDAgTDAsMCBaIFwiID4gPC9wYXRoPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnODAlJywgbWFyZ2luTGVmdDogJzEwJSd9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgZ3JpZC1jb250YWluZXItLWZpdCBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnQgZGFyay1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgPGgxPkNPUFkgSVQ8L2gxPlxuICAgICAgICAgIDxwPlNpbXBseSBjb3B5IG9uZSBvZiBzZXZlcmFsIHByZWJ1aWx0IHBhc2Vhb24gZm9ybSB0YWdzIHJlYWR5IHRvIGdvIHdpdGggYWxsIHRoZSBmdW5jdGlvbmFsaXR5IHRvIHN0YXJ0IGNhcHR1cmluZyBhbmQgc2VuZGluZyB0aGUgaW5mb3JtYXRpb24geW91IG5lZWQuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnQgZGFyay1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgPGgxPlBBU1RFIElUPC9oMT5cbiAgICAgICAgICA8cD5QYXN0ZSBhbnkgUGFzZW9uIGZvcm0gdGFnIGFueXdoZXJlIHlvdSBuZWVkLCBubyBuZWVkIHRvIHdvcnJ5IGFib3V0IHdyaXR0aW5nIHlvdXIgb3duIGJhY2tlbmQgY29kZSEgIFdlJ3ZlIGdvdCB5b3UgY292ZXJlZC48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBncmlkLWNvbnRhaW5lci0tZml0XCIgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudCBkYXJrLWJhY2tncm91bmRcIj5cbiAgICAgICAgPGgxPlNFTkQgSVQ8L2gxPlxuICAgICAgICAgIDxwPlNpbXBsZSBhcyB0aGF0ISB5b3UgYXJlIHJlYWR5IHRvIHN0YXJ0IHJlY2lldmluZyBpbmZvcm1hdGlvbi4gIEdvIGFoZWFkIGFuZCBzdWJtaXQgYSB0ZXN0LCB0aGVuIGNoZWNrIHlvdXIgaW5ib3ggdG8gc2VlIHRoZSByZXN1bHRzLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50IGRhcmstYmFja2dyb3VuZFwiPlxuICAgICAgICA8aDE+Q1VTVE9NSVpFIElUPC9oMT5cbiAgICAgICAgICA8cD5BbGwgcHJlYnVpbHQgZm9ybXMgYXJlIGN1c3RvbWl6ZWFibGUgdG8gc3VpdCB5b3VyIHN0eWxpc3RpYyBuZWVkcyEgSGF2ZSB5b3VyIG93biBmb3JtIHlvdSB3YW50IHRvIHVzZT8gIE5vIHByYmxlbSwgc2ltbHkgbmVzdCBpdCBpbiB0aGUgUGFzZW9uIHBlcnNvbmFsIGZvcm0gdGFncy4gIEFsbCB0aGUgYmFja2VuZCBsb2dpYyBpcyBzdGlsbCBoYW5kbGVkIGZvciB5b3UuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcyMDBweCcsICB3aWR0aDogJzcwJScsIG1hcmdpbkxlZnQ6JzE1JScsIGZvbnRTaXplOiAnMS4xZW0nLCBsaW5lSGVpZ2h0OiAnMS40ZW0nfX0+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzMyMHB4JywgbWFyZ2luQm90dG9tOiAnMzAwcHgnLCBwYWRkaW5nOiAnNTBweCcsIGJhY2tncm91bmRDb2xvcjogJyNGMUYxRjEnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogJzEuMWVtJywgbGluZUhlaWdodDogJzEuNGVtJ319PlxuICAgICAgICAgIDxwPlBhc2VvbiBvZmZlcnMgYSBzdWl0IGEgcHJlYnVpbHQgZm9ybXMsIGZvcm0gYnVpbGRpbmcgdG9vbHMsIGFuZCBpbnRlZ2VncmF0aW9ucywgdG8gaGFuZGxlIHByb2Nlc3NpbmcgYW5kIHNlbmRpbmcgZm9ybSBpbmZvcm1hdGlvbiB0byB3aGVyZSB5b3UgbmVlZCBpdCB0byBnby4gRm9sbG93IHRoZSBzdGVwcyBiZWxvdyB0byBzZWUgYW4gZXhhbXBsZSBvZiBvdXIgYmFzaWMgY29udGFjdCBmb3JtLiAgPC9wPiBcbiAgICAgICAgICA8cD4gVG8gc2VlIG90aGVyIHNlcnZpY2VzLCBwcmVidWlsdCBmb3JtcyBvciB0byBsZWFybiBob3cgdG8gdXNlIHlvdXIgb3duIGZvcm0gdGhhdCB1dGlsaXplcyBvdXIgYmFja2VuZCB0byBwcm9jZXNzIGFuZCBzZW5kIGluZm9ybWF0aW9uIHdoZXJlIHlvdSBuZWVkIGl0IHRvIGdvIGNsaWNrIHRoZSBidXR0b24gYmVsb3cgPC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbiBibGFjay1idG5cIj5MRUFSTiBNT1JFPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGdyaWQtY29udGFpbmVyLS1maXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgICAgICAgICAgPHA+VHJ5IGEgdGVzdCBzdWJtaXNzaW9uISBBZGQgeW91ciBlbWFpbCBpbmJldHdlZW4gdGhlIHF1b3RlcyBpbiB0aGUgSFRNTCBiZWxvdyB0aGVuIGZpbGwgb3V0IGFuZCBzdWJtaXQgdGhlIGZvcm0uPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogPGRpdiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgc3R5bGU9e3tib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiczMHB4J319PlxuICAgICAgICAgICAgVGhpcyB0ZXh0IGNhbiBiZSBlZGl0ZWQgYnkgdGhlIHVzZXIuXG4gICAgICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRjFGMUYxJywgcGFkZGluZzogJzMwcHgnfX0+XG5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmx0Ozwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0YwQzgwOCd9fT5wYXNlb24tY29udGFjdC1mb3JtIDwvc3Bhbj4gXG4gICAgICAgICAgICByZWNpcGllbnRfZW1haWw9XCI8c3BhbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNkY2RjZGMnLCBwYWRkaW5nOiAnMnB4JywgYm9yZGVyUmFkaXVzOiAnNXB4J319IGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIiBvbkNoYW5nZT17KCk9PmNvbnNvbGUubG9nKCdoZWxsbycpfT5ZT1VSX0VNQUlMPC9zcGFuPlwiXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiAmZ3Q7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZsdDsgLzwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0YwQzgwOCd9fT5wYXNlb24tY29udGFjdC1mb3JtPC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZndDs8L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmx0Ozwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0YwQzgwOCd9fT5zY3JpcHQ8L3NwYW4+IHNyYz1cImh0dHBzOi8vTVlDRE5cIjxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmd0Ozwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7IC88L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNGMEM4MDgnfX0+c2NyaXB0PC9zcGFuPiAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mZ3Q7PC9zcGFuPlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnRcIj5cbiAgICAgICAgICAgIHsvKiBUT0RPOiByZXBsYWNlIHdpdGggYSBhY3R1YWwgaW50ZXJhY3RpdmUgZm9ybSAqL30gXG4gICAgICAgICAgICA8bGFiZWw+VGhpcyB3aWxsIGJlIHNlbnQgdG86IDwvbGFiZWw+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvLyAudmFsdWU9XCIke3RoaXMuZm9ybV9vYmoubmFtZX1cIlxuICAgICAgICAgICAgICAgICAgICAvLyBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmhhbmRsZVNldElucHV0VmFsdWVzKGUpfVwiIFxuICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZyb21cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvLyAudmFsdWU9XCIke3RoaXMuZm9ybV9vYmouZnJvbX1cIlxuICAgICAgICAgICAgICAgICAgICAvLyBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmhhbmRsZVNldElucHV0VmFsdWVzKGUpfVwiIFxuICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiBcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gLnZhbHVlPVwiJHt0aGlzLmZvcm1fb2JqLnN1YmplY3R9XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gQGlucHV0PVwiJHsoZSkgPT4gdGhpcy5oYW5kbGVTZXRJbnB1dFZhbHVlcyhlKX1cIiBcbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgcm93cz1cIjRcIiBcbiAgICAgICAgICAgICAgICAgICAgY29scz1cIjUwXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFsayB0byBtZSBHb29zZS4uLlwiIFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvLyAudmFsdWU9XCIke3RoaXMuZm9ybV9vYmouYm9keX1cIlxuICAgICAgICAgICAgICAgICAgICAvLyBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmhhbmRsZVNldElucHV0VmFsdWVzKGUpfVwiIFxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6ICc2MCUnLCBtYXJnaW5MZWZ0OiAnMjAlJywgbWFyZ2luVG9wOiAnMzAwcHgnLCBmb250U2l6ZTogJzEuMWVtJywgbGluZUhlaWdodDogJzEuNGVtJ319PlxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgICAgICAgIDxoMT5TdGVwIDE8L2gxPlxuICAgICAgICAgIDxwPkNvcHkgdGhlIGZvbGxvd2luZyBodG1sIHRhZ3MuICBNYWtlIHN1cmUgdG8gc3dpdGNoIHRoZSBib2xkZWQgaW5mb3JtYXRpb24gdG8gbWF0Y2ggdGhlIGVtYWlsIGFkZHJlc3Mgd2hlcmUgeW91IHdvdWxkIGxpa2UgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb24gdG8gYmUgc2VudC48L3A+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNEQ0RDREMnLCBwYWRkaW5nOiAnMzBweCd9fT5cbiAgICAgICAgICAgICAgey8qICZsdDtwYXNlb24tY29udGFjdC1mb3JtXG4gICAgICAgICAgICAgICAgcmVjaXBpZW50X2VtYWlsPVwiPGI+WU9VUl9FTUFJTDwvYj5cIlxuICAgICAgICAgICAgICAmZ3Q7ICZsdDsvcGFzZW9uLWNvbnRhY3QtZm9ybSAmZ3Q7XG4gICAgICAgICAgICAgICZsdDtzY3JpcHQgc3JjPVwiaHR0cHM6Ly9NWUNETlwiPiZsdDsvc2NyaXB0ICZndDsgKi99XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmx0Ozwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0YwQzgwOCd9fT5wYXNlb24tY29udGFjdC1mb3JtIDwvc3Bhbj4gXG4gICAgICAgICAgICAgIHJlY2lwaWVudF9lbWFpbD1cIjxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI2RjZGNkYycsIHBhZGRpbmc6ICcycHgnLCBib3JkZXJSYWRpdXM6ICc1cHgnfX0gY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiIG9uQ2hhbmdlPXsoKT0+Y29uc29sZS5sb2coJ2hlbGxvJyl9PllPVVJfRU1BSUw8L3NwYW4+XCJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4gJmd0Ozwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7IC88L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNGMEM4MDgnfX0+cGFzZW9uLWNvbnRhY3QtZm9ybTwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mZ3Q7PC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjRjBDODA4J319PnNjcmlwdDwvc3Bhbj4gc3JjPVwiaHR0cHM6Ly9NWUNETlwiPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mZ3Q7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZsdDsgLzwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0YwQzgwOCd9fT5zY3JpcHQ8L3NwYW4+ICA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZndDs8L3NwYW4+XG5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6ICcuNzVlbSd9fT5IYXZlIGEgU1BBIGFuZCBuZWVkIGFuIE5QTSBpbnN0YWxsPzxicj48L2JyPlxuICAgICAgICAgIElnbm9yZSB0aGUgc2NyaXB0IHRhZyBhbmQgcGFzdGUgdGhlIGZvbGxvd2luZyBpbnRvIHlvdXIgcm9vdCBkaXJlY3Rvcnk8L3A+IFxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnRcIj5cblxuICAgICAgICAgIDxoMT5TdGVwIDI8L2gxPlxuICAgICAgICAgIDxwPlBhc3RlIHRoZSB0YWdzIHRvIHdoZXJldmVyIHlvdSBuZWVkIGEgY29udGFjdCBmb3JtIG9uIHlvdXIgc2l0ZSEgT3VyIHRhZ3MgYXJlIHN1cHBvcnRlZCBieSBhbnkgQ1JNIHRoYXQgd2lsbCBsZXQgeW91IGFkZCBjdXN0b20gSFRNTDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgICAgICAgIDxoMT5TdGVwIDM8L2gxPlxuICAgICAgICAgIDxwPkF0IHRoaXMgcG9pbnQgeW91IGFyZSByZWFkeSB0byBzdGFydCByZWNpZXZpbmcgZW1haWxzIGZyb20geW91ciBmb3JtIHN1Ym1pc3Npb25zISBHbyBhaGVhZCBhbmQgc2VuZCB5b3Vyc2VsZiBhIHRlc3QgZW1haWwgdGhyb3VnaCB0aGUgY29udGFjdCBmb3JtLiAgWW91IG1heSBuZWVkIGNoZWNrIHRoZSBzcGFtIGZvbGRlciwgaWYgdGhlIGVtYWlsIGVuZHMgdXAgdGhlcmUgbWFyayBpdCBhcyAnTm90IFNwYW0nIGFuZCBhbGwgZnV0dXJlIGVtYWlscyB3aWxsIGdvIHN0cmFpZ2h0IGludG8geW91ciBpbmJveC48L3A+XG48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG5cbiAgICAgICAgICA8aDE+U3RlcCA0PC9oMT5cbiAgICAgICAgICA8cD5DdXN0b21pemUgdGhlIGxhYmVscywgY29sb3JzLCBhbmQgc3VjY2VzcyBtZXNzYWdlIG9mIHlvdXIgZm9ybSBieSBhZGRpbmcgYW5kIGVkaXRpbmcgdGhlIEhUTUwgYXR0cmlidXRlcyBvZiB0aGUgUGFzZW9uIHRhZ3MuIDwvcD5cbiAgICAgICAgICA8cD5UbyBzZWUgYSBsaXN0IG9mIG9wdGlvbnMgY2xpY2sgdGhlIGJ1dHRvbiBiZWxvdy48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9uIGJsYWNrLWJ0blwiPkxlYXJuIE1vcmU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcyMDBweCAwIDAgMCcsIGhlaWdodDogJzMwMHB4Jywgd2lkdGg6ICcxMDAlJyxiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjlkNDIzIDAlLCAjZjgzNjAwIDEwMCUpXCJ9fT5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAvLyBTVEFSVCBXSUxMIEJFIE1PVkVEIE9VVCAtIGZvciBpbnRlcmFjdGl2ZSB0ZXN0IGZvcm1cbiAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcbiAgICAgICAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMTA4LDksMTIxLDEpIDM5JSwgcmdiYSgyNTUsMCw2MywxKSAxMDAlKTtcbiAgICAgICAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyBFTkQgV0lMTCBCRSBNT1ZFRCBPVVRcblxuXG4gICAgICAgIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogaGVhdnk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBvdXRsaW5lOm5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAuNzVlbTtcbiAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLndoaXRlLWJ0biB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiAwJSwgI2ZmZiA1MCUsIFRyYW5zcGFyZW50IDUwJSwgVHJhbnNwYXJlbnQgMTAwJSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibGFjay1idG4ge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAgMCUsICMwMDAgNTAlLCBUcmFuc3BhcmVudCA1MCUsIFRyYW5zcGFyZW50IDEwMCUpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuM3M7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLndoaXRlLWJ0bjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjowIDA7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsYWNrLWJ0bjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjowIDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtY29udGFpbmVyLS1maWxsIHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1jb250YWluZXItLWZpdCB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1lbGVtZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhcmstYmFja2dyb3VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDU0ZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICB9XG5cblxuICAgICAgICBcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5uZXJDb250YWluZXJ7XG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuXG4gICAgICAgIGgxLFxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/index.js */"));
}

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map