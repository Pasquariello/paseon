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

/***/ "./components/CampaignLink.js":
/*!************************************!*\
  !*** ./components/CampaignLink.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/components/CampaignLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CampaignLink = props => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: `/${props.directory}/[id]`,
  as: `/${props.directory}/${props.id}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, props.title));

/* harmony default export */ __webpack_exports__["default"] = (CampaignLink);

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

/***/ "./components/LayoutApp.js":
/*!*********************************!*\
  !*** ./components/LayoutApp.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sidebar_SideBarLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/SideBarLayout */ "./components/sidebar/SideBarLayout.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_get_host__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/get-host */ "./utils/get-host.js");

var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/components/LayoutApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








 // const LayoutApp  => (

const LayoutApp = props => {
  const {
    0: sideNavWidth,
    1: setsideNavWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true);
  const {
    0: navBtn,
    1: setNavBtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: hoverState,
    1: setHoverState
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);

  const toggleState = () => {
    setHoverState(!hoverState);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
    onMouseEnter: () => setHoverState(true),
    onMouseLeave: () => setHoverState(false) // onClick={()=> toggleState()} // Need onClick for mobile view!
    ,
    className: "jsx-892756012" + " " + `${hoverState ? 'sidenav-active' : 'sidenav-hidden'} sidenav border-right`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_sidebar_SideBarLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toggleState: toggleState,
    hoverState: hoverState,
    className: "sidenav",
    sideNavWidth: sideNavWidth,
    navBtn: navBtn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), __jsx("div", {
    id: "content-wrapper",
    className: "jsx-892756012",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("button", {
    style: {
      fontSize: '12px',
      width: '100px',
      marginBottom: '15px'
    },
    onClick: () => Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__["logout"])(),
    className: "jsx-892756012" + " " + `btn btn-warning`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Logout"), props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "892756012",
    __self: undefined
  }, ".sidenav-hidden.jsx-892756012{width:3rem;padding-right:0px;-webkit-transition:0.25s;transition:0.25s;padding-left:0;}.sidenav-active.jsx-892756012{width:19rem;padding-right:40px;-webkit-transition:0.25s;transition:0.25s;}.sidenav.jsx-892756012{height:100%;position:fixed;z-index:1;top:0;left:0;background-color:#fff;overflow-x:hidden;padding-top:20px;}.active.jsx-892756012{display:block;}.inactive.jsx-892756012{visibility:hidden;}#content-wrapper.jsx-892756012{margin:2rem 2rem 0 5rem;padding:0px 10px;}.flex-column.jsx-892756012{-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;}.d-flex.jsx-892756012{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;}body.jsx-892756012{height:100%;width:100%;overflow-x:none;}p.jsx-892756012{font-family:'Montserrat',sans-serif;}h1.jsx-892756012 h2.jsx-892756012 h3.jsx-892756012{font-family:'Roboto',sans-serif;}.cta.jsx-892756012{height:50px;width:50px;cursor:pointer;}.toggle-btn.jsx-892756012{height:2px;width:25px;position:relative;top:50%;left:0;margin:auto;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.toggle-btn.jsx-892756012:before{content:\"\";height:2px;width:25px;box-shadow:0 -10px 0 0;position:absolute;top:0;left:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.toggle-btn.jsx-892756012:after{content:\"\";height:2px;width:25px;box-shadow:0 10px 0 0;position:absolute;top:0;left:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.active.jsx-892756012 .toggle-btn.jsx-892756012{width:100px;background-color:transparent;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.active.jsx-892756012 .toggle-btn.jsx-892756012:before{top:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.active.jsx-892756012 .toggle-btn.jsx-892756012:after{top:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.active.jsx-892756012 .type11.jsx-892756012{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all 0.4s ease-in-out;transition:all 0.4s ease-in-out;}.active.jsx-892756012 .type11.jsx-892756012:before{-webkit-transform:translateY(0) rotate(40deg);-ms-transform:translateY(0) rotate(40deg);transform:translateY(0) rotate(40deg);}.active.jsx-892756012 .type11.jsx-892756012:after{-webkit-transform:translateY(0) rotate(-40deg);-ms-transform:translateY(0) rotate(-40deg);transform:translateY(0) rotate(-40deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vY29tcG9uZW50cy9MYXlvdXRBcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVnQixBQVlvQixBQVFDLEFBUUEsQUFZQyxBQUlJLEFBS08sQUFNUSxBQUlULEFBSVgsQUFPeUIsQUFHSixBQU9yQixBQUtELEFBU0UsQUFTQSxBQVVELEFBSUosQUFHQSxBQUlnQixBQUdnQixBQUVDLE1BWFAsQUFHQSxLQTVHaEIsQUF5RVAsQUFTRSxBQVNBLENBbkZNLEFBU0osQUFrQ0osQUFpQkEsQUFpQ2tCLEVBekUvQixJQUlBLElBMkNvQixBQVFMLEFBU0EsQ0F4Q0csQUFpQkQsQ0EvQkUsR0FwQlAsRUFqQk8sRUFRQSxDQW9EbkIsQ0F1QjRCLEFBU0QsR0FuQzNCLENBdkNRLENBa0RVLENBaEJsQixDQXVCVSxDQXJDVixBQStEa0MsRUFsRnpCLEtBeURBLEVBeERlLEtBeURWLEFBZ0JRLENBVEEsV0FOWSxJQTdFakIsQ0FvQkcsQ0FWcEIsQUFtRlUsQ0FUQSxJQW1CMkIsQUFHQSxDQVoxQixDQVRBLElBeUJ1QixFQTdHbEMsQUE4Rm9DLENBVEEsR0FqRWpCLGlCQUNuQixDQW1CQSxLQTJEbUMsQ0F2RG5DLFlBbUUyQyxHQUVDLFVBckNULGlCQWlDQSxFQWZFLENBVEEiLCJmaWxlIjoiL1VzZXJzL3RheWxvcnBhc3F1YXJpZWxsby9sZWFybmluZ19yZXNvdXJjZXMvcGFzZW9uL3Bhc2Vvbi9jb21wb25lbnRzL0xheW91dEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgU2lkZUJhckxheW91dCBmcm9tICcuL3NpZGViYXIvU2lkZUJhckxheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uL3V0aWxzL2F1dGgnO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBuZXh0Q29va2llIGZyb20gJ25leHQtY29va2llcydcbmltcG9ydCBnZXRIb3N0IGZyb20gJy4uL3V0aWxzL2dldC1ob3N0J1xuXG5cblxuXG4vLyBjb25zdCBMYXlvdXRBcHAgID0+IChcbmNvbnN0IExheW91dEFwcCA9IHByb3BzID0+IHtcblxuXG5jb25zdCBbc2lkZU5hdldpZHRoLCBzZXRzaWRlTmF2V2lkdGhdID0gdXNlU3RhdGUodHJ1ZSlcbmNvbnN0IFtuYXZCdG4sIHNldE5hdkJ0bl0gPSB1c2VTdGF0ZShmYWxzZSlcbmNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuY29uc3QgWyBob3ZlclN0YXRlLCBzZXRIb3ZlclN0YXRlIF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG5jb25zdCB0b2dnbGVTdGF0ZSA9ICgpID0+IHtcbiAgc2V0SG92ZXJTdGF0ZSghaG92ZXJTdGF0ZSlcbn0gXG5cblxucmV0dXJuIChcblxuICA8PlxuICAgICB7LyogPEhlYWQ+ICovfVxuXG4gICAgICAgICAgey8qIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwibm9kZV9tb2R1bGVzL3JlYWN0LXRhYmxlL3JlYWN0LXRhYmxlLmNzc1wiPjwvbGluaz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LXRhYmxlQGxhdGVzdC9yZWFjdC10YWJsZS5jc3NcIj48L2xpbms+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0fFJvYm90byZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgICAgIFxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgIFBhc2VvblxuICAgICAgICAgIDwvdGl0bGU+ICovfVxuICAgICAgICB7LyogPC9IZWFkPiAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpPT4gc2V0SG92ZXJTdGF0ZSh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKT0+IHNldEhvdmVyU3RhdGUoZmFsc2UpfVxuICAgICAgICAgICAgLy8gb25DbGljaz17KCk9PiB0b2dnbGVTdGF0ZSgpfSAvLyBOZWVkIG9uQ2xpY2sgZm9yIG1vYmlsZSB2aWV3IVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtob3ZlclN0YXRlID8gICdzaWRlbmF2LWFjdGl2ZScgOiAnc2lkZW5hdi1oaWRkZW4nfSBzaWRlbmF2IGJvcmRlci1yaWdodGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNpZGVCYXJMYXlvdXRcbiAgICAgICAgICAgICAgdG9nZ2xlU3RhdGU9e3RvZ2dsZVN0YXRlfVxuICAgICAgICAgICAgICBob3ZlclN0YXRlPXtob3ZlclN0YXRlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlbmF2XCJcbiAgICAgICAgICAgICAgc2lkZU5hdldpZHRoPXtzaWRlTmF2V2lkdGh9XG4gICAgICAgICAgICAgIG5hdkJ0bj17bmF2QnRufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgIFxuXG4gICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgIHsvKiA8YnV0dG9uIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLCB3aWR0aDogJzEwMHB4JywgbWFyZ2luQm90dG9tOiAnMTVweCd9fSBjbGFzc05hbWU9e2BidG4gYnRuLXdhcm5pbmcgJHtzaWRlTmF2V2lkdGggPyAnaW5hY3RpdmUnIDogJycgfWB9IG9uQ2xpY2s9e3RvZ2dsZVdpZHRofT5Ub2dnbGUgTmF2PC9idXR0b24+ICovfVxuICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7Zm9udFNpemU6JzEycHgnLCB3aWR0aDogJzEwMHB4JywgbWFyZ2luQm90dG9tOiAnMTVweCd9fSBjbGFzc05hbWU9e2BidG4gYnRuLXdhcm5pbmdgfSBvbkNsaWNrPXsoKT0+bG9nb3V0KCl9PkxvZ291dDwvYnV0dG9uPlxuICAgICAgICAgICBcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgXG5cblxuXG5cbiAgICA8c3R5bGUganN4PntgXG5cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vZmxleC13cmFwOiB3cmFwO1xuICAgXG4gICAgICB9XG5cbiAgICAgIC5zaWRlbmF2LWhpZGRlbntcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgXG4gIFxuICAgICAgLnNpZGVuYXYtYWN0aXZlIHtcbiAgICAgICAgd2lkdGg6IDE5cmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgXG4gICAgICAgXG4gICAgICB9XG5cbiAgICAgIC5zaWRlbmF2IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsLWhlaWdodDogcmVtb3ZlIHRoaXMgaWYgeW91IHdhbnQgXCJhdXRvXCIgaGVpZ2h0ICovXG4gICAgICAgIC8vIHdpZHRoOiAxNjBweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIFNpZGViYXIgKHN0YXkgaW4gcGxhY2Ugb24gc2Nyb2xsKSAqL1xuICAgICAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgICAgICB0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmV7XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5pbmFjdGl2ZXtcbiAgICAgICAgdmlzaWJpbGl0eTpoaWRkZW47XG4gICAgICB9XG5cblxuICAgICAgI2NvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgbWFyZ2luOiAycmVtIDJyZW0gMCA1cmVtO1xuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMTYwcHg7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZmxleC1jb2x1bW4ge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmQtZmxleCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBib2R5IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogbm9uZTtcbiAgICAgIH1cblxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgIFxuICAgICAgfVxuICAgICAgaDEgaDIgaDMge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cblxuXG4gICAgICAvLy8vLy8vLy9cbiAgICAgIC5jdGEge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIFxuICAgICAgLnRvZ2dsZS1idG4ge1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDsgfVxuICAgICAgICAudG9nZ2xlLWJ0bjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAtMTBweCAwIDAgO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDsgfVxuICAgICAgICAudG9nZ2xlLWJ0bjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMCAwIDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7IH1cbiAgICAgIFxuICAgICAgLmFjdGl2ZSAudG9nZ2xlLWJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0OyB9XG4gICAgICAgIC5hY3RpdmUgLnRvZ2dsZS1idG46YmVmb3JlIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7IH1cbiAgICAgICAgLmFjdGl2ZSAudG9nZ2xlLWJ0bjphZnRlciB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0OyB9XG4gICAgICBcbiAgICAgIC5hY3RpdmUgLnR5cGUxMSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7IH1cbiAgICAgICAgLmFjdGl2ZSAudHlwZTExOmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg0MGRlZyk7IH1cbiAgICAgICAgLmFjdGl2ZSAudHlwZTExOmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC00MGRlZyk7IH1cbiAgICAgIFxuXG5cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKX07XG5cbi8vICBJIERPTlQgS05PVyBJRiBJIE5FRUQgVEhJUyBPUiBOT1Rcbi8vICBET1VCTEUgQ0hFQ0sgaHR0cHM6Ly9qYXNvbnJhaW1vbmRpLmNvbS9wb3N0cy9zZWN1cmUtYS1uZXh0LWpzLWFwcGxpY2F0aW9uLXdpdGgtand0LWFuZC1hLXByaXZhdGUtcm91dGUtaGlnaGVyLW9yZGVyLWNvbXBvbmVudC8gXG4vLyAgVE8gU0VFIElGIFRIRVkgQVJFIFVTSU5HIEdFVElOSVRQUk9QUyBFVkVSWVdIRVJFIFxuXG5MYXlvdXRBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgY29uc3QgeyB0b2tlbiB9ID0gbmV4dENvb2tpZShjdHgpXG4gIGNvbnNvbGUubG9nKCdwcm8nLCB0b2tlbilcbiAgY29uc3QgYXBpVXJsID0gZ2V0SG9zdChjdHgucmVxKSArICcvZGFzaGJvYXJkJ1xuICBjb25zb2xlLmxvZyhhcGlVcmwpXG4gIGNvbnN0IHJlZGlyZWN0T25FcnJvciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmVkaXJlY3Qgb24gZXJyb3InKVxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICAgOiBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246ICcvbG9naW4nIH0pLmVuZCgpXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBKU09OLnN0cmluZ2lmeSh7IHRva2VuIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc29sZS5sb2coJ3JlcyBnb29kJywgcmVzcG9uc2UpXG4gIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVkaXJlY3RPbkVycm9yKClcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpXG4gICAgLy8gSW1wbGVtZW50YXRpb24gb3IgTmV0d29yayBlcnJvclxuICAgIHJldHVybiByZWRpcmVjdE9uRXJyb3IoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dEFwcDsiXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/paseon/paseon/components/LayoutApp.js */"));
}; //  I DONT KNOW IF I NEED THIS OR NOT
//  DOUBLE CHECK https://jasonraimondi.com/posts/secure-a-next-js-application-with-jwt-and-a-private-route-higher-order-component/ 
//  TO SEE IF THEY ARE USING GETINITPROPS EVERYWHERE 


