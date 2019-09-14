webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
  }, ".action-button.jsx-4044568645{background-color:Transparent;background-repeat:no-repeat;cursor:pointer;padding:20px;color:white;font-weight:heavy;border:3px solid white;overflow:hidden;outline:none;background:linear-gradient(to right,#fff 0%,#fff 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.action-button.jsx-4044568645:hover{background-position:0 0;color:black;}.grid-container.jsx-4044568645{display:grid;}.grid-container--fill.jsx-4044568645{grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.grid-container--fit.jsx-4044568645{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));}.grid-element.jsx-4044568645{background-color:#E3E3E3;padding:50px;color:#fff;border:1px solid #fff;}.header.jsx-4044568645{grid-area:header;}.innerContainer.jsx-4044568645{position:absolute;top:0;width:100%;}svg.jsx-4044568645{display:inline-block;position:absolute;top:0;left:0;z-index:-1;}.container.jsx-4044568645{display:inline-block;position:relative;width:100%;padding-bottom:100%;vertical-align:middle;overflow:hidden;}h1.jsx-4044568645,a.jsx-4044568645{font-family:'Arial';}ul.jsx-4044568645{padding:0;}li.jsx-4044568645{list-style:none;margin:5px 0;}a.jsx-4044568645{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-4044568645:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0drQixBQUtnQyxBQW1CTixBQU1WLEFBSStDLEFBSUQsQUFJcEMsQUFVTixBQUlBLEFBS0ksQUFTQSxBQVdPLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLENBckVSLEdBMkR1QixDQXJDdkIsQ0FJTyxFQXlCQyxDQXBCWSxBQVNBLEdBOUNOLEFBaUNGLENBZkMsSUFyQ2dCLEFBcUZyQixNQWhDUixDQWhDQSxFQWlCVyxDQW1CSCxBQVNLLE1BUkosSUFuQmEsQ0E0QkEsQUFzQkQsRUE5QlIsS0ExREcsQUFnQ2hCLENBSkEsR0E2RFEsRUE5QlIsT0FRd0IsQ0E1QnhCLENBdENlLGFBQ0QsT0FrRUksS0FqRUUsV0FrRXBCLE9BakV5Qix1QkFDUCxnQkFDSixhQUMrRSx1RkFFakUsMEJBQ0MsMkJBQ1MsZ0ZBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4vLyAgIHJldHVybiBbXG4vLyAgICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcbi8vICAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4vLyAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxuLy8gICBdO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuXG4gXG4gIGZ1bmN0aW9uIGluaXREaXZNb3VzZU92ZXIoKSAgIHtcbiAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlkaXZcIik7XG4gICAgIGRpdi5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICBkaXYub25tb3VzZW92ZXIgPSBmdW5jdGlvbigpICAge1xuICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gdHJ1ZTtcbiAgICAgfTtcbiAgICAgZGl2Lm9ubW91c2VvdXQgPSBmdW5jdGlvbigpICAge1xuICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gZmFsc2U7XG4gICAgIH1cbiAgICAgZGl2Lm9uY2xpY2sgPSBmdW5jdGlvbigpICAge1xuICAgICAgICBpZiAodGhpcy5tb3VzZUlzT3ZlcikgICB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlIScpXG4gICAgICAgIH1cbiAgICAgfVxuICB9XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cblxuXG4gICAgICB7LyogICovfVxuICAgICAgey8qIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzUwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyQ29udGFpbmVyXCI+PGgxPkhlbGxvPC9oMT48L2Rpdj5cbiAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUwMCA1MDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pbllNaW4gbWVldFwiPlxuICAgIDxwYXRoIGQ9XCJNMCwyMDAgQzI1MCwzMDAgMzUwLDAgNjAwLDMwMCBMNTAwLDAwIEwwLDAgWjBcIiBzdHlsZT17e3N0cm9rZTogJ25vbmUnLCBmaWxsOidyZWQnfX0+PC9wYXRoPlxuICA8L3N2Zz5cbjwvZGl2PlxuPC9kaXY+ICovfVxuPGRpdiBpZD1cIm15ZGl2XCJjbGFzc05hbWU9XCJcIiBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0Oic3MDBweCd9fT5cblxuPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW46ICc1MHB4IDAgMzBweCAzMHB4JywgY29sb3I6ICd3aGl0ZScsIHdpZHRoOiAnNDAlJywgcGFkZGluZzogJzIwcHgnfX0+XG48aDEgc3R5bGU9e3tmb250U2l6ZTogXCI2ZW1cIiwgbWFyZ2luOlwiMCAwIDEwcHggMFwifX0+UEFTRU9OPC9oMT5cbjxwICBzdHlsZT17e2ZvbnRTaXplOiAnMS4yZW0nfX0+QXQgdmVybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cyBxdWkgYmxhbmRpdGlpcyBwcmFlc2VudGl1bSB2b2x1cHRhdHVtIGRlbGVuaXRpIGF0cXVlIGNvcnJ1cHRpIHF1b3MgZG9sb3JlcyBldCBxdWFzIG1vbGVzdGlhcyBleGNlcHR1cmkgc2ludCBvY2NhZWNhdGkgY3VwaWRpdGF0ZSBub24gcHJvdmlkZW50PC9wPlxuPGJ1dHRvbiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9uXCI+TEVBUk4gTU9SRTwvYnV0dG9uPlxuPC9kaXY+XG48ZGl2PlxuICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTAwIDE1MFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyx9fT5cbiAgPGRlZnM+XG4gICAgPGxpbmVhckdyYWRpZW50IGlkPVwiZ3JhZGllbnRcIiB4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMTAwJVwiIHkyPVwiMCVcIj5cblx0ICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0eWxlPXt7c3RvcENvbG9yOlwiI2Y4MzYwMFwifX0gLz5cblx0ICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3R5bGU9e3tzdG9wQ29sb3I6XCIjZjlkNDIzXCJ9fSAvPlxuICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gIDwvZGVmcz5cbiAgPGcgZmlsbD1cInVybCgjZ3JhZGllbnQpXCI+XG5cbiAgICA8cGF0aCBkPVwiIE0wLDEyMCBDMjAwLDEwMCAzMDAsMTUwIDUwMCwxNDAgTDUwMCwwIEwwLDAgWiBcIiA+IDwvcGF0aD5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuICBcbjwvZGl2PlxuXG4gXG48L2Rpdj5cblxuXG5cbjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgZ3JpZC1jb250YWluZXItLWZpbGxcIiBzdHlsZT17e3dpZHRoOiAnNzAlJywgbWFyZ2luTGVmdDonMTUlJ319PlxuICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgIDEgcm8gZW9zIGV0IGFjY3VzYW11cyBldCBpdXN0byBvZGlvIGRpZ25pc3NpbW9zIGR1Y2ltdXMgcXVpIGJsYW5kaXRpaXNcbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG4gICAgMiBybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cyBxdWkgYmxhbmRpdGlpc1xuICA8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnRcIj5cbiAgICAzIHJvIGVvcyBldCBhY2N1c2FtdXMgZXQgaXVzdG8gb2RpbyBkaWduaXNzaW1vcyBkdWNpbXVzIHF1aSBibGFuZGl0aWlzXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgIDQgcm8gZW9zIGV0IGFjY3VzYW11cyBldCBpdXN0byBvZGlvIGRpZ25pc3NpbW9zIGR1Y2ltdXMgcXVpIGJsYW5kaXRpaXNcbiAgPC9kaXY+XG5cbjwvZGl2PlxuXG5cbjxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcyMDBweCcsIGhlaWdodDogJzY1MHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgd2lkdGg6ICc4MCUnLCBtYXJnaW5MZWZ0OicxMCUnfX0+XG5cbjwvZGl2PlxuXG48ZGl2IHN0eWxlPXt7bWFyZ2luOiAnMjAwcHggMCAwIDAnLCBoZWlnaHQ6ICczMDBweCcsIHdpZHRoOiAnMTAwJScsYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y5ZDQyMyAwJSwgI2Y4MzYwMCAxMDAlKVwifX0+XG5cbjwvZGl2Plxuey8qIE0wLDE4MCBDMjUwLDQwMCAzNTAsMCA2MDAsMzIwIEw1MDAsMDAgTDAsMCBaMCAqL31cblxuey8qIE0wLjAwLDEwMC4yNyBDMjE2LjgzLDI0MCAzMDQuMzAsOC4zOSA1MDAuMDAsMTA5LjAzIEw1MDAuMDAsMC4wMCBMMC4wMCwwLjAwIFogKi99XG5cbnsvKiBNMCwyMDAgQzI1MCwzMDAgMzUwLDAgNjAwLDMwMCBMNTAwLDAwIEwwLDAgWjAgKi99XG4gICAgICB7LyogPGgxPk15IEJsb2c8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPiAqL31cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuLy8gXG4uYWN0aW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBoZWF2eTtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6bm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDAlLCAjZmZmIDUwJSwgVHJhbnNwYXJlbnQgNTAlLCBUcmFuc3BhcmVudCAxMDAlKTtcblxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuM3M7XG59XG5cblxuXG4uYWN0aW9uLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246MCAwO1xuICBjb2xvcjogYmxhY2s7XG5cbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmdyaWQtY29udGFpbmVyLS1maWxsIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xufVxuXG4uZ3JpZC1jb250YWluZXItLWZpdCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xufVxuXG4uZ3JpZC1lbGVtZW50IHtcbmJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XG5wYWRkaW5nOiA1MHB4O1xuY29sb3I6ICNmZmY7XG5ib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG5cblxuXG4uaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG59XG5cbi5pbm5lckNvbnRhaW5lcntcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDowO1xuICB3aWR0aDoxMDAlO1xufVxuc3ZnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG59XG5cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuICAgICAgICBoMSxcbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.65745b43ee205ab4400f.hot-update.js.map