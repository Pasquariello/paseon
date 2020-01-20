webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/redux */ "./lib/redux.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "/Users/taylorpasquariello/learning_resources/paseon/paseon/pages/login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
 // import fetch from 'isomorphic-unfetch'





 // import { login } from '../redux/actions/auth'



function Login() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    username: '',
    password: '',
    error: ''
  }),
      userData = _useState[0],
      setUserData = _useState[1];

  function handleSubmit(event) {
    var username, url, response, _response;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            setUserData(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, userData, {
              error: ''
            }));
            username = userData.username; //let url = 'https://paseonforms.com/login/auth'

            url = "".concat(getUrl, "/login/auth");
            _context.prev = 4;
            _context.next = 7;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(userData)
            }).then(function (response) {
              if (response.status !== 200) {
                console.log('Login failed.');
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
              }

              response.json().then(function (data) {
                dispatch({
                  type: 'LOGIN_SUCCESS',
                  payload: data
                });
                next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/dashboard');
              });
            }));

          case 7:
            response = _context.sent;
            _context.next = 15;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            console.error('You have an error in your code or there are Network issues.', _context.t0);
            _response = _context.t0.response;
            setUserData(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, userData, {
              error: _response ? _response.statusText : _context.t0.message
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[4, 10]]);
  }

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    style: {
      overflow: 'auto'
    },
    className: "jsx-1828860322" + " " + 'login',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "username",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Username / Email"), __jsx("input", {
    type: "text",
    id: "username",
    name: "username",
    value: userData.username,
    onChange: function onChange(event) {
      return setUserData(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, userData, {
        username: event.target.value
      }));
    },
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "username",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Password"), __jsx("input", {
    type: "password",
    id: "password",
    name: "password",
    value: userData.password,
    onChange: function onChange(event) {
      return setUserData(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, userData, {
        password: event.target.value
      }));
    },
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Login"), userData.error && __jsx("p", {
    className: "jsx-1828860322" + " " + 'error',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Error: ", userData.error)), __jsx("div", {
    style: {
      "float": 'left'
    },
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Register"))), __jsx("div", {
    style: {
      "float": 'right'
    },
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/reset/forgotPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Forgot Password")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1828860322",
    __self: this
  }, ".login.jsx-1828860322{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-1828860322{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-1828860322{font-weight:600;}input.jsx-1828860322{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-1828860322{margin:0.5rem 0 0;color:brown;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0lrQixBQUcyQixBQU9ILEFBSUcsQUFHSixBQU1NLFlBTEcsSUFkUCxBQVdoQixFQVNjLFlBbkJDLEFBb0JmLEdBTndCLFVBYkEsWUFjSixVQWJBLFFBY3BCLENBVm1CLFNBSG5CLHNEQUlBIiwiZmlsZSI6Ii9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vcGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXG4gaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi91dGlscy9hdXRoJ1xuXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgd2l0aFJlZHV4IH0gZnJvbSAnLi4vbGliL3JlZHV4J1xuLy8gaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2F1dGgnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBMb2dpbiAoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG5cbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnLCBlcnJvcjogJycgfSlcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0VXNlckRhdGEoT2JqZWN0LmFzc2lnbih7fSwgdXNlckRhdGEsIHsgZXJyb3I6ICcnIH0pKVxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlckRhdGEudXNlcm5hbWVcblxuICAgIC8vbGV0IHVybCA9ICdodHRwczovL3Bhc2VvbmZvcm1zLmNvbS9sb2dpbi9hdXRoJ1xuICAgICAgICAgbGV0IHVybCA9IGAke2dldFVybH0vbG9naW4vYXV0aGAgICAgXG4gIFxuXG4gICAgdHJ5IHtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpXG4gICAgICAgIFxuICAgICAgfSkudGhlbihcbiAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBmYWlsZWQuJylcbiAgICAgICAgICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihkYXRhKXtcblxuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcblxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ1lvdSBoYXZlIGFuIGVycm9yIGluIHlvdXIgY29kZSBvciB0aGVyZSBhcmUgTmV0d29yayBpc3N1ZXMuJyxcbiAgICAgICAgZXJyb3JcbiAgICAgIClcblxuICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3JcbiAgICAgIHNldFVzZXJEYXRhKFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB1c2VyRGF0YSwge1xuICAgICAgICAgIGVycm9yOiByZXNwb25zZSA/IHJlc3BvbnNlLnN0YXR1c1RleHQgOiBlcnJvci5tZXNzYWdlXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4nIHN0eWxlPXt7b3ZlcmZsb3c6ICdhdXRvJ319PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlcm5hbWUnPlVzZXJuYW1lIC8gRW1haWw8L2xhYmVsPlxuXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgaWQ9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgbmFtZT0ndXNlcm5hbWUnXG4gICAgICAgICAgICB2YWx1ZT17dXNlckRhdGEudXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cbiAgICAgICAgICAgICAgc2V0VXNlckRhdGEoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdXNlckRhdGEsIHsgdXNlcm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cblxuPGxhYmVsIGh0bWxGb3I9J3VzZXJuYW1lJz5QYXNzd29yZDwvbGFiZWw+XG5cbjxpbnB1dFxuICB0eXBlPSdwYXNzd29yZCdcbiAgaWQ9J3Bhc3N3b3JkJ1xuICBuYW1lPSdwYXNzd29yZCdcbiAgdmFsdWU9e3VzZXJEYXRhLnBhc3N3b3JkfVxuICBvbkNoYW5nZT17ZXZlbnQgPT5cbiAgICBzZXRVc2VyRGF0YShcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHVzZXJEYXRhLCB7IHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICApXG4gIH1cbi8+XG5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+TG9naW48L2J1dHRvbj5cblxuICAgICAgICAgIHt1c2VyRGF0YS5lcnJvciAmJiA8cCBjbGFzc05hbWU9J2Vycm9yJz5FcnJvcjoge3VzZXJEYXRhLmVycm9yfTwvcD59XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgICBcbiAgICAgICAgPGRpdiBzdHlsZT17e2Zsb2F0OiAnbGVmdCd9fT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgIDxhPlJlZ2lzdGVyPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319PlxuICAgICAgICA8TGluayBocmVmPVwiL3Jlc2V0L2ZvcmdvdFBhc3N3b3JkXCI+XG4gICAgICAgICAgPGE+Rm9yZ290IFBhc3N3b3JkPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBzdHlsZT17e2NsZWFyOiAnYm90aCd9fT48L2Rpdj4gKi99XG5cblxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sb2dpbiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzNDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBtYXJnaW46IDAuM3JlbSAwIDFyZW07XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwIDA7XG4gICAgICAgICAgY29sb3I6IGJyb3duO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuTG9naW4uZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVkdXhTdG9yZSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdyZWR1eFN0b3JlJyxyZWR1eFN0b3JlKVxuICAvLyBUaWNrIHRoZSB0aW1lIG9uY2UsIHNvIHdlJ2xsIGhhdmUgYVxuICAvLyB2YWxpZCB0aW1lIGJlZm9yZSBmaXJzdCByZW5kZXJcbiAgLy8gY29uc3QgeyBkaXNwYXRjaCB9ID0gcmVkdXhTdG9yZVxuICAvLyBkaXNwYXRjaCh7XG4gIC8vICAgdHlwZTogJ0xPR0lOJyxcbiAgLy8gICBjdXJyZW50X3VzZXI6IDJcbiAgLy8gICAvL2xpZ2h0OiB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyxcbiAgLy8gICAvL2xhc3RVcGRhdGU6IERhdGUubm93KCksXG4gIC8vIH0pXG5cbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChMb2dpbilcblxuLy8gZXhwb3J0IGRlZmF1bHQgTG9naW5cblxuXG5cbi8vIGZ1bmN0aW9uIFByb2ZpbGVQYWdlKHsgcHJvZmlsZSB9KSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxpbWcgc3JjPXtwcm9maWxlLmF2YXRhcn0gLz5cbi8vICAgICAgICAgPGgxPntwcm9maWxlLm5hbWV9PC9oMT5cbi8vICAgICAgICAgPHA+e3Byb2ZpbGUuYWRkcmVzc308L3A+XG4vLyAgICAgICAgIDxwPntwcm9maWxlLmVtYWlsfTwvcD5cbi8vICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbi8vICAgICAgICAgICA8YT7ihpAgQmFjayB0byBwcm9maWxlczwvYT5cbi8vICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC8+XG4vLyAgIClcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2UiXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/paseon/paseon/pages/login.js */"));
}

Login.getInitialProps = function (_ref) {
  var reduxStore = _ref.reduxStore;
  console.log('reduxStore', reduxStore); // Tick the time once, so we'll have a
  // valid time before first render
  // const { dispatch } = reduxStore
  // dispatch({
  //   type: 'LOGIN',
  //   current_user: 2
  //   //light: typeof window === 'object',
  //   //lastUpdate: Date.now(),
  // })

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_redux__WEBPACK_IMPORTED_MODULE_9__["withRedux"])(Login)); // export default Login
// function ProfilePage({ profile }) {
//   return (
//     <>
//       <div>
//         <img src={profile.avatar} />
//         <h1>{profile.name}</h1>
//         <p>{profile.address}</p>
//         <p>{profile.email}</p>
//         <Link href="/">
//           <a>← Back to profiles</a>
//         </Link>
//       </div>
//     </>
//   )
// }
// export default ProfilePage

/***/ })

})
//# sourceMappingURL=login.js.31fc00698db2044a3538.hot-update.js.map