LayoutApp.getInitialProps = async ctx => {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_9___default()(ctx);
  console.log('pro', token);
  const apiUrl = Object(_utils_get_host__WEBPACK_IMPORTED_MODULE_10__["default"])(ctx.req) + '/dashboard';
  console.log(apiUrl);

  const redirectOnError = () => {
    console.log('redirect on error');
    false ? undefined : ctx.res.writeHead(302, {
      Location: '/login'
    }).end();
  };

  try {
    const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(apiUrl, {
      credentials: 'include',
      headers: {
        Authorization: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          token
        })
      }
    });

    if (response.ok) {
      console.log('res good', response);
    } else {
      return await redirectOnError();
    }
  } catch (error) {
    console.log('error', error); // Implementation or Network error

    return redirectOnError();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutApp);

/***/ }),

/***/ "./components/QuickAnalytics/QuickAnalyticsCard.js":
/*!*********************************************************!*\
  !*** ./components/QuickAnalytics/QuickAnalyticsCard.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuickAnalyticsCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/components/QuickAnalytics/QuickAnalyticsCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// class QuickAnalyticsCard extends React.Component {
function QuickAnalyticsCard(props) {
  let startWidth = 12 / props.cardCount;
  return (// ${startWidth}
    __jsx("div", {
      className: `col-lg-${startWidth} mb-4`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "card border-left-info shadow h-100 py-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "row no-gutters align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "col mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: "text-xs font-weight-bold text-info text-uppercase mb-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, props.data.title), __jsx("div", {
      className: "row no-gutters align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "col-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "h5 mb-0 mr-3 font-weight-bold text-gray-800",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, props.data.body)), __jsx("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "progress progress-sm mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: "progress-bar bg-info",
      role: "progressbar",
      style: {
        width: "50%",
        ariaValuenow: "50",
        ariaValuemin: "0",
        ariaValuemax: "100"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }))))), __jsx("div", {
      className: "col-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })))))
  );
}

/***/ }),

