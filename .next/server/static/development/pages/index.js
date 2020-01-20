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

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Footer() {
  return (//eventually will need: position: 'absolute', bottom: '0' to keep footer where it needs to ne as well as min height 100vh but right now pricing page table breaks
    __jsx("div", {
      style: {
        margin: '200px 0 0 0',
        height: '300px',
        width: '100%',
        backgroundImage: "linear-gradient(to right, #f9d423 0%, #f83600 100%)"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    })
  );
}
;

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


class Header extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      isActive: false
    });
  }

  toggleClass() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("nav", {
      className: "jsx-3793029580" + " " + "navbar navbar-expand-lg navbar-light static-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3793029580" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "LOGO")), __jsx("button", {
      onClick: () => this.toggleClass(),
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarTogglerDemo01",
      "aria-controls": "navbarTogglerDemo01",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      className: "jsx-3793029580" + " " + "navbar-toggler",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("span", {
      style: {
        padding: '2px'
      },
      className: "jsx-3793029580" + " " + ((this.state.isActive ? 'active' : '') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3793029580" + " " + "toggle-btn type11",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }))), __jsx("div", {
      id: "navbarTogglerDemo01",
      className: "jsx-3793029580" + " " + "collapse navbar-collapse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("ul", {
      className: "jsx-3793029580" + " " + "navbar-nav ml-auto mt-2 mt-lg-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-3793029580" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3793029580" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "HOME"))), __jsx("li", {
      className: "jsx-3793029580" + " " + "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3793029580" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "ABOUT"))), __jsx("li", {
      className: "jsx-3793029580" + " " + "nav-item ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3793029580" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "FORM BUILDER"))), __jsx("li", {
      className: "jsx-3793029580" + " " + "nav-item ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/pricing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3793029580" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "PRICING"))), __jsx("li", {
      className: "jsx-3793029580" + " " + "nav-item ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3793029580" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "FREE/BASIC FORMS"))), __jsx("li", {
      className: "jsx-3793029580" + " " + "nav-item ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3793029580" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "LOGIN")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3793029580",
      __self: this
    }, ".cta.jsx-3793029580{height:50px;width:50px;cursor:pointer;}.toggle-btn.jsx-3793029580{height:2px;width:25px;background-color:#fff;position:relative;top:50%;left:0;margin:auto;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.toggle-btn.jsx-3793029580:before{content:\"\";height:2px;width:25px;box-shadow:0 -10px 0 0 #fff;position:absolute;top:0;left:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.toggle-btn.jsx-3793029580:after{content:\"\";height:2px;width:25px;box-shadow:0 10px 0 0 #fff;position:absolute;top:0;left:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.active.jsx-3793029580 .toggle-btn.jsx-3793029580{background-color:transparent;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.active.jsx-3793029580 .toggle-btn.jsx-3793029580:before{top:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.active.jsx-3793029580 .toggle-btn.jsx-3793029580:after{top:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.active.jsx-3793029580 .type11.jsx-3793029580{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all 0.4s ease-in-out;transition:all 0.4s ease-in-out;}.active.jsx-3793029580 .type11.jsx-3793029580:before{-webkit-transform:translateY(0) rotate(40deg);-ms-transform:translateY(0) rotate(40deg);transform:translateY(0) rotate(40deg);}.active.jsx-3793029580 .type11.jsx-3793029580:after{-webkit-transform:translateY(0) rotate(-40deg);-ms-transform:translateY(0) rotate(-40deg);transform:translateY(0) rotate(-40deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0ZZLEFBS2UsQUFLRCxBQVNFLEFBU0EsQUFVZ0IsQUFHckIsQUFHQSxBQUlnQixBQUdnQixBQUVDLE1BWFAsQUFHQSxLQWxDdkIsQUFTRSxBQVNBLENBdkJGLFVBTVcsQUFTVCxBQVNBLENBdkJFLE1BZ0NpQixJQWpCRixBQVNELEtBeEJiLE1BTUUsZ0JBbUJFLENBVEEsQ0FUWixRQUNELE9BQ0ssQ0FpQkosQUFTMkIsQUFHQSxDQXJCM0IsS0FVQyxBQWV1QixDQXhCdkIsSUFSdUIsRUFrQkUsQ0FUQSxTQWFELHlCQVlRLEdBRUMsMkJBSlQsS0FoQ0EsRUFrQkUsQ0FUQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL2xlYXJuaW5nX3Jlc291cmNlcy9wYXNlb24vcGFzZW9uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuICBzdGF0ZSA9IHtcbiAgICBpc0FjdGl2ZTogZmFsc2VcbiAgfVxuICB0b2dnbGVDbGFzcygpIHtcbiAgICBcbiAgICB0aGlzLnNldFN0YXRlKHtpc0FjdGl2ZTogIXRoaXMuc3RhdGUuaXNBY3RpdmV9KVxuICB9XG5cbnJlbmRlcigpe1xucmV0dXJuIChcbjw+XG5cblxuey8qIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4MzYwMCAwJSwgI2Y5ZDQyMyAxMDAlKVwiLCBjb2xvcjogJyNmZmYnfX0gKi99XG48bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBzdGF0aWMtdG9wXCI+XG4gIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJUb2dnbGVyRGVtbzAxXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclRvZ2dsZXJEZW1vMDFcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICA8L2J1dHRvbj4gKi99XG5cblxuICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkxPR088L2E+XG4gIDwvTGluaz4gXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlQ2xhc3MoKX0+ICovfVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVDbGFzcygpfSB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclRvZ2dsZXJEZW1vMDFcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyVG9nZ2xlckRlbW8wMVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNBY3RpdmUgPyAnYWN0aXZlJyA6ICcnfSBzdHlsZT17e3BhZGRpbmc6ICcycHgnfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtYnRuIHR5cGUxMVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyVG9nZ2xlckRlbW8wMVwiPlxuICBcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvIG10LTIgbXQtbGctMFwiPlxuICBcbiAgICAgIFxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5IT01FPC9hPlxuICAgICAgPC9MaW5rPiAgICBcbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QUJPVVQ8L2E+XG4gICAgICAgIDwvTGluaz4gICAgXG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+Rk9STSBCVUlMREVSPC9hPlxuICAgICAgICA8L0xpbms+ICAgIFxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcHJpY2luZ1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlBSSUNJTkc8L2E+XG4gICAgICA8L0xpbms+ICAgIFxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+RlJFRS9CQVNJQyBGT1JNUzwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gXCI+XG4gICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+TE9HSU48L2E+XG4gICAgICA8L0xpbms+ICAgICBcbiAgICAgIDwvbGk+XG5cblxuICAgIDwvdWw+XG5cbiAgPC9kaXY+XG48L25hdj5cblxuPHN0eWxlIGpzeD57YFxuICBcbiBcbi5jdGEge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnRvZ2dsZS1idG4ge1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7IH1cbiAgLnRvZ2dsZS1idG46YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgLTEwcHggMCAwICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0OyB9XG4gIC50b2dnbGUtYnRuOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAwIDAgI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7IH1cblxuLmFjdGl2ZSAudG9nZ2xlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDsgfVxuICAuYWN0aXZlIC50b2dnbGUtYnRuOmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0OyB9XG4gIC5hY3RpdmUgLnRvZ2dsZS1idG46YWZ0ZXIge1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDsgfVxuXG4uYWN0aXZlIC50eXBlMTEge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0OyB9XG4gIC5hY3RpdmUgLnR5cGUxMTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNDBkZWcpOyB9XG4gIC5hY3RpdmUgLnR5cGUxMTphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNDBkZWcpOyB9XG5cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG5cblxuPC8+XG4gICl9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/paseon/paseon/components/Header.js */"));
  }

}

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/components/MyLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD',
// };

