webpackHotUpdate("static/development/pages/login.js",{

/***/ "./node_modules/isomorphic-unfetch/browser.js":
false,

/***/ "./node_modules/unfetch/dist/unfetch.mjs":
false,

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
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)
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
  }, ".login.jsx-1828860322{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-1828860322{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-1828860322{font-weight:600;}input.jsx-1828860322{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-1828860322{margin:0.5rem 0 0;color:brown;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vdGF5bG9yUGFzcUxMQy9wYXNlb24vcGFzZW9uL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIa0IsQUFHMkIsQUFPSCxBQUlHLEFBR0osQUFNTSxZQUxHLElBZFAsQUFXaEIsRUFTYyxZQW5CQyxBQW9CZixHQU53QixVQWJBLFlBY0osVUFiQSxRQWNwQixDQVZtQixTQUhuQixzREFJQSIsImZpbGUiOiIvVXNlcnMvdGF5bG9ycGFzcXVhcmllbGxvL3RheWxvclBhc3FMTEMvcGFzZW9uL3Bhc2Vvbi9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcbi8vIGltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCdcbi8vICBjb25zdCBkYiA9IHJlcXVpcmUoJy4vYXBpL2RiL1Bvc3RncmVzJykuZGIoKTtcblxuXG5cbi8vIExvZ2luLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSwgcXVlcnkgfSkgPT4ge1xuLy8gICBjb25zdCBwcm90b2NvbCA9IHJlcVxuLy8gICAgID8gYCR7cmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLXByb3RvJ119OmBcbi8vICAgICA6IGxvY2F0aW9uLnByb3RvY29sXG4vLyAgIGNvbnN0IGhvc3QgPSByZXEgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIDogbG9jYXRpb24uaG9zdFxuLy8gICBjb25zdCBwYWdlUmVxdWVzdCA9IGAke3Byb3RvY29sfS8vJHtob3N0fS9hcGkvbG9naW52MmBcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKVxuLy8gICBjb25zdCBqc29uID0gYXdhaXQgcmVzXG4vLyAgIHJldHVybiBqc29uXG5cbiAgXG4vLyB9XG5cbmZ1bmN0aW9uIExvZ2luICgpIHtcblxuXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogJycsIGVycm9yOiAnJyB9KVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0VXNlckRhdGEoT2JqZWN0LmFzc2lnbih7fSwgdXNlckRhdGEsIHsgZXJyb3I6ICcnIH0pKVxuXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VyRGF0YS51c2VybmFtZVxuICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2VtYWlsU2VydmljZS9sb2dpbidcblxuICAgIGZldGNoKHVybCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1zZ1N1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWU9ZT1lPICcpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubXNnU3VjY2VzcyA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTsgICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAvLyB0cnkge1xuICAgIC8vICAgLy8gbGV0IHVzZXIgPSBhd2FpdCBkYigndXNlcnMnKS5zZWxlY3QoJ2VtYWlsJykud2hlcmUoe2VtYWlsOiAndGF5bG9yQHBhc3EubmV0J30pO1xuXG4gICAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBcbiAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lIH0pXG4gICAgLy8gICB9KVxuICAgIC8vICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpXG4gICAgLy8gICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcblxuICAgIC8vICAgICAvLyBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAvLyAgICAgLy8gYXdhaXQgbG9naW4oeyB0b2tlbiB9KVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ0xvZ2luIGZhaWxlZC4nKVxuICAgIC8vICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3VuZmV0Y2gjY2F2ZWF0c1xuICAgIC8vICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAvLyAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuICAgIC8vICAgICB0aHJvdyBlcnJvclxuICAgIC8vICAgfVxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKFxuICAgIC8vICAgICAnWW91IGhhdmUgYW4gZXJyb3IgaW4geW91ciBjb2RlIG9yIHRoZXJlIGFyZSBOZXR3b3JrIGlzc3Vlcy4nLFxuICAgIC8vICAgICBlcnJvclxuICAgIC8vICAgKVxuXG4gICAgLy8gICBjb25zdCB7IHJlc3BvbnNlIH0gPSBlcnJvclxuICAgIC8vICAgc2V0VXNlckRhdGEoXG4gICAgLy8gICAgIE9iamVjdC5hc3NpZ24oe30sIHVzZXJEYXRhLCB7XG4gICAgLy8gICAgICAgZXJyb3I6IHJlc3BvbnNlID8gcmVzcG9uc2Uuc3RhdHVzVGV4dCA6IGVycm9yLm1lc3NhZ2VcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIClcbiAgICAvLyB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4nPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlcm5hbWUnPkdpdEh1YiB1c2VybmFtZTwvbGFiZWw+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBpZD0ndXNlcm5hbWUnXG4gICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXt1c2VyRGF0YS51c2VybmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxuICAgICAgICAgICAgICBzZXRVc2VyRGF0YShcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB1c2VyRGF0YSwgeyB1c2VybmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkxvZ2luPC9idXR0b24+XG5cbiAgICAgICAgICB7dXNlckRhdGEuZXJyb3IgJiYgPHAgY2xhc3NOYW1lPSdlcnJvcic+RXJyb3I6IHt1c2VyRGF0YS5lcnJvcn08L3A+fVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDM0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIG1hcmdpbjogMC4zcmVtIDAgMXJlbTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDAgMDtcbiAgICAgICAgICBjb2xvcjogYnJvd247XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuXG5cblxuLy8gZnVuY3Rpb24gUHJvZmlsZVBhZ2UoeyBwcm9maWxlIH0pIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGUuYXZhdGFyfSAvPlxuLy8gICAgICAgICA8aDE+e3Byb2ZpbGUubmFtZX08L2gxPlxuLy8gICAgICAgICA8cD57cHJvZmlsZS5hZGRyZXNzfTwvcD5cbi8vICAgICAgICAgPHA+e3Byb2ZpbGUuZW1haWx9PC9wPlxuLy8gICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuLy8gICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIHByb2ZpbGVzPC9hPlxuLy8gICAgICAgICA8L0xpbms+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8Lz5cbi8vICAgKVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZSJdfQ== */\n/*@ sourceURL=/Users/taylorpasquariello/taylorPasqLLC/paseon/paseon/pages/login.js */"));
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
//# sourceMappingURL=login.js.05f031b8bcaa83167f8e.hot-update.js.map