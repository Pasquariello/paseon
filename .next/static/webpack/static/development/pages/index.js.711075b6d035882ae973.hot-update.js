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
  }, initDivMouseOver, __jsx("div", {
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
  }, ".action-button.jsx-4044568645{background-color:Transparent;background-repeat:no-repeat;cursor:pointer;padding:20px;color:white;font-weight:heavy;border:3px solid white;overflow:hidden;outline:none;background:linear-gradient(to right,#fff 0%,#fff 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.action-button.jsx-4044568645:hover{background-position:0 0;color:black;}.grid-container.jsx-4044568645{display:grid;}.grid-container--fill.jsx-4044568645{grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.grid-container--fit.jsx-4044568645{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));}.grid-element.jsx-4044568645{background-color:#E3E3E3;padding:50px;color:#fff;border:1px solid #fff;}.header.jsx-4044568645{grid-area:header;}.innerContainer.jsx-4044568645{position:absolute;top:0;width:100%;}svg.jsx-4044568645{display:inline-block;position:absolute;top:0;left:0;z-index:-1;}.container.jsx-4044568645{display:inline-block;position:relative;width:100%;padding-bottom:100%;vertical-align:middle;overflow:hidden;}h1.jsx-4044568645,a.jsx-4044568645{font-family:'Arial';}ul.jsx-4044568645{padding:0;}li.jsx-4044568645{list-style:none;margin:5px 0;}a.jsx-4044568645{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-4044568645:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0drQixBQUtnQyxBQW1CTixBQU1WLEFBSStDLEFBSUQsQUFJcEMsQUFVTixBQUlBLEFBS0ksQUFTQSxBQVdPLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLENBckVSLEdBMkR1QixDQXJDdkIsQ0FJTyxFQXlCQyxDQXBCWSxBQVNBLEdBOUNOLEFBaUNGLENBZkMsSUFyQ2dCLEFBcUZyQixNQWhDUixDQWhDQSxFQWlCVyxDQW1CSCxBQVNLLE1BUkosSUFuQmEsQ0E0QkEsQUFzQkQsRUE5QlIsS0ExREcsQUFnQ2hCLENBSkEsR0E2RFEsRUE5QlIsT0FRd0IsQ0E1QnhCLENBdENlLGFBQ0QsT0FrRUksS0FqRUUsV0FrRXBCLE9BakV5Qix1QkFDUCxnQkFDSixhQUMrRSx1RkFFakUsMEJBQ0MsMkJBQ1MsZ0ZBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4vLyAgIHJldHVybiBbXG4vLyAgICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcbi8vICAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4vLyAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxuLy8gICBdO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuXG4gXG4gIGZ1bmN0aW9uIGluaXREaXZNb3VzZU92ZXIoKSAgIHtcbiAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlkaXZcIik7XG4gICAgIGRpdi5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICBkaXYub25tb3VzZW92ZXIgPSBmdW5jdGlvbigpICAge1xuICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gdHJ1ZTtcbiAgICAgfTtcbiAgICAgZGl2Lm9ubW91c2VvdXQgPSBmdW5jdGlvbigpICAge1xuICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gZmFsc2U7XG4gICAgIH1cbiAgICAgZGl2Lm9uY2xpY2sgPSBmdW5jdGlvbigpICAge1xuICAgICAgICBpZiAodGhpcy5tb3VzZUlzT3ZlcikgICB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlIScpXG4gICAgICAgIH1cbiAgICAgfVxuICB9XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cblxuICAgIHtpbml0RGl2TW91c2VPdmVyfVxuICAgICAgey8qICAqL31cbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIHdpZHRoOicxMDAlJywgaGVpZ2h0Oic1MDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCBibHVlJ319PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckNvbnRhaW5lclwiPjxoMT5IZWxsbzwvaDE+PC9kaXY+XG4gIDxzdmcgdmlld0JveD1cIjAgMCA1MDAgNTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaW5ZTWluIG1lZXRcIj5cbiAgICA8cGF0aCBkPVwiTTAsMjAwIEMyNTAsMzAwIDM1MCwwIDYwMCwzMDAgTDUwMCwwMCBMMCwwIFowXCIgc3R5bGU9e3tzdHJva2U6ICdub25lJywgZmlsbDoncmVkJ319PjwvcGF0aD5cbiAgPC9zdmc+XG48L2Rpdj5cbjwvZGl2PiAqL31cbjxkaXYgaWQ9XCJteWRpdlwiY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonNzAwcHgnfX0+XG5cbjxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luOiAnNTBweCAwIDMwcHggMzBweCcsIGNvbG9yOiAnd2hpdGUnLCB3aWR0aDogJzQwJScsIHBhZGRpbmc6ICcyMHB4J319PlxuPGgxIHN0eWxlPXt7Zm9udFNpemU6IFwiNmVtXCIsIG1hcmdpbjpcIjAgMCAxMHB4IDBcIn19PlBBU0VPTjwvaDE+XG48cCAgc3R5bGU9e3tmb250U2l6ZTogJzEuMmVtJ319PkF0IHZlcm8gZW9zIGV0IGFjY3VzYW11cyBldCBpdXN0byBvZGlvIGRpZ25pc3NpbW9zIGR1Y2ltdXMgcXVpIGJsYW5kaXRpaXMgcHJhZXNlbnRpdW0gdm9sdXB0YXR1bSBkZWxlbml0aSBhdHF1ZSBjb3JydXB0aSBxdW9zIGRvbG9yZXMgZXQgcXVhcyBtb2xlc3RpYXMgZXhjZXB0dXJpIHNpbnQgb2NjYWVjYXRpIGN1cGlkaXRhdGUgbm9uIHByb3ZpZGVudDwvcD5cbjxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvblwiPkxFQVJOIE1PUkU8L2J1dHRvbj5cbjwvZGl2PlxuPGRpdj5cbiAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUwMCAxNTBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScsfX0+XG4gIDxkZWZzPlxuICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImdyYWRpZW50XCIgeDE9XCIwJVwiIHkxPVwiMCVcIiB4Mj1cIjEwMCVcIiB5Mj1cIjAlXCI+XG5cdCAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdHlsZT17e3N0b3BDb2xvcjpcIiNmODM2MDBcIn19IC8+XG5cdCAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0eWxlPXt7c3RvcENvbG9yOlwiI2Y5ZDQyM1wifX0gLz5cbiAgICA8L2xpbmVhckdyYWRpZW50PlxuICA8L2RlZnM+XG4gIDxnIGZpbGw9XCJ1cmwoI2dyYWRpZW50KVwiPlxuXG4gICAgPHBhdGggZD1cIiBNMCwxMjAgQzIwMCwxMDAgMzAwLDE1MCA1MDAsMTQwIEw1MDAsMCBMMCwwIFogXCIgPiA8L3BhdGg+XG4gICAgPC9nPlxuICA8L3N2Zz5cbiAgXG48L2Rpdj5cblxuIFxuPC9kaXY+XG5cblxuXG48ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGdyaWQtY29udGFpbmVyLS1maWxsXCIgc3R5bGU9e3t3aWR0aDogJzcwJScsIG1hcmdpbkxlZnQ6JzE1JSd9fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnRcIj5cbiAgICAxIHJvIGVvcyBldCBhY2N1c2FtdXMgZXQgaXVzdG8gb2RpbyBkaWduaXNzaW1vcyBkdWNpbXVzIHF1aSBibGFuZGl0aWlzXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgIDIgcm8gZW9zIGV0IGFjY3VzYW11cyBldCBpdXN0byBvZGlvIGRpZ25pc3NpbW9zIGR1Y2ltdXMgcXVpIGJsYW5kaXRpaXNcbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG4gICAgMyBybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cyBxdWkgYmxhbmRpdGlpc1xuICA8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnRcIj5cbiAgICA0IHJvIGVvcyBldCBhY2N1c2FtdXMgZXQgaXVzdG8gb2RpbyBkaWduaXNzaW1vcyBkdWNpbXVzIHF1aSBibGFuZGl0aWlzXG4gIDwvZGl2PlxuXG48L2Rpdj5cblxuXG48ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMjAwcHgnLCBoZWlnaHQ6ICc2NTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHdpZHRoOiAnODAlJywgbWFyZ2luTGVmdDonMTAlJ319PlxuXG48L2Rpdj5cblxuPGRpdiBzdHlsZT17e21hcmdpbjogJzIwMHB4IDAgMCAwJywgaGVpZ2h0OiAnMzAwcHgnLCB3aWR0aDogJzEwMCUnLGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmOWQ0MjMgMCUsICNmODM2MDAgMTAwJSlcIn19PlxuXG48L2Rpdj5cbnsvKiBNMCwxODAgQzI1MCw0MDAgMzUwLDAgNjAwLDMyMCBMNTAwLDAwIEwwLDAgWjAgKi99XG5cbnsvKiBNMC4wMCwxMDAuMjcgQzIxNi44MywyNDAgMzA0LjMwLDguMzkgNTAwLjAwLDEwOS4wMyBMNTAwLjAwLDAuMDAgTDAuMDAsMC4wMCBaICovfVxuXG57LyogTTAsMjAwIEMyNTAsMzAwIDM1MCwwIDYwMCwzMDAgTDUwMCwwMCBMMCwwIFowICovfVxuICAgICAgey8qIDxoMT5NeSBCbG9nPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD4gKi99XG4gICAgICA8c3R5bGUganN4PntgXG5cbi8vIFxuLmFjdGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogaGVhdnk7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOm5vbmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiAwJSwgI2ZmZiA1MCUsIFRyYW5zcGFyZW50IDUwJSwgVHJhbnNwYXJlbnQgMTAwJSk7XG5cbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzO1xufVxuXG5cblxuLmFjdGlvbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMDtcbiAgY29sb3I6IGJsYWNrO1xuXG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5ncmlkLWNvbnRhaW5lci0tZmlsbCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbn1cblxuLmdyaWQtY29udGFpbmVyLS1maXQge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbn1cblxuLmdyaWQtZWxlbWVudCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjRTNFM0UzO1xucGFkZGluZzogNTBweDtcbmNvbG9yOiAjZmZmO1xuYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuXG5cblxuLmhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xufVxuXG4uaW5uZXJDb250YWluZXJ7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MDtcbiAgd2lkdGg6MTAwJTtcbn1cbnN2ZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbiAgICAgICAgaDEsXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.711075b6d035882ae973.hot-update.js.map