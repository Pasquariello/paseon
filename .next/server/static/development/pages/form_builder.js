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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FormSandBox.js":
/*!***********************************!*\
  !*** ./components/FormSandBox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/components/FormSandBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const wrapper = {
  border: 'red solid 1px',
  padding: '20px'
};

const FormSandBox = props => __jsx("div", {
  style: wrapper,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (FormSandBox);

/***/ }),

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

/***/ "./components/InputBuilder.js":
/*!************************************!*\
  !*** ./components/InputBuilder.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputBuilder; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/components/InputBuilder.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 //TODO: hook up required and placeholder

function InputBuilder(props) {
  //function buildSelect () {
  const blankInput = {
    type: 'text',
    label: '',
    value: '',
    required: false,
    placholder: ''
  };
  const {
    0: inputBuilderState,
    1: setInputBuilderState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(blankInput); // const blankCat = { name: '', age: '' };

  const {
    0: selectList,
    1: setSelectList
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputBuilderState)]);

  function handleSetValues(e) {
    console.log(e.target.value); // let myArray = e.target.value.split(',');
    // console.log('myArray ', myArray)
    // setSelectBuilderState({...selectBuilderState, values: myArray })
  }

  function addInput() {
    let inputObj = inputBuilderState;
    setInputBuilderState(blankInput);
    props.parentCallback(inputObj);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3476175052" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "setlabel",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Give your select box a label..."), __jsx("input", {
    type: "text",
    id: "setlabel",
    name: "label",
    value: inputBuilderState.label,
    onChange: e => setInputBuilderState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputBuilderState, {
      label: e.target.value
    })),
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "elem",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Select Input type"), __jsx("select", {
    id: "elem",
    name: "elem",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("option", {
    value: "",
    selected: true,
    disabled: true,
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Choose here"), __jsx("option", {
    value: "text",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Text"), __jsx("option", {
    value: "select",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Phone"), __jsx("option", {
    value: "checkbox",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Email"), __jsx("option", {
    value: "checkbox",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Date"), __jsx("option", {
    value: "checkbox",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Time"), __jsx("option", {
    value: "checkbox",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Week"), __jsx("option", {
    value: "checkbox",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Month"), __jsx("option", {
    value: "checkbox",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Range"), __jsx("option", {
    value: "checkbox",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Color"), __jsx("option", {
    value: "checkbox",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Week"), __jsx("option", {
    value: "checkbox",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Week")), __jsx("label", {
    htmlFor: "values",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Set the values in your dropdown select", __jsx("span", {
    style: {
      fontSize: '.75rem'
    },
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "(separate each value with a comma)")), __jsx("input", {
    type: "text",
    id: "lnvaluesame",
    name: "values",
    value: inputBuilderState.values,
    onChange: e => setInputBuilderState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputBuilderState, {
      value: e.target.value
    })),
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("button", {
    onClick: addInput,
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Add +"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3476175052",
    __self: this
  }, "input[type=text].jsx-3476175052{padding:12px 20px;margin:8px 0;display:block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-3476175052{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-3476175052:hover{background-color:#45a049;}div.container.jsx-3476175052{border-radius:5px;background-color:#f2f2f2;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL2NvbXBvbmVudHMvSW5wdXRCdWlsZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGYSxBQUdtQyxBQVNQLEFBV2MsQUFJUCxXQWRPLE9BVFosQUF3QlksT0FKN0IsTUFuQmtCLEtBU0YsT0FlQyxFQXZCUyxHQVNKLFFBZXRCLFVBZGlCLENBVEssWUFVTixNQVRVLE1BVUosZ0JBVHRCLEVBVW1CLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL2NvbXBvbmVudHMvSW5wdXRCdWlsZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vVE9ETzogaG9vayB1cCByZXF1aXJlZCBhbmQgcGxhY2Vob2xkZXJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0QnVpbGRlcihwcm9wcykge1xuXG4vL2Z1bmN0aW9uIGJ1aWxkU2VsZWN0ICgpIHtcbiAgICBjb25zdCBibGFua0lucHV0ID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgIHBsYWNob2xkZXI6ICcnLFxuICAgIH1cbiAgICBjb25zdCBbaW5wdXRCdWlsZGVyU3RhdGUsIHNldElucHV0QnVpbGRlclN0YXRlXSA9IHVzZVN0YXRlKGJsYW5rSW5wdXQpO1xuXG4gICAgLy8gY29uc3QgYmxhbmtDYXQgPSB7IG5hbWU6ICcnLCBhZ2U6ICcnIH07XG4gICAgY29uc3QgW3NlbGVjdExpc3QsIHNldFNlbGVjdExpc3RdID0gdXNlU3RhdGUoW1xuICAgICAgICB7IC4uLmlucHV0QnVpbGRlclN0YXRlIH0sXG4gICAgXSk7XG5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNldFZhbHVlcyhlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAvLyBsZXQgbXlBcnJheSA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCcsJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdteUFycmF5ICcsIG15QXJyYXkpXG4gICAgICAgIC8vIHNldFNlbGVjdEJ1aWxkZXJTdGF0ZSh7Li4uc2VsZWN0QnVpbGRlclN0YXRlLCB2YWx1ZXM6IG15QXJyYXkgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJbnB1dCgpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBpbnB1dE9iaiA9IGlucHV0QnVpbGRlclN0YXRlO1xuICAgICAgICBzZXRJbnB1dEJ1aWxkZXJTdGF0ZShibGFua0lucHV0KVxuICAgICAgICAgcHJvcHMucGFyZW50Q2FsbGJhY2soaW5wdXRPYmopXG4gICAgfVxuICBcbiAgICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZXRsYWJlbFwiPkdpdmUgeW91ciBzZWxlY3QgYm94IGEgbGFiZWwuLi48L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwic2V0bGFiZWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0QnVpbGRlclN0YXRlLmxhYmVsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldElucHV0QnVpbGRlclN0YXRlKHsuLi5pbnB1dEJ1aWxkZXJTdGF0ZSwgbGFiZWw6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2lucHV0PlxuICAgICAgICAgICAgey8qIFRPRE86IHBhc3MgdmFsdWUgLSBvbmx5IGFmdGVyIGRlY2lkZSB3aGVyZSB0aGlzIGxpc3QgbmVlZHMgdG8gZ28gKi99XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVsZW1cIj5TZWxlY3QgSW5wdXQgdHlwZTwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwiZWxlbVwiIG5hbWU9XCJlbGVtXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkIGRpc2FibGVkID5DaG9vc2UgaGVyZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0ZXh0XCI+VGV4dDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5QaG9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPkVtYWlsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgIHsvKiBXaWxsIE1hbnkgb2YgdGhlc2UgYmUgdGhlaXIgb3duIGNvbXBvbmVudHM/IHdpbGwgaXQgYmUgaW4gdGggb3JpZ2luYWwgc2VsZWN0IGxpc3Q/IHdpbGwgaXQgYmUgaW4gYW4gXCJhZHZhbmNlZFwiIGxpc3Q/ICovfVxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPkRhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5UaW1lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+V2Vlazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPk1vbnRoPC9vcHRpb24+IFxuICAgICAgICAgICAgICAgIHsvKiBXaWxsIGhhdmUgdG8gbm90aWZ5IHVzZXIgZGVmYXVsdCBpcyAwIC0gMTAwICovfVxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPlJhbmdlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Q29sb3I8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5XZWVrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+V2Vlazwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cblxuey8qIEkgRE9OVCBUSElOSyBUSElTIElTIE5FQ0VTU0FSWSAqL31cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmFsdWVzXCI+U2V0IHRoZSB2YWx1ZXMgaW4geW91ciBkcm9wZG93biBzZWxlY3Q8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAnLjc1cmVtJ319PihzZXBhcmF0ZSBlYWNoIHZhbHVlIHdpdGggYSBjb21tYSk8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIGlkPVwibG52YWx1ZXNhbWVcIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwidmFsdWVzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRCdWlsZGVyU3RhdGUudmFsdWVzfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dEJ1aWxkZXJTdGF0ZSh7Li4uaW5wdXRCdWlsZGVyU3RhdGUsIHZhbHVlOiBlLnRhcmdldC52YWx1ZX0pfT5cbiAgICBcbiAgICAgICAgICAgIDwvaW5wdXQ+XG5cbiAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+PC9pbnB1dD4gKi99XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKT0+cHJvcHMucGFyZW50Q2FsbGJhY2soc2VsZWN0QnVpbGRlclN0YXRlKX0+QWRkICs8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZElucHV0fT5BZGQgKzwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2LmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG4gIFxufVxuLy8gICBleHBvcnQgZGVmYXVsdCBTZWxlY3RCdWlsZGVyOyJdfQ== */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/components/InputBuilder.js */"));
} //   export default SelectBuilder;

