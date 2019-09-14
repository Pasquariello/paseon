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
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/hello-next/components/FormSandBox.js";

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
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/hello-next/components/Header.js";


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
}, "Home"))), __jsx("li", {
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
}, "About"))), __jsx("li", {
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
}, "Form Builder"))), __jsx("li", {
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
}, "Pricing"))), __jsx("li", {
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
}, "Glossary"))), __jsx("li", {
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
}, "Free/Basic Forms")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
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
}, "Login"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3137789357",
  __self: undefined
}, "*.jsx-3137789357{box-sizing:border-box;padding:0;margin:0;}body.jsx-3137789357{font-family:'Josefin Sans',sans-serif;}.navbar.jsx-3137789357{font-size:18px;padding-bottom:10px;}.main-nav.jsx-3137789357{list-style-type:none;display:none;}.nav-links.jsx-3137789357,.logo.jsx-3137789357{-webkit-text-decoration:none;text-decoration:none;color:white;}.main-nav.jsx-3137789357 li.jsx-3137789357{text-align:center;margin:15px auto;}.logo.jsx-3137789357{display:inline-block;font-size:22px;margin-top:10px;margin-left:20px;}.navbar-toggle.jsx-3137789357{position:absolute;top:10px;right:20px;cursor:pointer;color:black font-size:24px;}.active.jsx-3137789357{display:block;}@media screen and (min-width:768px){.navbar.jsx-3137789357{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:0;height:70px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.main-nav.jsx-3137789357{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:30px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.main-nav.jsx-3137789357 li.jsx-3137789357{margin:0;}.nav-links.jsx-3137789357{margin-left:40px;}.logo.jsx-3137789357{margin-top:0;}.navbar-toggle.jsx-3137789357{display:none;}.logo.jsx-3137789357:hover,.nav-links.jsx-3137789357:hover{color:rgba(255,255,255,1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VZLEFBR21DLEFBTWlCLEFBSXhCLEFBS00sQUFNQSxBQUtILEFBS0csQUFPSCxBQVNKLEFBS0csQUFRQSxBQU9KLEFBSVEsQUFJSixBQUlBLEFBS2dCLFNBaEJqQyxJQVFBLEFBSUEsQ0FoQ0osQ0FyQ3dCLEVBNkRwQixDQTdDaUIsQUFZUixHQXZCSSxBQWdCRSxDQS9CTCxJQW9GVixDQTdDVyxLQXRDRixFQWViLENBTEEsQUFnQkEsQ0FLb0IsRUExQnBCLEFBa0NtQixHQXRDbkIsU0FvQkQsRUFXc0IsQ0FTRixTQXBCbkIsT0FZQSxLQWtCc0MsQUFRWixNQWpCMUIsWUFrQjJCLHFFQUNNLDRCQVRSLGlCQUNMLFlBQ08sd0NBUXZCLHFEQVBBIiwiZmlsZSI6Ii9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIG1hcmdpblJpZ2h0OiAxNSxcblxufTtcblxuXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgLy8gPGRpdj5cbiAgLy8gICA8TGluayBocmVmPVwiL1wiPlxuICAvLyAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cbiAgLy8gICA8L0xpbms+XG4gIC8vICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAvLyAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+XG4gIC8vICAgPC9MaW5rPlxuICAvLyAgIDxMaW5rIGhyZWY9XCIvZm9ybV9idWlsZGVyXCI+XG4gIC8vICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Gb3JtIEJ1aWxkZXI8L2E+XG4gIC8vICAgPC9MaW5rPlxuICAvLyA8L2Rpdj5cbjw+XG48bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGlkPVwianMtbmF2YmFyLXRvZ2dsZVwiPlxuICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPlxuPC9zcGFuPlxuPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsb2dvXCI+bG9nbzwvYT5cbjx1bCBjbGFzc05hbWU9XCJtYWluLW5hdlwiIGlkPVwianMtbWVudVwiPlxuICAgIDxsaT5cbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cbiAgICA8L0xpbms+ICAgIFxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cbiAgICAgIDwvTGluaz4gICAgXG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8TGluayBocmVmPVwiL2Zvcm1fYnVpbGRlclwiPlxuICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Gb3JtIEJ1aWxkZXI8L2E+XG4gICAgICA8L0xpbms+ICAgIFxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5QcmljaW5nPC9hPlxuICAgIDwvTGluaz4gICAgXG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9Pkdsb3NzYXJ5PC9hPlxuICAgIDwvTGluaz4gICAgXG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkZyZWUvQmFzaWMgRm9ybXM8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Mb2dpbjwvYT5cbiAgICA8L0xpbms+ICAgICBcbiAgICA8L2xpPlxuXG48L3VsPlxuPC9uYXY+XG48c3R5bGUganN4PntgXG4qIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2YmFyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tbmF2IHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LWxpbmtzLFxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLW5hdiBsaSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZiYXItdG9nZ2xlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5uYXZiYXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFpbi1uYXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1haW4tbmF2IGxpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXYtbGlua3Mge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdmJhci10b2dnbGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvOmhvdmVyLFxuICAgICAgICAgICAgLm5hdi1saW5rczpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbmB9PC9zdHlsZT5cbjwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/components/Header.js */"));

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

