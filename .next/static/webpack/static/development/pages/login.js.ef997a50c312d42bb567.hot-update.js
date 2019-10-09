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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");




var _jsxFileName = "/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
 // import fetch from 'isomorphic-unfetch'


 // import { login } from '../utils/auth'
//  const db = require('./api/db/Postgres').db();
// Login.getInitialProps = async ({ req, query }) => {
//   const protocol = req
//     ? `${req.headers['x-forwarded-proto']}:`
//     : location.protocol
//   const host = req ? req.headers['x-forwarded-host'] : location.host
//   const pageRequest = `${protocol}//${host}/api/loginv2`
//   const res = await fetch(url)
//   const json = await res
//   return json
// }

function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    username: '',
    error: ''
  }),
      userData = _useState[0],
      setUserData = _useState[1];

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var username, url, response, _ref, token, error, _response;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setUserData(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, userData, {
                error: ''
              }));
              username = userData.username;
              url = 'http://localhost:3001/emailService/login';
              _context.prev = 4;
              _context.next = 7;
              return fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  username: username
                })
              });

            case 7:
              response = _context.sent;
              console.log('response', response);

              if (!(response.status === 200)) {
                _context.next = 18;
                break;
              }

              _context.next = 12;
              return response.json();

            case 12:
              _ref = _context.sent;
              token = _ref.token;
              _context.next = 16;
              return login({
                token: token
              });

            case 16:
              _context.next = 22;
              break;

            case 18:
              console.log('Login failed.'); // https://github.com/developit/unfetch#caveats

              error = new Error(response.statusText);
              error.response = response;
              throw error;

            case 22:
              _context.next = 29;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](4);
              console.error('You have an error in your code or there are Network issues.', _context.t0);
              _response = _context.t0.response;
              setUserData(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, userData, {
                error: _response ? _response.statusText : _context.t0.message
              }));

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 24]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1828860322" + " " + 'login',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "username",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "GitHub username"), __jsx("input", {
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
      lineNumber: 78
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Login"), userData.error && __jsx("p", {
    className: "jsx-1828860322" + " " + 'error',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Error: ", userData.error))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1828860322",
    __self: this
  }, ".login.jsx-1828860322{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-1828860322{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-1828860322{font-weight:600;}input.jsx-1828860322{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-1828860322{margin:0.5rem 0 0;color:brown;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGa0IsQUFHMkIsQUFPSCxBQUlHLEFBR0osQUFNTSxZQUxHLElBZFAsQUFXaEIsRUFTYyxZQW5CQyxBQW9CZixHQU53QixVQWJBLFlBY0osVUFiQSxRQWNwQixDQVZtQixTQUhuQixzREFJQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL3RheWxvclBhc3FMTEMvcGFzZW9uL3Bhc2Vvbi9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcbi8vIGltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCdcbi8vICBjb25zdCBkYiA9IHJlcXVpcmUoJy4vYXBpL2RiL1Bvc3RncmVzJykuZGIoKTtcblxuXG5cbi8vIExvZ2luLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSwgcXVlcnkgfSkgPT4ge1xuLy8gICBjb25zdCBwcm90b2NvbCA9IHJlcVxuLy8gICAgID8gYCR7cmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLXByb3RvJ119OmBcbi8vICAgICA6IGxvY2F0aW9uLnByb3RvY29sXG4vLyAgIGNvbnN0IGhvc3QgPSByZXEgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIDogbG9jYXRpb24uaG9zdFxuLy8gICBjb25zdCBwYWdlUmVxdWVzdCA9IGAke3Byb3RvY29sfS8vJHtob3N0fS9hcGkvbG9naW52MmBcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKVxuLy8gICBjb25zdCBqc29uID0gYXdhaXQgcmVzXG4vLyAgIHJldHVybiBqc29uXG5cbiAgXG4vLyB9XG5cbmZ1bmN0aW9uIExvZ2luICgpIHtcblxuXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogJycsIGVycm9yOiAnJyB9KVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0VXNlckRhdGEoT2JqZWN0LmFzc2lnbih7fSwgdXNlckRhdGEsIHsgZXJyb3I6ICcnIH0pKVxuXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VyRGF0YS51c2VybmFtZVxuICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2VtYWlsU2VydmljZS9sb2dpbidcblxuICAgIHRyeSB7XG4gICAgICAvLyBsZXQgdXNlciA9IGF3YWl0IGRiKCd1c2VycycpLnNlbGVjdCgnZW1haWwnKS53aGVyZSh7ZW1haWw6ICd0YXlsb3JAcGFzcS5uZXQnfSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUgfSlcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSlcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuXG4gICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBhd2FpdCBsb2dpbih7IHRva2VuIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gZmFpbGVkLicpXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvdW5mZXRjaCNjYXZlYXRzXG4gICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdZb3UgaGF2ZSBhbiBlcnJvciBpbiB5b3VyIGNvZGUgb3IgdGhlcmUgYXJlIE5ldHdvcmsgaXNzdWVzLicsXG4gICAgICAgIGVycm9yXG4gICAgICApXG5cbiAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGVycm9yXG4gICAgICBzZXRVc2VyRGF0YShcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdXNlckRhdGEsIHtcbiAgICAgICAgICBlcnJvcjogcmVzcG9uc2UgPyByZXNwb25zZS5zdGF0dXNUZXh0IDogZXJyb3IubWVzc2FnZVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbic+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+R2l0SHViIHVzZXJuYW1lPC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIGlkPSd1c2VybmFtZSdcbiAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgdmFsdWU9e3VzZXJEYXRhLnVzZXJuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XG4gICAgICAgICAgICAgIHNldFVzZXJEYXRhKFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHVzZXJEYXRhLCB7IHVzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+TG9naW48L2J1dHRvbj5cblxuICAgICAgICAgIHt1c2VyRGF0YS5lcnJvciAmJiA8cCBjbGFzc05hbWU9J2Vycm9yJz5FcnJvcjoge3VzZXJEYXRhLmVycm9yfTwvcD59XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubG9naW4ge1xuICAgICAgICAgIG1heC13aWR0aDogMzQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgbWFyZ2luOiAwLjNyZW0gMCAxcmVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwO1xuICAgICAgICAgIGNvbG9yOiBicm93bjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG5cblxuXG4vLyBmdW5jdGlvbiBQcm9maWxlUGFnZSh7IHByb2ZpbGUgfSkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8aW1nIHNyYz17cHJvZmlsZS5hdmF0YXJ9IC8+XG4vLyAgICAgICAgIDxoMT57cHJvZmlsZS5uYW1lfTwvaDE+XG4vLyAgICAgICAgIDxwPntwcm9maWxlLmFkZHJlc3N9PC9wPlxuLy8gICAgICAgICA8cD57cHJvZmlsZS5lbWFpbH08L3A+XG4vLyAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4vLyAgICAgICAgICAgPGE+4oaQIEJhY2sgdG8gcHJvZmlsZXM8L2E+XG4vLyAgICAgICAgIDwvTGluaz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvPlxuLy8gICApXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlIl19 */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/login.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Login); // function ProfilePage({ profile }) {
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
//# sourceMappingURL=login.js.ef997a50c312d42bb567.hot-update.js.map