/***/ "./components/QuickAnalytics/QuickAnalyticsRow.js":
/*!********************************************************!*\
  !*** ./components/QuickAnalytics/QuickAnalyticsRow.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuickAnalyticsCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickAnalyticsCard */ "./components/QuickAnalytics/QuickAnalyticsCard.js");
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/components/QuickAnalytics/QuickAnalyticsRow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class QuickAnalyticsRow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(_QuickAnalyticsCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (QuickAnalyticsRow);

/***/ }),

/***/ "./components/QuickAnalytics/index.js":
/*!********************************************!*\
  !*** ./components/QuickAnalytics/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QuickAnalyticsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuickAnalyticsCard */ "./components/QuickAnalytics/QuickAnalyticsCard.js");
/* harmony import */ var _QuickAnalyticsRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuickAnalyticsRow */ "./components/QuickAnalytics/QuickAnalyticsRow.js");
/* harmony import */ var _redux_reducers_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/reducers/auth */ "./redux/reducers/auth.js");
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/components/QuickAnalytics/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class QuickAnalytics extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cardCount = this.props.data.length;
    let rowCount = this.props.data.length % 4;
    let size = 4;
    var newArray = new Array(Math.ceil(cardCount / size)).fill("").map(function () {
      return this.splice(0, size);
    }, this.props.data.slice());
    return __jsx("div", {
      className: "jsx-671072149",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      style: {
        position: 'relative'
      },
      className: "jsx-671072149",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("a", {
      "data-toggle": "collapse",
      href: "#multiCollapseExample1",
      "aria-expanded": "true",
      "aria-controls": "multiCollapseExample1",
      className: "jsx-671072149",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Toggle Quick Analytics")), __jsx("div", {
      id: "multiCollapseExample1",
      className: "jsx-671072149" + " " + "collapse multi-collapse show",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, newArray.map((row, rowIndex) => {
      return __jsx("div", {
        key: rowIndex,
        className: "jsx-671072149" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, row.map((data, index) => {
        return __jsx(_QuickAnalyticsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          cardCount: newArray[rowIndex].length,
          key: index,
          data: data,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        });
      }));
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "671072149",
      __self: this
    }, "#nprogress.jsx-671072149{pointer-events:none;}#nprogress.jsx-671072149 .bar.jsx-671072149{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress.jsx-671072149 .peg.jsx-671072149{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress.jsx-671072149 .spinner.jsx-671072149{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress.jsx-671072149 .spinner-icon.jsx-671072149{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner-jsx-671072149 400ms linear infinite;animation:nprogress-spinner-jsx-671072149 400ms linear infinite;}.nprogress-custom-parent.jsx-671072149{overflow:hidden;position:relative;}.nprogress-custom-parent.jsx-671072149 #nprogress.jsx-671072149 .spinner.jsx-671072149,.nprogress-custom-parent.jsx-671072149 #nprogress.jsx-671072149 .bar.jsx-671072149{position:absolute;}@-webkit-keyframes nprogress-spinner{0%.jsx-671072149{-webkit-transform:rotate(0deg);}100%.jsx-671072149{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner-jsx-671072149{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner-jsx-671072149{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vY29tcG9uZW50cy9RdWlja0FuYWx5dGljcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGEsQUFJdUIsQUFJSixBQWFGLEFBZUEsQUFRSCxBQWNLLEFBTUUsQUFLZSxBQUdFLEFBS1YsQUFHRSxXQW5DZixHQXZCTSxBQWVILEVBM0JBLEFBaURHLEVBTXBCLEVBNURBLEdBeUN3QixNQVJULEVBM0JBLEFBMkRiLENBL0NVLENBa0RWLENBYkYsUUFwQ2MsQUFlSCxFQTNCSCxDQW9DdUIsS0FuQ3RCLENBMkJJLEdBZkMsR0FWRCxLQTBCYixJQWZ5QyxFQVY1QixNQWlDVyxLQWhDeEIsRUE2REUsTUFHQSxTQS9CdUIsUUF2QmIsVUFFMEMsS0FzQmxDLGtCQUV3Qyw0QkF2QlYsOEJBd0JFLGlCQXZCTix1SEF3QjlDLHNCQXZCQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL2xlYXJuaW5nX3Jlc291cmNlcy9wYXNlb24vcGFzZW9uL2NvbXBvbmVudHMvUXVpY2tBbmFseXRpY3MvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUXVpY2tBbmFseXRpY3NDYXJkIGZyb20gJy4vUXVpY2tBbmFseXRpY3NDYXJkJztcbmltcG9ydCBRdWlja0FuYWx5dGljc1JvdyBmcm9tICcuL1F1aWNrQW5hbHl0aWNzUm93JztcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL2F1dGgnO1xuXG5jbGFzcyBRdWlja0FuYWx5dGljcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIFxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQgY2FyZENvdW50ID0gdGhpcy5wcm9wcy5kYXRhLmxlbmd0aDtcbiAgICAgICAgbGV0IHJvd0NvdW50ID0gdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCAlIDQ7XG4gICAgICAgIGxldCBzaXplID0gNDtcbiAgICAgICAgdmFyIG5ld0FycmF5ID0gbmV3IEFycmF5KE1hdGguY2VpbChjYXJkQ291bnQgLyBzaXplKSkuZmlsbChcIlwiKVxuICAgICAgICAubWFwKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5zcGxpY2UoMCwgc2l6ZSkgfSwgdGhpcy5wcm9wcy5kYXRhLnNsaWNlKCkpO1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX0+XG4gICAgICAgICAgICA8YSBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj1cIiNtdWx0aUNvbGxhcHNlRXhhbXBsZTFcIiAgYXJpYS1leHBhbmRlZD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwibXVsdGlDb2xsYXBzZUV4YW1wbGUxXCI+VG9nZ2xlIFF1aWNrIEFuYWx5dGljczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBtdWx0aS1jb2xsYXBzZSBzaG93XCIgaWQ9XCJtdWx0aUNvbGxhcHNlRXhhbXBsZTFcIj4gXG5cblxuICAgICAgICAgICAgICAgIHsgICBcblxuICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5tYXAoKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7cm93Lm1hcCgoZGF0YSwgaW5kZXgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1aWNrQW5hbHl0aWNzQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZENvdW50PXtuZXdBcnJheVtyb3dJbmRleF0ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHsvKiA8UXVpY2tBbmFseXRpY3NDYXJkXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAvKiBNYWtlIGNsaWNrcyBwYXNzLXRocm91Z2ggKi9cbiNucHJvZ3Jlc3Mge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuI25wcm9ncmVzcyAuYmFyIHtcbiAgYmFja2dyb3VuZDogIzI5ZDtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMzE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG59XG5cbi8qIEZhbmN5IGJsdXIgZWZmZWN0ICovXG4jbnByb2dyZXNzIC5wZWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzI5ZCwgMCAwIDVweCAjMjlkO1xuICBvcGFjaXR5OiAxO1xuXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG59XG5cbi8qIFJlbW92ZSB0aGVzZSB0byBnZXQgcmlkIG9mIHRoZSBzcGlubmVyICovXG4jbnByb2dyZXNzIC5zcGlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAzMTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbn1cblxuI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzI5ZDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAtd2Via2l0LWFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcbi5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cblxuICAgICAgIGB9ICAgXG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1aWNrQW5hbHl0aWNzOyJdfQ== */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/paseon/paseon/components/QuickAnalytics/index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (QuickAnalytics);

/***/ }),

/***/ "./components/TESTCHART.js":
/*!*********************************!*\
  !*** ./components/TESTCHART.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! victory */ "victory");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(victory__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/components/TESTCHART.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Generic import
 // Individual component imports



class TestChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      style: {
        data: {
          fill: "tomato"
        }
      }
    };
  }

  render() {
    const handleMouseOver = () => {
      const fillColor = this.state.clicked ? "blue" : "tomato";
      const clicked = !this.state.clicked;
      this.setState({
        clicked,
        style: {
          data: {
            fill: fillColor
          }
        }
      });
    };

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(victory__WEBPACK_IMPORTED_MODULE_1__["VictoryChart"], {
      height: 400,
      width: 400,
      domainPadding: {
        x: 50,
        y: [0, 20]
      },
      scale: {
        x: "time"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(victory__WEBPACK_IMPORTED_MODULE_1__["VictoryBar"], {
      dataComponent: __jsx(victory__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        events: {
          onMouseOver: handleMouseOver
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }),
      style: this.state.style,
      data: [{
        x: new Date(1986, 1, 1),
        y: 2
      }, {
        x: new Date(1996, 1, 1),
        y: 3
      }, {
        x: new Date(2006, 1, 1),
        y: 5
      }, {
        x: new Date(2016, 1, 1),
        y: 4
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TestChart);

/***/ }),

/***/ "./components/sidebar/NavElem.js":
/*!***************************************!*\
  !*** ./components/sidebar/NavElem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavElem; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/components/sidebar/NavElem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // const SideBar = props => (

function NavElem(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-946745851" + " " + "sidebar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.data.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-946745851" + " " + "btn btn-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-946745851",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-946745851" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.data.icon && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    fixedWidth: true,
    width: "0",
    icon: props.data.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("span", {
    style: {
      visibility: props.hoverState ? 'visible' : 'hidden',
      position: 'absolute'
    },
    className: "jsx-946745851" + " " + "item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.data.title))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "946745851",
    __self: this
  }, ".btn.jsx-946745851,.btn-link.jsx-946745851{color:black;}.sidebar-item.jsx-946745851{font-weight:bold;-webkit-text-decoraion:none;text-decoraion:none;display:block;margin-top:30px;margin-bottom:30px;color:black;}.item-title.jsx-946745851{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vY29tcG9uZW50cy9zaWRlYmFyL05hdkVsZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNZLEFBSWUsQUFFUSxBQVVKLFlBWkgsSUFhVSxDQVZBLHNCQVdKLG1CQUNGLE9BWEEsVUFZbEIsSUFYb0IsZ0JBQ0csbUJBQ1AsWUFFaEIiLCJmaWxlIjoiL1VzZXJzL3RheWxvcnBhc3F1YXJpZWxsby9sZWFybmluZ19yZXNvdXJjZXMvcGFzZW9uL3Bhc2Vvbi9jb21wb25lbnRzL3NpZGViYXIvTmF2RWxlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cblxuXG5cbi8vIGNvbnN0IFNpZGVCYXIgPSBwcm9wcyA9PiAoXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZFbGVtKHByb3BzKSB7XG4gIFxuICByZXR1cm4oXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgey8qIHN0eWxlPXt7YmFja2dyb3VuZDonI2UwNDBmYicsIGJvcmRlclJhZGl1czonMCA1MHB4IDUwcHggMCd9fSAqL31cbiAgICAgIHsvKiBzdHlsZT17e2JvcmRlclJpZ2h0OicycHggc29saWQgI2UwNDBmYid9fSAqL31cbiAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhci1pdGVtXCI+IFxuICAgIDxMaW5rIGhyZWY9e3Byb3BzLmRhdGEubGlua30+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxuICAgICAgICAgICAgICAvLyBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319XG4gICAgICAgICAgICA+IFxuICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5pY29uICYmIDxGb250QXdlc29tZUljb24gZml4ZWRXaWR0aCB3aWR0aD1cIjBcIiBpY29uPXtwcm9wcy5kYXRhLmljb259IC8+fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS10aXRsZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7dmlzaWJpbGl0eTogcHJvcHMuaG92ZXJTdGF0ZSA/ICd2aXNpYmxlJzogJ2hpZGRlbicgLCBwb3NpdGlvbjogJ2Fic29sdXRlJ319XG4gICAgICAgICAgICA+e3Byb3BzLmRhdGEudGl0bGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9MaW5rPiAgICBcbiAgPC9saT5cblxuPHN0eWxlIGpzeD57YFxuXG4uYnRuLCAuYnRuLWxpbmt7XG4gIGNvbG9yOiBibGFja1xufVxuLnNpZGViYXItaXRlbSB7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICB0ZXh0LWRlY29yYWlvbjogbm9uZTtcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgIGNvbG9yOiBibGFjaztcblxuIH1cblxuIC5pdGVtLXRpdGxle1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gfVxuXG4gYH1cbiA8L3N0eWxlPlxuXG4gPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxuXG4gIH0iXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/paseon/paseon/components/sidebar/NavElem.js */"));
}

/***/ }),

/***/ "./components/sidebar/SideBarLayout.js":
/*!*********************************************!*\
  !*** ./components/sidebar/SideBarLayout.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideBarLayout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavElem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavElem */ "./components/sidebar/NavElem.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "react-bootstrap/Dropdown");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/components/sidebar/SideBarLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function SideBarLayout(props) {
  let navItems = [{
    link: '/dashboard',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHome"],
    title: 'Dashboard'
  }, {
    link: '/account',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUserCog"],
    title: 'Account Settings'
  }, {
    link: '/zTestPage',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWrench"],
    title: 'Form Builder'
  }, {
    link: '/email_archives',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEnvelope"],
    title: 'Archived Emails'
  }, {
    link: '/analytics',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChartBar"],
    title: 'Analytics'
  }, // WAIT TO ADD UNTIL INTEGRATIONS LOGIC IS WORKED OUT
  // { 
  //   link: '/',
  //   fontAwesomeIcon: faBlenderPhone,
  //   title: 'Integrations'
  // },
  {
    link: '/',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBlenderPhone"],
    title: 'Integrations'
  }, {
    link: '/campaignManagment/campaigns',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBullhorn"],
    title: 'Campaigns'
  }];
  let subNavItems = [{
    link: '/campaignManagment/new_campaign',
    icon: null,
    title: 'New'
  }, {
    link: '/campaignManagment/campaigns',
    icon: null,
    title: 'Existing'
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-2762743814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2762743814" + " " + "navWrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("button", {
    onClick: () => props.toggleState(),
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarTogglerDemo01",
    "aria-controls": "navbarTogglerDemo01",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    className: "jsx-2762743814" + " " + "navbar-toggler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("span", {
    style: {
      padding: '2px'
    },
    className: "jsx-2762743814" + " " + ((props.hoverState ? 'active' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2762743814" + " " + "toggle-btn type11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx("h2", {
    style: {
      display: "inline-block"
    },
    className: "jsx-2762743814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("span", {
    style: {
      visibility: props.hoverState ? 'visible' : 'hidden',
      position: 'absolute'
    },
    className: "jsx-2762743814" + " " + "logoFont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    fixedWidth: true,
    width: "0",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFeatherAlt"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), "Paseon")), __jsx("hr", {
    className: "jsx-2762743814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), navItems.map(item => {
    return __jsx("div", {
      className: "jsx-2762743814" + " " + "myElem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx(_NavElem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hoverState: props.hoverState,
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2762743814",
    __self: this
  }, ".myElem.jsx-2762743814:hover{background:#6c63ff;border-radius:0 50px 50px 0;color:white !important;}.item-title.jsx-2762743814{color:black;}.btn-link.jsx-2762743814:hover{-webkit-text-decoraion:none !important;text-decoraion:none !important;}.btn.jsx-2762743814{-webkit-text-decoraion:none !important;text-decoraion:none !important;}.sidebar-item.jsx-2762743814{font-weight:bold;-webkit-text-decoraion:none;text-decoraion:none;display:block;margin-top:30px;margin-bottom:30px;}button.jsx-2762743814:focus{outline:none;}ul.jsx-2762743814{padding-left:0;}.logoFont.jsx-2762743814{margin-left:20px;}.navWrap.jsx-2762743814{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.toggle-btn.jsx-2762743814{height:2px;width:25px;background-color:#000;position:relative;top:50%;left:0;margin:auto;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.toggle-btn.jsx-2762743814:before{content:\"\";height:2px;width:25px;box-shadow:0 -10px 0 0 #000;position:absolute;top:0;left:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.toggle-btn.jsx-2762743814:after{content:\"\";height:2px;width:25px;box-shadow:0 10px 0 0 #000;position:absolute;top:0;left:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.active.jsx-2762743814 .toggle-btn.jsx-2762743814{background-color:transparent;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.active.jsx-2762743814 .toggle-btn.jsx-2762743814:before{top:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.active.jsx-2762743814 .toggle-btn.jsx-2762743814:after{top:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.active.jsx-2762743814 .type11.jsx-2762743814{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all 0.4s ease-in-out;transition:all 0.4s ease-in-out;}.active.jsx-2762743814 .type11.jsx-2762743814:before{-webkit-transform:translateY(0) rotate(40deg);-ms-transform:translateY(0) rotate(40deg);transform:translateY(0) rotate(40deg);}.active.jsx-2762743814 .type11.jsx-2762743814:after{-webkit-transform:translateY(0) rotate(-40deg);-ms-transform:translateY(0) rotate(-40deg);transform:translateY(0) rotate(-40deg);}@media (max-width:770px){.sidebar-item.jsx-2762743814{font-size:.65rem;display:block;}.logoFont.jsx-2762743814{font-size:1rem;padding-left:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vY29tcG9uZW50cy9zaWRlYmFyL1NpZGVCYXJMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0pnQixBQUlzQixBQU1MLEFBSWYsQUFHRSxBQUdrQixBQVFOLEFBS1gsQUFHbUIsQUFLRCxBQVVMLEFBU0UsQUFTQSxBQVVnQixBQUdyQixBQUdBLEFBSWdCLEFBR2dCLEFBRUMsQUFXdEIsQUFJRixNQTFCaUIsQUFHQSxLQWxDdkIsQUFTRSxBQVNBLENBM0RqQixDQWtCRixFQUlLLEFBNkVxQixDQXBFRyxDQXJCTCxBQWlCcEIsQUFvRWtCLEVBckdTLEdBZ0RILEFBU1QsQUFTQSxPQVNtQixFQTJCaEMsRUE1QzhCLEFBU0QsQUF1QzdCLE1BcEVtQixLQVdELEdBaERFLFdBc0N0QixFQTZCc0IsQ0FUQSxDQVRaLEdBakNJLEtBZmhCLEFBT0EsQUFHRSxBQXVDUyxPQUNLLENBaUJKLEFBUzJCLEFBR0EsQ0EvRHJCLEFBMENOLEtBVUMsQUFldUIsQ0F4QnZCLElBUnVCLEVBa0JFLENBVEEsR0EzQ2pCLE1Bd0RnQixhQXZEdkMsWUFtRStDLEdBRUMsMkJBSlQsS0FoQ0EsRUFrQkUsQ0FUQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL2xlYXJuaW5nX3Jlc291cmNlcy9wYXNlb24vcGFzZW9uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlQmFyTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZmFIb21lLCBmYVVzZXJDb2csIGZhV3JlbmNoLCBmYUNoYXJ0QmFyLCBmYUJsZW5kZXJQaG9uZSwgZmFFbnZlbG9wZSwgZmFCdWxsaG9ybiwgZmFGZWF0aGVyQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG5pbXBvcnQgTmF2RWxlbSBmcm9tICcuL05hdkVsZW0nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nO1xuaW1wb3J0IHsgRHJvcGRvd25CdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVCYXJMYXlvdXQocHJvcHMpIHtcbiAgXG4gIGxldCBuYXZJdGVtcyA9IFtcbiAgICB7XG4gICAgICBsaW5rOiAnL2Rhc2hib2FyZCcsXG4gICAgICBpY29uOiBmYUhvbWUsXG4gICAgICB0aXRsZTogJ0Rhc2hib2FyZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICcvYWNjb3VudCcsXG4gICAgICBpY29uOiBmYVVzZXJDb2csXG4gICAgICB0aXRsZTogJ0FjY291bnQgU2V0dGluZ3MnXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnL3pUZXN0UGFnZScsXG4gICAgICBpY29uOiBmYVdyZW5jaCxcbiAgICAgIHRpdGxlOiAnRm9ybSBCdWlsZGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJy9lbWFpbF9hcmNoaXZlcycsXG4gICAgICBpY29uOiBmYUVudmVsb3BlLFxuICAgICAgdGl0bGU6ICdBcmNoaXZlZCBFbWFpbHMnXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnL2FuYWx5dGljcycsXG4gICAgICBpY29uOiBmYUNoYXJ0QmFyLFxuICAgICAgdGl0bGU6ICdBbmFseXRpY3MnXG4gICAgfSxcbiAgICAvLyBXQUlUIFRPIEFERCBVTlRJTCBJTlRFR1JBVElPTlMgTE9HSUMgSVMgV09SS0VEIE9VVFxuICAgIC8vIHsgXG4gICAgLy8gICBsaW5rOiAnLycsXG4gICAgLy8gICBmb250QXdlc29tZUljb246IGZhQmxlbmRlclBob25lLFxuICAgIC8vICAgdGl0bGU6ICdJbnRlZ3JhdGlvbnMnXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICBsaW5rOiAnLycsXG4gICAgICBpY29uOiBmYUJsZW5kZXJQaG9uZSxcbiAgICAgIHRpdGxlOiAnSW50ZWdyYXRpb25zJ1xuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJy9jYW1wYWlnbk1hbmFnbWVudC9jYW1wYWlnbnMnLFxuICAgICAgaWNvbjogZmFCdWxsaG9ybixcbiAgICAgIHRpdGxlOiAnQ2FtcGFpZ25zJ1xuICAgIH0sXG4gICAgXG4gIF1cblxuXG4gIGxldCBzdWJOYXZJdGVtcyA9IFtcbiAgICB7XG4gICAgICBsaW5rOiAnL2NhbXBhaWduTWFuYWdtZW50L25ld19jYW1wYWlnbicsXG4gICAgICBpY29uOiBudWxsLFxuICAgICAgdGl0bGU6ICdOZXcnXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnL2NhbXBhaWduTWFuYWdtZW50L2NhbXBhaWducycsXG4gICAgICBpY29uOiBudWxsLFxuICAgICAgdGl0bGU6ICdFeGlzdGluZydcbiAgICB9LFxuICAgIFxuICBdXG5cblxuXG5cblxuICByZXR1cm4oXG4gICAgPD5cbiAgIFxuXG4gICAgICA8dWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdldyYXBcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy50b2dnbGVTdGF0ZSgpfSB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclRvZ2dsZXJEZW1vMDFcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyVG9nZ2xlckRlbW8wMVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cHJvcHMuaG92ZXJTdGF0ZSA/ICdhY3RpdmUnIDogJyd9IHN0eWxlPXt7cGFkZGluZzogJzJweCd9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLWJ0biB0eXBlMTFcIj48L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICBcbiAgICAgICAgICAgIDxoMiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT5cbiAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvRm9udFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7dmlzaWJpbGl0eTogcHJvcHMuaG92ZXJTdGF0ZSA/ICd2aXNpYmxlJzogJ2hpZGRlbicgLCBwb3NpdGlvbjogJ2Fic29sdXRlJ319XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gZml4ZWRXaWR0aCB3aWR0aD1cIjBcIiBpY29uPXtmYUZlYXRoZXJBbHR9IC8+XG5cbiAgICAgICAgICAgICAgUGFzZW9uXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICB7XG4gICAgICAgICAgbmF2SXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteUVsZW1cIj5cbiAgICAgICAgICAgICAgICA8TmF2RWxlbSBob3ZlclN0YXRlPXtwcm9wcy5ob3ZlclN0YXRlfSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuXG4gICAgICAgIH1cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJteUVsZW1cIj5cbiAgICAgICAgICA8RHJvcGRvd24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gdmFyaWFudD1cImxpbmtcIiBpZD1cImRyb3Bkb3duLWJhc2ljXCIgdGl0bGU9e1xuICAgICAgICAgICAgPHNwYW4+PEZvbnRBd2Vzb21lSWNvbiBmaXhlZFdpZHRoIHdpZHRoPVwiMFwiIGljb249e2ZhQnVsbGhvcm59IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtLXRpdGxlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IHByb3BzLmhvdmVyU3RhdGUgPyAndmlzaWJsZSc6ICdoaWRkZW4nLCBtYXJnaW5MZWZ0OiAnMTVweCd9fVxuICAgICAgICAgICAgICA+Q2FtcGFpZ25zPC9zcGFuPjwvc3Bhbj59XG4gICAgICAgICAgICA+XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHN1Yk5hdkl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICggXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiPntpdGVtLnRpdGxlfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj4gKi99XG5cblxuXG4gICAgPC91bD5cblxuICAgIDxzdHlsZSBqc3g+e2BcblxuLm15RWxlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM2YzYzZmY7XG4gICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xuICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaXRlbS10aXRsZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5idG4tbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhaW9uOiBub25lICFpbXBvcnRhbnRcbiAgfVxuICAuYnRuIHtcbiAgICB0ZXh0LWRlY29yYWlvbjogbm9uZSAhaW1wb3J0YW50XG4gICAgfVxuXG4gIC5zaWRlYmFyLWl0ZW0ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhaW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuICAgIHVsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMFxuICAgICB9XG4gICBcbiAgICAgLmxvZ29Gb250e1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgIFxuICAgIH1cblxuICAgIC5uYXZXcmFwe1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgXG5cbiAgICAvLyBcblxuICAgIC50b2dnbGUtYnRuIHtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7IH1cbiAgICAgIC50b2dnbGUtYnRuOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMTBweCAwIDAgIzAwMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0OyB9XG4gICAgICAudG9nZ2xlLWJ0bjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDAgMCAjMDAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7IH1cbiAgICBcbiAgICAuYWN0aXZlIC50b2dnbGUtYnRuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7IH1cbiAgICAgIC5hY3RpdmUgLnRvZ2dsZS1idG46YmVmb3JlIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDsgfVxuICAgICAgLmFjdGl2ZSAudG9nZ2xlLWJ0bjphZnRlciB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7IH1cbiAgICBcbiAgICAuYWN0aXZlIC50eXBlMTEge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7IH1cbiAgICAgIC5hY3RpdmUgLnR5cGUxMTpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDQwZGVnKTsgfVxuICAgICAgLmFjdGl2ZSAudHlwZTExOmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNDBkZWcpOyB9XG5cblxuICAgIC8vIFxuXG5cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCkge1xuIFxuXG4gICAgICAuc2lkZWJhci1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAuNjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgLmxvZ29Gb250e1xuICAgICAgICBmb250LXNpemU6IDFyZW07ICBcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuIFxuXG4gICAgYH08L3N0eWxlPlxuICAgXG4gICAgPC8+XG4pXG59XG4iXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/paseon/paseon/components/sidebar/SideBarLayout.js */"));
}

/***/ }),

/***/ "./lib/redux.js":
/*!**********************!*\
  !*** ./lib/redux.js ***!
  \**********************/
/*! exports provided: withRedux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRedux", function() { return withRedux; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/lib/redux.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const withRedux = (PageComponent, {
  ssr = true
} = {}) => {
  const WithRedux = (_ref) => {
    let {
      initialReduxState
    } = _ref,
        props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, ["initialReduxState"]);

    const store = getOrInitializeStore(initialReduxState);
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, __jsx(PageComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    })));
  }; // Make sure people don't use this HOC on _app.js level


  if (true) {
    const isAppHoc = PageComponent === next_app__WEBPACK_IMPORTED_MODULE_12___default.a || PageComponent.prototype instanceof next_app__WEBPACK_IMPORTED_MODULE_12___default.a;

    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  } // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrInitializeStore(); // Provide the store to getInitialProps of pages

      context.reduxStore = reduxStore; // Run getInitialProps from HOCed PageComponent

      const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {}; // Pass props to PageComponent

      return _objectSpread({}, pageProps, {
        initialReduxState: reduxStore.getState()
      });
    };
  }

  return WithRedux;
};
let reduxStore;

const getOrInitializeStore = initialState => {
  // Always make a new store if server, otherwise state is shared between requests
  if (true) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_11__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!reduxStore) {
    reduxStore = Object(_store__WEBPACK_IMPORTED_MODULE_11__["initializeStore"])(initialState);
  }

  return reduxStore;
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;

__webpack_require__(/*! ../client/router */ "./node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
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

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

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

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LayoutApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LayoutApp */ "./components/LayoutApp.js");
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/redux */ "./lib/redux.js");
/* harmony import */ var _components_QuickAnalytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/QuickAnalytics */ "./components/QuickAnalytics/index.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_campaign_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/campaign_data */ "./utils/campaign_data.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "react-bootstrap/DropdownButton");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "react-bootstrap/Dropdown");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_CampaignLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CampaignLink */ "./components/CampaignLink.js");
/* harmony import */ var _components_TESTCHART__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/TESTCHART */ "./components/TESTCHART.js");
var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/pages/dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import fetch from 'isomorphic-unfetch'















const getUserInfo = () => {
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => ({
    isAuthenticated: state.isAuthenticated
  }), react_redux__WEBPACK_IMPORTED_MODULE_5__["shallowEqual"]);
};

