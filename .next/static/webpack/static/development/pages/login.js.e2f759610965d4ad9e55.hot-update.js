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
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");




var _jsxFileName = "/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
 // import fetch from 'isomorphic-unfetch'



 //  const db = require('./api/db/Postgres').db();

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
      var username, url, response, error, _response;

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
                _context.next = 12;
                break;
              }

              _context.next = 16;
              break;

            case 12:
              console.log('Login failed.'); // https://github.com/developit/unfetch#caveats

              error = new Error(response.statusText);
              error.response = response;
              throw error;

            case 16:
              _context.next = 23;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](4);
              console.error('You have an error in your code or there are Network issues.', _context.t0);
              _response = _context.t0.response;
              setUserData(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, userData, {
                error: _response ? _response.statusText : _context.t0.message
              }));

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 18]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1828860322" + " " + 'login',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "username",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
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
      lineNumber: 66
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Login"), userData.error && __jsx("p", {
    className: "jsx-1828860322" + " " + 'error',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Error: ", userData.error))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1828860322",
    __self: this
  }, ".login.jsx-1828860322{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-1828860322{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-1828860322{font-weight:600;}input.jsx-1828860322{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-1828860322{margin:0.5rem 0 0;color:brown;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGa0IsQUFHMkIsQUFPSCxBQUlHLEFBR0osQUFNTSxZQUxHLElBZFAsQUFXaEIsRUFTYyxZQW5CQyxBQW9CZixHQU53QixVQWJBLFlBY0osVUFiQSxRQWNwQixDQVZtQixTQUhuQixzREFJQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL3RheWxvclBhc3FMTEMvcGFzZW9uL3Bhc2Vvbi9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCdcbi8vICBjb25zdCBkYiA9IHJlcXVpcmUoJy4vYXBpL2RiL1Bvc3RncmVzJykuZGIoKTtcblxuXG5cblxuXG5mdW5jdGlvbiBMb2dpbiAoKSB7XG5cblxuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6ICcnLCBlcnJvcjogJycgfSlcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQgKGV2ZW50KSB7XG4gICAgXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHNldFVzZXJEYXRhKE9iamVjdC5hc3NpZ24oe30sIHVzZXJEYXRhLCB7IGVycm9yOiAnJyB9KSlcblxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlckRhdGEudXNlcm5hbWVcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9lbWFpbFNlcnZpY2UvbG9naW4nXG5cbiAgICB0cnkge1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lIH0pXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcblxuICAgICAgICAvLyBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgLy8gYXdhaXQgbG9naW4oeyB0b2tlbiB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIGZhaWxlZC4nKVxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3VuZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnWW91IGhhdmUgYW4gZXJyb3IgaW4geW91ciBjb2RlIG9yIHRoZXJlIGFyZSBOZXR3b3JrIGlzc3Vlcy4nLFxuICAgICAgICBlcnJvclxuICAgICAgKVxuXG4gICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBlcnJvclxuICAgICAgc2V0VXNlckRhdGEoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHVzZXJEYXRhLCB7XG4gICAgICAgICAgZXJyb3I6IHJlc3BvbnNlID8gcmVzcG9uc2Uuc3RhdHVzVGV4dCA6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4nPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlcm5hbWUnPkdpdEh1YiB1c2VybmFtZTwvbGFiZWw+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBpZD0ndXNlcm5hbWUnXG4gICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXt1c2VyRGF0YS51c2VybmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxuICAgICAgICAgICAgICBzZXRVc2VyRGF0YShcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB1c2VyRGF0YSwgeyB1c2VybmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkxvZ2luPC9idXR0b24+XG5cbiAgICAgICAgICB7dXNlckRhdGEuZXJyb3IgJiYgPHAgY2xhc3NOYW1lPSdlcnJvcic+RXJyb3I6IHt1c2VyRGF0YS5lcnJvcn08L3A+fVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDM0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIG1hcmdpbjogMC4zcmVtIDAgMXJlbTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDAgMDtcbiAgICAgICAgICBjb2xvcjogYnJvd247XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuXG5cblxuLy8gZnVuY3Rpb24gUHJvZmlsZVBhZ2UoeyBwcm9maWxlIH0pIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGUuYXZhdGFyfSAvPlxuLy8gICAgICAgICA8aDE+e3Byb2ZpbGUubmFtZX08L2gxPlxuLy8gICAgICAgICA8cD57cHJvZmlsZS5hZGRyZXNzfTwvcD5cbi8vICAgICAgICAgPHA+e3Byb2ZpbGUuZW1haWx9PC9wPlxuLy8gICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuLy8gICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIHByb2ZpbGVzPC9hPlxuLy8gICAgICAgICA8L0xpbms+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8Lz5cbi8vICAgKVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZSJdfQ== */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/login.js */"));
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
//# sourceMappingURL=login.js.e2f759610965d4ad9e55.hot-update.js.map