var _jsxFileName = "/Users/taylorpasquariello/learning_resources/hello-next/components/InputBuilder.js";

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
  }, "input[type=text].jsx-3476175052{padding:12px 20px;margin:8px 0;display:block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-3476175052{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-3476175052:hover{background-color:#45a049;}div.container.jsx-3476175052{border-radius:5px;background-color:#f2f2f2;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvY29tcG9uZW50cy9JbnB1dEJ1aWxkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZhLEFBR21DLEFBU1AsQUFXYyxBQUlQLFdBZE8sT0FUWixBQXdCWSxPQUo3QixNQW5Ca0IsS0FTRixPQWVDLEVBdkJTLEdBU0osUUFldEIsVUFkaUIsQ0FUSyxZQVVOLE1BVFUsTUFVSixnQkFUdEIsRUFVbUIsZUFDbkIiLCJmaWxlIjoiL1VzZXJzL3RheWxvcnBhc3F1YXJpZWxsby9sZWFybmluZ19yZXNvdXJjZXMvaGVsbG8tbmV4dC9jb21wb25lbnRzL0lucHV0QnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vL1RPRE86IGhvb2sgdXAgcmVxdWlyZWQgYW5kIHBsYWNlaG9sZGVyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEJ1aWxkZXIocHJvcHMpIHtcblxuLy9mdW5jdGlvbiBidWlsZFNlbGVjdCAoKSB7XG4gICAgY29uc3QgYmxhbmtJbnB1dCA9IHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICBwbGFjaG9sZGVyOiAnJyxcbiAgICB9XG4gICAgY29uc3QgW2lucHV0QnVpbGRlclN0YXRlLCBzZXRJbnB1dEJ1aWxkZXJTdGF0ZV0gPSB1c2VTdGF0ZShibGFua0lucHV0KTtcblxuICAgIC8vIGNvbnN0IGJsYW5rQ2F0ID0geyBuYW1lOiAnJywgYWdlOiAnJyB9O1xuICAgIGNvbnN0IFtzZWxlY3RMaXN0LCBzZXRTZWxlY3RMaXN0XSA9IHVzZVN0YXRlKFtcbiAgICAgICAgeyAuLi5pbnB1dEJ1aWxkZXJTdGF0ZSB9LFxuICAgIF0pO1xuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTZXRWYWx1ZXMoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgLy8gbGV0IG15QXJyYXkgPSBlLnRhcmdldC52YWx1ZS5zcGxpdCgnLCcpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbXlBcnJheSAnLCBteUFycmF5KVxuICAgICAgICAvLyBzZXRTZWxlY3RCdWlsZGVyU3RhdGUoey4uLnNlbGVjdEJ1aWxkZXJTdGF0ZSwgdmFsdWVzOiBteUFycmF5IH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSW5wdXQoKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgaW5wdXRPYmogPSBpbnB1dEJ1aWxkZXJTdGF0ZTtcbiAgICAgICAgc2V0SW5wdXRCdWlsZGVyU3RhdGUoYmxhbmtJbnB1dClcbiAgICAgICAgIHByb3BzLnBhcmVudENhbGxiYWNrKGlucHV0T2JqKVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2V0bGFiZWxcIj5HaXZlIHlvdXIgc2VsZWN0IGJveCBhIGxhYmVsLi4uPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cInNldGxhYmVsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFiZWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEJ1aWxkZXJTdGF0ZS5sYWJlbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dEJ1aWxkZXJTdGF0ZSh7Li4uaW5wdXRCdWlsZGVyU3RhdGUsIGxhYmVsOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgICAgIHsvKiBUT0RPOiBwYXNzIHZhbHVlIC0gb25seSBhZnRlciBkZWNpZGUgd2hlcmUgdGhpcyBsaXN0IG5lZWRzIHRvIGdvICovfVxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbGVtXCI+U2VsZWN0IElucHV0IHR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cImVsZW1cIiBuYW1lPVwiZWxlbVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZCBkaXNhYmxlZCA+Q2hvb3NlIGhlcmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGV4dFwiPlRleHQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VsZWN0XCI+UGhvbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5FbWFpbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICB7LyogV2lsbCBNYW55IG9mIHRoZXNlIGJlIHRoZWlyIG93biBjb21wb25lbnRzPyB3aWxsIGl0IGJlIGluIHRoIG9yaWdpbmFsIHNlbGVjdCBsaXN0PyB3aWxsIGl0IGJlIGluIGFuIFwiYWR2YW5jZWRcIiBsaXN0PyAqL31cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5EYXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+VGltZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPldlZWs8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5Nb250aDwvb3B0aW9uPiBcbiAgICAgICAgICAgICAgICB7LyogV2lsbCBoYXZlIHRvIG5vdGlmeSB1c2VyIGRlZmF1bHQgaXMgMCAtIDEwMCAqL31cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5SYW5nZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPkNvbG9yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+V2Vlazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPldlZWs8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG5cbnsvKiBJIERPTlQgVEhJTksgVEhJUyBJUyBORUNFU1NBUlkgKi99XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZhbHVlc1wiPlNldCB0aGUgdmFsdWVzIGluIHlvdXIgZHJvcGRvd24gc2VsZWN0PHNwYW4gc3R5bGU9e3tmb250U2l6ZTogJy43NXJlbSd9fT4oc2VwYXJhdGUgZWFjaCB2YWx1ZSB3aXRoIGEgY29tbWEpPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBpZD1cImxudmFsdWVzYW1lXCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cInZhbHVlc1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0QnVpbGRlclN0YXRlLnZhbHVlc30gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXRCdWlsZGVyU3RhdGUoey4uLmlucHV0QnVpbGRlclN0YXRlLCB2YWx1ZTogZS50YXJnZXQudmFsdWV9KX0+XG4gICAgXG4gICAgICAgICAgICA8L2lucHV0PlxuXG4gICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPjwvaW5wdXQ+ICovfVxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCk9PnByb3BzLnBhcmVudENhbGxiYWNrKHNlbGVjdEJ1aWxkZXJTdGF0ZSl9PkFkZCArPC9idXR0b24+ICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRJbnB1dH0+QWRkICs8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdi5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xuICBcbn1cbi8vICAgZXhwb3J0IGRlZmF1bHQgU2VsZWN0QnVpbGRlcjsiXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/components/InputBuilder.js */"));
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
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/hello-next/components/LeftBar.js";

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
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/hello-next/components/MyLayout.js";

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