function Dashboard(props) {
  // todo - think about how I want to make all quick analytics more dry but still custom for each page - pass in props? 
  // const [quickAnalytics, setQuickAnalytics] = useState({ title: 'TOTAL MONTHLY SUBMISSIONS', body: '50%' })
  let totalForms = props.campaignList.length;
  let totalSubmissions = 0;
  let countArray = [];
  props.campaignList.forEach(campaign => {
    totalSubmissions = totalSubmissions + campaign.jsonb_array_length; // countArray = [...countArray, campaign.jsonb_array_length]
  });
  let quickAnalyticsData = [{
    title: 'TOTAL FORMS MANAGED',
    body: totalForms
  }, {
    title: 'TOTAL MONTHLY SUBMISSIONS',
    body: totalSubmissions
  }];
  return __jsx(_components_LayoutApp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Dashboard")), __jsx(_components_QuickAnalytics__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: quickAnalyticsData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    className: "col-md-6 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "card shadow mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "card-header py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Create a New Campaign")), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("img", {
    className: "img-fluid px-3 px-sm-4 mt-3 mb-4",
    style: {
      width: "25rem"
    },
    src: "../static/images/undraw_master_plan_95wa.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."), __jsx("a", {
    target: "_blank",
    rel: "nofollow",
    href: "https://undraw.co/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "See this cool link \u2192")))), __jsx("div", {
    className: "col-md-6 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "card shadow mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "card-header py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("h6", {
    className: "m-0 font-weight-bold text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Toggle, {
    variant: "link",
    id: "dropdown-basic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Manage Your Current Campaigns")), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, props.campaignList.length ? props.campaignList.map(campaign => {
    return __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(_components_CampaignLink__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: campaign.id,
      title: campaign.campaign_name,
      directory: "campaignManagment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }));
  }) : __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "You currently Have No Campaigns")))), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("img", {
    className: "img-fluid px-3 px-sm-4 mt-3 mb-4",
    style: {
      width: "25rem"
    },
    src: "../static/images/undraw_dev_focus_b9xo.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/campaignManagment/campaigns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "See All Campaigns \u2192")))))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: "card mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Card title"), __jsx("h6", {
    className: "card-subtitle mb-2 text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Card subtitle"), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Some quick example text to build on the card title and make up the bulk of the card's content."), __jsx("a", {
    href: "#",
    className: "card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Card link"), __jsx("a", {
    href: "#",
    className: "card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Another link")))), __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("div", {
    className: "card mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Card title"), __jsx("h6", {
    className: "card-subtitle mb-2 text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Card subtitle"), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Some quick example text to build on the card title and make up the bulk of the card's content."), __jsx("a", {
    href: "#",
    className: "card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Card link"), __jsx("a", {
    href: "#",
    className: "card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Another link"))))));
}