const Layout = props => __jsx("div", {
  id: "myLayout",
  className: "jsx-1300707653",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-1300707653",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1300707653",
  __self: undefined
}, "#myLayout.jsx-1300707653{height:100%;width:100%;overflow-x:hidden;position:relative;min-height:100vh;}p.jsx-1300707653{font-family:'Montserrat',sans-serif;}h1.jsx-1300707653 h2.jsx-1300707653 h3.jsx-1300707653{font-family:'Roboto',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vY29tcG9uZW50cy9NeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ08sQUFLcUIsQUFReUIsQUFHSixZQVZ0QixXQUNNLFNBVW5CLElBSEEsS0FOb0Isa0JBQ0QsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vY29tcG9uZW50cy9NeUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG4vLyBjb25zdCBsYXlvdXRTdHlsZSA9IHtcbi8vICAgbWFyZ2luOiAyMCxcbi8vICAgcGFkZGluZzogMjAsXG4vLyAgIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyxcbi8vIH07XG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcblxuICA8ZGl2IGlkPSdteUxheW91dCc+XG4gICAgIHsvKiA8SGVhZD4gKi99XG4gICAgICAgICAgey8qIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdHxSb2JvdG8mZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cblxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAqL31cbnsvKiBcbiAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgIFBhc2VvblxuICAgICAgICAgIDwvdGl0bGU+ICovfVxuICAgICAgICB7LyogPC9IZWFkPiAqL31cbiAgICA8SGVhZGVyIC8+XG4gICAgPGRpdj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG48Rm9vdGVyLz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcblxuXG4gICAgICAjbXlMYXlvdXQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdy14OmhpZGRlbjsgXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAgXG4gICAgICB9XG4gICAgICBoMSBoMiBoMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/paseon/paseon/components/MyLayout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

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

      var cb = listeners.get(entry.target);

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

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

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
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
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

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
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
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

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
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


var createRouter = function createRouter() {
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
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

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

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Index() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%',
      position: 'relative',
      height: '700px',
      marginBottom: '200px'
    },
    className: "jsx-2458442190" + " " + "headerContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    className: "jsx-2458442190" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2458442190" + " " + "justify-content-md-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2458442190" + " " + "headerText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "PASEON"), __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Easy, customizable, copy and paste submission forms. We handle all the backend so you have time to focus on the important stuff."), __jsx("button", {
    className: "jsx-2458442190" + " " + "action-button white-btn ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "LEARN MORE"))), __jsx("div", {
    style: {
      position: 'absolute',
      right: '0'
    },
    className: "jsx-2458442190" + " " + "headerImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("img", {
    src: "../static/images/undraw_updates_et2k.svg",
    className: "jsx-2458442190" + " " + "img-fluid float-md-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), __jsx("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 500 150",
    preserveAspectRatio: "none",
    style: {
      height: '100%',
      width: '100%'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("linearGradient", {
    id: "gradient",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%",
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("stop", {
    offset: "0%",
    style: {
      stopColor: "#f83600"
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("stop", {
    offset: "100%",
    style: {
      stopColor: "#f9d423"
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), __jsx("g", {
    fill: "url(#gradient)",
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("path", {
    d: " M0,120 C200,100 300,150 500,140 L500,0 L0,0 Z ",
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, " ")))), __jsx("div", {
    style: {
      width: '80%',
      marginLeft: '10%'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2458442190" + " " + "grid-container grid-container--fit ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2458442190" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "EMBED IT"), __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Get started in 2 minutes by placing our custom Paseon HTML tags anywhere you need a form to instantly start gathering submission data.")), __jsx("div", {
    className: "jsx-2458442190" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "SHARE IT"), __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Need to send forms to your audiance? Set up professional brandable form templates that can eaisly be shared."))), __jsx("div", {
    className: "jsx-2458442190" + " " + "grid-container grid-container--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2458442190" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "MANAGE IT"), __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Use the Paseon dashboard to manage all your different forms, submissions, and analyitcs. Stay on top of the data that drives your business.")), __jsx("div", {
    className: "jsx-2458442190" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "BUILD IT"), __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Use the Paseon form building tool to eaily drag and drop form elements to build beautiful professional forms right away. Want to write your own forms? All Paseon forms accpet HTML so anyone on your team can easily get started creating the forms you need.  Simply embed your form inside the Paseon HTML tags and you're good to go!")))), __jsx("div", {
    style: {
      marginTop: '200px',
      width: '70%',
      marginLeft: '15%',
      fontSize: '1.1em',
      lineHeight: '1.4em'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
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
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Paseon offers a suit a prebuilt forms, form building tools, and integegrations, to handle processing and sending form information to where you need it to go. Manage submission data, view submission analytics and export the data to use however you need! Follow the steps below to see an example of our basic contact form.  "), __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, " To see other services, prebuilt forms or to learn how to use your own form that utilizes our backend to process and send information where you need it to go click the button below "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-2458442190" + " " + "action-button black-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "LEARN MORE"))), __jsx("div", {
    className: "jsx-2458442190" + " " + "grid-container grid-container--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2458442190" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Try a test submission! Add your email inbetween the quotes in the HTML below then fill out and submit the form."), __jsx("div", {
    style: {
      backgroundColor: '#F1F1F1',
      padding: '30px'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#DD1C1A'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "paseon-contact-form "), "recipient_email=\"", __jsx("input", {
    style: {
      border: "none",
      backgroundColor: '#F1F1F1'
    },
    type: "text",
    placeholder: "YOUR EMAIL",
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), "\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, " >"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#DD1C1A'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "paseon-contact-form"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, ">"), __jsx("br", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#DD1C1A'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "script"), " src=\"https://MYCDN\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, ">"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#DD1C1A'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "script"), "  ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, ">"))), __jsx("div", {
    className: "jsx-2458442190" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "This will be sent to: "), __jsx("form", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("input", {
    name: "name",
    type: "text",
    placeholder: "Your Name",
    required: true // .value="${this.form_obj.name}"
    // @input="${(e) => this.handleSetInputValues(e)}" 
    ,
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("input", {
    name: "from",
    type: "text",
    placeholder: "Your Email",
    required: true // .value="${this.form_obj.from}"
    // @input="${(e) => this.handleSetInputValues(e)}" 
    ,
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx("input", {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    required: true // .value="${this.form_obj.subject}"
    // @input="${(e) => this.handleSetInputValues(e)}" 
    ,
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
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
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), __jsx("input", {
    type: "submit",
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }))))), __jsx("div", {
    style: {
      width: '50%',
      marginLeft: '25%',
      marginTop: '300px',
      fontSize: '1.1em',
      lineHeight: '1.4em'
    },
    className: "jsx-2458442190" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2458442190" + " " + "stepsRow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Step 1"), __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Copy the following html tags.  Make sure to switch the bolded information to match the email address where you would like the contact information to be sent."), __jsx("div", {
    style: {
      backgroundColor: '#DCDCDC',
      padding: '30px'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#DD1C1A'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "paseon-contact-form "), "recipient_email=\"", __jsx("span", {
    style: {
      backgroundColor: '#dcdcdc',
      padding: '2px',
      borderRadius: '5px'
    },
    contentEditable: "true",
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "YOUR_EMAIL"), "\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, " >"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#DD1C1A'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "paseon-contact-form"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, ">"), __jsx("br", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#DD1C1A'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "script"), " src=\"https://MYCDN\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, ">"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#DD1C1A'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "script"), "  ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, ">")), __jsx("p", {
    style: {
      fontSize: '.75em'
    },
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Have a SPA and need an NPM install?", __jsx("br", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), "Ignore the script tag and paste the following into your root directory")), __jsx("div", {
    className: "jsx-2458442190" + " " + "stepsRow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Step 2"), __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Paste the tags to wherever you need a contact form on your site! Our tags are supported by any CRM that will let you add custom HTML")), __jsx("div", {
    className: "jsx-2458442190" + " " + "stepsRow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Step 3"), __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "At this point you are ready to start recieving emails from your form submissions! Go ahead and send yourself a test email through the contact form.  You may need check the spam folder, if the email ends up there mark it as 'Not Spam' and all future emails will go straight into your inbox.")), __jsx("div", {
    className: "jsx-2458442190" + " " + "stepsRow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Step 4"), __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Customize the labels, colors, and success message of your form by adding and editing the HTML attributes of the Paseon tags. "), __jsx("p", {
    className: "jsx-2458442190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "To see a list of options click the button below."), __jsx("button", {
    style: {
      display: 'block'
    },
    className: "jsx-2458442190" + " " + "action-button black-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Learn More"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2458442190",
    __self: this
  }, "p.jsx-2458442190{font-family:'Montserrat',sans-serif;}h1.jsx-2458442190 h2.jsx-2458442190 h3.jsx-2458442190{font-family:'Roboto',sans-serif;}.stepsRow.jsx-2458442190{padding:50px 0 50px 0;}.headerContainer.jsx-2458442190{margin-bottom:200px;height:100%;background-position:center;background-repeat:no-repeat;background-size:cover;}.headerText.jsx-2458442190{padding:50px 100px 50px 100px;width:40%;position:absolute;text-transform:uppercase;top:40%;-webkit-transform:translate(0%,-40%);-ms-transform:translate(0%,-40%);transform:translate(0%,-40%);color:#fff;}.headerText.jsx-2458442190 h1.jsx-2458442190{font-size:6em;}.headerText.jsx-2458442190 p.jsx-2458442190{font-size:1.2em;}.headerImg.jsx-2458442190{margin-top:175px;}.headerImg.jsx-2458442190 img.jsx-2458442190{width:60%;margin-right:100px;}@media (max-width:768px){.headerText.jsx-2458442190{padding:0 0 0 0;width:50%;margin-left:25%;}.headerText.jsx-2458442190 h1.jsx-2458442190{font-size:3em;}.headerText.jsx-2458442190 p.jsx-2458442190{font-size:1em;}.headerImg.jsx-2458442190{width:50%;margin-top:50px;margin-left:25%;}.headerImg.jsx-2458442190 img.jsx-2458442190{width:500px;margin-right:0;}}@media (max-width:576px){.headerContainer.jsx-2458442190{margin-bottom:300px;}.headerImg.jsx-2458442190{display:none;}}input[type=text].jsx-2458442190,select.jsx-2458442190,textarea.jsx-2458442190{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-2458442190{width:100%;color:white;background:rgb(2,0,36);padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-2458442190:hover{opacity:0.7;}.action-button.jsx-2458442190{background-color:Transparent;background-repeat:no-repeat;cursor:pointer;padding:20px;font-weight:heavy;overflow:hidden;outline:none;font-size:.75em;}.white-btn.jsx-2458442190{color:white;border:3px solid white;background:linear-gradient(to right,#fff 0%,#fff 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.black-btn.jsx-2458442190{color:black;border:3px solid black;background:linear-gradient(to right,#000 0%,#000 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.white-btn.jsx-2458442190:hover{background-position:0 0;color:black;}.black-btn.jsx-2458442190:hover{background-position:0 0;color:white;}.grid-container.jsx-2458442190{display:grid;}.grid-container--fill.jsx-2458442190{grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.grid-container--fit.jsx-2458442190{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));}.grid-element.jsx-2458442190{padding:50px;}.dark-background.jsx-2458442190{background-color:#36454f;color:#fff;border:1px solid #fff;}.header.jsx-2458442190{grid-area:header;}.innerContainer.jsx-2458442190{position:absolute;top:0;width:100%;}svg.jsx-2458442190{display:inline-block;position:absolute;top:0;left:0;z-index:-1;}.container.jsx-2458442190{display:inline-block;position:relative;width:100%;padding-bottom:100%;vertical-align:middle;overflow:hidden;}h1.jsx-2458442190,a.jsx-2458442190{font-family:'Arial';}ul.jsx-2458442190{padding:0;}li.jsx-2458442190{list-style:none;margin:5px 0;}a.jsx-2458442190{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2458442190:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0xrQixBQUcwQyxBQUdKLEFBSVgsQUFTRixBQVlRLEFBY2hCLEFBSUUsQUFJQyxBQUtQLEFBTVEsQUFZRixBQUlBLEFBS04sQUFPSSxBQVFVLEFBSVAsQUFPRSxBQVVBLEFBYUMsQUFPaUIsQUFZakIsQUFTQSxBQVdXLEFBS0EsQUFLVixBQUkrQyxBQUlELEFBSTlDLEFBSVksQUFRUixBQUlBLEFBTUksQUFTQSxBQVdELEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFwTUQsQUEyQkosQUE0SlQsQ0FsSW9CLEFBVU4sQ0E3QkgsQUEyQ1gsQUFrQnlCLEFBU0EsQUE2RnpCLENBdkpKLEFBK0VJLEFBWUEsQ0F0SlIsQUErQkUsQUFJQSxFQS9CRixBQWVjLEFBcUxTLENBL0x2QixBQXlKUSxDQUlPLEVBL0xDLEFBZ0ZaLEFBeUlJLENBcEJvQixBQVNBLENBdk4xQixDQStHK0IsQ0FtRFgsQUFLQSxBQWtDRixDQWJDLENBdElELEFBc0JGLENBTWYsRUFsQ0gsQUFxRHVCLEFBNkJjLEFBeUc3QixDQXROSSxFQTFCVixBQWU2QixHQXFJc0UsQUFTQSxBQWtEN0YsQ0FsTk4sQUEyS00sQUFLQSxBQXFCd0IsR0FrQmhCLEFBU0ssQ0FqTUQsRUF1Q2xCLEFBZUEsQUF5QjZCLEdBMEdkLENBL0ZXLElBd0dFLEFBc0JULEVBOUJBLEtBOUVHLEFBaURoQixDQTVKbUIsQUF3Sm5CLEFBY0EsQ0FuTHdCLEVBcU94QixFQXpJd0IsQUEyR3hCLENBaEdlLE1Bd0dTLEVBdEZULEtBakJELE1BMUZaLEVBK0VrQixBQTZCQSxFQXpIRixFQXdHRSxFQXpGRyxDQWdNTCxXQWxITSxBQTZCTixJQWpCRCxDQXVHakIsQ0E5TU4sVUF5SG9CLEdBakJkLEFBMEI0QixBQVNBLEdBL0M1QixPQThCa0IsZ0JBRWxCLEFBTzZCLEFBU0EsMkJBUlMsQUFTQSxlQS9IakMsV0FFYixzREFxSFEsQUFTQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL2xlYXJuaW5nX3Jlc291cmNlcy9wYXNlb24vcGFzZW9uL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG57LyogaGVpZ2h0Oic3MDBweCcsIG1hcmdpbkJvdHRvbTonMjAwcHgnICovfVxuICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGhlaWdodDogJzcwMHB4JywgbWFyZ2luQm90dG9tOiAnMjAwcHgnfX0+XG4gIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRhaW5lcklubmVyXCIgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiAnMCcsIHRvcDogJzAnfX0+ICovfVxuXG57Lyogc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2Vlbid9fSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ319ID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyVGV4dFwiPlxuICAgICAgICAgICAgPGgxPlBBU0VPTjwvaDE+XG4gICAgICAgICAgICA8cD5FYXN5LCBjdXN0b21pemFibGUsIGNvcHkgYW5kIHBhc3RlIHN1Ym1pc3Npb24gZm9ybXMuIFdlIGhhbmRsZSBhbGwgdGhlIGJhY2tlbmQgc28geW91IGhhdmUgdGltZSB0byBmb2N1cyBvbiB0aGUgaW1wb3J0YW50IHN0dWZmLjwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbiB3aGl0ZS1idG4gXCI+TEVBUk4gTU9SRTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG57LyogZmxvYXQ6ICdyaWdodCcsICAqL31cbiAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJoZWFkZXJJbWdcIiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzAnfX0+XG4gICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJ319PiAqL31cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGZsb2F0LW1kLXJpZ2h0XCIgc3JjPScuLi9zdGF0aWMvaW1hZ2VzL3VuZHJhd191cGRhdGVzX2V0Mmsuc3ZnJz48L2ltZz5cbiAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgYm9yZGVyOiAnMXB4IHNvbGlkIHJlZCd9fT4gKi99XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDUwMCAxNTBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScsfX0+XG4gICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImdyYWRpZW50XCIgeDE9XCIwJVwiIHkxPVwiMCVcIiB4Mj1cIjEwMCVcIiB5Mj1cIjAlXCI+XG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0eWxlPXt7c3RvcENvbG9yOlwiI2Y4MzYwMFwifX0gLz5cbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdHlsZT17e3N0b3BDb2xvcjpcIiNmOWQ0MjNcIn19IC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICA8ZyBmaWxsPVwidXJsKCNncmFkaWVudClcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiIE0wLDEyMCBDMjAwLDEwMCAzMDAsMTUwIDUwMCwxNDAgTDUwMCwwIEwwLDAgWiBcIiA+IDwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gIHsvKiA8L2Rpdj4gKi99XG4gIDwvZGl2PlxuICBcblxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzgwJScsIG1hcmdpbkxlZnQ6ICcxMCUnfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGdyaWQtY29udGFpbmVyLS1maXQgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50IGRhcmstYmFja2dyb3VuZFwiPlxuICAgICAgICAgIDxoMT5FTUJFRCBJVDwvaDE+XG4gICAgICAgICAgPHA+R2V0IHN0YXJ0ZWQgaW4gMiBtaW51dGVzIGJ5IHBsYWNpbmcgb3VyIGN1c3RvbSBQYXNlb24gSFRNTCB0YWdzIGFueXdoZXJlIHlvdSBuZWVkIGEgZm9ybSB0byBpbnN0YW50bHkgc3RhcnQgZ2F0aGVyaW5nIHN1Ym1pc3Npb24gZGF0YS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudCBkYXJrLWJhY2tncm91bmRcIj5cbiAgICAgICAgICA8aDE+U0hBUkUgSVQ8L2gxPlxuICAgICAgICAgIDxwPk5lZWQgdG8gc2VuZCBmb3JtcyB0byB5b3VyIGF1ZGlhbmNlPyBTZXQgdXAgcHJvZmVzc2lvbmFsIGJyYW5kYWJsZSBmb3JtIHRlbXBsYXRlcyB0aGF0IGNhbiBlYWlzbHkgYmUgc2hhcmVkLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGdyaWQtY29udGFpbmVyLS1maXRcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50IGRhcmstYmFja2dyb3VuZFwiPlxuICAgICAgICA8aDE+TUFOQUdFIElUPC9oMT5cbiAgICAgICAgICA8cD5Vc2UgdGhlIFBhc2VvbiBkYXNoYm9hcmQgdG8gbWFuYWdlIGFsbCB5b3VyIGRpZmZlcmVudCBmb3Jtcywgc3VibWlzc2lvbnMsIGFuZCBhbmFseWl0Y3MuIFN0YXkgb24gdG9wIG9mIHRoZSBkYXRhIHRoYXQgZHJpdmVzIHlvdXIgYnVzaW5lc3MuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnQgZGFyay1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxoMT5CVUlMRCBJVDwvaDE+XG4gICAgICAgICAgPHA+VXNlIHRoZSBQYXNlb24gZm9ybSBidWlsZGluZyB0b29sIHRvIGVhaWx5IGRyYWcgYW5kIGRyb3AgZm9ybSBlbGVtZW50cyB0byBidWlsZCBiZWF1dGlmdWwgcHJvZmVzc2lvbmFsIGZvcm1zIHJpZ2h0IGF3YXkuIFdhbnQgdG8gd3JpdGUgeW91ciBvd24gZm9ybXM/IEFsbCBQYXNlb24gZm9ybXMgYWNjcGV0IEhUTUwgc28gYW55b25lIG9uIHlvdXIgdGVhbSBjYW4gZWFzaWx5IGdldCBzdGFydGVkIGNyZWF0aW5nIHRoZSBmb3JtcyB5b3UgbmVlZC4gIFNpbXBseSBlbWJlZCB5b3VyIGZvcm0gaW5zaWRlIHRoZSBQYXNlb24gSFRNTCB0YWdzIGFuZCB5b3UncmUgZ29vZCB0byBnbyE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzIwMHB4JywgIHdpZHRoOiAnNzAlJywgbWFyZ2luTGVmdDonMTUlJywgZm9udFNpemU6ICcxLjFlbScsIGxpbmVIZWlnaHQ6ICcxLjRlbSd9fT5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMzIwcHgnLCBtYXJnaW5Cb3R0b206ICczMDBweCcsIHBhZGRpbmc6ICc1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnI0YxRjFGMScsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMS4xZW0nLCBsaW5lSGVpZ2h0OiAnMS40ZW0nfX0+XG4gICAgICAgICAgPHA+UGFzZW9uIG9mZmVycyBhIHN1aXQgYSBwcmVidWlsdCBmb3JtcywgZm9ybSBidWlsZGluZyB0b29scywgYW5kIGludGVnZWdyYXRpb25zLCB0byBoYW5kbGUgcHJvY2Vzc2luZyBhbmQgc2VuZGluZyBmb3JtIGluZm9ybWF0aW9uIHRvIHdoZXJlIHlvdSBuZWVkIGl0IHRvIGdvLiBNYW5hZ2Ugc3VibWlzc2lvbiBkYXRhLCB2aWV3IHN1Ym1pc3Npb24gYW5hbHl0aWNzIGFuZCBleHBvcnQgdGhlIGRhdGEgdG8gdXNlIGhvd2V2ZXIgeW91IG5lZWQhIEZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gc2VlIGFuIGV4YW1wbGUgb2Ygb3VyIGJhc2ljIGNvbnRhY3QgZm9ybS4gIDwvcD4gXG4gICAgICAgICAgPHA+IFRvIHNlZSBvdGhlciBzZXJ2aWNlcywgcHJlYnVpbHQgZm9ybXMgb3IgdG8gbGVhcm4gaG93IHRvIHVzZSB5b3VyIG93biBmb3JtIHRoYXQgdXRpbGl6ZXMgb3VyIGJhY2tlbmQgdG8gcHJvY2VzcyBhbmQgc2VuZCBpbmZvcm1hdGlvbiB3aGVyZSB5b3UgbmVlZCBpdCB0byBnbyBjbGljayB0aGUgYnV0dG9uIGJlbG93IDwvcD5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3ByaWNpbmdcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b24gYmxhY2stYnRuXCI+TEVBUk4gTU9SRTwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgZ3JpZC1jb250YWluZXItLWZpdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG4gICAgICAgICAgICA8cD5UcnkgYSB0ZXN0IHN1Ym1pc3Npb24hIEFkZCB5b3VyIGVtYWlsIGluYmV0d2VlbiB0aGUgcXVvdGVzIGluIHRoZSBIVE1MIGJlbG93IHRoZW4gZmlsbCBvdXQgYW5kIHN1Ym1pdCB0aGUgZm9ybS48L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBzdHlsZT17e2JvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6JzMwcHgnfX0+XG4gICAgICAgICAgICBUaGlzIHRleHQgY2FuIGJlIGVkaXRlZCBieSB0aGUgdXNlci5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNGMUYxRjEnLCBwYWRkaW5nOiAnMzBweCd9fT5cblxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjREQxQzFBJ319PnBhc2Vvbi1jb250YWN0LWZvcm0gPC9zcGFuPiBcbiAgICAgICAgICAgIHJlY2lwaWVudF9lbWFpbD1cIjxpbnB1dCBzdHlsZT17e2JvcmRlcjpcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiAnI0YxRjFGMSd9fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWU9VUiBFTUFJTFwiPjwvaW5wdXQ+XCJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+ICZndDs8L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmx0OyAvPC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjREQxQzFBJ319PnBhc2Vvbi1jb250YWN0LWZvcm08L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmd0Ozwvc3Bhbj48YnI+PC9icj5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjREQxQzFBJ319PnNjcmlwdDwvc3Bhbj4gc3JjPVwiaHR0cHM6Ly9NWUNETlwiPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mZ3Q7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZsdDsgLzwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0REMUMxQSd9fT5zY3JpcHQ8L3NwYW4+ICA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZndDs8L3NwYW4+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgICAgICAgICAgey8qIFRPRE86IHJlcGxhY2Ugd2l0aCBhIGFjdHVhbCBpbnRlcmFjdGl2ZSBmb3JtICovfSBcbiAgICAgICAgICAgIDxsYWJlbD5UaGlzIHdpbGwgYmUgc2VudCB0bzogPC9sYWJlbD5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIC52YWx1ZT1cIiR7dGhpcy5mb3JtX29iai5uYW1lfVwiXG4gICAgICAgICAgICAgICAgICAgIC8vIEBpbnB1dD1cIiR7KGUpID0+IHRoaXMuaGFuZGxlU2V0SW5wdXRWYWx1ZXMoZSl9XCIgXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIC52YWx1ZT1cIiR7dGhpcy5mb3JtX29iai5mcm9tfVwiXG4gICAgICAgICAgICAgICAgICAgIC8vIEBpbnB1dD1cIiR7KGUpID0+IHRoaXMuaGFuZGxlU2V0SW5wdXRWYWx1ZXMoZSl9XCIgXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ViamVjdFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvLyAudmFsdWU9XCIke3RoaXMuZm9ybV9vYmouc3ViamVjdH1cIlxuICAgICAgICAgICAgICAgICAgICAvLyBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmhhbmRsZVNldElucHV0VmFsdWVzKGUpfVwiIFxuICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJvZHlcIlxuICAgICAgICAgICAgICAgICAgICByb3dzPVwiNFwiIFxuICAgICAgICAgICAgICAgICAgICBjb2xzPVwiNTBcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUYWxrIHRvIG1lIEdvb3NlLi4uXCIgXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIC52YWx1ZT1cIiR7dGhpcy5mb3JtX29iai5ib2R5fVwiXG4gICAgICAgICAgICAgICAgICAgIC8vIEBpbnB1dD1cIiR7KGUpID0+IHRoaXMuaGFuZGxlU2V0SW5wdXRWYWx1ZXMoZSl9XCIgXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIj48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiB3aWR0aDogJzYwJScsIG1hcmdpbkxlZnQ6ICcyMCUnLCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIG1hcmdpbkxlZnQ6ICcyNSUnLCAgbWFyZ2luVG9wOiAnMzAwcHgnLCBmb250U2l6ZTogJzEuMWVtJywgbGluZUhlaWdodDogJzEuNGVtJ319PlxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBzUm93XCI+XG5cblxuICAgICAgICAgIDxoMT5TdGVwIDE8L2gxPlxuICAgICAgICAgIDxwPkNvcHkgdGhlIGZvbGxvd2luZyBodG1sIHRhZ3MuICBNYWtlIHN1cmUgdG8gc3dpdGNoIHRoZSBib2xkZWQgaW5mb3JtYXRpb24gdG8gbWF0Y2ggdGhlIGVtYWlsIGFkZHJlc3Mgd2hlcmUgeW91IHdvdWxkIGxpa2UgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb24gdG8gYmUgc2VudC48L3A+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNEQ0RDREMnLCBwYWRkaW5nOiAnMzBweCd9fT5cbiAgICAgICAgICAgICAgey8qICZsdDtwYXNlb24tY29udGFjdC1mb3JtXG4gICAgICAgICAgICAgICAgcmVjaXBpZW50X2VtYWlsPVwiPGI+WU9VUl9FTUFJTDwvYj5cIlxuICAgICAgICAgICAgICAmZ3Q7ICZsdDsvcGFzZW9uLWNvbnRhY3QtZm9ybSAmZ3Q7XG4gICAgICAgICAgICAgICZsdDtzY3JpcHQgc3JjPVwiaHR0cHM6Ly9NWUNETlwiPiZsdDsvc2NyaXB0ICZndDsgKi99XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmx0Ozwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0REMUMxQSd9fT5wYXNlb24tY29udGFjdC1mb3JtIDwvc3Bhbj4gXG4gICAgICAgICAgICAgIHJlY2lwaWVudF9lbWFpbD1cIjxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI2RjZGNkYycsIHBhZGRpbmc6ICcycHgnLCBib3JkZXJSYWRpdXM6ICc1cHgnfX0gY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiPllPVVJfRU1BSUw8L3NwYW4+XCJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4gJmd0Ozwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7IC88L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNERDFDMUEnfX0+cGFzZW9uLWNvbnRhY3QtZm9ybTwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mZ3Q7PC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjREQxQzFBJ319PnNjcmlwdDwvc3Bhbj4gc3JjPVwiaHR0cHM6Ly9NWUNETlwiPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mZ3Q7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZsdDsgLzwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0REMUMxQSd9fT5zY3JpcHQ8L3NwYW4+ICA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZndDs8L3NwYW4+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOiAnLjc1ZW0nfX0+SGF2ZSBhIFNQQSBhbmQgbmVlZCBhbiBOUE0gaW5zdGFsbD88YnI+PC9icj5cbiAgICAgICAgICBJZ25vcmUgdGhlIHNjcmlwdCB0YWcgYW5kIHBhc3RlIHRoZSBmb2xsb3dpbmcgaW50byB5b3VyIHJvb3QgZGlyZWN0b3J5PC9wPiBcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHNSb3dcIj5cblxuICAgICAgICAgIDxoMT5TdGVwIDI8L2gxPlxuICAgICAgICAgIDxwPlBhc3RlIHRoZSB0YWdzIHRvIHdoZXJldmVyIHlvdSBuZWVkIGEgY29udGFjdCBmb3JtIG9uIHlvdXIgc2l0ZSEgT3VyIHRhZ3MgYXJlIHN1cHBvcnRlZCBieSBhbnkgQ1JNIHRoYXQgd2lsbCBsZXQgeW91IGFkZCBjdXN0b20gSFRNTDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBzUm93XCI+XG5cbiAgICAgICAgICA8aDE+U3RlcCAzPC9oMT5cbiAgICAgICAgICA8cD5BdCB0aGlzIHBvaW50IHlvdSBhcmUgcmVhZHkgdG8gc3RhcnQgcmVjaWV2aW5nIGVtYWlscyBmcm9tIHlvdXIgZm9ybSBzdWJtaXNzaW9ucyEgR28gYWhlYWQgYW5kIHNlbmQgeW91cnNlbGYgYSB0ZXN0IGVtYWlsIHRocm91Z2ggdGhlIGNvbnRhY3QgZm9ybS4gIFlvdSBtYXkgbmVlZCBjaGVjayB0aGUgc3BhbSBmb2xkZXIsIGlmIHRoZSBlbWFpbCBlbmRzIHVwIHRoZXJlIG1hcmsgaXQgYXMgJ05vdCBTcGFtJyBhbmQgYWxsIGZ1dHVyZSBlbWFpbHMgd2lsbCBnbyBzdHJhaWdodCBpbnRvIHlvdXIgaW5ib3guPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwc1Jvd1wiPlxuXG4gICAgICAgICAgPGgxPlN0ZXAgNDwvaDE+XG4gICAgICAgICAgPHA+Q3VzdG9taXplIHRoZSBsYWJlbHMsIGNvbG9ycywgYW5kIHN1Y2Nlc3MgbWVzc2FnZSBvZiB5b3VyIGZvcm0gYnkgYWRkaW5nIGFuZCBlZGl0aW5nIHRoZSBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIFBhc2VvbiB0YWdzLiA8L3A+XG4gICAgICAgICAgPHA+VG8gc2VlIGEgbGlzdCBvZiBvcHRpb25zIGNsaWNrIHRoZSBidXR0b24gYmVsb3cuPC9wPlxuICAgICAgICAgICAgIFxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tkaXNwbGF5OiAnYmxvY2snfX0gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbiBibGFjay1idG5cIj5MZWFybiBNb3JlPC9idXR0b24+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB7LyogPC9kaXY+ICovfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICBwIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAgXG4gIH1cbiAgaDEgaDIgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5zdGVwc1JvdyB7XG4gICAgcGFkZGluZzogNTBweCAwIDUwcHggMDtcbiAgICBcbiAgfVxuXG5cblxuXG4gIC5oZWFkZXJDb250YWluZXJ7XG4gICAgLy8gaGVpZ2h0OiAxMDAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuLmhlYWRlclRleHQge1xuICAvLyBjb2xvcjogd2hpdGU7XG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNTBweCAxMDBweCA1MHB4IDEwMHB4O1xuICAvLyBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0MCU7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0b3A6IDQwJTtcbiAgLy8gbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwtNDAlKTtcbiAgY29sb3I6ICNmZmY7XG5cbn1cblxuLmhlYWRlclRleHQgaDF7XG4gIGZvbnQtc2l6ZTogNmVtO1xufVxuXG4uaGVhZGVyVGV4dCBwIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmhlYWRlckltZ3tcbiAgbWFyZ2luLXRvcDogMTc1cHg7XG4gIFxufVxuXG4uaGVhZGVySW1nIGltZ3tcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXJUZXh0IHtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAvLyBtYXJnaW4tdG9wOiAxMDBweDtcblxuICAvLyAgIHRvcDogNDAlO1xuICAvLyAvLyBsZWZ0OiA1MCU7XG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLC00MCUpO1xuICAgIFxuICBcbiAgfVxuICAuaGVhZGVyVGV4dCBoMXtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxuXG4gIC5oZWFkZXJUZXh0IHB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICAuaGVhZGVySW1nIHtcbiAgICBcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXRvcDo1MHB4O1xuXG4gIG1hcmdpbi1sZWZ0OiAyNSU7IFxuICB9XG5cbiAgLmhlYWRlckltZyBpbWd7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMDsgXG4gICB9XG59XG5cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHsgXG4gICAgLmhlYWRlckNvbnRhaW5lcntcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwMHB4O1xuICAgIH1cblxuICAgIC5oZWFkZXJJbWcge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIFxuICB9XG5cbiAgICAgICAgLy8gU1RBUlQgV0lMTCBCRSBNT1ZFRCBPVVQgLSBmb3IgaW50ZXJhY3RpdmUgdGVzdCBmb3JtXG4gICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XG4gICAgICAgICAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDEwOCw5LDEyMSwxKSAzOSUsIHJnYmEoMjU1LDAsNjMsMSkgMTAwJSk7XG4gICAgICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLy8gRU5EIFdJTEwgQkUgTU9WRUQgT1VUXG5cblxuICAgICAgICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGhlYXZ5O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgb3V0bGluZTpub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjc1ZW07XG4gICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC53aGl0ZS1idG4ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYgMCUsICNmZmYgNTAlLCBUcmFuc3BhcmVudCA1MCUsIFRyYW5zcGFyZW50IDEwMCUpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxhY2stYnRuIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwIDAlLCAjMDAwIDUwJSwgVHJhbnNwYXJlbnQgNTAlLCBUcmFuc3BhcmVudCAxMDAlKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIC53aGl0ZS1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246MCAwO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibGFjay1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246MCAwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lci0tZmlsbCB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtY29udGFpbmVyLS1maXQge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtZWxlbWVudCB7XG4gICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXJrLWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjQ1NGY7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlubmVyQ29udGFpbmVye1xuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgIHRvcDowO1xuICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cblxuICAgICAgICBoMSxcbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/paseon/paseon/pages/index.js */"));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taylorpasquariello/learning_resources/paseon/paseon/pages/index.js */"./pages/index.js");


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

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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