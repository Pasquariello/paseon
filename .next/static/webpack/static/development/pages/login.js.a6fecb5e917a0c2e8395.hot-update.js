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
      var _this = this;

      var username, url;
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
              fetch(url, {
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST',
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(username)
              }).then(function (response) {
                if (response.status === 200) {
                  _this.loading = false;
                  _this.msgSuccess = true;
                  var self = _this;
                  setTimeout(function () {
                    console.log('YOYOYO ');
                    self.msgSuccess = false;
                  }, 2000);
                } else {
                  console.log('error');
                } // return response.json();

              }).then(function (response) {}); // try {
              //   // let user = await db('users').select('email').where({email: 'taylor@pasq.net'});
              //   const response = await fetch(url, {
              //     method: 'POST',
              //     headers: { 'Content-Type': 'application/json' },
              //     body: JSON.stringify({ username })
              //   })
              //   console.log('response', response)
              //   if (response.status === 200) {
              //     // const { token } = await response.json()
              //     // await login({ token })
              //   } else {
              //     console.log('Login failed.')
              //     // https://github.com/developit/unfetch#caveats
              //     let error = new Error(response.statusText)
              //     error.response = response
              //     throw error
              //   }
              // } catch (error) {
              //   console.error(
              //     'You have an error in your code or there are Network issues.',
              //     error
              //   )
              //   const { response } = error
              //   setUserData(
              //     Object.assign({}, userData, {
              //       error: response ? response.statusText : error.message
              //     })
              //   )
              // }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1828860322" + " " + 'login',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "username",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
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
      lineNumber: 104
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1828860322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Login"), userData.error && __jsx("p", {
    className: "jsx-1828860322" + " " + 'error',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Error: ", userData.error))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1828860322",
    __self: this
  }, ".login.jsx-1828860322{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-1828860322{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-1828860322{font-weight:600;}input.jsx-1828860322{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-1828860322{margin:0.5rem 0 0;color:brown;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIa0IsQUFHMkIsQUFPSCxBQUlHLEFBR0osQUFNTSxZQUxHLElBZFAsQUFXaEIsRUFTYyxZQW5CQyxBQW9CZixHQU53QixVQWJBLFlBY0osVUFiQSxRQWNwQixDQVZtQixTQUhuQixzREFJQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL3RheWxvclBhc3FMTEMvcGFzZW9uL3Bhc2Vvbi9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcbi8vIGltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCdcbi8vICBjb25zdCBkYiA9IHJlcXVpcmUoJy4vYXBpL2RiL1Bvc3RncmVzJykuZGIoKTtcblxuXG5cbi8vIExvZ2luLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSwgcXVlcnkgfSkgPT4ge1xuLy8gICBjb25zdCBwcm90b2NvbCA9IHJlcVxuLy8gICAgID8gYCR7cmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLXByb3RvJ119OmBcbi8vICAgICA6IGxvY2F0aW9uLnByb3RvY29sXG4vLyAgIGNvbnN0IGhvc3QgPSByZXEgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIDogbG9jYXRpb24uaG9zdFxuLy8gICBjb25zdCBwYWdlUmVxdWVzdCA9IGAke3Byb3RvY29sfS8vJHtob3N0fS9hcGkvbG9naW52MmBcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKVxuLy8gICBjb25zdCBqc29uID0gYXdhaXQgcmVzXG4vLyAgIHJldHVybiBqc29uXG5cbiAgXG4vLyB9XG5cbmZ1bmN0aW9uIExvZ2luICgpIHtcblxuXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogJycsIGVycm9yOiAnJyB9KVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0VXNlckRhdGEoT2JqZWN0LmFzc2lnbih7fSwgdXNlckRhdGEsIHsgZXJyb3I6ICcnIH0pKVxuXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VyRGF0YS51c2VybmFtZVxuICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2VtYWlsU2VydmljZS9sb2dpbidcblxuICAgIGZldGNoKHVybCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJuYW1lKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5tc2dTdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1lPWU9ZTyAnKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1zZ1N1Y2Nlc3MgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7ICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIC8vIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgLy8gdHJ5IHtcbiAgICAvLyAgIC8vIGxldCB1c2VyID0gYXdhaXQgZGIoJ3VzZXJzJykuc2VsZWN0KCdlbWFpbCcpLndoZXJlKHtlbWFpbDogJ3RheWxvckBwYXNxLm5ldCd9KTtcblxuICAgIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgXG4gICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIC8vICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSB9KVxuICAgIC8vICAgfSlcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKVxuICAgIC8vICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG5cbiAgICAvLyAgICAgLy8gY29uc3QgeyB0b2tlbiB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgLy8gICAgIC8vIGF3YWl0IGxvZ2luKHsgdG9rZW4gfSlcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdMb2dpbiBmYWlsZWQuJylcbiAgICAvLyAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC91bmZldGNoI2NhdmVhdHNcbiAgICAvLyAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgLy8gICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICAvLyAgICAgdGhyb3cgZXJyb3JcbiAgICAvLyAgIH1cbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5lcnJvcihcbiAgICAvLyAgICAgJ1lvdSBoYXZlIGFuIGVycm9yIGluIHlvdXIgY29kZSBvciB0aGVyZSBhcmUgTmV0d29yayBpc3N1ZXMuJyxcbiAgICAvLyAgICAgZXJyb3JcbiAgICAvLyAgIClcblxuICAgIC8vICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3JcbiAgICAvLyAgIHNldFVzZXJEYXRhKFxuICAgIC8vICAgICBPYmplY3QuYXNzaWduKHt9LCB1c2VyRGF0YSwge1xuICAgIC8vICAgICAgIGVycm9yOiByZXNwb25zZSA/IHJlc3BvbnNlLnN0YXR1c1RleHQgOiBlcnJvci5tZXNzYWdlXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICApXG4gICAgLy8gfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luJz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXJuYW1lJz5HaXRIdWIgdXNlcm5hbWU8L2xhYmVsPlxuXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgaWQ9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgbmFtZT0ndXNlcm5hbWUnXG4gICAgICAgICAgICB2YWx1ZT17dXNlckRhdGEudXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cbiAgICAgICAgICAgICAgc2V0VXNlckRhdGEoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdXNlckRhdGEsIHsgdXNlcm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5Mb2dpbjwvYnV0dG9uPlxuXG4gICAgICAgICAge3VzZXJEYXRhLmVycm9yICYmIDxwIGNsYXNzTmFtZT0nZXJyb3InPkVycm9yOiB7dXNlckRhdGEuZXJyb3J9PC9wPn1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sb2dpbiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzNDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBtYXJnaW46IDAuM3JlbSAwIDFyZW07XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwIDA7XG4gICAgICAgICAgY29sb3I6IGJyb3duO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cblxuXG5cbi8vIGZ1bmN0aW9uIFByb2ZpbGVQYWdlKHsgcHJvZmlsZSB9KSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxpbWcgc3JjPXtwcm9maWxlLmF2YXRhcn0gLz5cbi8vICAgICAgICAgPGgxPntwcm9maWxlLm5hbWV9PC9oMT5cbi8vICAgICAgICAgPHA+e3Byb2ZpbGUuYWRkcmVzc308L3A+XG4vLyAgICAgICAgIDxwPntwcm9maWxlLmVtYWlsfTwvcD5cbi8vICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbi8vICAgICAgICAgICA8YT7ihpAgQmFjayB0byBwcm9maWxlczwvYT5cbi8vICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC8+XG4vLyAgIClcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2UiXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/login.js */"));
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
//# sourceMappingURL=login.js.a6fecb5e917a0c2e8395.hot-update.js.map