Dashboard.getInitialProps = async ctx => {
  //check if page is authorized
  Object(_utils_auth__WEBPACK_IMPORTED_MODULE_4__["auth"])(ctx);

  if (!ctx.reduxStore.getState().campaigns.data.length) {
    await Object(_utils_campaign_data__WEBPACK_IMPORTED_MODULE_6__["getCampaignData"])(ctx);
  }

  return {
    campaignList: ctx.reduxStore.getState().campaigns.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["withRedux"])(Dashboard)); // export default Dashboard;

/***/ }),

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/*! exports provided: REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT, DELETE_ACCOUNT, CAMPAIGN_DATA_LOADED, ADD_CAMPAIGN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAIL", function() { return REGISTER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADED", function() { return USER_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ACCOUNT", function() { return DELETE_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMPAIGN_DATA_LOADED", function() { return CAMPAIGN_DATA_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CAMPAIGN", function() { return ADD_CAMPAIGN; });
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const USER_LOADED = "USER_LOADED";
const AUTH_ERROR = "AUTH_ERROR";
const LOGOUT = "LOGOUT";
const DELETE_ACCOUNT = "DELETE_ACCOUNT";
const CAMPAIGN_DATA_LOADED = "CAMPAIGN_DATA_LOADED";
const ADD_CAMPAIGN = "ADD_CAMPAIGN";

/***/ }),

