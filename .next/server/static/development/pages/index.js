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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/hello-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // function getPosts() {
//   return [
//     { id: 'hello-nextjs', title: 'Hello Next.js' },
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
//   ];
// }

function Blog() {
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
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    id: "mydiv",
    style: {
      width: '100%',
      height: '700px'
    },
    onMouseEnter: () => console.log('hi'),
    className: "jsx-4044568645" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
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
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: "6em",
      margin: "0 0 10px 0"
    },
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "PASEON"), __jsx("p", {
    style: {
      fontSize: '1.2em'
    },
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"), __jsx("button", {
    className: "jsx-4044568645" + " " + "action-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "LEARN MORE")), __jsx("div", {
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 500 150",
    preserveAspectRatio: "none",
    style: {
      height: '100%',
      width: '100%'
    },
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("linearGradient", {
    id: "gradient",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%",
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("stop", {
    offset: "0%",
    style: {
      stopColor: "#f83600"
    },
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("stop", {
    offset: "100%",
    style: {
      stopColor: "#f9d423"
    },
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))), __jsx("g", {
    fill: "url(#gradient)",
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("path", {
    d: " M0,120 C200,100 300,150 500,140 L500,0 L0,0 Z ",
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, " "))))), __jsx("div", {
    style: {
      width: '70%',
      marginLeft: '15%'
    },
    className: "jsx-4044568645" + " " + "grid-container grid-container--fill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4044568645" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "1 ro eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"), __jsx("div", {
    className: "jsx-4044568645" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "2 ro eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"), __jsx("div", {
    className: "jsx-4044568645" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "3 ro eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"), __jsx("div", {
    className: "jsx-4044568645" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "4 ro eos et accusamus et iusto odio dignissimos ducimus qui blanditiis")), __jsx("div", {
    style: {
      marginTop: '200px',
      height: '650px',
      border: '1px solid black',
      width: '80%',
      marginLeft: '10%'
    },
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx("div", {
    style: {
      margin: '200px 0 0 0',
      height: '300px',
      width: '100%',
      backgroundImage: "linear-gradient(to right, #f9d423 0%, #f83600 100%)"
    },
    className: "jsx-4044568645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4044568645",
    __self: this
  }, ".action-button.jsx-4044568645{background-color:Transparent;background-repeat:no-repeat;cursor:pointer;padding:20px;color:white;font-weight:heavy;border:3px solid white;overflow:hidden;outline:none;background:linear-gradient(to right,#fff 0%,#fff 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.action-button.jsx-4044568645:hover{background-position:0 0;color:black;}.grid-container.jsx-4044568645{display:grid;}.grid-container--fill.jsx-4044568645{grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.grid-container--fit.jsx-4044568645{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));}.grid-element.jsx-4044568645{background-color:#E3E3E3;padding:50px;color:#fff;border:1px solid #fff;}.header.jsx-4044568645{grid-area:header;}.innerContainer.jsx-4044568645{position:absolute;top:0;width:100%;}svg.jsx-4044568645{display:inline-block;position:absolute;top:0;left:0;z-index:-1;}.container.jsx-4044568645{display:inline-block;position:relative;width:100%;padding-bottom:100%;vertical-align:middle;overflow:hidden;}h1.jsx-4044568645,a.jsx-4044568645{font-family:'Arial';}ul.jsx-4044568645{padding:0;}li.jsx-4044568645{list-style:none;margin:5px 0;}a.jsx-4044568645{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-4044568645:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0drQixBQUtnQyxBQW1CTixBQU1WLEFBSStDLEFBSUQsQUFJcEMsQUFVTixBQUlBLEFBS0ksQUFTQSxBQVdPLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLENBckVSLEdBMkR1QixDQXJDdkIsQ0FJTyxFQXlCQyxDQXBCWSxBQVNBLEdBOUNOLEFBaUNGLENBZkMsSUFyQ2dCLEFBcUZyQixNQWhDUixDQWhDQSxFQWlCVyxDQW1CSCxBQVNLLE1BUkosSUFuQmEsQ0E0QkEsQUFzQkQsRUE5QlIsS0ExREcsQUFnQ2hCLENBSkEsR0E2RFEsRUE5QlIsT0FRd0IsQ0E1QnhCLENBdENlLGFBQ0QsT0FrRUksS0FqRUUsV0FrRXBCLE9BakV5Qix1QkFDUCxnQkFDSixhQUMrRSx1RkFFakUsMEJBQ0MsMkJBQ1MsZ0ZBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4vLyAgIHJldHVybiBbXG4vLyAgICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcbi8vICAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4vLyAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxuLy8gICBdO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuXG4gXG4gIGZ1bmN0aW9uIGluaXREaXZNb3VzZU92ZXIoKSAgIHtcbiAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlkaXZcIik7XG4gICAgIGRpdi5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICBkaXYub25tb3VzZW92ZXIgPSBmdW5jdGlvbigpICAge1xuICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gdHJ1ZTtcbiAgICAgfTtcbiAgICAgZGl2Lm9ubW91c2VvdXQgPSBmdW5jdGlvbigpICAge1xuICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gZmFsc2U7XG4gICAgIH1cbiAgICAgZGl2Lm9uY2xpY2sgPSBmdW5jdGlvbigpICAge1xuICAgICAgICBpZiAodGhpcy5tb3VzZUlzT3ZlcikgICB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlIScpXG4gICAgICAgIH1cbiAgICAgfVxuICB9XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cblxuXG4gICAgICB7LyogICovfVxuICAgICAgey8qIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzUwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyQ29udGFpbmVyXCI+PGgxPkhlbGxvPC9oMT48L2Rpdj5cbiAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUwMCA1MDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pbllNaW4gbWVldFwiPlxuICAgIDxwYXRoIGQ9XCJNMCwyMDAgQzI1MCwzMDAgMzUwLDAgNjAwLDMwMCBMNTAwLDAwIEwwLDAgWjBcIiBzdHlsZT17e3N0cm9rZTogJ25vbmUnLCBmaWxsOidyZWQnfX0+PC9wYXRoPlxuICA8L3N2Zz5cbjwvZGl2PlxuPC9kaXY+ICovfVxuPGRpdiBpZD1cIm15ZGl2XCIgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonNzAwcHgnfX0gb25Nb3VzZUVudGVyPXsoKT0+Y29uc29sZS5sb2coJ2hpJyl9PlxuXG48ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpbjogJzUwcHggMCAzMHB4IDMwcHgnLCBjb2xvcjogJ3doaXRlJywgd2lkdGg6ICc0MCUnLCBwYWRkaW5nOiAnMjBweCd9fT5cbjxoMSBzdHlsZT17e2ZvbnRTaXplOiBcIjZlbVwiLCBtYXJnaW46XCIwIDAgMTBweCAwXCJ9fT5QQVNFT048L2gxPlxuPHAgIHN0eWxlPXt7Zm9udFNpemU6ICcxLjJlbSd9fT5BdCB2ZXJvIGVvcyBldCBhY2N1c2FtdXMgZXQgaXVzdG8gb2RpbyBkaWduaXNzaW1vcyBkdWNpbXVzIHF1aSBibGFuZGl0aWlzIHByYWVzZW50aXVtIHZvbHVwdGF0dW0gZGVsZW5pdGkgYXRxdWUgY29ycnVwdGkgcXVvcyBkb2xvcmVzIGV0IHF1YXMgbW9sZXN0aWFzIGV4Y2VwdHVyaSBzaW50IG9jY2FlY2F0aSBjdXBpZGl0YXRlIG5vbiBwcm92aWRlbnQ8L3A+XG48YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25cIj5MRUFSTiBNT1JFPC9idXR0b24+XG48L2Rpdj5cbjxkaXY+XG4gIDxzdmcgdmlld0JveD1cIjAgMCA1MDAgMTUwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiBzdHlsZT17e2hlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnLH19PlxuICA8ZGVmcz5cbiAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudFwiIHgxPVwiMCVcIiB5MT1cIjAlXCIgeDI9XCIxMDAlXCIgeTI9XCIwJVwiPlxuXHQgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3R5bGU9e3tzdG9wQ29sb3I6XCIjZjgzNjAwXCJ9fSAvPlxuXHQgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdHlsZT17e3N0b3BDb2xvcjpcIiNmOWQ0MjNcIn19IC8+XG4gICAgPC9saW5lYXJHcmFkaWVudD5cbiAgPC9kZWZzPlxuICA8ZyBmaWxsPVwidXJsKCNncmFkaWVudClcIj5cblxuICAgIDxwYXRoIGQ9XCIgTTAsMTIwIEMyMDAsMTAwIDMwMCwxNTAgNTAwLDE0MCBMNTAwLDAgTDAsMCBaIFwiID4gPC9wYXRoPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4gIFxuPC9kaXY+XG5cbiBcbjwvZGl2PlxuXG5cblxuPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBncmlkLWNvbnRhaW5lci0tZmlsbFwiIHN0eWxlPXt7d2lkdGg6ICc3MCUnLCBtYXJnaW5MZWZ0OicxNSUnfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG4gICAgMSBybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cyBxdWkgYmxhbmRpdGlpc1xuICA8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnRcIj5cbiAgICAyIHJvIGVvcyBldCBhY2N1c2FtdXMgZXQgaXVzdG8gb2RpbyBkaWduaXNzaW1vcyBkdWNpbXVzIHF1aSBibGFuZGl0aWlzXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgIDMgcm8gZW9zIGV0IGFjY3VzYW11cyBldCBpdXN0byBvZGlvIGRpZ25pc3NpbW9zIGR1Y2ltdXMgcXVpIGJsYW5kaXRpaXNcbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG4gICAgNCBybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cyBxdWkgYmxhbmRpdGlpc1xuICA8L2Rpdj5cblxuPC9kaXY+XG5cblxuPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzIwMHB4JywgaGVpZ2h0OiAnNjUwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCB3aWR0aDogJzgwJScsIG1hcmdpbkxlZnQ6JzEwJSd9fT5cblxuPC9kaXY+XG5cbjxkaXYgc3R5bGU9e3ttYXJnaW46ICcyMDBweCAwIDAgMCcsIGhlaWdodDogJzMwMHB4Jywgd2lkdGg6ICcxMDAlJyxiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjlkNDIzIDAlLCAjZjgzNjAwIDEwMCUpXCJ9fT5cblxuPC9kaXY+XG57LyogTTAsMTgwIEMyNTAsNDAwIDM1MCwwIDYwMCwzMjAgTDUwMCwwMCBMMCwwIFowICovfVxuXG57LyogTTAuMDAsMTAwLjI3IEMyMTYuODMsMjQwIDMwNC4zMCw4LjM5IDUwMC4wMCwxMDkuMDMgTDUwMC4wMCwwLjAwIEwwLjAwLDAuMDAgWiAqL31cblxuey8qIE0wLDIwMCBDMjUwLDMwMCAzNTAsMCA2MDAsMzAwIEw1MDAsMDAgTDAsMCBaMCAqL31cbiAgICAgIHsvKiA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+ICovfVxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4vLyBcbi5hY3Rpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGhlYXZ5O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTpub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYgMCUsICNmZmYgNTAlLCBUcmFuc3BhcmVudCA1MCUsIFRyYW5zcGFyZW50IDEwMCUpO1xuXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcztcbn1cblxuXG5cbi5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjowIDA7XG4gIGNvbG9yOiBibGFjaztcblxufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uZ3JpZC1jb250YWluZXItLWZpbGwge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG59XG5cbi5ncmlkLWNvbnRhaW5lci0tZml0IHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG59XG5cbi5ncmlkLWVsZW1lbnQge1xuYmFja2dyb3VuZC1jb2xvcjogI0UzRTNFMztcbnBhZGRpbmc6IDUwcHg7XG5jb2xvcjogI2ZmZjtcbmJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG5cblxuXG5cbi5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cblxuLmlubmVyQ29udGFpbmVye1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIHdpZHRoOjEwMCU7XG59XG5zdmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4gICAgICAgIGgxLFxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/pages/index.js */"));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taylorpasquariello/learning_resources/hello-next/pages/index.js */"./pages/index.js");


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