var _jsxFileName = "/Users/taylorpasquariello/learning_resources/hello-next/components/SelectBuilder.js";

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
  }, "input[type=text].jsx-3476175052{padding:12px 20px;margin:8px 0;display:block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-3476175052{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-3476175052:hover{background-color:#45a049;}div.container.jsx-3476175052{border-radius:5px;background-color:#f2f2f2;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvY29tcG9uZW50cy9TZWxlY3RCdWlsZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFYSxBQUdtQyxBQVNQLEFBV2MsQUFJUCxXQWRPLE9BVFosQUF3QlksT0FKN0IsTUFuQmtCLEtBU0YsT0FlQyxFQXZCUyxHQVNKLFFBZXRCLFVBZGlCLENBVEssWUFVTixNQVRVLE1BVUosZ0JBVHRCLEVBVW1CLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvY29tcG9uZW50cy9TZWxlY3RCdWlsZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vVE9ETzogaG9vayB1cCByZXF1aXJlZFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsZWN0QnVpbGRlcihwcm9wcykge1xuXG4vL2Z1bmN0aW9uIGJ1aWxkU2VsZWN0ICgpIHtcbiAgICBjb25zdCBibGFua1NlbGVjdCA9IHtcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgdmFsdWVzOiBbXSxcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH1cbiAgICBjb25zdCBbc2VsZWN0QnVpbGRlclN0YXRlLCBzZXRTZWxlY3RCdWlsZGVyU3RhdGVdID0gdXNlU3RhdGUoYmxhbmtTZWxlY3QpO1xuXG4gICAgLy8gY29uc3QgW3NlbGVjdExpc3QsIHNldFNlbGVjdExpc3RdID0gdXNlU3RhdGUoWy4uLnNlbGVjdEJ1aWxkZXJTdGF0ZV0pO1xuICAgIGNvbnN0IGJsYW5rQ2F0ID0geyBuYW1lOiAnJywgYWdlOiAnJyB9O1xuICBjb25zdCBbc2VsZWN0TGlzdCwgc2V0U2VsZWN0TGlzdF0gPSB1c2VTdGF0ZShbXG4gICAgeyAuLi5zZWxlY3RCdWlsZGVyU3RhdGUgfSxcbiAgXSk7XG4gIFxuLy8gICBjb25zdCBhZGRDYXQgPSAoKSA9PiB7XG4vLyAgICAgc2V0Q2F0U3RhdGUoWy4uLmNhdFN0YXRlLCB7IC4uLmJsYW5rQ2F0IH1dKTtcbi8vICAgfTtcbiAgICAgIFxuXG5cbi8vfSBcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNldFZhbHVlcyhlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICBsZXQgbXlBcnJheSA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCcsJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdteUFycmF5ICcsIG15QXJyYXkpXG4gICAgICAgIHNldFNlbGVjdEJ1aWxkZXJTdGF0ZSh7Li4uc2VsZWN0QnVpbGRlclN0YXRlLCB2YWx1ZXM6IG15QXJyYXkgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTZWxlY3QoKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2VsZWN0T2JqID0gc2VsZWN0QnVpbGRlclN0YXRlO1xuICAgICAgICBzZXRTZWxlY3RCdWlsZGVyU3RhdGUoYmxhbmtTZWxlY3QpXG4gICAgICAgIHByb3BzLnBhcmVudENhbGxiYWNrKHNlbGVjdE9iailcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0TGlzdClcbiAgICB9XG4gIFxuICAgIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNldGxhYmVsXCI+R2l2ZSB5b3VyIHNlbGVjdCBib3ggYSBsYWJlbC4uLjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzZXRsYWJlbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0QnVpbGRlclN0YXRlLmxhYmVsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlbGVjdEJ1aWxkZXJTdGF0ZSh7Li4uc2VsZWN0QnVpbGRlclN0YXRlLCBsYWJlbDogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvaW5wdXQ+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmFsdWVzXCI+U2V0IHRoZSB2YWx1ZXMgaW4geW91ciBkcm9wZG93biBzZWxlY3Q8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAnLjc1cmVtJ319PihzZXBhcmF0ZSBlYWNoIHZhbHVlIHdpdGggYSBjb21tYSk8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIGlkPVwibG52YWx1ZXNhbWVcIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwidmFsdWVzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0QnVpbGRlclN0YXRlLnZhbHVlc30gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlU2V0VmFsdWVzKGUpfT48L2lucHV0PlxuXG4gICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPjwvaW5wdXQ+ICovfVxuICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCk9PnByb3BzLnBhcmVudENhbGxiYWNrKHNlbGVjdEJ1aWxkZXJTdGF0ZSl9PkFkZCArPC9idXR0b24+ICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRTZWxlY3R9PkFkZCArPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXYuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbiAgXG59XG4vLyAgIGV4cG9ydCBkZWZhdWx0IFNlbGVjdEJ1aWxkZXI7Il19 */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/components/SelectBuilder.js */"));
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