/***/ "./redux/reducers/auth.js":
/*!********************************!*\
  !*** ./redux/reducers/auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const initialState = {
  //token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_11__["REGISTER_SUCCESS"]:
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('token', payload.token, {
        expires: 36000
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('userId', payload.payload.id, {
        expires: 36000
      }); //localStorage.setItem("token", payload.token);

      return _objectSpread({}, state, {}, payload, {
        isAuthenticated: true,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_11__["REGISTER_FAIL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_11__["LOGIN_FAIL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_11__["AUTH_ERROR"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_11__["LOGOUT"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_11__["DELETE_ACCOUNT"]:
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.remove('token');
      return _objectSpread({}, state, {
        isAuthenticated: false,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_11__["LOGIN_SUCCESS"]:
      console.log('LOGIN_SUCCESS reducer success', payload);
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('token', payload.token, {
        expires: 36000
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('userId', payload.userData.id, {
        expires: 36000
      });
      return _objectSpread({}, state, {}, payload, {
        isAuthenticated: true,
        user: payload.userData
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/campaigns.js":
/*!*************************************!*\
  !*** ./redux/reducers/campaigns.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const initialState = {
  data: []
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["CAMPAIGN_DATA_LOADED"]:
      return _objectSpread({}, state, {
        data: [...payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["ADD_CAMPAIGN"]:
      return _objectSpread({}, state, {
        data: [...state.data, payload]
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./redux/reducers/auth.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./redux/reducers/user.js");
/* harmony import */ var _campaigns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaigns */ "./redux/reducers/campaigns.js");
 // import alert from "./alert";



 // import profile from "./profile";
