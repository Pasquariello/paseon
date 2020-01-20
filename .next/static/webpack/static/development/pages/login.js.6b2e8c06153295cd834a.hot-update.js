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

            url = 'https://paseonforms.com/login/auth';
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
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    style: {
      overflow: 'auto'
    },
    className: "jsx-1828860322" + " " + 'login',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "username",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
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
      lineNumber: 86
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "username",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
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
      lineNumber: 100
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Login"), userData.error && __jsx("p", {
    className: "jsx-1828860322" + " " + 'error',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Error: ", userData.error)), __jsx("div", {
    style: {
      "float": 'left'
    },
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Register"))), __jsx("div", {
    style: {
      "float": 'right'
    },
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/reset/forgotPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Forgot Password")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1828860322",
    __self: this
  }, ".login.jsx-1828860322{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-1828860322{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-1828860322{font-weight:600;}input.jsx-1828860322{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-1828860322{margin:0.5rem 0 0;color:brown;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUlrQixBQUcyQixBQU9ILEFBSUcsQUFHSixBQU1NLFlBTEcsSUFkUCxBQVdoQixFQVNjLFlBbkJDLEFBb0JmLEdBTndCLFVBYkEsWUFjSixVQWJBLFFBY3BCLENBVm1CLFNBSG5CLHNEQUlBIiwiZmlsZSI6Ii9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL3Bhc2Vvbi9wYXNlb24vcGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXG4gaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi91dGlscy9hdXRoJ1xuXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgd2l0aFJlZHV4IH0gZnJvbSAnLi4vbGliL3JlZHV4J1xuLy8gaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2F1dGgnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBMb2dpbiAoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG5cbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnLCBlcnJvcjogJycgfSlcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0VXNlckRhdGEoT2JqZWN0LmFzc2lnbih7fSwgdXNlckRhdGEsIHsgZXJyb3I6ICcnIH0pKVxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlckRhdGEudXNlcm5hbWVcblxuICAgIC8vbGV0IHVybCA9ICdodHRwczovL3Bhc2VvbmZvcm1zLmNvbS9sb2dpbi9hdXRoJ1xuICAgIGxldCB1cmwgPSAnaHR0cHM6Ly9wYXNlb25mb3Jtcy5jb20vbG9naW4vYXV0aCdcblxuICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKVxuICAgICAgICBcbiAgICAgIH0pLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gZmFpbGVkLicpXG4gICAgICAgICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ0xPR0lOX1NVQ0NFU1MnLFxuICAgICAgICAgICAgICBwYXlsb2FkOiBkYXRhXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdZb3UgaGF2ZSBhbiBlcnJvciBpbiB5b3VyIGNvZGUgb3IgdGhlcmUgYXJlIE5ldHdvcmsgaXNzdWVzLicsXG4gICAgICAgIGVycm9yXG4gICAgICApXG5cbiAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGVycm9yXG4gICAgICBzZXRVc2VyRGF0YShcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdXNlckRhdGEsIHtcbiAgICAgICAgICBlcnJvcjogcmVzcG9uc2UgPyByZXNwb25zZS5zdGF0dXNUZXh0IDogZXJyb3IubWVzc2FnZVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luJyBzdHlsZT17e292ZXJmbG93OiAnYXV0byd9fT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXJuYW1lJz5Vc2VybmFtZSAvIEVtYWlsPC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIGlkPSd1c2VybmFtZSdcbiAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgdmFsdWU9e3VzZXJEYXRhLnVzZXJuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XG4gICAgICAgICAgICAgIHNldFVzZXJEYXRhKFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHVzZXJEYXRhLCB7IHVzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG5cbjxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+UGFzc3dvcmQ8L2xhYmVsPlxuXG48aW5wdXRcbiAgdHlwZT0ncGFzc3dvcmQnXG4gIGlkPSdwYXNzd29yZCdcbiAgbmFtZT0ncGFzc3dvcmQnXG4gIHZhbHVlPXt1c2VyRGF0YS5wYXNzd29yZH1cbiAgb25DaGFuZ2U9e2V2ZW50ID0+XG4gICAgc2V0VXNlckRhdGEoXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB1c2VyRGF0YSwgeyBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgKVxuICB9XG4vPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkxvZ2luPC9idXR0b24+XG5cbiAgICAgICAgICB7dXNlckRhdGEuZXJyb3IgJiYgPHAgY2xhc3NOYW1lPSdlcnJvcic+RXJyb3I6IHt1c2VyRGF0YS5lcnJvcn08L3A+fVxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogJ2xlZnQnfX0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICA8YT5SZWdpc3RlcjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxvYXQ6ICdyaWdodCd9fT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNldC9mb3Jnb3RQYXNzd29yZFwiPlxuICAgICAgICAgIDxhPkZvcmdvdCBQYXNzd29yZDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxkaXYgc3R5bGU9e3tjbGVhcjogJ2JvdGgnfX0+PC9kaXY+ICovfVxuXG5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubG9naW4ge1xuICAgICAgICAgIG1heC13aWR0aDogMzQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgbWFyZ2luOiAwLjNyZW0gMCAxcmVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwO1xuICAgICAgICAgIGNvbG9yOiBicm93bjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbkxvZ2luLmdldEluaXRpYWxQcm9wcyA9ICh7IHJlZHV4U3RvcmUgfSkgPT4ge1xuICBjb25zb2xlLmxvZygncmVkdXhTdG9yZScscmVkdXhTdG9yZSlcbiAgLy8gVGljayB0aGUgdGltZSBvbmNlLCBzbyB3ZSdsbCBoYXZlIGFcbiAgLy8gdmFsaWQgdGltZSBiZWZvcmUgZmlyc3QgcmVuZGVyXG4gIC8vIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHJlZHV4U3RvcmVcbiAgLy8gZGlzcGF0Y2goe1xuICAvLyAgIHR5cGU6ICdMT0dJTicsXG4gIC8vICAgY3VycmVudF91c2VyOiAyXG4gIC8vICAgLy9saWdodDogdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcsXG4gIC8vICAgLy9sYXN0VXBkYXRlOiBEYXRlLm5vdygpLFxuICAvLyB9KVxuXG4gIHJldHVybiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoTG9naW4pXG5cbi8vIGV4cG9ydCBkZWZhdWx0IExvZ2luXG5cblxuXG4vLyBmdW5jdGlvbiBQcm9maWxlUGFnZSh7IHByb2ZpbGUgfSkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8aW1nIHNyYz17cHJvZmlsZS5hdmF0YXJ9IC8+XG4vLyAgICAgICAgIDxoMT57cHJvZmlsZS5uYW1lfTwvaDE+XG4vLyAgICAgICAgIDxwPntwcm9maWxlLmFkZHJlc3N9PC9wPlxuLy8gICAgICAgICA8cD57cHJvZmlsZS5lbWFpbH08L3A+XG4vLyAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4vLyAgICAgICAgICAgPGE+4oaQIEJhY2sgdG8gcHJvZmlsZXM8L2E+XG4vLyAgICAgICAgIDwvTGluaz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvPlxuLy8gICApXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlIl19 */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/paseon/paseon/pages/login.js */"));
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
//# sourceMappingURL=login.js.6b2e8c06153295cd834a.hot-update.js.map