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
    className: "jsx-4124121440" + " " + "",
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
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "PASEON"), __jsx("p", {
    style: {
      fontSize: '1.4em'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Easy, customizable, copy and past submission forms. We handle all the backend so you have time to focus on the important stuff."), __jsx("button", {
    className: "jsx-4124121440" + " " + "action-button white-btn ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "LEARN MORE")), __jsx("div", {
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx("g", {
    fill: "url(#gradient)",
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("path", {
    d: " M0,120 C200,100 300,150 500,140 L500,0 L0,0 Z ",
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-container grid-container--fit ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "COPY IT"), __jsx("p", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Simply copy one of several prebuilt paseaon form tags ready to go with all the functionality to start capturing and sending the information you need.")), __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "PASTE IT"), __jsx("p", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Paste any Paseon form tag anywhere you need, no need to worry about writting your own backend code!  We've got you covered."))), __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-container grid-container--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "SEND IT"), __jsx("p", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Simple as that! you are ready to start recieving information.  Go ahead and submit a test, then check your inbox to see the results.")), __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "CUSTOMIZE IT"), __jsx("p", {
    className: "jsx-4124121440",
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
      fontSize: '1.2em',
      lineHeight: '1.4em'
    },
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Paseon offers a suit a prebuilt forms, form building tools, and integegrations, to handle processing and sending form information to where you need it to go. Follow the steps below to see an example of our basic contact form.  "), __jsx("p", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, " To see other services, prebuilt forms or to learn how to use your own form that utilizes our backend to process and send information where you need it to go click the button below "), __jsx("button", {
    className: "jsx-4124121440" + " " + "action-button black-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "LEARN MORE")), __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-container grid-container--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "YOUR_EMAIL"), "\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, " >"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "paseon-contact-form"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, ">"), __jsx("br", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "script"), " src=\"https://MYCDN\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, ">"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "script"), "  ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, ">"))), __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "This will be sent to: "), __jsx("form", {
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("input", {
    type: "submit",
    className: "jsx-4124121440",
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
      fontSize: '1.2em',
      lineHeight: '1.4em'
    },
    className: "jsx-4124121440" + " " + "grid-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Step 1"), __jsx("p", {
    className: "jsx-4124121440",
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
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "<paseon-contact-form recipient_email=\"", __jsx("b", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "YOUR_EMAIL"), "\" > </paseon-contact-form > <script src=\"https://MYCDN\"></script >"), __jsx("p", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Have a SPA an need an NPM install?"), __jsx("p", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Ignore the script tag and paste the following into your root directory")), __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Step 2"), __jsx("p", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Paste the to wherever you need on your own site. Our tags are supported by any CRM that will let you add custom HTML")), __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Step 3"), __jsx("p", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "At this point you are ready to start recieving emails from your form submissions! Go ahead and send yourself a test email through the contact form.  You may need check the spam folder, if the email ends up there mark it as 'Not Spam' and all future emails will go straight into your inbox.")), __jsx("div", {
    className: "jsx-4124121440" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Step 4"), __jsx("p", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Customize the labels, colors, and success message of your form by adding and editing the HTML attributes of the Paseon tags. "), __jsx("p", {
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "To see a list of options click the button below."), __jsx("button", {
    className: "jsx-4124121440" + " " + "action-button black-btn",
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
    className: "jsx-4124121440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4124121440",
    __self: this
  }, "input[type=text].jsx-4124121440,select.jsx-4124121440,textarea.jsx-4124121440{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-4124121440{width:100%;color:white;background:rgb(2,0,36);padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-4124121440:hover{opacity:0.7;}.action-button.jsx-4124121440{background-color:Transparent;background-repeat:no-repeat;cursor:pointer;padding:20px;font-weight:heavy;overflow:hidden;outline:none;font-size:1.3em;}.white-btn.jsx-4124121440{color:white;border:3px solid white;background:linear-gradient(to right,#fff 0%,#fff 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.black-btn.jsx-4124121440{color:black;border:3px solid black;background:linear-gradient(to right,#000 0%,#000 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.white-btn.jsx-4124121440:hover{background-position:0 0;color:black;}.black-btn.jsx-4124121440:hover{background-position:0 0;color:white;}.grid-container.jsx-4124121440{display:grid;}.grid-container--fill.jsx-4124121440{grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.grid-container--fit.jsx-4124121440{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));}.grid-element.jsx-4124121440{padding:50px;}.dark-background.jsx-4124121440{background-color:#36454f;color:#fff;border:1px solid #fff;}.header.jsx-4124121440{grid-area:header;}.innerContainer.jsx-4124121440{position:absolute;top:0;width:100%;}svg.jsx-4124121440{display:inline-block;position:absolute;top:0;left:0;z-index:-1;}.container.jsx-4124121440{display:inline-block;position:relative;width:100%;padding-bottom:100%;vertical-align:middle;overflow:hidden;}h1.jsx-4124121440,a.jsx-4124121440{font-family:'Arial';}ul.jsx-4124121440{padding:0;}li.jsx-4124121440{list-style:none;margin:5px 0;}a.jsx-4124121440{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-4124121440:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ma0IsQUFJc0IsQUFVQSxBQWFDLEFBT2lCLEFBWWpCLEFBU0EsQUFXVyxBQUtBLEFBS1YsQUFJK0MsQUFJRCxBQUk5QyxBQUlZLEFBUVIsQUFJQSxBQU1JLEFBU0EsQUFXRCxBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsQ0FsSW9CLEFBVU4sQ0FjZCxBQWtCeUIsQUFTQSxBQTZGekIsQ0F4RUEsQUFZQSxHQWtEZSxDQXRDZixDQUlPLEVBMEJQLENBcEJvQixBQVNBLEVBeEdLLENBbURYLEFBS0EsQUFrQ0YsQ0FiQyxJQXZGRSxBQTZCYyxBQXlHN0IsTUE1RjZGLEFBU0EsQUFrRDdGLENBdkNBLEFBS0EsQUFxQndCLEdBa0JoQixBQVNLLEdBbEhVLEdBMEdkLENBL0ZXLElBd0dFLEFBc0JULEVBOUJBLEtBOUVHLEFBaURoQixDQUpBLEFBY0EsR0FrREEsRUF6SXdCLEFBMkd4QixDQWhHZSxNQXdHUyxFQXRGVCxLQWpCRCxRQVhNLEFBNkJBLElBakJBLEdBdUdGLFdBbEhNLEFBNkJOLElBakJELENBdUdqQixXQXJGYyxHQWpCZCxBQTBCNEIsQUFTQSxHQS9DNUIsT0E4QmtCLGdCQUVsQixBQU82QixBQVNBLDJCQVJTLEFBU0EsZ0ZBUnRDLEFBU0EiLCJmaWxlIjoiL1VzZXJzL3RheWxvcnBhc3F1YXJpZWxsby90YXlsb3JQYXNxTExDL3Bhc2Vvbi9wYXNlb24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiBcbiAgZnVuY3Rpb24gaW5pdERpdk1vdXNlT3ZlcigpICAge1xuICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWRpdlwiKTtcbiAgICAgZGl2Lm1vdXNlSXNPdmVyID0gZmFsc2U7XG4gICAgIGRpdi5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkgICB7XG4gICAgICAgIHRoaXMubW91c2VJc092ZXIgPSB0cnVlO1xuICAgICB9O1xuICAgICBkaXYub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkgICB7XG4gICAgICAgIHRoaXMubW91c2VJc092ZXIgPSBmYWxzZTtcbiAgICAgfVxuICAgICBkaXYub25jbGljayA9IGZ1bmN0aW9uKCkgICB7XG4gICAgICAgIGlmICh0aGlzLm1vdXNlSXNPdmVyKSAgIHtcbiAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUhJylcbiAgICAgICAgfVxuICAgICB9XG4gIH1cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuXG4gICAgICA8ZGl2IGlkPVwibXlkaXZcIiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0Oic3MDBweCd9fSBvbk1vdXNlRW50ZXI9eygpPT5jb25zb2xlLmxvZygnaGknKX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luOiAnNTBweCAwIDMwcHggMzBweCcsIGNvbG9yOiAnd2hpdGUnLCB3aWR0aDogJzQwJScsIHBhZGRpbmc6ICcyMHB4J319PlxuICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiBcIjZlbVwiLCBtYXJnaW46XCIwIDAgMTBweCAwXCJ9fT5QQVNFT048L2gxPlxuICAgICAgICAgIDxwICBzdHlsZT17e2ZvbnRTaXplOiAnMS40ZW0nfX0+RWFzeSwgY3VzdG9taXphYmxlLCBjb3B5IGFuZCBwYXN0IHN1Ym1pc3Npb24gZm9ybXMuIFdlIGhhbmRsZSBhbGwgdGhlIGJhY2tlbmQgc28geW91IGhhdmUgdGltZSB0byBmb2N1cyBvbiB0aGUgaW1wb3J0YW50IHN0dWZmLjwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b24gd2hpdGUtYnRuIFwiPkxFQVJOIE1PUkU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUwMCAxNTBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScsfX0+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwiZ3JhZGllbnRcIiB4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMTAwJVwiIHkyPVwiMCVcIj5cbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0eWxlPXt7c3RvcENvbG9yOlwiI2Y4MzYwMFwifX0gLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3R5bGU9e3tzdG9wQ29sb3I6XCIjZjlkNDIzXCJ9fSAvPlxuICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgPGcgZmlsbD1cInVybCgjZ3JhZGllbnQpXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCIgTTAsMTIwIEMyMDAsMTAwIDMwMCwxNTAgNTAwLDE0MCBMNTAwLDAgTDAsMCBaIFwiID4gPC9wYXRoPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnODAlJywgbWFyZ2luTGVmdDogJzEwJSd9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgZ3JpZC1jb250YWluZXItLWZpdCBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnQgZGFyay1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgPGgxPkNPUFkgSVQ8L2gxPlxuICAgICAgICAgIDxwPlNpbXBseSBjb3B5IG9uZSBvZiBzZXZlcmFsIHByZWJ1aWx0IHBhc2Vhb24gZm9ybSB0YWdzIHJlYWR5IHRvIGdvIHdpdGggYWxsIHRoZSBmdW5jdGlvbmFsaXR5IHRvIHN0YXJ0IGNhcHR1cmluZyBhbmQgc2VuZGluZyB0aGUgaW5mb3JtYXRpb24geW91IG5lZWQuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnQgZGFyay1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgPGgxPlBBU1RFIElUPC9oMT5cbiAgICAgICAgICA8cD5QYXN0ZSBhbnkgUGFzZW9uIGZvcm0gdGFnIGFueXdoZXJlIHlvdSBuZWVkLCBubyBuZWVkIHRvIHdvcnJ5IGFib3V0IHdyaXR0aW5nIHlvdXIgb3duIGJhY2tlbmQgY29kZSEgIFdlJ3ZlIGdvdCB5b3UgY292ZXJlZC48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBncmlkLWNvbnRhaW5lci0tZml0XCIgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudCBkYXJrLWJhY2tncm91bmRcIj5cbiAgICAgICAgPGgxPlNFTkQgSVQ8L2gxPlxuICAgICAgICAgIDxwPlNpbXBsZSBhcyB0aGF0ISB5b3UgYXJlIHJlYWR5IHRvIHN0YXJ0IHJlY2lldmluZyBpbmZvcm1hdGlvbi4gIEdvIGFoZWFkIGFuZCBzdWJtaXQgYSB0ZXN0LCB0aGVuIGNoZWNrIHlvdXIgaW5ib3ggdG8gc2VlIHRoZSByZXN1bHRzLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50IGRhcmstYmFja2dyb3VuZFwiPlxuICAgICAgICA8aDE+Q1VTVE9NSVpFIElUPC9oMT5cbiAgICAgICAgICA8cD5BbGwgcHJlYnVpbHQgZm9ybXMgYXJlIGN1c3RvbWl6ZWFibGUgdG8gc3VpdCB5b3VyIHN0eWxpc3RpYyBuZWVkcyEgSGF2ZSB5b3VyIG93biBmb3JtIHlvdSB3YW50IHRvIHVzZT8gIE5vIHByYmxlbSwgc2ltbHkgbmVzdCBpdCBpbiB0aGUgUGFzZW9uIHBlcnNvbmFsIGZvcm0gdGFncy4gIEFsbCB0aGUgYmFja2VuZCBsb2dpYyBpcyBzdGlsbCBoYW5kbGVkIGZvciB5b3UuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcyMDBweCcsICB3aWR0aDogJzcwJScsIG1hcmdpbkxlZnQ6JzE1JScsIGZvbnRTaXplOiAnMS4yZW0nLCBsaW5lSGVpZ2h0OiAnMS40ZW0nfX0+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzMyMHB4JywgbWFyZ2luQm90dG9tOiAnMzAwcHgnLCBwYWRkaW5nOiAnNTBweCcsIGJhY2tncm91bmRDb2xvcjogJyNGMUYxRjEnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogJzEuMmVtJywgbGluZUhlaWdodDogJzEuNGVtJ319PlxuICAgICAgICAgIDxwPlBhc2VvbiBvZmZlcnMgYSBzdWl0IGEgcHJlYnVpbHQgZm9ybXMsIGZvcm0gYnVpbGRpbmcgdG9vbHMsIGFuZCBpbnRlZ2VncmF0aW9ucywgdG8gaGFuZGxlIHByb2Nlc3NpbmcgYW5kIHNlbmRpbmcgZm9ybSBpbmZvcm1hdGlvbiB0byB3aGVyZSB5b3UgbmVlZCBpdCB0byBnby4gRm9sbG93IHRoZSBzdGVwcyBiZWxvdyB0byBzZWUgYW4gZXhhbXBsZSBvZiBvdXIgYmFzaWMgY29udGFjdCBmb3JtLiAgPC9wPiBcbiAgICAgICAgICA8cD4gVG8gc2VlIG90aGVyIHNlcnZpY2VzLCBwcmVidWlsdCBmb3JtcyBvciB0byBsZWFybiBob3cgdG8gdXNlIHlvdXIgb3duIGZvcm0gdGhhdCB1dGlsaXplcyBvdXIgYmFja2VuZCB0byBwcm9jZXNzIGFuZCBzZW5kIGluZm9ybWF0aW9uIHdoZXJlIHlvdSBuZWVkIGl0IHRvIGdvIGNsaWNrIHRoZSBidXR0b24gYmVsb3cgPC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbiBibGFjay1idG5cIj5MRUFSTiBNT1JFPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGdyaWQtY29udGFpbmVyLS1maXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgICAgICAgICAgPHA+VHJ5IGEgdGVzdCBzdWJtaXNzaW9uISBBZGQgeW91ciBlbWFpbCBpbmJldHdlZW4gdGhlIHF1b3RlcyBpbiB0aGUgSFRNTCBiZWxvdyB0aGVuIGZpbGwgb3V0IGFuZCBzdWJtaXQgdGhlIGZvcm0uPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogPGRpdiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgc3R5bGU9e3tib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiczMHB4J319PlxuICAgICAgICAgICAgVGhpcyB0ZXh0IGNhbiBiZSBlZGl0ZWQgYnkgdGhlIHVzZXIuXG4gICAgICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRjFGMUYxJywgcGFkZGluZzogJzMwcHgnfX0+XG5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmx0Ozwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0YwQzgwOCd9fT5wYXNlb24tY29udGFjdC1mb3JtIDwvc3Bhbj4gXG4gICAgICAgICAgICByZWNpcGllbnRfZW1haWw9XCI8c3BhbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNkY2RjZGMnLCBwYWRkaW5nOiAnMnB4JywgYm9yZGVyUmFkaXVzOiAnNXB4J319IGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIiBvbkNoYW5nZT17KCk9PmNvbnNvbGUubG9nKCdoZWxsbycpfT5ZT1VSX0VNQUlMPC9zcGFuPlwiXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiAmZ3Q7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZsdDsgLzwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0YwQzgwOCd9fT5wYXNlb24tY29udGFjdC1mb3JtPC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZndDs8L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmx0Ozwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0YwQzgwOCd9fT5zY3JpcHQ8L3NwYW4+IHNyYz1cImh0dHBzOi8vTVlDRE5cIjxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmd0Ozwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7IC88L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNGMEM4MDgnfX0+c2NyaXB0PC9zcGFuPiAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mZ3Q7PC9zcGFuPlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnRcIj5cbiAgICAgICAgICAgIHsvKiBUT0RPOiByZXBsYWNlIHdpdGggYSBhY3R1YWwgaW50ZXJhY3RpdmUgZm9ybSAqL30gXG4gICAgICAgICAgICA8bGFiZWw+VGhpcyB3aWxsIGJlIHNlbnQgdG86IDwvbGFiZWw+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvLyAudmFsdWU9XCIke3RoaXMuZm9ybV9vYmoubmFtZX1cIlxuICAgICAgICAgICAgICAgICAgICAvLyBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmhhbmRsZVNldElucHV0VmFsdWVzKGUpfVwiIFxuICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZyb21cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvLyAudmFsdWU9XCIke3RoaXMuZm9ybV9vYmouZnJvbX1cIlxuICAgICAgICAgICAgICAgICAgICAvLyBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmhhbmRsZVNldElucHV0VmFsdWVzKGUpfVwiIFxuICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiBcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gLnZhbHVlPVwiJHt0aGlzLmZvcm1fb2JqLnN1YmplY3R9XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gQGlucHV0PVwiJHsoZSkgPT4gdGhpcy5oYW5kbGVTZXRJbnB1dFZhbHVlcyhlKX1cIiBcbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgcm93cz1cIjRcIiBcbiAgICAgICAgICAgICAgICAgICAgY29scz1cIjUwXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFsayB0byBtZSBHb29zZS4uLlwiIFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvLyAudmFsdWU9XCIke3RoaXMuZm9ybV9vYmouYm9keX1cIlxuICAgICAgICAgICAgICAgICAgICAvLyBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmhhbmRsZVNldElucHV0VmFsdWVzKGUpfVwiIFxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiIHN0eWxlPXt7d2lkdGg6ICc2MCUnLCBtYXJnaW5MZWZ0OiAnMjAlJywgbWFyZ2luVG9wOiAnMzAwcHgnLCBmb250U2l6ZTogJzEuMmVtJywgbGluZUhlaWdodDogJzEuNGVtJ319PlxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgICAgICAgIDxoMT5TdGVwIDE8L2gxPlxuICAgICAgICAgIDxwPkNvcHkgdGhlIGZvbGxvd2luZyBodG1sIHRhZ3MuICBNYWtlIHN1cmUgdG8gc3dpdGNoIHRoZSBib2xkZWQgaW5mb3JtYXRpb24gdG8gbWF0Y2ggdGhlIGVtYWlsIGFkZHJlc3Mgd2hlcmUgeW91IHdvdWxkIGxpa2UgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb24gdG8gYmUgc2VudC48L3A+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRENEQ0RDJywgcGFkZGluZzogJzMwcHgnfX0+XG4gICAgICAgICAgICAmbHQ7cGFzZW9uLWNvbnRhY3QtZm9ybVxuICAgICAgICAgICAgICByZWNpcGllbnRfZW1haWw9XCI8Yj5ZT1VSX0VNQUlMPC9iPlwiXG4gICAgICAgICAgICAmZ3Q7ICZsdDsvcGFzZW9uLWNvbnRhY3QtZm9ybSAmZ3Q7XG4gICAgICAgICAgICAmbHQ7c2NyaXB0IHNyYz1cImh0dHBzOi8vTVlDRE5cIj4mbHQ7L3NjcmlwdCAmZ3Q7XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPkhhdmUgYSBTUEEgYW4gbmVlZCBhbiBOUE0gaW5zdGFsbD88L3A+XG4gICAgICAgICAgPHA+SWdub3JlIHRoZSBzY3JpcHQgdGFnIGFuZCBwYXN0ZSB0aGUgZm9sbG93aW5nIGludG8geW91ciByb290IGRpcmVjdG9yeTwvcD4gXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuXG4gICAgICAgICAgPGgxPlN0ZXAgMjwvaDE+XG4gICAgICAgICAgPHA+UGFzdGUgdGhlIHRvIHdoZXJldmVyIHlvdSBuZWVkIG9uIHlvdXIgb3duIHNpdGUuIE91ciB0YWdzIGFyZSBzdXBwb3J0ZWQgYnkgYW55IENSTSB0aGF0IHdpbGwgbGV0IHlvdSBhZGQgY3VzdG9tIEhUTUw8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnRcIj5cbiAgICAgICAgICA8aDE+U3RlcCAzPC9oMT5cbiAgICAgICAgICA8cD5BdCB0aGlzIHBvaW50IHlvdSBhcmUgcmVhZHkgdG8gc3RhcnQgcmVjaWV2aW5nIGVtYWlscyBmcm9tIHlvdXIgZm9ybSBzdWJtaXNzaW9ucyEgR28gYWhlYWQgYW5kIHNlbmQgeW91cnNlbGYgYSB0ZXN0IGVtYWlsIHRocm91Z2ggdGhlIGNvbnRhY3QgZm9ybS4gIFlvdSBtYXkgbmVlZCBjaGVjayB0aGUgc3BhbSBmb2xkZXIsIGlmIHRoZSBlbWFpbCBlbmRzIHVwIHRoZXJlIG1hcmsgaXQgYXMgJ05vdCBTcGFtJyBhbmQgYWxsIGZ1dHVyZSBlbWFpbHMgd2lsbCBnbyBzdHJhaWdodCBpbnRvIHlvdXIgaW5ib3guPC9wPlxuPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuXG4gICAgICAgICAgPGgxPlN0ZXAgNDwvaDE+XG4gICAgICAgICAgPHA+Q3VzdG9taXplIHRoZSBsYWJlbHMsIGNvbG9ycywgYW5kIHN1Y2Nlc3MgbWVzc2FnZSBvZiB5b3VyIGZvcm0gYnkgYWRkaW5nIGFuZCBlZGl0aW5nIHRoZSBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIFBhc2VvbiB0YWdzLiA8L3A+XG4gICAgICAgICAgPHA+VG8gc2VlIGEgbGlzdCBvZiBvcHRpb25zIGNsaWNrIHRoZSBidXR0b24gYmVsb3cuPC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbiBibGFjay1idG5cIj5MZWFybiBNb3JlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnMjAwcHggMCAwIDAnLCBoZWlnaHQ6ICczMDBweCcsIHdpZHRoOiAnMTAwJScsYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y5ZDQyMyAwJSwgI2Y4MzYwMCAxMDAlKVwifX0+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLy8gU1RBUlQgV0lMTCBCRSBNT1ZFRCBPVVQgLSBmb3IgaW50ZXJhY3RpdmUgdGVzdCBmb3JtXG4gICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XG4gICAgICAgICAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDEwOCw5LDEyMSwxKSAzOSUsIHJnYmEoMjU1LDAsNjMsMSkgMTAwJSk7XG4gICAgICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLy8gRU5EIFdJTEwgQkUgTU9WRUQgT1VUXG5cblxuICAgICAgICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGhlYXZ5O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgb3V0bGluZTpub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC53aGl0ZS1idG4ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYgMCUsICNmZmYgNTAlLCBUcmFuc3BhcmVudCA1MCUsIFRyYW5zcGFyZW50IDEwMCUpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxhY2stYnRuIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwIDAlLCAjMDAwIDUwJSwgVHJhbnNwYXJlbnQgNTAlLCBUcmFuc3BhcmVudCAxMDAlKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIC53aGl0ZS1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246MCAwO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibGFjay1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246MCAwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lci0tZmlsbCB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtY29udGFpbmVyLS1maXQge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtZWxlbWVudCB7XG4gICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXJrLWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjQ1NGY7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlubmVyQ29udGFpbmVye1xuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgIHRvcDowO1xuICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cblxuICAgICAgICBoMSxcbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.ab4d6a6ec50eb6415f18.hot-update.js.map