// import post from "./post";

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  //   alert,
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  campaigns: _campaigns__WEBPACK_IMPORTED_MODULE_3__["default"] //   profile,
  //   post

}));

/***/ }),

/***/ "./redux/reducers/user.js":
/*!********************************!*\
  !*** ./redux/reducers/user.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const initialState = {
  //token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_11__["USER_LOADED"]:
      return _objectSpread({}, state, {
        user: payload //   loading: false

      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/reducers */ "./redux/reducers/index.js");




const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a]; // const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

const initializeStore = (preloadedState = initialState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_redux_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
};

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: login, getUserData, auth, logout, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _getUrl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./getUrl */ "./utils/getUrl.js");










var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/utils/auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





 // import { login_action } from '../redux/actions/auth'



const login = ({
  token
}) => {
  js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.set('token', token, {
    expires: 36000
  });
  next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/dashboard');
};
const getUserData = async ctx => {
  const {
    userId
  } = next_cookies__WEBPACK_IMPORTED_MODULE_12___default()(ctx);
  let url = `${_getUrl__WEBPACK_IMPORTED_MODULE_16__["default"]}/account/get_acct_details`;

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()({
        id: userId
      })
    }).then(async function (response) {
      if (response.status !== 200) {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }

      await response.json().then(function (data) {
        const {
          dispatch
        } = ctx.reduxStore;
        dispatch({
          type: 'USER_LOADED',
          payload: data
        });
      });
    });
  } catch (error) {
    console.error('You have an error in your code or there are Network issues.', error);
    const {
      response
    } = error;
  }
};
const auth = async ctx => {
  const {
    token,
    userId
  } = next_cookies__WEBPACK_IMPORTED_MODULE_12___default()(ctx);
  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  } // We already checked for server. This should only happen on client.


  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/login');
  }

  return userId;
};
const logout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.remove('token'); // to support logging out from all windows

  window.localStorage.setItem('logout', _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_8___default()());
  next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/login');
};
const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/login');
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(() => {
      window.addEventListener('storage', syncLogout);
      return () => {
        window.removeEventListener('storage', syncLogout);
        window.localStorage.removeItem('logout');
      };
    }, [null]);
    return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }));
  };

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx);
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
    return _objectSpread({}, componentProps, {
      token
    });
  };

  return Wrapper;
};

