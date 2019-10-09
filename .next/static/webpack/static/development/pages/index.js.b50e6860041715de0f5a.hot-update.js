webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
    onMouseEnter: function onMouseEnter() {
      return console.log('hi');
    },
    className: "jsx-3679691247" + " " + "",
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
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "PASEON"), __jsx("p", {
    style: {
      fontSize: '1.4em'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Easy, customizable, copy and past submission forms. We handle all the backend so you have time to focus on the important stuff."), __jsx("button", {
    className: "jsx-3679691247" + " " + "action-button white-btn ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "LEARN MORE")), __jsx("div", {
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx("g", {
    fill: "url(#gradient)",
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("path", {
    d: " M0,120 C200,100 300,150 500,140 L500,0 L0,0 Z ",
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-container grid-container--fit ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "COPY IT"), __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Simply copy one of several prebuilt paseaon form tags ready to go with all the functionality to start capturing and sending the information you need.")), __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "PASTE IT"), __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Paste any Paseon form tag anywhere you need, no need to worry about writting your own backend code!  We've got you covered."))), __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-container grid-container--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "SEND IT"), __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Simple as that! you are ready to start recieving information.  Go ahead and submit a test, then check your inbox to see the results.")), __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "CUSTOMIZE IT"), __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "All prebuilt forms are customizeable to suit your stylistic needs! Have your own form you want to use?  No prblem, simly nest it in the Paseon personal form tags.  All the backend logic is still handled for you.")))), __jsx("div", {
    style: {
      marginTop: '200px',
      width: '70%',
      marginLeft: '15%'
    },
    className: "jsx-3679691247",
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
      fontSize: '1.2em',
      lineHeight: '1.4em'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Paseon offers a suit a prebuilt forms, form building tools, and integegrations, to handle processing and sending form information to where you need it to go. Follow the steps below to see an example of our basic contact form.  "), __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, " To see other services, prebuilt forms or to learn how to use your own form that utilizes our backend to process and send information where you need it to go click the button below "), __jsx("button", {
    className: "jsx-3679691247" + " " + "action-button black-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "LEARN MORE")), __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-container grid-container--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-3679691247",
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
    onChange: function onChange() {
      return console.log('hello');
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "YOUR_EMAIL"), "\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, " >"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "paseon-contact-form"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, ">"), __jsx("br", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "script"), " src=\"https://MYCDN\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, ">"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "script"), "  ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, ">"))), __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "This will be sent to: "), __jsx("form", {
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("input", {
    type: "submit",
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })))), __jsx("div", {
    style: {
      width: '60%',
      marginLeft: '20%',
      marginTop: '300px'
    },
    className: "jsx-3679691247" + " " + "grid-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Step 1"), __jsx("p", {
    className: "jsx-3679691247",
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
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "<paseon-contact-form recipient_email=\"", __jsx("b", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "YOUR_EMAIL"), "\" > </paseon-contact-form > <script src=\"https://MYCDN\"></script >"), __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Have a SPA an need an NPM install?"), __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Ignore the script tag and paste the following into your root directory")), __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Step 2"), __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Paste the to wherever you need on your own site. Our tags are supported by any CRM that will let you add custom HTML")), __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Step 3"), __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "At this point you are ready to start recieving emails from your form submissions! Go ahead and send yourself a test email through the contact form.  You may need check the spam folder, if the email ends up there mark it as 'Not Spam' and all future emails will go straight into your inbox.")), __jsx("div", {
    className: "jsx-3679691247" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Step 4"), __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Customize the labels, colors, and success message of your form by adding and editing the HTML attributes of the Paseon tags. "), __jsx("p", {
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "To see a list of options click the button below."), __jsx("button", {
    className: "jsx-3679691247" + " " + "action-button black-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Learn More")))), __jsx("div", {
    style: {
      margin: '200px 0 0 0',
      height: '300px',
      width: '100%',
      backgroundImage: "linear-gradient(to right, #f9d423 0%, #f83600 100%)"
    },
    className: "jsx-3679691247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3679691247",
    __self: this
  }, "input[type=text].jsx-3679691247,select.jsx-3679691247,textarea.jsx-3679691247{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-3679691247{width:100%;color:white;background:rgb(2,0,36);padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-3679691247:hover{opacity:0.7;}.action-button.jsx-3679691247{background-color:Transparent;background-repeat:no-repeat;cursor:pointer;padding:20px;font-weight:heavy;overflow:hidden;outline:none;}.white-btn.jsx-3679691247{color:white;border:3px solid white;background:linear-gradient(to right,#fff 0%,#fff 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.black-btn.jsx-3679691247{color:black;border:3px solid black;background:linear-gradient(to right,#000 0%,#000 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.white-btn.jsx-3679691247:hover{background-position:0 0;color:black;}.black-btn.jsx-3679691247:hover{background-position:0 0;color:white;}.grid-container.jsx-3679691247{display:grid;}.grid-container--fill.jsx-3679691247{grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.grid-container--fit.jsx-3679691247{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));}.grid-element.jsx-3679691247{padding:50px;}.dark-background.jsx-3679691247{background-color:#36454f;color:#fff;border:1px solid #fff;}.header.jsx-3679691247{grid-area:header;}.innerContainer.jsx-3679691247{position:absolute;top:0;width:100%;}svg.jsx-3679691247{display:inline-block;position:absolute;top:0;left:0;z-index:-1;}.container.jsx-3679691247{display:inline-block;position:relative;width:100%;padding-bottom:100%;vertical-align:middle;overflow:hidden;}h1.jsx-3679691247,a.jsx-3679691247{font-family:'Arial';}ul.jsx-3679691247{padding:0;}li.jsx-3679691247{list-style:none;margin:5px 0;}a.jsx-3679691247{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-3679691247:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ma0IsQUFJc0IsQUFVQSxBQWFDLEFBT2lCLEFBV2pCLEFBU0EsQUFXVyxBQUtBLEFBS1YsQUFJK0MsQUFJRCxBQUk5QyxBQUlZLEFBUVIsQUFJQSxBQU1JLEFBU0EsQUFXRCxBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsQ0FqSW9CLEFBVU4sQ0FjZCxBQWlCeUIsQUFTQSxBQTZGekIsQ0F4RUEsQUFZQSxHQWtEZSxDQXRDZixDQUlPLEVBMEJQLENBcEJvQixBQVNBLEVBdkdLLENBa0RYLEFBS0EsQUFrQ0YsQ0FiQyxJQXRGRSxBQTZCYyxBQXdHN0IsTUE1RjZGLEFBU0EsQUFrRDdGLENBdkNBLEFBS0EsQUFxQndCLEdBa0JoQixBQVNLLEdBakhVLEdBeUdkLENBOUZXLElBdUdFLEFBc0JULEVBOUJBLEtBN0VHLEFBZ0RoQixDQUpBLEFBY0EsR0FrREEsRUF4SXdCLEFBMEd4QixDQS9GZSxNQXVHUyxFQXJGVCxLQWpCRCxRQVhNLEFBNkJBLElBakJBLEdBc0dGLFdBakhNLEFBNkJOLElBakJELENBc0dqQixXQXBGYyxHQWpCZCxBQXlCNEIsQUFTQSxHQTlDNUIsT0ErQkEsZ0JBTzZCLEFBU0EsMkJBUlMsQUFTQSxnRkFSdEMsQUFTQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL3RheWxvclBhc3FMTEMvcGFzZW9uL3Bhc2Vvbi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblxuIFxuICBmdW5jdGlvbiBpbml0RGl2TW91c2VPdmVyKCkgICB7XG4gICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15ZGl2XCIpO1xuICAgICBkaXYubW91c2VJc092ZXIgPSBmYWxzZTtcbiAgICAgZGl2Lm9ubW91c2VvdmVyID0gZnVuY3Rpb24oKSAgIHtcbiAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IHRydWU7XG4gICAgIH07XG4gICAgIGRpdi5vbm1vdXNlb3V0ID0gZnVuY3Rpb24oKSAgIHtcbiAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICB9XG4gICAgIGRpdi5vbmNsaWNrID0gZnVuY3Rpb24oKSAgIHtcbiAgICAgICAgaWYgKHRoaXMubW91c2VJc092ZXIpICAge1xuICAgICAgICAgICBjb25zb2xlLmxvZygnaGVyZSEnKVxuICAgICAgICB9XG4gICAgIH1cbiAgfVxuICBcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG5cbiAgICAgIDxkaXYgaWQ9XCJteWRpdlwiIGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzcwMHB4J319IG9uTW91c2VFbnRlcj17KCk9PmNvbnNvbGUubG9nKCdoaScpfT5cbiAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW46ICc1MHB4IDAgMzBweCAzMHB4JywgY29sb3I6ICd3aGl0ZScsIHdpZHRoOiAnNDAlJywgcGFkZGluZzogJzIwcHgnfX0+XG4gICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6IFwiNmVtXCIsIG1hcmdpbjpcIjAgMCAxMHB4IDBcIn19PlBBU0VPTjwvaDE+XG4gICAgICAgICAgPHAgIHN0eWxlPXt7Zm9udFNpemU6ICcxLjRlbSd9fT5FYXN5LCBjdXN0b21pemFibGUsIGNvcHkgYW5kIHBhc3Qgc3VibWlzc2lvbiBmb3Jtcy4gV2UgaGFuZGxlIGFsbCB0aGUgYmFja2VuZCBzbyB5b3UgaGF2ZSB0aW1lIHRvIGZvY3VzIG9uIHRoZSBpbXBvcnRhbnQgc3R1ZmYuPC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbiB3aGl0ZS1idG4gXCI+TEVBUk4gTU9SRTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTAwIDE1MFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyx9fT5cbiAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudFwiIHgxPVwiMCVcIiB5MT1cIjAlXCIgeDI9XCIxMDAlXCIgeTI9XCIwJVwiPlxuICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3R5bGU9e3tzdG9wQ29sb3I6XCIjZjgzNjAwXCJ9fSAvPlxuICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdHlsZT17e3N0b3BDb2xvcjpcIiNmOWQ0MjNcIn19IC8+XG4gICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICA8ZyBmaWxsPVwidXJsKCNncmFkaWVudClcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIiBNMCwxMjAgQzIwMCwxMDAgMzAwLDE1MCA1MDAsMTQwIEw1MDAsMCBMMCwwIFogXCIgPiA8L3BhdGg+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICc4MCUnLCBtYXJnaW5MZWZ0OiAnMTAlJ319PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBncmlkLWNvbnRhaW5lci0tZml0IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudCBkYXJrLWJhY2tncm91bmRcIj5cbiAgICAgICAgICA8aDE+Q09QWSBJVDwvaDE+XG4gICAgICAgICAgPHA+U2ltcGx5IGNvcHkgb25lIG9mIHNldmVyYWwgcHJlYnVpbHQgcGFzZWFvbiBmb3JtIHRhZ3MgcmVhZHkgdG8gZ28gd2l0aCBhbGwgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gc3RhcnQgY2FwdHVyaW5nIGFuZCBzZW5kaW5nIHRoZSBpbmZvcm1hdGlvbiB5b3UgbmVlZC48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudCBkYXJrLWJhY2tncm91bmRcIj5cbiAgICAgICAgICA8aDE+UEFTVEUgSVQ8L2gxPlxuICAgICAgICAgIDxwPlBhc3RlIGFueSBQYXNlb24gZm9ybSB0YWcgYW55d2hlcmUgeW91IG5lZWQsIG5vIG5lZWQgdG8gd29ycnkgYWJvdXQgd3JpdHRpbmcgeW91ciBvd24gYmFja2VuZCBjb2RlISAgV2UndmUgZ290IHlvdSBjb3ZlcmVkLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGdyaWQtY29udGFpbmVyLS1maXRcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50IGRhcmstYmFja2dyb3VuZFwiPlxuICAgICAgICA8aDE+U0VORCBJVDwvaDE+XG4gICAgICAgICAgPHA+U2ltcGxlIGFzIHRoYXQhIHlvdSBhcmUgcmVhZHkgdG8gc3RhcnQgcmVjaWV2aW5nIGluZm9ybWF0aW9uLiAgR28gYWhlYWQgYW5kIHN1Ym1pdCBhIHRlc3QsIHRoZW4gY2hlY2sgeW91ciBpbmJveCB0byBzZWUgdGhlIHJlc3VsdHMuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnQgZGFyay1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxoMT5DVVNUT01JWkUgSVQ8L2gxPlxuICAgICAgICAgIDxwPkFsbCBwcmVidWlsdCBmb3JtcyBhcmUgY3VzdG9taXplYWJsZSB0byBzdWl0IHlvdXIgc3R5bGlzdGljIG5lZWRzISBIYXZlIHlvdXIgb3duIGZvcm0geW91IHdhbnQgdG8gdXNlPyAgTm8gcHJibGVtLCBzaW1seSBuZXN0IGl0IGluIHRoZSBQYXNlb24gcGVyc29uYWwgZm9ybSB0YWdzLiAgQWxsIHRoZSBiYWNrZW5kIGxvZ2ljIGlzIHN0aWxsIGhhbmRsZWQgZm9yIHlvdS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzIwMHB4JywgIHdpZHRoOiAnNzAlJywgbWFyZ2luTGVmdDonMTUlJ319PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICczMjBweCcsIG1hcmdpbkJvdHRvbTogJzMwMHB4JywgcGFkZGluZzogJzUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRjFGMUYxJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICcxLjJlbScsIGxpbmVIZWlnaHQ6ICcxLjRlbSd9fT5cbiAgICAgICAgICA8cD5QYXNlb24gb2ZmZXJzIGEgc3VpdCBhIHByZWJ1aWx0IGZvcm1zLCBmb3JtIGJ1aWxkaW5nIHRvb2xzLCBhbmQgaW50ZWdlZ3JhdGlvbnMsIHRvIGhhbmRsZSBwcm9jZXNzaW5nIGFuZCBzZW5kaW5nIGZvcm0gaW5mb3JtYXRpb24gdG8gd2hlcmUgeW91IG5lZWQgaXQgdG8gZ28uIEZvbGxvdyB0aGUgc3RlcHMgYmVsb3cgdG8gc2VlIGFuIGV4YW1wbGUgb2Ygb3VyIGJhc2ljIGNvbnRhY3QgZm9ybS4gIDwvcD4gXG4gICAgICAgICAgPHA+IFRvIHNlZSBvdGhlciBzZXJ2aWNlcywgcHJlYnVpbHQgZm9ybXMgb3IgdG8gbGVhcm4gaG93IHRvIHVzZSB5b3VyIG93biBmb3JtIHRoYXQgdXRpbGl6ZXMgb3VyIGJhY2tlbmQgdG8gcHJvY2VzcyBhbmQgc2VuZCBpbmZvcm1hdGlvbiB3aGVyZSB5b3UgbmVlZCBpdCB0byBnbyBjbGljayB0aGUgYnV0dG9uIGJlbG93IDwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b24gYmxhY2stYnRuXCI+TEVBUk4gTU9SRTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBncmlkLWNvbnRhaW5lci0tZml0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnRcIj5cbiAgICAgICAgICAgIDxwPlRyeSBhIHRlc3Qgc3VibWlzc2lvbiEgQWRkIHlvdXIgZW1haWwgaW5iZXR3ZWVuIHRoZSBxdW90ZXMgaW4gdGhlIEhUTUwgYmVsb3cgdGhlbiBmaWxsIG91dCBhbmQgc3VibWl0IHRoZSBmb3JtLjwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIDxkaXYgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIHN0eWxlPXt7Ym9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgcGFkZGluZzonMzBweCd9fT5cbiAgICAgICAgICAgIFRoaXMgdGV4dCBjYW4gYmUgZWRpdGVkIGJ5IHRoZSB1c2VyLlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI0YxRjFGMScsIHBhZGRpbmc6ICczMHB4J319PlxuXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZsdDs8L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNGMEM4MDgnfX0+cGFzZW9uLWNvbnRhY3QtZm9ybSA8L3NwYW4+IFxuICAgICAgICAgICAgcmVjaXBpZW50X2VtYWlsPVwiPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjZGNkY2RjJywgcGFkZGluZzogJzJweCcsIGJvcmRlclJhZGl1czogJzVweCd9fSBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCIgb25DaGFuZ2U9eygpPT5jb25zb2xlLmxvZygnaGVsbG8nKX0+WU9VUl9FTUFJTDwvc3Bhbj5cIlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4gJmd0Ozwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7IC88L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNGMEM4MDgnfX0+cGFzZW9uLWNvbnRhY3QtZm9ybTwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mZ3Q7PC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZsdDs8L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNGMEM4MDgnfX0+c2NyaXB0PC9zcGFuPiBzcmM9XCJodHRwczovL01ZQ0ROXCI8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZndDs8L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmx0OyAvPC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjRjBDODA4J319PnNjcmlwdDwvc3Bhbj4gIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmd0Ozwvc3Bhbj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG4gICAgICAgICAgICB7LyogVE9ETzogcmVwbGFjZSB3aXRoIGEgYWN0dWFsIGludGVyYWN0aXZlIGZvcm0gKi99IFxuICAgICAgICAgICAgPGxhYmVsPlRoaXMgd2lsbCBiZSBzZW50IHRvOiA8L2xhYmVsPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gLnZhbHVlPVwiJHt0aGlzLmZvcm1fb2JqLm5hbWV9XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gQGlucHV0PVwiJHsoZSkgPT4gdGhpcy5oYW5kbGVTZXRJbnB1dFZhbHVlcyhlKX1cIiBcbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gLnZhbHVlPVwiJHt0aGlzLmZvcm1fb2JqLmZyb219XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gQGlucHV0PVwiJHsoZSkgPT4gdGhpcy5oYW5kbGVTZXRJbnB1dFZhbHVlcyhlKX1cIiBcbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIC52YWx1ZT1cIiR7dGhpcy5mb3JtX29iai5zdWJqZWN0fVwiXG4gICAgICAgICAgICAgICAgICAgIC8vIEBpbnB1dD1cIiR7KGUpID0+IHRoaXMuaGFuZGxlU2V0SW5wdXRWYWx1ZXMoZSl9XCIgXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYm9keVwiXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9XCI0XCIgXG4gICAgICAgICAgICAgICAgICAgIGNvbHM9XCI1MFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRhbGsgdG8gbWUgR29vc2UuLi5cIiBcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gLnZhbHVlPVwiJHt0aGlzLmZvcm1fb2JqLmJvZHl9XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gQGlucHV0PVwiJHsoZSkgPT4gdGhpcy5oYW5kbGVTZXRJbnB1dFZhbHVlcyhlKX1cIiBcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIiBzdHlsZT17e3dpZHRoOiAnNjAlJywgbWFyZ2luTGVmdDogJzIwJScsIG1hcmdpblRvcDogJzMwMHB4J319PlxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgICAgICAgIDxoMT5TdGVwIDE8L2gxPlxuICAgICAgICAgIDxwPkNvcHkgdGhlIGZvbGxvd2luZyBodG1sIHRhZ3MuICBNYWtlIHN1cmUgdG8gc3dpdGNoIHRoZSBib2xkZWQgaW5mb3JtYXRpb24gdG8gbWF0Y2ggdGhlIGVtYWlsIGFkZHJlc3Mgd2hlcmUgeW91IHdvdWxkIGxpa2UgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb24gdG8gYmUgc2VudC48L3A+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRENEQ0RDJywgcGFkZGluZzogJzMwcHgnfX0+XG4gICAgICAgICAgICAmbHQ7cGFzZW9uLWNvbnRhY3QtZm9ybVxuICAgICAgICAgICAgICByZWNpcGllbnRfZW1haWw9XCI8Yj5ZT1VSX0VNQUlMPC9iPlwiXG4gICAgICAgICAgICAmZ3Q7ICZsdDsvcGFzZW9uLWNvbnRhY3QtZm9ybSAmZ3Q7XG4gICAgICAgICAgICAmbHQ7c2NyaXB0IHNyYz1cImh0dHBzOi8vTVlDRE5cIj4mbHQ7L3NjcmlwdCAmZ3Q7XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPkhhdmUgYSBTUEEgYW4gbmVlZCBhbiBOUE0gaW5zdGFsbD88L3A+XG4gICAgICAgICAgPHA+SWdub3JlIHRoZSBzY3JpcHQgdGFnIGFuZCBwYXN0ZSB0aGUgZm9sbG93aW5nIGludG8geW91ciByb290IGRpcmVjdG9yeTwvcD4gXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuXG4gICAgICAgICAgPGgxPlN0ZXAgMjwvaDE+XG4gICAgICAgICAgPHA+UGFzdGUgdGhlIHRvIHdoZXJldmVyIHlvdSBuZWVkIG9uIHlvdXIgb3duIHNpdGUuIE91ciB0YWdzIGFyZSBzdXBwb3J0ZWQgYnkgYW55IENSTSB0aGF0IHdpbGwgbGV0IHlvdSBhZGQgY3VzdG9tIEhUTUw8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnRcIj5cbiAgICAgICAgICA8aDE+U3RlcCAzPC9oMT5cbiAgICAgICAgICA8cD5BdCB0aGlzIHBvaW50IHlvdSBhcmUgcmVhZHkgdG8gc3RhcnQgcmVjaWV2aW5nIGVtYWlscyBmcm9tIHlvdXIgZm9ybSBzdWJtaXNzaW9ucyEgR28gYWhlYWQgYW5kIHNlbmQgeW91cnNlbGYgYSB0ZXN0IGVtYWlsIHRocm91Z2ggdGhlIGNvbnRhY3QgZm9ybS4gIFlvdSBtYXkgbmVlZCBjaGVjayB0aGUgc3BhbSBmb2xkZXIsIGlmIHRoZSBlbWFpbCBlbmRzIHVwIHRoZXJlIG1hcmsgaXQgYXMgJ05vdCBTcGFtJyBhbmQgYWxsIGZ1dHVyZSBlbWFpbHMgd2lsbCBnbyBzdHJhaWdodCBpbnRvIHlvdXIgaW5ib3guPC9wPlxuPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuXG4gICAgICAgICAgPGgxPlN0ZXAgNDwvaDE+XG4gICAgICAgICAgPHA+Q3VzdG9taXplIHRoZSBsYWJlbHMsIGNvbG9ycywgYW5kIHN1Y2Nlc3MgbWVzc2FnZSBvZiB5b3VyIGZvcm0gYnkgYWRkaW5nIGFuZCBlZGl0aW5nIHRoZSBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIFBhc2VvbiB0YWdzLiA8L3A+XG4gICAgICAgICAgPHA+VG8gc2VlIGEgbGlzdCBvZiBvcHRpb25zIGNsaWNrIHRoZSBidXR0b24gYmVsb3cuPC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbiBibGFjay1idG5cIj5MZWFybiBNb3JlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnMjAwcHggMCAwIDAnLCBoZWlnaHQ6ICczMDBweCcsIHdpZHRoOiAnMTAwJScsYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y5ZDQyMyAwJSwgI2Y4MzYwMCAxMDAlKVwifX0+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLy8gU1RBUlQgV0lMTCBCRSBNT1ZFRCBPVVQgLSBmb3IgaW50ZXJhY3RpdmUgdGVzdCBmb3JtXG4gICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XG4gICAgICAgICAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDEwOCw5LDEyMSwxKSAzOSUsIHJnYmEoMjU1LDAsNjMsMSkgMTAwJSk7XG4gICAgICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLy8gRU5EIFdJTEwgQkUgTU9WRUQgT1VUXG5cblxuICAgICAgICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGhlYXZ5O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgb3V0bGluZTpub25lO1xuICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAud2hpdGUtYnRuIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDAlLCAjZmZmIDUwJSwgVHJhbnNwYXJlbnQgNTAlLCBUcmFuc3BhcmVudCAxMDAlKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsYWNrLWJ0biB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMCAwJSwgIzAwMCA1MCUsIFRyYW5zcGFyZW50IDUwJSwgVHJhbnNwYXJlbnQgMTAwJSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcztcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAud2hpdGUtYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxhY2stYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1jb250YWluZXItLWZpbGwge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lci0tZml0IHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWVsZW1lbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGFyay1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRmO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIH1cblxuXG4gICAgICAgIFxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbm5lckNvbnRhaW5lcntcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG5cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaDEsXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.b50e6860041715de0f5a.hot-update.js.map