/***/ }),

/***/ "./components/LeftBar.js":
/*!*******************************!*\
  !*** ./components/LeftBar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/components/LeftBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const wrapper = {
  border: 'red solid 1px',
  padding: '20px'
};

const LeftBar = props => __jsx("div", {
  style: wrapper,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (LeftBar);

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

/***/ "./components/SelectBuilder.js":
/*!*************************************!*\
  !*** ./components/SelectBuilder.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectBuilder; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/components/SelectBuilder.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 //TODO: hook up required

function SelectBuilder(props) {
  //function buildSelect () {
  const blankSelect = {
    type: 'select',
    label: '',
    values: [],
    required: false
  };
  const {
    0: selectBuilderState,
    1: setSelectBuilderState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(blankSelect); // const [selectList, setSelectList] = useState([...selectBuilderState]);

  const blankCat = {
    name: '',
    age: ''
  };
  const {
    0: selectList,
    1: setSelectList
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectBuilderState)]); //   const addCat = () => {
  //     setCatState([...catState, { ...blankCat }]);
  //   };
  //} 

  function handleSetValues(e) {
    console.log(e.target.value);
    let myArray = e.target.value.split(',');
    console.log('myArray ', myArray);
    setSelectBuilderState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectBuilderState, {
      values: myArray
    }));
  }

  function addSelect() {
    let selectObj = selectBuilderState;
    setSelectBuilderState(blankSelect);
    props.parentCallback(selectObj);
    console.log(selectList);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3476175052" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "setlabel",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Give your select box a label..."), __jsx("input", {
    type: "text",
    id: "setlabel",
    name: "label",
    value: selectBuilderState.label,
    onChange: e => setSelectBuilderState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectBuilderState, {
      label: e.target.value
    })),
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "values",
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Set the values in your dropdown select", __jsx("span", {
    style: {
      fontSize: '.75rem'
    },
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "(separate each value with a comma)")), __jsx("input", {
    type: "text",
    id: "lnvaluesame",
    name: "values",
    value: selectBuilderState.values,
    onChange: e => handleSetValues(e),
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("button", {
    onClick: addSelect,
    className: "jsx-3476175052",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Add +"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3476175052",
    __self: this
  }, "input[type=text].jsx-3476175052{padding:12px 20px;margin:8px 0;display:block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-3476175052{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-3476175052:hover{background-color:#45a049;}div.container.jsx-3476175052{border-radius:5px;background-color:#f2f2f2;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL2NvbXBvbmVudHMvU2VsZWN0QnVpbGRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRWEsQUFHbUMsQUFTUCxBQVdjLEFBSVAsV0FkTyxPQVRaLEFBd0JZLE9BSjdCLE1BbkJrQixLQVNGLE9BZUMsRUF2QlMsR0FTSixRQWV0QixVQWRpQixDQVRLLFlBVU4sTUFUVSxNQVVKLGdCQVR0QixFQVVtQixlQUNuQiIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL3RheWxvclBhc3FMTEMvcGFzZW9uL3Bhc2Vvbi9jb21wb25lbnRzL1NlbGVjdEJ1aWxkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuLy9UT0RPOiBob29rIHVwIHJlcXVpcmVkXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3RCdWlsZGVyKHByb3BzKSB7XG5cbi8vZnVuY3Rpb24gYnVpbGRTZWxlY3QgKCkge1xuICAgIGNvbnN0IGJsYW5rU2VsZWN0ID0ge1xuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfVxuICAgIGNvbnN0IFtzZWxlY3RCdWlsZGVyU3RhdGUsIHNldFNlbGVjdEJ1aWxkZXJTdGF0ZV0gPSB1c2VTdGF0ZShibGFua1NlbGVjdCk7XG5cbiAgICAvLyBjb25zdCBbc2VsZWN0TGlzdCwgc2V0U2VsZWN0TGlzdF0gPSB1c2VTdGF0ZShbLi4uc2VsZWN0QnVpbGRlclN0YXRlXSk7XG4gICAgY29uc3QgYmxhbmtDYXQgPSB7IG5hbWU6ICcnLCBhZ2U6ICcnIH07XG4gIGNvbnN0IFtzZWxlY3RMaXN0LCBzZXRTZWxlY3RMaXN0XSA9IHVzZVN0YXRlKFtcbiAgICB7IC4uLnNlbGVjdEJ1aWxkZXJTdGF0ZSB9LFxuICBdKTtcbiAgXG4vLyAgIGNvbnN0IGFkZENhdCA9ICgpID0+IHtcbi8vICAgICBzZXRDYXRTdGF0ZShbLi4uY2F0U3RhdGUsIHsgLi4uYmxhbmtDYXQgfV0pO1xuLy8gICB9O1xuICAgICAgXG5cblxuLy99IFxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2V0VmFsdWVzKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgICAgIGxldCBteUFycmF5ID0gZS50YXJnZXQudmFsdWUuc3BsaXQoJywnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ215QXJyYXkgJywgbXlBcnJheSlcbiAgICAgICAgc2V0U2VsZWN0QnVpbGRlclN0YXRlKHsuLi5zZWxlY3RCdWlsZGVyU3RhdGUsIHZhbHVlczogbXlBcnJheSB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFNlbGVjdCgpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBzZWxlY3RPYmogPSBzZWxlY3RCdWlsZGVyU3RhdGU7XG4gICAgICAgIHNldFNlbGVjdEJ1aWxkZXJTdGF0ZShibGFua1NlbGVjdClcbiAgICAgICAgcHJvcHMucGFyZW50Q2FsbGJhY2soc2VsZWN0T2JqKVxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RMaXN0KVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2V0bGFiZWxcIj5HaXZlIHlvdXIgc2VsZWN0IGJveCBhIGxhYmVsLi4uPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cInNldGxhYmVsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFiZWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RCdWlsZGVyU3RhdGUubGFiZWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VsZWN0QnVpbGRlclN0YXRlKHsuLi5zZWxlY3RCdWlsZGVyU3RhdGUsIGxhYmVsOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9pbnB1dD5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2YWx1ZXNcIj5TZXQgdGhlIHZhbHVlcyBpbiB5b3VyIGRyb3Bkb3duIHNlbGVjdDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6ICcuNzVyZW0nfX0+KHNlcGFyYXRlIGVhY2ggdmFsdWUgd2l0aCBhIGNvbW1hKTwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgaWQ9XCJsbnZhbHVlc2FtZVwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJ2YWx1ZXNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RCdWlsZGVyU3RhdGUudmFsdWVzfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVTZXRWYWx1ZXMoZSl9PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+PC9pbnB1dD4gKi99XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKT0+cHJvcHMucGFyZW50Q2FsbGJhY2soc2VsZWN0QnVpbGRlclN0YXRlKX0+QWRkICs8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFNlbGVjdH0+QWRkICs8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdi5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xuICBcbn1cbi8vICAgZXhwb3J0IGRlZmF1bHQgU2VsZWN0QnVpbGRlcjsiXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/components/SelectBuilder.js */"));
} //   export default SelectBuilder;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

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

