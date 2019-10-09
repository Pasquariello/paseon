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
    className: "jsx-2706003670" + " " + "",
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
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "PASEON"), __jsx("p", {
    style: {
      fontSize: '1.4em'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Easy, customizable, copy and past submission forms. We handle all the backend so you have time to focus on the important stuff."), __jsx("button", {
    className: "jsx-2706003670" + " " + "action-button white-btn ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "LEARN MORE")), __jsx("div", {
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx("g", {
    fill: "url(#gradient)",
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("path", {
    d: " M0,120 C200,100 300,150 500,140 L500,0 L0,0 Z ",
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-container grid-container--fit ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "COPY IT"), __jsx("p", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Simply copy one of several prebuilt paseaon form tags ready to go with all the functionality to start capturing and sending the information you need.")), __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "PASTE IT"), __jsx("p", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Paste any Paseon form tag anywhere you need, no need to worry about writting your own backend code!  We've got you covered."))), __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-container grid-container--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "SEND IT"), __jsx("p", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Simple as that! you are ready to start recieving information.  Go ahead and submit a test, then check your inbox to see the results.")), __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-element dark-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "CUSTOMIZE IT"), __jsx("p", {
    className: "jsx-2706003670",
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
      fontSize: '1.1em',
      lineHeight: '1.4em'
    },
    className: "jsx-2706003670",
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
      fontSize: '1.1em',
      lineHeight: '1.4em'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Paseon offers a suit a prebuilt forms, form building tools, and integegrations, to handle processing and sending form information to where you need it to go. Follow the steps below to see an example of our basic contact form.  "), __jsx("p", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, " To see other services, prebuilt forms or to learn how to use your own form that utilizes our backend to process and send information where you need it to go click the button below "), __jsx("button", {
    className: "jsx-2706003670" + " " + "action-button black-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "LEARN MORE")), __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-container grid-container--fit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "YOUR_EMAIL"), "\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, " >"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "paseon-contact-form"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, ">"), __jsx("br", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "script"), " src=\"https://MYCDN\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, ">"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "script"), "  ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, ">"))), __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "This will be sent to: "), __jsx("form", {
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("input", {
    type: "submit",
    className: "jsx-2706003670",
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
      fontSize: '1.1em',
      lineHeight: '1.4em'
    },
    className: "jsx-2706003670" + " " + "grid-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Step 1"), __jsx("p", {
    className: "jsx-2706003670",
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
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
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
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "YOUR_EMAIL"), "\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, " >"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "paseon-contact-form"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, ">"), __jsx("br", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "<"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "script"), " src=\"https://MYCDN\"", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, ">"), " ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "< /"), " ", __jsx("span", {
    style: {
      color: '#F0C808'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "script"), "  ", __jsx("span", {
    style: {
      color: '#3498DB'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, ">")), __jsx("p", {
    style: {
      fontSize: '.75em'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Have a SPA and need an NPM install?"), __jsx("p", {
    style: {
      fontSize: '.75em'
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Ignore the script tag and paste the following into your root directory")), __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Step 2"), __jsx("p", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Paste the to wherever you need on your own site. Our tags are supported by any CRM that will let you add custom HTML")), __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Step 3"), __jsx("p", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "At this point you are ready to start recieving emails from your form submissions! Go ahead and send yourself a test email through the contact form.  You may need check the spam folder, if the email ends up there mark it as 'Not Spam' and all future emails will go straight into your inbox.")), __jsx("div", {
    className: "jsx-2706003670" + " " + "grid-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Step 4"), __jsx("p", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Customize the labels, colors, and success message of your form by adding and editing the HTML attributes of the Paseon tags. "), __jsx("p", {
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "To see a list of options click the button below."), __jsx("button", {
    className: "jsx-2706003670" + " " + "action-button black-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Learn More")))), __jsx("div", {
    style: {
      margin: '200px 0 0 0',
      height: '300px',
      width: '100%',
      backgroundImage: "linear-gradient(to right, #f9d423 0%, #f83600 100%)"
    },
    className: "jsx-2706003670",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2706003670",
    __self: this
  }, "input[type=text].jsx-2706003670,select.jsx-2706003670,textarea.jsx-2706003670{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-2706003670{width:100%;color:white;background:rgb(2,0,36);padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-2706003670:hover{opacity:0.7;}.action-button.jsx-2706003670{background-color:Transparent;background-repeat:no-repeat;cursor:pointer;padding:20px;font-weight:heavy;overflow:hidden;outline:none;font-size:.5em;}.white-btn.jsx-2706003670{color:white;border:3px solid white;background:linear-gradient(to right,#fff 0%,#fff 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.black-btn.jsx-2706003670{color:black;border:3px solid black;background:linear-gradient(to right,#000 0%,#000 50%,Transparent 50%,Transparent 100%);background-size:200% 100%;background-position:100% 0;-webkit-transition:background-position 0.3s;transition:background-position 0.3s;}.white-btn.jsx-2706003670:hover{background-position:0 0;color:black;}.black-btn.jsx-2706003670:hover{background-position:0 0;color:white;}.grid-container.jsx-2706003670{display:grid;}.grid-container--fill.jsx-2706003670{grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.grid-container--fit.jsx-2706003670{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));}.grid-element.jsx-2706003670{padding:50px;}.dark-background.jsx-2706003670{background-color:#36454f;color:#fff;border:1px solid #fff;}.header.jsx-2706003670{grid-area:header;}.innerContainer.jsx-2706003670{position:absolute;top:0;width:100%;}svg.jsx-2706003670{display:inline-block;position:absolute;top:0;left:0;z-index:-1;}.container.jsx-2706003670{display:inline-block;position:relative;width:100%;padding-bottom:100%;vertical-align:middle;overflow:hidden;}h1.jsx-2706003670,a.jsx-2706003670{font-family:'Arial';}ul.jsx-2706003670{padding:0;}li.jsx-2706003670{list-style:none;margin:5px 0;}a.jsx-2706003670{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2706003670:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBMa0IsQUFJc0IsQUFVQSxBQWFDLEFBT2lCLEFBWWpCLEFBU0EsQUFXVyxBQUtBLEFBS1YsQUFJK0MsQUFJRCxBQUk5QyxBQUlZLEFBUVIsQUFJQSxBQU1JLEFBU0EsQUFXRCxBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsQ0FsSW9CLEFBVU4sQ0FjZCxBQWtCeUIsQUFTQSxBQTZGekIsQ0F4RUEsQUFZQSxHQWtEZSxDQXRDZixDQUlPLEVBMEJQLENBcEJvQixBQVNBLEVBeEdLLENBbURYLEFBS0EsQUFrQ0YsQ0FiQyxJQXZGRSxBQTZCYyxBQXlHN0IsTUE1RjZGLEFBU0EsQUFrRDdGLENBdkNBLEFBS0EsQUFxQndCLEdBa0JoQixBQVNLLEdBbEhVLEdBMEdkLENBL0ZXLElBd0dFLEFBc0JULEVBOUJBLEtBOUVHLEFBaURoQixDQUpBLEFBY0EsR0FrREEsRUF6SXdCLEFBMkd4QixDQWhHZSxNQXdHUyxFQXRGVCxLQWpCRCxRQVhNLEFBNkJBLElBakJBLEdBdUdGLFdBbEhNLEFBNkJOLElBakJELENBdUdqQixXQXJGYyxHQWpCZCxBQTBCNEIsQUFTQSxHQS9DNUIsT0E4QmlCLGVBRWpCLENBTzZCLEFBU0EsMkJBUlMsQUFTQSxnRkFSdEMsQUFTQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL3RheWxvclBhc3FMTEMvcGFzZW9uL3Bhc2Vvbi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblxuIFxuICBmdW5jdGlvbiBpbml0RGl2TW91c2VPdmVyKCkgICB7XG4gICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15ZGl2XCIpO1xuICAgICBkaXYubW91c2VJc092ZXIgPSBmYWxzZTtcbiAgICAgZGl2Lm9ubW91c2VvdmVyID0gZnVuY3Rpb24oKSAgIHtcbiAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IHRydWU7XG4gICAgIH07XG4gICAgIGRpdi5vbm1vdXNlb3V0ID0gZnVuY3Rpb24oKSAgIHtcbiAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICB9XG4gICAgIGRpdi5vbmNsaWNrID0gZnVuY3Rpb24oKSAgIHtcbiAgICAgICAgaWYgKHRoaXMubW91c2VJc092ZXIpICAge1xuICAgICAgICAgICBjb25zb2xlLmxvZygnaGVyZSEnKVxuICAgICAgICB9XG4gICAgIH1cbiAgfVxuICBcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG5cbiAgICAgIDxkaXYgaWQ9XCJteWRpdlwiIGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzcwMHB4J319IG9uTW91c2VFbnRlcj17KCk9PmNvbnNvbGUubG9nKCdoaScpfT5cbiAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW46ICc1MHB4IDAgMzBweCAzMHB4JywgY29sb3I6ICd3aGl0ZScsIHdpZHRoOiAnNDAlJywgcGFkZGluZzogJzIwcHgnfX0+XG4gICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6IFwiNmVtXCIsIG1hcmdpbjpcIjAgMCAxMHB4IDBcIn19PlBBU0VPTjwvaDE+XG4gICAgICAgICAgPHAgIHN0eWxlPXt7Zm9udFNpemU6ICcxLjRlbSd9fT5FYXN5LCBjdXN0b21pemFibGUsIGNvcHkgYW5kIHBhc3Qgc3VibWlzc2lvbiBmb3Jtcy4gV2UgaGFuZGxlIGFsbCB0aGUgYmFja2VuZCBzbyB5b3UgaGF2ZSB0aW1lIHRvIGZvY3VzIG9uIHRoZSBpbXBvcnRhbnQgc3R1ZmYuPC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbiB3aGl0ZS1idG4gXCI+TEVBUk4gTU9SRTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTAwIDE1MFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyx9fT5cbiAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudFwiIHgxPVwiMCVcIiB5MT1cIjAlXCIgeDI9XCIxMDAlXCIgeTI9XCIwJVwiPlxuICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3R5bGU9e3tzdG9wQ29sb3I6XCIjZjgzNjAwXCJ9fSAvPlxuICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdHlsZT17e3N0b3BDb2xvcjpcIiNmOWQ0MjNcIn19IC8+XG4gICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICA8ZyBmaWxsPVwidXJsKCNncmFkaWVudClcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIiBNMCwxMjAgQzIwMCwxMDAgMzAwLDE1MCA1MDAsMTQwIEw1MDAsMCBMMCwwIFogXCIgPiA8L3BhdGg+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICc4MCUnLCBtYXJnaW5MZWZ0OiAnMTAlJ319PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBncmlkLWNvbnRhaW5lci0tZml0IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudCBkYXJrLWJhY2tncm91bmRcIj5cbiAgICAgICAgICA8aDE+Q09QWSBJVDwvaDE+XG4gICAgICAgICAgPHA+U2ltcGx5IGNvcHkgb25lIG9mIHNldmVyYWwgcHJlYnVpbHQgcGFzZWFvbiBmb3JtIHRhZ3MgcmVhZHkgdG8gZ28gd2l0aCBhbGwgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gc3RhcnQgY2FwdHVyaW5nIGFuZCBzZW5kaW5nIHRoZSBpbmZvcm1hdGlvbiB5b3UgbmVlZC48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudCBkYXJrLWJhY2tncm91bmRcIj5cbiAgICAgICAgICA8aDE+UEFTVEUgSVQ8L2gxPlxuICAgICAgICAgIDxwPlBhc3RlIGFueSBQYXNlb24gZm9ybSB0YWcgYW55d2hlcmUgeW91IG5lZWQsIG5vIG5lZWQgdG8gd29ycnkgYWJvdXQgd3JpdHRpbmcgeW91ciBvd24gYmFja2VuZCBjb2RlISAgV2UndmUgZ290IHlvdSBjb3ZlcmVkLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGdyaWQtY29udGFpbmVyLS1maXRcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50IGRhcmstYmFja2dyb3VuZFwiPlxuICAgICAgICA8aDE+U0VORCBJVDwvaDE+XG4gICAgICAgICAgPHA+U2ltcGxlIGFzIHRoYXQhIHlvdSBhcmUgcmVhZHkgdG8gc3RhcnQgcmVjaWV2aW5nIGluZm9ybWF0aW9uLiAgR28gYWhlYWQgYW5kIHN1Ym1pdCBhIHRlc3QsIHRoZW4gY2hlY2sgeW91ciBpbmJveCB0byBzZWUgdGhlIHJlc3VsdHMuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVsZW1lbnQgZGFyay1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxoMT5DVVNUT01JWkUgSVQ8L2gxPlxuICAgICAgICAgIDxwPkFsbCBwcmVidWlsdCBmb3JtcyBhcmUgY3VzdG9taXplYWJsZSB0byBzdWl0IHlvdXIgc3R5bGlzdGljIG5lZWRzISBIYXZlIHlvdXIgb3duIGZvcm0geW91IHdhbnQgdG8gdXNlPyAgTm8gcHJibGVtLCBzaW1seSBuZXN0IGl0IGluIHRoZSBQYXNlb24gcGVyc29uYWwgZm9ybSB0YWdzLiAgQWxsIHRoZSBiYWNrZW5kIGxvZ2ljIGlzIHN0aWxsIGhhbmRsZWQgZm9yIHlvdS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzIwMHB4JywgIHdpZHRoOiAnNzAlJywgbWFyZ2luTGVmdDonMTUlJywgZm9udFNpemU6ICcxLjFlbScsIGxpbmVIZWlnaHQ6ICcxLjRlbSd9fT5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMzIwcHgnLCBtYXJnaW5Cb3R0b206ICczMDBweCcsIHBhZGRpbmc6ICc1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnI0YxRjFGMScsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMS4xZW0nLCBsaW5lSGVpZ2h0OiAnMS40ZW0nfX0+XG4gICAgICAgICAgPHA+UGFzZW9uIG9mZmVycyBhIHN1aXQgYSBwcmVidWlsdCBmb3JtcywgZm9ybSBidWlsZGluZyB0b29scywgYW5kIGludGVnZWdyYXRpb25zLCB0byBoYW5kbGUgcHJvY2Vzc2luZyBhbmQgc2VuZGluZyBmb3JtIGluZm9ybWF0aW9uIHRvIHdoZXJlIHlvdSBuZWVkIGl0IHRvIGdvLiBGb2xsb3cgdGhlIHN0ZXBzIGJlbG93IHRvIHNlZSBhbiBleGFtcGxlIG9mIG91ciBiYXNpYyBjb250YWN0IGZvcm0uICA8L3A+IFxuICAgICAgICAgIDxwPiBUbyBzZWUgb3RoZXIgc2VydmljZXMsIHByZWJ1aWx0IGZvcm1zIG9yIHRvIGxlYXJuIGhvdyB0byB1c2UgeW91ciBvd24gZm9ybSB0aGF0IHV0aWxpemVzIG91ciBiYWNrZW5kIHRvIHByb2Nlc3MgYW5kIHNlbmQgaW5mb3JtYXRpb24gd2hlcmUgeW91IG5lZWQgaXQgdG8gZ28gY2xpY2sgdGhlIGJ1dHRvbiBiZWxvdyA8L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9uIGJsYWNrLWJ0blwiPkxFQVJOIE1PUkU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgZ3JpZC1jb250YWluZXItLWZpdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG4gICAgICAgICAgICA8cD5UcnkgYSB0ZXN0IHN1Ym1pc3Npb24hIEFkZCB5b3VyIGVtYWlsIGluYmV0d2VlbiB0aGUgcXVvdGVzIGluIHRoZSBIVE1MIGJlbG93IHRoZW4gZmlsbCBvdXQgYW5kIHN1Ym1pdCB0aGUgZm9ybS48L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBzdHlsZT17e2JvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6JzMwcHgnfX0+XG4gICAgICAgICAgICBUaGlzIHRleHQgY2FuIGJlIGVkaXRlZCBieSB0aGUgdXNlci5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNGMUYxRjEnLCBwYWRkaW5nOiAnMzBweCd9fT5cblxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjRjBDODA4J319PnBhc2Vvbi1jb250YWN0LWZvcm0gPC9zcGFuPiBcbiAgICAgICAgICAgIHJlY2lwaWVudF9lbWFpbD1cIjxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI2RjZGNkYycsIHBhZGRpbmc6ICcycHgnLCBib3JkZXJSYWRpdXM6ICc1cHgnfX0gY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiIG9uQ2hhbmdlPXsoKT0+Y29uc29sZS5sb2coJ2hlbGxvJyl9PllPVVJfRU1BSUw8L3NwYW4+XCJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+ICZndDs8L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmx0OyAvPC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjRjBDODA4J319PnBhc2Vvbi1jb250YWN0LWZvcm08L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmd0Ozwvc3Bhbj48YnI+PC9icj5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjRjBDODA4J319PnNjcmlwdDwvc3Bhbj4gc3JjPVwiaHR0cHM6Ly9NWUNETlwiPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mZ3Q7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZsdDsgLzwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0YwQzgwOCd9fT5zY3JpcHQ8L3NwYW4+ICA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZndDs8L3NwYW4+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgICAgICAgICAgey8qIFRPRE86IHJlcGxhY2Ugd2l0aCBhIGFjdHVhbCBpbnRlcmFjdGl2ZSBmb3JtICovfSBcbiAgICAgICAgICAgIDxsYWJlbD5UaGlzIHdpbGwgYmUgc2VudCB0bzogPC9sYWJlbD5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIC52YWx1ZT1cIiR7dGhpcy5mb3JtX29iai5uYW1lfVwiXG4gICAgICAgICAgICAgICAgICAgIC8vIEBpbnB1dD1cIiR7KGUpID0+IHRoaXMuaGFuZGxlU2V0SW5wdXRWYWx1ZXMoZSl9XCIgXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIC52YWx1ZT1cIiR7dGhpcy5mb3JtX29iai5mcm9tfVwiXG4gICAgICAgICAgICAgICAgICAgIC8vIEBpbnB1dD1cIiR7KGUpID0+IHRoaXMuaGFuZGxlU2V0SW5wdXRWYWx1ZXMoZSl9XCIgXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ViamVjdFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvLyAudmFsdWU9XCIke3RoaXMuZm9ybV9vYmouc3ViamVjdH1cIlxuICAgICAgICAgICAgICAgICAgICAvLyBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmhhbmRsZVNldElucHV0VmFsdWVzKGUpfVwiIFxuICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJvZHlcIlxuICAgICAgICAgICAgICAgICAgICByb3dzPVwiNFwiIFxuICAgICAgICAgICAgICAgICAgICBjb2xzPVwiNTBcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUYWxrIHRvIG1lIEdvb3NlLi4uXCIgXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIC52YWx1ZT1cIiR7dGhpcy5mb3JtX29iai5ib2R5fVwiXG4gICAgICAgICAgICAgICAgICAgIC8vIEBpbnB1dD1cIiR7KGUpID0+IHRoaXMuaGFuZGxlU2V0SW5wdXRWYWx1ZXMoZSl9XCIgXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIj48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCIgc3R5bGU9e3t3aWR0aDogJzYwJScsIG1hcmdpbkxlZnQ6ICcyMCUnLCBtYXJnaW5Ub3A6ICczMDBweCcsIGZvbnRTaXplOiAnMS4xZW0nLCBsaW5lSGVpZ2h0OiAnMS40ZW0nfX0+XG4gICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG4gICAgICAgICAgPGgxPlN0ZXAgMTwvaDE+XG4gICAgICAgICAgPHA+Q29weSB0aGUgZm9sbG93aW5nIGh0bWwgdGFncy4gIE1ha2Ugc3VyZSB0byBzd2l0Y2ggdGhlIGJvbGRlZCBpbmZvcm1hdGlvbiB0byBtYXRjaCB0aGUgZW1haWwgYWRkcmVzcyB3aGVyZSB5b3Ugd291bGQgbGlrZSB0aGUgY29udGFjdCBpbmZvcm1hdGlvbiB0byBiZSBzZW50LjwvcD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI0RDRENEQycsIHBhZGRpbmc6ICczMHB4J319PlxuICAgICAgICAgICAgICB7LyogJmx0O3Bhc2Vvbi1jb250YWN0LWZvcm1cbiAgICAgICAgICAgICAgICByZWNpcGllbnRfZW1haWw9XCI8Yj5ZT1VSX0VNQUlMPC9iPlwiXG4gICAgICAgICAgICAgICZndDsgJmx0Oy9wYXNlb24tY29udGFjdC1mb3JtICZndDtcbiAgICAgICAgICAgICAgJmx0O3NjcmlwdCBzcmM9XCJodHRwczovL01ZQ0ROXCI+Jmx0Oy9zY3JpcHQgJmd0OyAqL31cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjonIzM0OThEQid9fT4mbHQ7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjRjBDODA4J319PnBhc2Vvbi1jb250YWN0LWZvcm0gPC9zcGFuPiBcbiAgICAgICAgICAgICAgcmVjaXBpZW50X2VtYWlsPVwiPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjZGNkY2RjJywgcGFkZGluZzogJzJweCcsIGJvcmRlclJhZGl1czogJzVweCd9fSBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCIgb25DaGFuZ2U9eygpPT5jb25zb2xlLmxvZygnaGVsbG8nKX0+WU9VUl9FTUFJTDwvc3Bhbj5cIlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiAmZ3Q7PC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZsdDsgLzwvc3Bhbj4gPHNwYW4gc3R5bGU9e3tjb2xvcjonI0YwQzgwOCd9fT5wYXNlb24tY29udGFjdC1mb3JtPC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZndDs8L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZsdDs8L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNGMEM4MDgnfX0+c2NyaXB0PC9zcGFuPiBzcmM9XCJodHRwczovL01ZQ0ROXCI8c3BhbiBzdHlsZT17e2NvbG9yOicjMzQ5OERCJ319PiZndDs8L3NwYW4+IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmx0OyAvPC9zcGFuPiA8c3BhbiBzdHlsZT17e2NvbG9yOicjRjBDODA4J319PnNjcmlwdDwvc3Bhbj4gIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMzNDk4REInfX0+Jmd0Ozwvc3Bhbj5cblxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTogJy43NWVtJ319PkhhdmUgYSBTUEEgYW5kIG5lZWQgYW4gTlBNIGluc3RhbGw/PC9wPlxuICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6ICcuNzVlbSd9fT5JZ25vcmUgdGhlIHNjcmlwdCB0YWcgYW5kIHBhc3RlIHRoZSBmb2xsb3dpbmcgaW50byB5b3VyIHJvb3QgZGlyZWN0b3J5PC9wPiBcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG5cbiAgICAgICAgICA8aDE+U3RlcCAyPC9oMT5cbiAgICAgICAgICA8cD5QYXN0ZSB0aGUgdG8gd2hlcmV2ZXIgeW91IG5lZWQgb24geW91ciBvd24gc2l0ZS4gT3VyIHRhZ3MgYXJlIHN1cHBvcnRlZCBieSBhbnkgQ1JNIHRoYXQgd2lsbCBsZXQgeW91IGFkZCBjdXN0b20gSFRNTDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZWxlbWVudFwiPlxuICAgICAgICAgIDxoMT5TdGVwIDM8L2gxPlxuICAgICAgICAgIDxwPkF0IHRoaXMgcG9pbnQgeW91IGFyZSByZWFkeSB0byBzdGFydCByZWNpZXZpbmcgZW1haWxzIGZyb20geW91ciBmb3JtIHN1Ym1pc3Npb25zISBHbyBhaGVhZCBhbmQgc2VuZCB5b3Vyc2VsZiBhIHRlc3QgZW1haWwgdGhyb3VnaCB0aGUgY29udGFjdCBmb3JtLiAgWW91IG1heSBuZWVkIGNoZWNrIHRoZSBzcGFtIGZvbGRlciwgaWYgdGhlIGVtYWlsIGVuZHMgdXAgdGhlcmUgbWFyayBpdCBhcyAnTm90IFNwYW0nIGFuZCBhbGwgZnV0dXJlIGVtYWlscyB3aWxsIGdvIHN0cmFpZ2h0IGludG8geW91ciBpbmJveC48L3A+XG48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lbGVtZW50XCI+XG5cbiAgICAgICAgICA8aDE+U3RlcCA0PC9oMT5cbiAgICAgICAgICA8cD5DdXN0b21pemUgdGhlIGxhYmVscywgY29sb3JzLCBhbmQgc3VjY2VzcyBtZXNzYWdlIG9mIHlvdXIgZm9ybSBieSBhZGRpbmcgYW5kIGVkaXRpbmcgdGhlIEhUTUwgYXR0cmlidXRlcyBvZiB0aGUgUGFzZW9uIHRhZ3MuIDwvcD5cbiAgICAgICAgICA8cD5UbyBzZWUgYSBsaXN0IG9mIG9wdGlvbnMgY2xpY2sgdGhlIGJ1dHRvbiBiZWxvdy48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9uIGJsYWNrLWJ0blwiPkxlYXJuIE1vcmU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcyMDBweCAwIDAgMCcsIGhlaWdodDogJzMwMHB4Jywgd2lkdGg6ICcxMDAlJyxiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjlkNDIzIDAlLCAjZjgzNjAwIDEwMCUpXCJ9fT5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAvLyBTVEFSVCBXSUxMIEJFIE1PVkVEIE9VVCAtIGZvciBpbnRlcmFjdGl2ZSB0ZXN0IGZvcm1cbiAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcbiAgICAgICAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMTA4LDksMTIxLDEpIDM5JSwgcmdiYSgyNTUsMCw2MywxKSAxMDAlKTtcbiAgICAgICAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyBFTkQgV0lMTCBCRSBNT1ZFRCBPVVRcblxuXG4gICAgICAgIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogaGVhdnk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBvdXRsaW5lOm5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAuNWVtO1xuICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAud2hpdGUtYnRuIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDAlLCAjZmZmIDUwJSwgVHJhbnNwYXJlbnQgNTAlLCBUcmFuc3BhcmVudCAxMDAlKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsYWNrLWJ0biB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMCAwJSwgIzAwMCA1MCUsIFRyYW5zcGFyZW50IDUwJSwgVHJhbnNwYXJlbnQgMTAwJSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4zcztcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAud2hpdGUtYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxhY2stYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZC1jb250YWluZXItLWZpbGwge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lci0tZml0IHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkLWVsZW1lbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGFyay1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTRmO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIH1cblxuXG4gICAgICAgIFxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbm5lckNvbnRhaW5lcntcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG5cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaDEsXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.cf7e45b17f1a2262d3c5.hot-update.js.map