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
    onMouseEnter: function onMouseEnter() {
      return console.log('hi');
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
  }, ".action-button.jsx-4044568645{background-color:Transparent;background-repeat:no-repeat;cursor:pointer;padding:20px;color:white;font-weight:heavy;border:3px solid white;overflow:hidden;outline:none;background:linear-gradient(to right,#fff 0%,#fff 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.action-button.jsx-4044568645:hover{background-position:0 0;color:black;}.grid-container.jsx-4044568645{display:grid;}.grid-container--fill.jsx-4044568645{grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.grid-container--fit.jsx-4044568645{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));}.grid-element.jsx-4044568645{background-color:#E3E3E3;padding:50px;color:#fff;border:1px solid #fff;}.header.jsx-4044568645{grid-area:header;}.innerContainer.jsx-4044568645{position:absolute;top:0;width:100%;}svg.jsx-4044568645{display:inline-block;position:absolute;top:0;left:0;z-index:-1;}.container.jsx-4044568645{display:inline-block;position:relative;width:100%;padding-bottom:100%;vertical-align:middle;overflow:hidden;}h1.jsx-4044568645,a.jsx-4044568645{font-family:'Arial';}ul.jsx-4044568645{padding:0;}li.jsx-4044568645{list-style:none;margin:5px 0;}a.jsx-4044568645{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-4044568645:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0drQixBQUtnQyxBQW1CTixBQU1WLEFBSStDLEFBSUQsQUFJcEMsQUFVTixBQUlBLEFBS0ksQUFTQSxBQVdPLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLENBckVSLEdBMkR1QixDQXJDdkIsQ0FJTyxFQXlCQyxDQXBCWSxBQVNBLEdBOUNOLEFBaUNGLENBZkMsSUFyQ2dCLEFBcUZyQixNQWhDUixDQWhDQSxFQWlCVyxDQW1CSCxBQVNLLE1BUkosSUFuQmEsQ0E0QkEsQUFzQkQsRUE5QlIsS0ExREcsQUFnQ2hCLENBSkEsR0E2RFEsRUE5QlIsT0FRd0IsQ0E1QnhCLENBdENlLGFBQ0QsT0FrRUksS0FqRUUsV0FrRXBCLE9BakV5Qix1QkFDUCxnQkFDSixhQUMrRSx1RkFFakUsMEJBQ0MsMkJBQ1MsZ0ZBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4vLyAgIHJldHVybiBbXG4vLyAgICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcbi8vICAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4vLyAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxuLy8gICBdO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuXG4gXG4gIGZ1bmN0aW9uIGluaXREaXZNb3VzZU92ZXIoKSAgIHtcbiAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlkaXZcIik7XG4gICAgIGRpdi5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICBkaXYub25tb3VzZW92ZXIgPSBmdW5jdGlvbigpICAge1xuICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gdHJ1ZTtcbiAgICAgfTtcbiAgICAgZGl2Lm9ubW91c2VvdXQgPSBmdW5jdGlvbigpICAge1xuICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gZmFsc2U7XG4gICAgIH1cbiAgICAgZGl2Lm9uY2xpY2sgPSBmdW5jdGlvbigpICAge1xuICAgICAgICBpZiAodGhpcy5tb3VzZUlzT3ZlcikgICB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlIScpXG4gICAgICAgIH1cbiAgICAgfVxuICB9XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cblxuXG4gICAgICB7LyogICovfVxuICAgICAgey8qIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzUwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyQ29udGFpbmVyXCI+PGgxPkhlbGxvPC9oMT48L2Rpdj5cbiAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUwMCA1MDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pbllNaW4gbWVldFwiPlxuICAgIDxwYXRoIGQ9XCJNMCwyMDAgQzI1MCwzMDAgMzUwLDAgNjAwLDMwMCBMNTAwLDAwIEwwLDAgWjBcIiBzdHlsZT17e3N0cm9rZTogJ25vbmUnLCBmaWxsOidyZWQnfX0+PC9wYXRoPlxuICA8L3N2Zz5cbjwvZGl2PlxuPC9kaXY+ICovfVxuPGRpdiBpZD1cIm15ZGl2XCIgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonNzAwcHgnfX0gb25Nb3VzZUVudGVyPXsoKT0+Y29uc29sZS5sb2coJ2hpJyl9PlxuXG48ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpbjogJzUwcHggMCAzMHB4IDMwcHgnLCBjb2xvcjogJ3doaXRlJywgd2lkdGg6ICc0MCUnLCBwYWRkaW5nOiAnMjBweCd9fT5cbjxoMSBzdHlsZT17e2ZvbnRTaXplOiBcIjZlbVwiLCBtYXJnaW46XCIwIDAgMTBweCAwXCJ9fT5QQVNFT048L2gxPlxuPHAgIHN0eWxlPXt7Zm9udFNpemU6ICcxLjJlbSd9fT5BdCB2ZXJvIGVvcyBldCBhY2N1c2FtdXMgZXQgaXVzdG8gb2RpbyBkaWduaXNzaW1vcyBkdWNpbXVzIHF1aSBibGFuZGl0aWlzIHByYWVzZW50aXVtIHZvbHVwdGF0dW0gZGVsZW5pdGkgYXRxdWUgY29ycnVwdGkgcXVvcyBkb2xvcmVzIGV0IHF1YXMgbW9sZXN0aWFzIGV4Y2VwdHVyaSBzaW50IG9jY2FlY2F0aSBjdXBpZGl0YXRlIG5vbiBwcm92aWRlbnQ8L3A+XG48YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25cIj5MRUFSTiBNT1JFPC9idXR0b24+XG48L2Rpdj5cbjxkaXY+XG4gIDxzdmcgdmlld0JveD1cIjAgMCA1MDAgMTUwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiBzdHlsZT17e2hlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnLH19PlxuICA8ZGVmcz5cbiAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudFwiIHgxPVwiMCVcIiB5MT1cIjAlXCIgeDI9XCIxMDAlXCIgeTI9XCIwJVwiPlxuXHQgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3R5bGU9e3tzdG9wQ29sb3I6XCIjZjgzNjAwXCJ9fSAvPlxuXHQgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdHlsZT17e3N0b3BDb2xvcjpcIiNmOWQ0MjNcIn19IC8+XG4gICAgPC9saW5lYXJHcmFkaWVudD5cbiAgPC9kZWZzPlxuICA8ZyBmaWxsPVwidXJsKCNncmFkaWVudClcIj5cblxuICAgIDxwYXRoIGQ9XCIgTTAsMTIwIEMyMDAsMTAwIDMwMCwxNTAgNTAwLDE0MCBMNTAwLDAgTDAsMCBaIFwiID4gPC9wYXRoPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4gIFxuPC9kaXY+XG5cbiBcbjwvZGl2PlxuXG5cblxuPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBncmlkLWNvbnRhaW5lci0tZmlsbFwiIHN0eWxlPXt7d2lkdGg6ICc3MCUnLCBtYXJnaW5MZWZ0OicxNSUnfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG4gICAgMSBybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cyBxdWkgYmxhbmRpdGlpc1xuICA8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnRcIj5cbiAgICAyIHJvIGVvcyBldCBhY2N1c2FtdXMgZXQgaXVzdG8gb2RpbyBkaWduaXNzaW1vcyBkdWNpbXVzIHF1aSBibGFuZGl0aWlzXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgIDMgcm8gZW9zIGV0IGFjY3VzYW11cyBldCBpdXN0byBvZGlvIGRpZ25pc3NpbW9zIGR1Y2ltdXMgcXVpIGJsYW5kaXRpaXNcbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG4gICAgNCBybyBlb3MgZXQgYWNjdXNhbXVzIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltb3MgZHVjaW11cyBxdWkgYmxhbmRpdGlpc1xuICA8L2Rpdj5cblxuPC9kaXY+XG5cblxuPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzIwMHB4JywgaGVpZ2h0OiAnNjUwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCB3aWR0aDogJzgwJScsIG1hcmdpbkxlZnQ6JzEwJSd9fT5cblxuPC9kaXY+XG5cbjxkaXYgc3R5bGU9e3ttYXJnaW46ICcyMDBweCAwIDAgMCcsIGhlaWdodDogJzMwMHB4Jywgd2lkdGg6ICcxMDAlJyxiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjlkNDIzIDAlLCAjZjgzNjAwIDEwMCUpXCJ9fT5cblxuPC9kaXY+XG57LyogTTAsMTgwIEMyNTAsNDAwIDM1MCwwIDYwMCwzMjAgTDUwMCwwMCBMMCwwIFowICovfVxuXG57LyogTTAuMDAsMTAwLjI3IEMyMTYuODMsMjQwIDMwNC4zMCw4LjM5IDUwMC4wMCwxMDkuMDMgTDUwMC4wMCwwLjAwIEwwLjAwLDAuMDAgWiAqL31cblxuey8qIE0wLDIwMCBDMjUwLDMwMCAzNTAsMCA2MDAsMzAwIEw1MDAsMDAgTDAsMCBaMCAqL31cbiAgICAgIHsvKiA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+ICovfVxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4vLyBcbi5hY3Rpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGhlYXZ5O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTpub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYgMCUsICNmZmYgNTAlLCBUcmFuc3BhcmVudCA1MCUsIFRyYW5zcGFyZW50IDEwMCUpO1xuXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcztcbn1cblxuXG5cbi5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjowIDA7XG4gIGNvbG9yOiBibGFjaztcblxufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uZ3JpZC1jb250YWluZXItLWZpbGwge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG59XG5cbi5ncmlkLWNvbnRhaW5lci0tZml0IHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG59XG5cbi5ncmlkLWVsZW1lbnQge1xuYmFja2dyb3VuZC1jb2xvcjogI0UzRTNFMztcbnBhZGRpbmc6IDUwcHg7XG5jb2xvcjogI2ZmZjtcbmJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG5cblxuXG5cbi5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cblxuLmlubmVyQ29udGFpbmVye1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIHdpZHRoOjEwMCU7XG59XG5zdmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4gICAgICAgIGgxLFxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.b43b5446f9ed01aaa2ff.hot-update.js.map