/***/ "./pages/form_builder.js":
/*!*******************************!*\
  !*** ./pages/form_builder.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form_Builder; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_LeftBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LeftBar */ "./components/LeftBar.js");
/* harmony import */ var _components_SelectBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SelectBuilder */ "./components/SelectBuilder.js");
/* harmony import */ var _components_InputBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/InputBuilder */ "./components/InputBuilder.js");
/* harmony import */ var _components_FormSandBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FormSandBox */ "./components/FormSandBox.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/form_builder.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;





 /////////////////////////////
/////////////////////////////
/////////////////////////////



 // ...

Object(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__["resetServerContext"])();
Object(react_dom_server__WEBPACK_IMPORTED_MODULE_11__["renderToString"])(Form_Builder); /////////////////////////////
/////////////////////////////
/////////////////////////////

const reorder = (list, startIndex, endIndex) => {
  const result = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(list);

  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  console.log('result', result);
  return result;
};

function Form_Builder() {
  const blankInputTest = {
    type: 'text',
    label: '',
    value: '',
    required: false,
    placholder: ''
  };
  const {
    0: buttonValue,
    1: setButtonValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])();
  const {
    0: entered,
    1: setEntered
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false);
  const {
    0: up,
    1: setUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false);
  const {
    0: isMouseInside,
    1: setIsMouseInside
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false);

  function mouseDown(e) {
    console.log('dude', e);
    setButtonValue(blankInputTest); // e.currentTarget.style.border = "dashed";
    // Set the drag's format and data. Use the event target's id for the data 
    //e.dataTransfer.setData("text/plain", e.target.id);  // grab the element 
    // setstate for selectedItem to blank version

    console.log('buttonValue', buttonValue);
  }

  function dragStart(event) {
    setButtonValue(blankInputTest);
    console.log('oh');
    event.dataTransfer.setData('text/plain', event.target.id);
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    setSelectList([...selectList, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, blankInputTest)]);
    setButtonValue(); // const id = event
    //   .dataTransfer
    //   .getData('text');
    // const draggableElement = document.getElementById(id);
    // const dropzone = event.target;
    // dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();
  }

  function mouseEnter(buttonValue) {
    setIsMouseInside(true);
    console.log('hello', up); // setSelectList([...selectList, { ...blankInputTest }]);
    // if (isMouseInside ){
    //   console.log('hello')
    // }
  }

  function mouseLeave() {
    setIsMouseInside(false);
  }

  function mouseUp() {
    if (isMouseInside && buttonValue) {
      setSelectList([...selectList, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, blankInputTest)]);
      setButtonValue();
    }
  }

  function entering(e) {
    console.log('in you', e);

    if (buttonValue && up == true) {
      console.log('UP');
    }
  } /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: getItems(10)
  //   };
  //   this.onDragEnd = this.onDragEnd.bind(this);
  // }


  const {
    0: items,
    1: setItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]);

  const reorder = (list, startIndex, endIndex) => {
    const result = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(list);

    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(selectList, //this.state.items,
    result.source.index, result.destination.index);
    setSelectList([...items]); // this.setState({
    //   items
    // });
  } /////////////////////////////
  /////////////////////////////
  /////////////////////////////


  const {
    0: elem,
    1: setElem
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]);
  const {
    0: selectList,
    1: setSelectList
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]);

  function handleElemSelect(e) {
    setElem(e.target.value);
    console.log('TAYLOR', e);
  }

  function mycallback(val) {
    console.log('CLICKED ME', val); // setElem([...elem, {...val}])
    // setSelectList({...selectList, ...val });

    setSelectList([...selectList, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, val)]); // do something with value in parent component, like save to state
  } // var el = document.getElementById('items');
  // var sortable = Sortable.create(el);


  return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-256686956" + " " + "flex-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-256686956" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx(_components_LeftBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "-Basic Options-"), __jsx("button", {
    id: "myTextInputButton",
    draggable: "true",
    onDragStart: dragStart,
    onMouseDown: e => mouseDown(e),
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Name Field"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Long Answer"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Basic Input"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Number"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Dropdown List"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Checkbox"), __jsx("hr", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "elem",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "New Element"), __jsx("select", {
    id: "elem",
    name: "elem",
    onChange: handleElemSelect,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("option", {
    value: "",
    selected: true,
    disabled: true,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Choose here"), __jsx("option", {
    value: "text",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Text Input"), __jsx("option", {
    value: "select",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "Select Dropdown"), __jsx("option", {
    value: "checkbox",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Checkbox")), __jsx("h4", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "-Advanced Options-"), elem === 'select' ? __jsx(_components_SelectBuilder__WEBPACK_IMPORTED_MODULE_6__["default"], {
    parentCallback: mycallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }) : null, elem === 'text' ? __jsx(_components_InputBuilder__WEBPACK_IMPORTED_MODULE_7__["default"], {
    parentCallback: mycallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }) : null)), __jsx("div", {
    onMouseEnter: mouseEnter,
    onMouseLeave: mouseLeave,
    onMouseUp: mouseUp,
    onDragOver: dragOver,
    onDrop: drop,
    className: "jsx-256686956" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx(_components_FormSandBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, __jsx("button", {
    onClick: () => setSelectList([]),
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "x"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "?"), " ", __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__["Droppable"], {
    droppableId: "droppable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, (provided, snapshot) => __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.droppableProps, {
    ref: provided.innerRef // style={getListStyle(snapshot.isDraggingOver)}
    ,
    className: "jsx-256686956" + " " + (provided.droppableProps.className != null && provided.droppableProps.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), selectList.map((item, index) => __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__["Draggable"], {
    key: index,
    draggableId: `draggable${index}`,
    index: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, (provided, snapshot) => __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: provided.innerRef
  }, provided.draggableProps, provided.dragHandleProps, {
    className: "jsx-256686956" + " " + (provided.dragHandleProps.className != null && provided.dragHandleProps.className || provided.draggableProps.className != null && provided.draggableProps.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-256686956" + " " + "elemContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, item.label), item.values ? __jsx("select", {
    id: "elem",
    name: "elem",
    onChange: handleElemSelect,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, item.values.map(value => {
    return __jsx("option", {
      className: "jsx-256686956",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, value);
  })) : __jsx("input", {
    type: item.type,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }))))), provided.placeholder)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "256686956",
    __self: this
  }, "input[type=text].jsx-256686956,select.jsx-256686956{padding:12px 20px;margin:8px 0;display:block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-256686956{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-256686956:hover{background-color:#45a049;}div.container.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;}.elemContainer.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;margin:10px;}.flex-grid.jsx-256686956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.col.jsx-256686956{width:100%;}@media (max-width:700px){.flex-grid.jsx-256686956{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL3BhZ2VzL2Zvcm1fYnVpbGRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2UkssQUFHMkIsQUFTUCxBQVdjLEFBSVAsQUFNRixBQU9MLEFBS0YsQUFNSyxXQXRDVyxBQWtDN0IsR0FLRSxJQWhEZSxBQXdCWSxBQU1GLE9BVjNCLE1BbkJrQixLQVNGLE9BZUMsQUFNRixFQTdCVyxHQVNKLFFBZXRCLEFBTWMsVUFwQkcsQ0FUSyxDQThCdEIsTUFJZ0MsS0F4QmhCLE1BVFUsTUFVSixnQkFUdEIsRUFVbUIsZUFDbkIsaUVBdUJBIiwiZmlsZSI6Ii9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL3BhZ2VzL2Zvcm1fYnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9jb21wb25lbnRzL0xlZnRCYXInO1xuaW1wb3J0IFNlbGVjdEJ1aWxkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWxlY3RCdWlsZGVyJztcbmltcG9ydCBJbnB1dEJ1aWxkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dEJ1aWxkZXInO1xuXG5pbXBvcnQgRm9ybVNhbmRCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtU2FuZEJveCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgeyByZXNldFNlcnZlckNvbnRleHQgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbi8vIC4uLlxuXG5yZXNldFNlcnZlckNvbnRleHQoKTtcbnJlbmRlclRvU3RyaW5nKEZvcm1fQnVpbGRlcik7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IHJlb3JkZXIgPSAobGlzdCwgc3RhcnRJbmRleCwgZW5kSW5kZXgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gQXJyYXkuZnJvbShsaXN0KTtcbiAgY29uc3QgW3JlbW92ZWRdID0gcmVzdWx0LnNwbGljZShzdGFydEluZGV4LCAxKTtcbiAgcmVzdWx0LnNwbGljZShlbmRJbmRleCwgMCwgcmVtb3ZlZCk7XG4gIGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtX0J1aWxkZXIoKSB7XG5cblxuXG5jb25zdCBibGFua0lucHV0VGVzdCA9IHtcbiAgdHlwZTogJ3RleHQnLFxuICBsYWJlbDogJycsXG4gIHZhbHVlOiAnJyxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBwbGFjaG9sZGVyOiAnJyxcbn0gXG5cbmNvbnN0IFtidXR0b25WYWx1ZSwgc2V0QnV0dG9uVmFsdWVdID0gdXNlU3RhdGUoKVxuY29uc3QgW2VudGVyZWQsIHNldEVudGVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuY29uc3QgW3VwLCBzZXRVcF0gPSB1c2VTdGF0ZShmYWxzZSlcbmNvbnN0IFtpc01vdXNlSW5zaWRlLCBzZXRJc01vdXNlSW5zaWRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5mdW5jdGlvbiBtb3VzZURvd24oZSl7XG4gIGNvbnNvbGUubG9nKCdkdWRlJywgZSlcblxuICBzZXRCdXR0b25WYWx1ZShibGFua0lucHV0VGVzdCk7XG4gIC8vIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXIgPSBcImRhc2hlZFwiO1xuXG4gIC8vIFNldCB0aGUgZHJhZydzIGZvcm1hdCBhbmQgZGF0YS4gVXNlIHRoZSBldmVudCB0YXJnZXQncyBpZCBmb3IgdGhlIGRhdGEgXG4gIC8vZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuaWQpOyAgLy8gZ3JhYiB0aGUgZWxlbWVudCBcbiAgLy8gc2V0c3RhdGUgZm9yIHNlbGVjdGVkSXRlbSB0byBibGFuayB2ZXJzaW9uXG4gIGNvbnNvbGUubG9nKCdidXR0b25WYWx1ZScsIGJ1dHRvblZhbHVlKVxufVxuXG5cbmZ1bmN0aW9uIGRyYWdTdGFydChldmVudCkge1xuICBzZXRCdXR0b25WYWx1ZShibGFua0lucHV0VGVzdCk7XG5cbiAgY29uc29sZS5sb2coJ29oJylcbiAgZXZlbnRcbiAgICAuZGF0YVRyYW5zZmVyXG4gICAgLnNldERhdGEoJ3RleHQvcGxhaW4nLCBldmVudC50YXJnZXQuaWQpO1xufVxuXG5mdW5jdGlvbiBkcmFnT3ZlcihldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5cbmZ1bmN0aW9uIGRyb3AoZXZlbnQpIHtcbiAgc2V0U2VsZWN0TGlzdChbLi4uc2VsZWN0TGlzdCwgeyAuLi5ibGFua0lucHV0VGVzdCB9XSk7XG4gIHNldEJ1dHRvblZhbHVlKClcbiAgLy8gY29uc3QgaWQgPSBldmVudFxuICAvLyAgIC5kYXRhVHJhbnNmZXJcbiAgLy8gICAuZ2V0RGF0YSgndGV4dCcpO1xuXG4gIC8vIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIC8vIGNvbnN0IGRyb3B6b25lID0gZXZlbnQudGFyZ2V0O1xuICBcbiAgLy8gZHJvcHpvbmUuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlRWxlbWVudCk7XG5cbiAgZXZlbnRcbiAgICAuZGF0YVRyYW5zZmVyXG4gICAgLmNsZWFyRGF0YSgpO1xufVxuXG5cblxuZnVuY3Rpb24gbW91c2VFbnRlcihidXR0b25WYWx1ZSkge1xuICBzZXRJc01vdXNlSW5zaWRlKHRydWUpXG4gIGNvbnNvbGUubG9nKCdoZWxsbycsIHVwKVxuICAvLyBzZXRTZWxlY3RMaXN0KFsuLi5zZWxlY3RMaXN0LCB7IC4uLmJsYW5rSW5wdXRUZXN0IH1dKTtcbiAgLy8gaWYgKGlzTW91c2VJbnNpZGUgKXtcbiAgLy8gICBjb25zb2xlLmxvZygnaGVsbG8nKVxuICAvLyB9XG59XG5cbmZ1bmN0aW9uIG1vdXNlTGVhdmUoKSB7XG4gIHNldElzTW91c2VJbnNpZGUoZmFsc2UpXG59XG5cbmZ1bmN0aW9uIG1vdXNlVXAoKXtcbiAgXG4gIGlmKGlzTW91c2VJbnNpZGUgJiYgYnV0dG9uVmFsdWUpe1xuICAgICAgc2V0U2VsZWN0TGlzdChbLi4uc2VsZWN0TGlzdCwgeyAuLi5ibGFua0lucHV0VGVzdCB9XSk7XG4gICAgICBzZXRCdXR0b25WYWx1ZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gZW50ZXJpbmcoZSkge1xuICBjb25zb2xlLmxvZygnaW4geW91JywgZSlcbiAgaWYgKGJ1dHRvblZhbHVlICYmICh1cCA9PSB0cnVlKSApe1xuICAgIGNvbnNvbGUubG9nKCdVUCcpXG4gIH0gXG59XG4gIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICBzdXBlcihwcm9wcyk7XG4vLyAgIHRoaXMuc3RhdGUgPSB7XG4vLyAgICAgaXRlbXM6IGdldEl0ZW1zKDEwKVxuLy8gICB9O1xuLy8gICB0aGlzLm9uRHJhZ0VuZCA9IHRoaXMub25EcmFnRW5kLmJpbmQodGhpcyk7XG4vLyB9XG5cbmNvbnN0IFtpdGVtcywgc2V0SXRlbV0gPSB1c2VTdGF0ZShbXSlcblxuY29uc3QgcmVvcmRlciA9IChsaXN0LCBzdGFydEluZGV4LCBlbmRJbmRleCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKGxpc3QpO1xuICBjb25zdCBbcmVtb3ZlZF0gPSByZXN1bHQuc3BsaWNlKHN0YXJ0SW5kZXgsIDEpO1xuICByZXN1bHQuc3BsaWNlKGVuZEluZGV4LCAwLCByZW1vdmVkKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbmZ1bmN0aW9uIG9uRHJhZ0VuZChyZXN1bHQpIHtcbiAgLy8gZHJvcHBlZCBvdXRzaWRlIHRoZSBsaXN0XG4gIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaXRlbXMgPSByZW9yZGVyKFxuICAgIHNlbGVjdExpc3QsXG4gICAgLy90aGlzLnN0YXRlLml0ZW1zLFxuICAgIHJlc3VsdC5zb3VyY2UuaW5kZXgsXG4gICAgcmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4XG4gICk7XG4gIHNldFNlbGVjdExpc3QoWy4uLml0ZW1zXSlcbiAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgaXRlbXNcbiAgLy8gfSk7XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCBbZWxlbSwgc2V0RWxlbV0gPSB1c2VTdGF0ZShbXSk7IFxuXG4gICAgY29uc3QgW3NlbGVjdExpc3QsIHNldFNlbGVjdExpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIFxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRWxlbVNlbGVjdChlKXtcbiAgICAgIHNldEVsZW0oZS50YXJnZXQudmFsdWUpXG4gICAgICBjb25zb2xlLmxvZygnVEFZTE9SJyxlKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBteWNhbGxiYWNrKHZhbCl7XG4gICAgICBjb25zb2xlLmxvZygnQ0xJQ0tFRCBNRScsIHZhbClcbiAgICAgIC8vIHNldEVsZW0oWy4uLmVsZW0sIHsuLi52YWx9XSlcbiAgICAgIC8vIHNldFNlbGVjdExpc3Qoey4uLnNlbGVjdExpc3QsIC4uLnZhbCB9KTtcbiAgICAgIHNldFNlbGVjdExpc3QoWy4uLnNlbGVjdExpc3QsIHsgLi4udmFsIH1dKTtcbiAgICAgIFxuICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdmFsdWUgaW4gcGFyZW50IGNvbXBvbmVudCwgbGlrZSBzYXZlIHRvIHN0YXRlXG4gICAgfVxuXG5cblxuICAgIC8vIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcycpO1xuICAgIC8vIHZhciBzb3J0YWJsZSA9IFNvcnRhYmxlLmNyZWF0ZShlbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxMYXlvdXQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncmlkXCI+XG48ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgPExlZnRCYXI+XG4gICAgICAgIHsvKlRPRE8gLSBzdGFydCBob29raW5nIHRoZXNlIHVwISAgKi99XG4gICAgICA8aDQ+LUJhc2ljIE9wdGlvbnMtPC9oND5cbiAgICAgICAgPGJ1dHRvbiBpZD1cIm15VGV4dElucHV0QnV0dG9uXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIG9uRHJhZ1N0YXJ0PXtkcmFnU3RhcnR9IG9uTW91c2VEb3duPXsoZSk9Pm1vdXNlRG93bihlKX0+TmFtZSBGaWVsZDwvYnV0dG9uPiBcbiAgICAgICAgPGJ1dHRvbj5Mb25nIEFuc3dlcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uPkJhc2ljIElucHV0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24+TnVtYmVyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24+RHJvcGRvd24gTGlzdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uPkNoZWNrYm94PC9idXR0b24+XG48aHI+PC9ocj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbGVtXCI+TmV3IEVsZW1lbnQ8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkPVwiZWxlbVwiIG5hbWU9XCJlbGVtXCIgb25DaGFuZ2U9e2hhbmRsZUVsZW1TZWxlY3R9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZCBkaXNhYmxlZCA+Q2hvb3NlIGhlcmU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGV4dFwiPlRleHQgSW5wdXQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VsZWN0XCI+U2VsZWN0IERyb3Bkb3duPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Q2hlY2tib3g8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgIDxoND4tQWR2YW5jZWQgT3B0aW9ucy08L2g0PlxuICAgXG5cbiAgICAgICAgey8qIFRPRE8hIHJlbmFtZSBwYXJlbnRDYWxsYmFjayAqL31cbiAgICAgICAgeyhlbGVtID09PSAnc2VsZWN0JyA/IDxTZWxlY3RCdWlsZGVyIHBhcmVudENhbGxiYWNrPXtteWNhbGxiYWNrfT48L1NlbGVjdEJ1aWxkZXI+IDogbnVsbCl9XG4gICAgICAgIHsoZWxlbSA9PT0gJ3RleHQnID8gPElucHV0QnVpbGRlciBwYXJlbnRDYWxsYmFjaz17bXljYWxsYmFja30+PC9JbnB1dEJ1aWxkZXI+IDogbnVsbCl9XG5cbiAgICAgICAgXG4gICAgICA8L0xlZnRCYXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgIG9uTW91c2VFbnRlcj17bW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXttb3VzZUxlYXZlfSBvbk1vdXNlVXA9e21vdXNlVXB9IG9uRHJhZ092ZXI9e2RyYWdPdmVyfSBvbkRyb3A9e2Ryb3B9PlxuXG48Rm9ybVNhbmRCb3g+XG48YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRTZWxlY3RMaXN0KFtdKX0+eDwvYnV0dG9uPlxuPGJ1dHRvbj4/PC9idXR0b24+IHsvKiBUT0RPIC0gYWRkIGluIHRvb2wgdGlwIC4uLiBtYXliZSBsaW5rLCBvbiBob3ZlciovfVxuey8qIFJFT1JERVIgU1RBUlQgKi99XG4gey8qIHsoZWxlbSA9PT0gJ3NlbGVjdCcgPyAqL31cbjxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtvbkRyYWdFbmR9PlxuICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCI+XG4gICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxuICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAvLyBzdHlsZT17Z2V0TGlzdFN0eWxlKHNuYXBzaG90LmlzRHJhZ2dpbmdPdmVyKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlbGVjdExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtpbmRleH0gZHJhZ2dhYmxlSWQ9e2BkcmFnZ2FibGUke2luZGV4fWB9IGluZGV4PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17Z2V0SXRlbVN0eWxlKFxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgc25hcHNob3QuaXNEcmFnZ2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIHByb3ZpZGVkLmRyYWdnYWJsZVByb3BzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiB7aXRlbX0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgey8qICAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2l0ZW0ubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICB7KGl0ZW0udmFsdWVzID8gXG4gICAgICAgICAgPHNlbGVjdCBpZD1cImVsZW1cIiBuYW1lPVwiZWxlbVwiIG9uQ2hhbmdlPXtoYW5kbGVFbGVtU2VsZWN0fT5cbiAgICAgICAgICAgIHtpdGVtLnZhbHVlcy5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPnt2YWx1ZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KX0gXG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgOiA8aW5wdXQgdHlwZT17aXRlbS50eXBlfSA+PC9pbnB1dD4gKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICAgICAgey8qIDogbnVsbCl9ICovfVxuXG4gICAgICA8L0Zvcm1TYW5kQm94PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuey8qIFJFT1JERVIgRU5EICovfVxuXG4gICAgICA8c3R5bGUganN4PlxuICAgIHtgXG4gICAgaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xuICAgIH1cblxuICAgIGRpdi5jb250YWluZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLmVsZW1Db250YWluZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5mbGV4LWdyaWQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIH1cbiAgICAuY29sIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAuZmxleC1ncmlkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICAgIGB9XG48L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/form_builder.js */")));
}

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/form_builder.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/form_builder.js */"./pages/form_builder.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

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
//# sourceMappingURL=form_builder.js.map