/***/ }),

/***/ "./utils/campaign_data.js":
/*!********************************!*\
  !*** ./utils/campaign_data.js ***!
  \********************************/
/*! exports provided: getCampaignData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCampaignData", function() { return getCampaignData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _getUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getUrl */ "./utils/getUrl.js");




 // import { login_action } from '../redux/actions/auth'



const getCampaignData = async ctx => {
  const {
    userId
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx);

  try {
    const res = await fetch(`${_getUrl__WEBPACK_IMPORTED_MODULE_6__["default"]}/campaign/get_campaigns/${userId}`);
    const data = await res.json();
    const {
      dispatch
    } = ctx.reduxStore;
    await dispatch({
      type: 'CAMPAIGN_DATA_LOADED',
      payload: data
    });
  } catch (error) {
    console.error('You have an error in your code or there are Network issues.', error);
    const {
      response
    } = error;
  }
};

/***/ }),

/***/ "./utils/get-host.js":
/*!***************************!*\
  !*** ./utils/get-host.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This is not production ready, (except with providers that ensure a secure host, like Now)
// For production consider the usage of environment variables and NODE_ENV
function getHost(req) {
  if (!req) return '';
  const {
    host
  } = req.headers;

  if (host.startsWith('localhost')) {
    return `http://${host}`;
  }

  return `https://${host}`;
}

/* harmony default export */ __webpack_exports__["default"] = (getHost);

/***/ }),

/***/ "./utils/getUrl.js":
/*!*************************!*\
  !*** ./utils/getUrl.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getUrl() {
  return 'http://localhost:3001'; // return 'https://paseon-api.taylorpasq.now.sh'
}

/* harmony default export */ __webpack_exports__["default"] = (getUrl());

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taylorpasquariello/learning_resources/paseon/paseon/pages/dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

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

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

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

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/Dropdown":
/*!*******************************************!*\
  !*** external "react-bootstrap/Dropdown" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ "react-bootstrap/DropdownButton":
/*!*************************************************!*\
  !*** external "react-bootstrap/DropdownButton" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/DropdownButton");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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

/***/ }),

/***/ "victory":
/*!**************************!*\
  !*** external "victory" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map