var _jsxFileName = "/Users/taylorpasquariello/learning_resources/hello-next/pages/form_builder.js";

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
  }, "input[type=text].jsx-256686956,select.jsx-256686956{padding:12px 20px;margin:8px 0;display:block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-256686956{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-256686956:hover{background-color:#45a049;}div.container.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;}.elemContainer.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;margin:10px;}.flex-grid.jsx-256686956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.col.jsx-256686956{width:100%;}@media (max-width:700px){.flex-grid.jsx-256686956{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvZm9ybV9idWlsZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZSSyxBQUcyQixBQVNQLEFBV2MsQUFJUCxBQU1GLEFBT0wsQUFLRixBQU1LLFdBdENXLEFBa0M3QixHQUtFLElBaERlLEFBd0JZLEFBTUYsT0FWM0IsTUFuQmtCLEtBU0YsT0FlQyxBQU1GLEVBN0JXLEdBU0osUUFldEIsQUFNYyxVQXBCRyxDQVRLLENBOEJ0QixNQUlnQyxLQXhCaEIsTUFUVSxNQVVKLGdCQVR0QixFQVVtQixlQUNuQixpRUF1QkEiLCJmaWxlIjoiL1VzZXJzL3RheWxvcnBhc3F1YXJpZWxsby9sZWFybmluZ19yZXNvdXJjZXMvaGVsbG8tbmV4dC9wYWdlcy9mb3JtX2J1aWxkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MZWZ0QmFyJztcbmltcG9ydCBTZWxlY3RCdWlsZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0QnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRCdWlsZGVyJztcblxuaW1wb3J0IEZvcm1TYW5kQm94IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVNhbmRCb3gnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IHsgcmVzZXRTZXJ2ZXJDb250ZXh0IH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG4vLyAuLi5cblxucmVzZXRTZXJ2ZXJDb250ZXh0KCk7XG5yZW5kZXJUb1N0cmluZyhGb3JtX0J1aWxkZXIpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCByZW9yZGVyID0gKGxpc3QsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20obGlzdCk7XG4gIGNvbnN0IFtyZW1vdmVkXSA9IHJlc3VsdC5zcGxpY2Uoc3RhcnRJbmRleCwgMSk7XG4gIHJlc3VsdC5zcGxpY2UoZW5kSW5kZXgsIDAsIHJlbW92ZWQpO1xuICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybV9CdWlsZGVyKCkge1xuXG5cblxuY29uc3QgYmxhbmtJbnB1dFRlc3QgPSB7XG4gIHR5cGU6ICd0ZXh0JyxcbiAgbGFiZWw6ICcnLFxuICB2YWx1ZTogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgcGxhY2hvbGRlcjogJycsXG59IFxuXG5jb25zdCBbYnV0dG9uVmFsdWUsIHNldEJ1dHRvblZhbHVlXSA9IHVzZVN0YXRlKClcbmNvbnN0IFtlbnRlcmVkLCBzZXRFbnRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IFt1cCwgc2V0VXBdID0gdXNlU3RhdGUoZmFsc2UpXG5jb25zdCBbaXNNb3VzZUluc2lkZSwgc2V0SXNNb3VzZUluc2lkZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuZnVuY3Rpb24gbW91c2VEb3duKGUpe1xuICBjb25zb2xlLmxvZygnZHVkZScsIGUpXG5cbiAgc2V0QnV0dG9uVmFsdWUoYmxhbmtJbnB1dFRlc3QpO1xuICAvLyBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyID0gXCJkYXNoZWRcIjtcblxuICAvLyBTZXQgdGhlIGRyYWcncyBmb3JtYXQgYW5kIGRhdGEuIFVzZSB0aGUgZXZlbnQgdGFyZ2V0J3MgaWQgZm9yIHRoZSBkYXRhIFxuICAvL2UuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmlkKTsgIC8vIGdyYWIgdGhlIGVsZW1lbnQgXG4gIC8vIHNldHN0YXRlIGZvciBzZWxlY3RlZEl0ZW0gdG8gYmxhbmsgdmVyc2lvblxuICBjb25zb2xlLmxvZygnYnV0dG9uVmFsdWUnLCBidXR0b25WYWx1ZSlcbn1cblxuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgc2V0QnV0dG9uVmFsdWUoYmxhbmtJbnB1dFRlc3QpO1xuXG4gIGNvbnNvbGUubG9nKCdvaCcpXG4gIGV2ZW50XG4gICAgLmRhdGFUcmFuc2ZlclxuICAgIC5zZXREYXRhKCd0ZXh0L3BsYWluJywgZXZlbnQudGFyZ2V0LmlkKTtcbn1cblxuZnVuY3Rpb24gZHJhZ092ZXIoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuXG5mdW5jdGlvbiBkcm9wKGV2ZW50KSB7XG4gIHNldFNlbGVjdExpc3QoWy4uLnNlbGVjdExpc3QsIHsgLi4uYmxhbmtJbnB1dFRlc3QgfV0pO1xuICBzZXRCdXR0b25WYWx1ZSgpXG4gIC8vIGNvbnN0IGlkID0gZXZlbnRcbiAgLy8gICAuZGF0YVRyYW5zZmVyXG4gIC8vICAgLmdldERhdGEoJ3RleHQnKTtcblxuICAvLyBjb25zdCBkcmFnZ2FibGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAvLyBjb25zdCBkcm9wem9uZSA9IGV2ZW50LnRhcmdldDtcbiAgXG4gIC8vIGRyb3B6b25lLmFwcGVuZENoaWxkKGRyYWdnYWJsZUVsZW1lbnQpO1xuXG4gIGV2ZW50XG4gICAgLmRhdGFUcmFuc2ZlclxuICAgIC5jbGVhckRhdGEoKTtcbn1cblxuXG5cbmZ1bmN0aW9uIG1vdXNlRW50ZXIoYnV0dG9uVmFsdWUpIHtcbiAgc2V0SXNNb3VzZUluc2lkZSh0cnVlKVxuICBjb25zb2xlLmxvZygnaGVsbG8nLCB1cClcbiAgLy8gc2V0U2VsZWN0TGlzdChbLi4uc2VsZWN0TGlzdCwgeyAuLi5ibGFua0lucHV0VGVzdCB9XSk7XG4gIC8vIGlmIChpc01vdXNlSW5zaWRlICl7XG4gIC8vICAgY29uc29sZS5sb2coJ2hlbGxvJylcbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBtb3VzZUxlYXZlKCkge1xuICBzZXRJc01vdXNlSW5zaWRlKGZhbHNlKVxufVxuXG5mdW5jdGlvbiBtb3VzZVVwKCl7XG4gIFxuICBpZihpc01vdXNlSW5zaWRlICYmIGJ1dHRvblZhbHVlKXtcbiAgICAgIHNldFNlbGVjdExpc3QoWy4uLnNlbGVjdExpc3QsIHsgLi4uYmxhbmtJbnB1dFRlc3QgfV0pO1xuICAgICAgc2V0QnV0dG9uVmFsdWUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGVudGVyaW5nKGUpIHtcbiAgY29uc29sZS5sb2coJ2luIHlvdScsIGUpXG4gIGlmIChidXR0b25WYWx1ZSAmJiAodXAgPT0gdHJ1ZSkgKXtcbiAgICBjb25zb2xlLmxvZygnVVAnKVxuICB9IFxufVxuICBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgc3VwZXIocHJvcHMpO1xuLy8gICB0aGlzLnN0YXRlID0ge1xuLy8gICAgIGl0ZW1zOiBnZXRJdGVtcygxMClcbi8vICAgfTtcbi8vICAgdGhpcy5vbkRyYWdFbmQgPSB0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpO1xuLy8gfVxuXG5jb25zdCBbaXRlbXMsIHNldEl0ZW1dID0gdXNlU3RhdGUoW10pXG5cbmNvbnN0IHJlb3JkZXIgPSAobGlzdCwgc3RhcnRJbmRleCwgZW5kSW5kZXgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gQXJyYXkuZnJvbShsaXN0KTtcbiAgY29uc3QgW3JlbW92ZWRdID0gcmVzdWx0LnNwbGljZShzdGFydEluZGV4LCAxKTtcbiAgcmVzdWx0LnNwbGljZShlbmRJbmRleCwgMCwgcmVtb3ZlZCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5mdW5jdGlvbiBvbkRyYWdFbmQocmVzdWx0KSB7XG4gIC8vIGRyb3BwZWQgb3V0c2lkZSB0aGUgbGlzdFxuICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zID0gcmVvcmRlcihcbiAgICBzZWxlY3RMaXN0LFxuICAgIC8vdGhpcy5zdGF0ZS5pdGVtcyxcbiAgICByZXN1bHQuc291cmNlLmluZGV4LFxuICAgIHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleFxuICApO1xuICBzZXRTZWxlY3RMaXN0KFsuLi5pdGVtc10pXG4gIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgIGl0ZW1zXG4gIC8vIH0pO1xufVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgW2VsZW0sIHNldEVsZW1dID0gdXNlU3RhdGUoW10pOyBcblxuICAgIGNvbnN0IFtzZWxlY3RMaXN0LCBzZXRTZWxlY3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVsZW1TZWxlY3QoZSl7XG4gICAgICBzZXRFbGVtKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgY29uc29sZS5sb2coJ1RBWUxPUicsZSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbXljYWxsYmFjayh2YWwpe1xuICAgICAgY29uc29sZS5sb2coJ0NMSUNLRUQgTUUnLCB2YWwpXG4gICAgICAvLyBzZXRFbGVtKFsuLi5lbGVtLCB7Li4udmFsfV0pXG4gICAgICAvLyBzZXRTZWxlY3RMaXN0KHsuLi5zZWxlY3RMaXN0LCAuLi52YWwgfSk7XG4gICAgICBzZXRTZWxlY3RMaXN0KFsuLi5zZWxlY3RMaXN0LCB7IC4uLnZhbCB9XSk7XG4gICAgICBcbiAgICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHZhbHVlIGluIHBhcmVudCBjb21wb25lbnQsIGxpa2Ugc2F2ZSB0byBzdGF0ZVxuICAgIH1cblxuXG5cbiAgICAvLyB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKTtcbiAgICAvLyB2YXIgc29ydGFibGUgPSBTb3J0YWJsZS5jcmVhdGUoZWwpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8TGF5b3V0PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JpZFwiPlxuPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgIDxMZWZ0QmFyPlxuICAgICAgICB7LypUT0RPIC0gc3RhcnQgaG9va2luZyB0aGVzZSB1cCEgICovfVxuICAgICAgPGg0Pi1CYXNpYyBPcHRpb25zLTwvaDQ+XG4gICAgICAgIDxidXR0b24gaWQ9XCJteVRleHRJbnB1dEJ1dHRvblwiIGRyYWdnYWJsZT1cInRydWVcIiBvbkRyYWdTdGFydD17ZHJhZ1N0YXJ0fSBvbk1vdXNlRG93bj17KGUpPT5tb3VzZURvd24oZSl9Pk5hbWUgRmllbGQ8L2J1dHRvbj4gXG4gICAgICAgIDxidXR0b24+TG9uZyBBbnN3ZXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbj5CYXNpYyBJbnB1dDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uPk51bWJlcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uPkRyb3Bkb3duIExpc3Q8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbj5DaGVja2JveDwvYnV0dG9uPlxuPGhyPjwvaHI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWxlbVwiPk5ldyBFbGVtZW50PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBpZD1cImVsZW1cIiBuYW1lPVwiZWxlbVwiIG9uQ2hhbmdlPXtoYW5kbGVFbGVtU2VsZWN0fT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQgPkNob29zZSBoZXJlPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRleHRcIj5UZXh0IElucHV0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPlNlbGVjdCBEcm9wZG93bjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPkNoZWNrYm94PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICA8aDQ+LUFkdmFuY2VkIE9wdGlvbnMtPC9oND5cbiAgIFxuXG4gICAgICAgIHsvKiBUT0RPISByZW5hbWUgcGFyZW50Q2FsbGJhY2sgKi99XG4gICAgICAgIHsoZWxlbSA9PT0gJ3NlbGVjdCcgPyA8U2VsZWN0QnVpbGRlciBwYXJlbnRDYWxsYmFjaz17bXljYWxsYmFja30+PC9TZWxlY3RCdWlsZGVyPiA6IG51bGwpfVxuICAgICAgICB7KGVsZW0gPT09ICd0ZXh0JyA/IDxJbnB1dEJ1aWxkZXIgcGFyZW50Q2FsbGJhY2s9e215Y2FsbGJhY2t9PjwvSW5wdXRCdWlsZGVyPiA6IG51bGwpfVxuXG4gICAgICAgIFxuICAgICAgPC9MZWZ0QmFyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiICBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJ9IG9uTW91c2VMZWF2ZT17bW91c2VMZWF2ZX0gb25Nb3VzZVVwPXttb3VzZVVwfSBvbkRyYWdPdmVyPXtkcmFnT3Zlcn0gb25Ecm9wPXtkcm9wfT5cblxuPEZvcm1TYW5kQm94PlxuPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0U2VsZWN0TGlzdChbXSl9Png8L2J1dHRvbj5cbjxidXR0b24+PzwvYnV0dG9uPiB7LyogVE9ETyAtIGFkZCBpbiB0b29sIHRpcCAuLi4gbWF5YmUgbGluaywgb24gaG92ZXIqL31cbnsvKiBSRU9SREVSIFNUQVJUICovfVxuIHsvKiB7KGVsZW0gPT09ICdzZWxlY3QnID8gKi99XG48RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cbiAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiPlxuICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cbiAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgICAgLy8gc3R5bGU9e2dldExpc3RTdHlsZShzbmFwc2hvdC5pc0RyYWdnaW5nT3Zlcil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZWxlY3RMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17aW5kZXh9IGRyYWdnYWJsZUlkPXtgZHJhZ2dhYmxlJHtpbmRleH1gfSBpbmRleD17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e2dldEl0ZW1TdHlsZShcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIHNuYXBzaG90LmlzRHJhZ2dpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICBwcm92aWRlZC5kcmFnZ2FibGVQcm9wcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgIC8vICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Lyoge2l0ZW19ICovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntpdGVtLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgeyhpdGVtLnZhbHVlcyA/IFxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJlbGVtXCIgbmFtZT1cImVsZW1cIiBvbkNoYW5nZT17aGFuZGxlRWxlbVNlbGVjdH0+XG4gICAgICAgICAgICB7aXRlbS52YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj57dmFsdWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSl9IFxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDogPGlucHV0IHR5cGU9e2l0ZW0udHlwZX0gPjwvaW5wdXQ+ICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgey8qICAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgICAgIHsvKiA6IG51bGwpfSAqL31cblxuICAgICAgPC9Gb3JtU2FuZEJveD5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbnsvKiBSRU9SREVSIEVORCAqL31cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICB7YFxuICAgIGlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbiAgICB9XG5cbiAgICBkaXYuY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cblxuICAgIC5lbGVtQ29udGFpbmVyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZmxleC1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICB9XG4gICAgLmNvbCB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgLmZsZXgtZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgICBgfVxuPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/pages/form_builder.js */")));
}

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/form_builder.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taylorpasquariello/learning_resources/hello-next/pages/form_builder.js */"./pages/form_builder.js");


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