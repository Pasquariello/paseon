webpackHotUpdate("static/development/pages/form_builder.js",{

/***/ "./pages/form_builder.js":
/*!*******************************!*\
  !*** ./pages/form_builder.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form_Builder; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_LeftBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LeftBar */ "./components/LeftBar.js");
/* harmony import */ var _components_SelectBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SelectBuilder */ "./components/SelectBuilder.js");
/* harmony import */ var _components_InputBuilder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/InputBuilder */ "./components/InputBuilder.js");
/* harmony import */ var _components_FormSandBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/FormSandBox */ "./components/FormSandBox.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "/Users/taylorpasquariello/learning_resources/hello-next/pages/form_builder.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;





 /////////////////////////////
/////////////////////////////
/////////////////////////////



 // ...

Object(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["resetServerContext"])();
Object(react_dom_server__WEBPACK_IMPORTED_MODULE_13__["renderToString"])(Form_Builder); /////////////////////////////
/////////////////////////////
/////////////////////////////

var reorder = function reorder(list, startIndex, endIndex) {
  var result = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_4___default()(list);

  var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);
  console.log('result', result);
  return result;
};

function Form_Builder() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(''),
      buttonValue = _useState[0],
      setButtonValue = _useState[1];

  var blankInputTest = {
    type: 'text',
    label: '',
    value: '',
    required: false,
    placholder: ''
  };

  function mouseDown(e) {
    // grab the element 
    // setstate for selectedItem to blank version
    setButtonValue('hello');
    console.log('buttonValue', buttonValue);
  }

  function onMouseUp(e) {} // if mousedown is true and if entered is true
  // add component to list state with a callback
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: getItems(10)
  //   };
  //   this.onDragEnd = this.onDragEnd.bind(this);
  // }


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      items = _useState2[0],
      setItem = _useState2[1];

  var reorder = function reorder(list, startIndex, endIndex) {
    var result = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_4___default()(list);

    var _result$splice3 = result.splice(startIndex, 1),
        _result$splice4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_result$splice3, 1),
        removed = _result$splice4[0];

    result.splice(endIndex, 0, removed);
    return result;
  };

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    var items = reorder(selectList, //this.state.items,
    result.source.index, result.destination.index);
    setSelectList(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(items)); // this.setState({
    //   items
    // });
  } /////////////////////////////
  /////////////////////////////
  /////////////////////////////


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      elem = _useState3[0],
      setElem = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      selectList = _useState4[0],
      setSelectList = _useState4[1];

  function handleElemSelect(e) {
    setElem(e.target.value);
    console.log('TAYLOR', e);
  }

  function mycallback(val) {
    console.log('CLICKED ME', val); // setElem([...elem, {...val}])
    // setSelectList({...selectList, ...val });

    setSelectList([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectList), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, val)])); // do something with value in parent component, like save to state
  } // var el = document.getElementById('items');
  // var sortable = Sortable.create(el);


  return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-256686956" + " " + "flex-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-256686956" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_components_LeftBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "-Basic Options-"), __jsx("button", {
    onMouseDown: function onMouseDown(e) {
      return mouseDown(e);
    },
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Name Field"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Long Answer"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Basic Input"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Number"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Dropdown List"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Checkbox"), __jsx("hr", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "elem",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "New Element"), __jsx("select", {
    id: "elem",
    name: "elem",
    onChange: handleElemSelect,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("option", {
    value: "",
    selected: true,
    disabled: true,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Choose here"), __jsx("option", {
    value: "text",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Text Input"), __jsx("option", {
    value: "select",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Select Dropdown"), __jsx("option", {
    value: "checkbox",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Checkbox")), __jsx("h4", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "-Advanced Options-"), elem === 'select' ? __jsx(_components_SelectBuilder__WEBPACK_IMPORTED_MODULE_8__["default"], {
    parentCallback: mycallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }) : null, elem === 'text' ? __jsx(_components_InputBuilder__WEBPACK_IMPORTED_MODULE_9__["default"], {
    parentCallback: mycallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }) : null)), __jsx("div", {
    className: "jsx-256686956" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx(_components_FormSandBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setSelectList([]);
    },
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "x"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "?"), " ", __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["Droppable"], {
    droppableId: "droppable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, function (provided, snapshot) {
    return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.droppableProps, {
      ref: provided.innerRef // style={getListStyle(snapshot.isDraggingOver)}
      ,
      className: "jsx-256686956" + " " + (provided.droppableProps.className != null && provided.droppableProps.className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }), selectList.map(function (item, index) {
      return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["Draggable"], {
        key: index,
        draggableId: "draggable".concat(index),
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, function (provided, snapshot) {
        return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          className: "jsx-256686956" + " " + (provided.dragHandleProps.className != null && provided.dragHandleProps.className || provided.draggableProps.className != null && provided.draggableProps.className || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-256686956" + " " + "elemContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, __jsx("label", {
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, item.label), item.values ? __jsx("select", {
          id: "elem",
          name: "elem",
          onChange: handleElemSelect,
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, item.values.map(function (value) {
          return __jsx("option", {
            className: "jsx-256686956",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          }, value);
        })) : __jsx("input", {
          type: item.type,
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        })));
      });
    }), provided.placeholder);
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "256686956",
    __self: this
  }, "input[type=text].jsx-256686956,select.jsx-256686956{padding:12px 20px;margin:8px 0;display:block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-256686956{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-256686956:hover{background-color:#45a049;}div.container.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;}.elemContainer.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;margin:10px;}.flex-grid.jsx-256686956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.col.jsx-256686956{width:100%;}@media (max-width:700px){.flex-grid.jsx-256686956{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvZm9ybV9idWlsZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJOSyxBQUcyQixBQVNQLEFBV2MsQUFJUCxBQU1GLEFBT0wsQUFLRixBQU1LLFdBdENXLEFBa0M3QixHQUtFLElBaERlLEFBd0JZLEFBTUYsT0FWM0IsTUFuQmtCLEtBU0YsT0FlQyxBQU1GLEVBN0JXLEdBU0osUUFldEIsQUFNYyxVQXBCRyxDQVRLLENBOEJ0QixNQUlnQyxLQXhCaEIsTUFUVSxNQVVKLGdCQVR0QixFQVVtQixlQUNuQixpRUF1QkEiLCJmaWxlIjoiL1VzZXJzL3RheWxvcnBhc3F1YXJpZWxsby9sZWFybmluZ19yZXNvdXJjZXMvaGVsbG8tbmV4dC9wYWdlcy9mb3JtX2J1aWxkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MZWZ0QmFyJztcbmltcG9ydCBTZWxlY3RCdWlsZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0QnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRCdWlsZGVyJztcblxuaW1wb3J0IEZvcm1TYW5kQm94IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVNhbmRCb3gnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IHsgcmVzZXRTZXJ2ZXJDb250ZXh0IH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG4vLyAuLi5cblxucmVzZXRTZXJ2ZXJDb250ZXh0KCk7XG5yZW5kZXJUb1N0cmluZyhGb3JtX0J1aWxkZXIpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCByZW9yZGVyID0gKGxpc3QsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20obGlzdCk7XG4gIGNvbnN0IFtyZW1vdmVkXSA9IHJlc3VsdC5zcGxpY2Uoc3RhcnRJbmRleCwgMSk7XG4gIHJlc3VsdC5zcGxpY2UoZW5kSW5kZXgsIDAsIHJlbW92ZWQpO1xuICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybV9CdWlsZGVyKCkge1xuXG5cbmNvbnN0IFtidXR0b25WYWx1ZSwgc2V0QnV0dG9uVmFsdWVdID0gdXNlU3RhdGUoJycpXG5cbmNvbnN0IGJsYW5rSW5wdXRUZXN0ID0ge1xuICB0eXBlOiAndGV4dCcsXG4gIGxhYmVsOiAnJyxcbiAgdmFsdWU6ICcnLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIHBsYWNob2xkZXI6ICcnLFxufSBcbmZ1bmN0aW9uIG1vdXNlRG93bihlKXtcbiAgLy8gZ3JhYiB0aGUgZWxlbWVudCBcbiAgLy8gc2V0c3RhdGUgZm9yIHNlbGVjdGVkSXRlbSB0byBibGFuayB2ZXJzaW9uXG4gIHNldEJ1dHRvblZhbHVlKCdoZWxsbycpO1xuICBjb25zb2xlLmxvZygnYnV0dG9uVmFsdWUnLCBidXR0b25WYWx1ZSlcbn1cblxuZnVuY3Rpb24gb25Nb3VzZVVwKGUpIHtcbiAgLy8gaWYgbW91c2Vkb3duIGlzIHRydWUgYW5kIGlmIGVudGVyZWQgaXMgdHJ1ZVxuICAvLyBhZGQgY29tcG9uZW50IHRvIGxpc3Qgc3RhdGUgd2l0aCBhIGNhbGxiYWNrXG5cblxufVxuICBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgc3VwZXIocHJvcHMpO1xuLy8gICB0aGlzLnN0YXRlID0ge1xuLy8gICAgIGl0ZW1zOiBnZXRJdGVtcygxMClcbi8vICAgfTtcbi8vICAgdGhpcy5vbkRyYWdFbmQgPSB0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpO1xuLy8gfVxuXG5jb25zdCBbaXRlbXMsIHNldEl0ZW1dID0gdXNlU3RhdGUoW10pXG5cbmNvbnN0IHJlb3JkZXIgPSAobGlzdCwgc3RhcnRJbmRleCwgZW5kSW5kZXgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gQXJyYXkuZnJvbShsaXN0KTtcbiAgY29uc3QgW3JlbW92ZWRdID0gcmVzdWx0LnNwbGljZShzdGFydEluZGV4LCAxKTtcbiAgcmVzdWx0LnNwbGljZShlbmRJbmRleCwgMCwgcmVtb3ZlZCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5mdW5jdGlvbiBvbkRyYWdFbmQocmVzdWx0KSB7XG4gIC8vIGRyb3BwZWQgb3V0c2lkZSB0aGUgbGlzdFxuICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zID0gcmVvcmRlcihcbiAgICBzZWxlY3RMaXN0LFxuICAgIC8vdGhpcy5zdGF0ZS5pdGVtcyxcbiAgICByZXN1bHQuc291cmNlLmluZGV4LFxuICAgIHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleFxuICApO1xuICBzZXRTZWxlY3RMaXN0KFsuLi5pdGVtc10pXG4gIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgIGl0ZW1zXG4gIC8vIH0pO1xufVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgW2VsZW0sIHNldEVsZW1dID0gdXNlU3RhdGUoW10pOyBcblxuICAgIGNvbnN0IFtzZWxlY3RMaXN0LCBzZXRTZWxlY3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVsZW1TZWxlY3QoZSl7XG4gICAgICBzZXRFbGVtKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgY29uc29sZS5sb2coJ1RBWUxPUicsZSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbXljYWxsYmFjayh2YWwpe1xuICAgICAgY29uc29sZS5sb2coJ0NMSUNLRUQgTUUnLCB2YWwpXG4gICAgICAvLyBzZXRFbGVtKFsuLi5lbGVtLCB7Li4udmFsfV0pXG4gICAgICAvLyBzZXRTZWxlY3RMaXN0KHsuLi5zZWxlY3RMaXN0LCAuLi52YWwgfSk7XG4gICAgICBzZXRTZWxlY3RMaXN0KFsuLi5zZWxlY3RMaXN0LCB7IC4uLnZhbCB9XSk7XG4gICAgICBcbiAgICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHZhbHVlIGluIHBhcmVudCBjb21wb25lbnQsIGxpa2Ugc2F2ZSB0byBzdGF0ZVxuICAgIH1cblxuXG5cbiAgICAvLyB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKTtcbiAgICAvLyB2YXIgc29ydGFibGUgPSBTb3J0YWJsZS5jcmVhdGUoZWwpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8TGF5b3V0PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JpZFwiPlxuPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgIDxMZWZ0QmFyPlxuICAgICAgICB7LypUT0RPIC0gc3RhcnQgaG9va2luZyB0aGVzZSB1cCEgICovfVxuICAgICAgPGg0Pi1CYXNpYyBPcHRpb25zLTwvaDQ+XG4gICAgICAgIDxidXR0b24gb25Nb3VzZURvd249eyhlKT0+bW91c2VEb3duKGUpfT5OYW1lIEZpZWxkPC9idXR0b24+IFxuICAgICAgICA8YnV0dG9uPkxvbmcgQW5zd2VyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24+QmFzaWMgSW5wdXQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbj5OdW1iZXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbj5Ecm9wZG93biBMaXN0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24+Q2hlY2tib3g8L2J1dHRvbj5cbjxocj48L2hyPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVsZW1cIj5OZXcgRWxlbWVudDwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJlbGVtXCIgbmFtZT1cImVsZW1cIiBvbkNoYW5nZT17aGFuZGxlRWxlbVNlbGVjdH0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkIGRpc2FibGVkID5DaG9vc2UgaGVyZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0ZXh0XCI+VGV4dCBJbnB1dDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5TZWxlY3QgRHJvcGRvd248L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5DaGVja2JveDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgPGg0Pi1BZHZhbmNlZCBPcHRpb25zLTwvaDQ+XG4gICBcblxuICAgICAgICB7LyogVE9ETyEgcmVuYW1lIHBhcmVudENhbGxiYWNrICovfVxuICAgICAgICB7KGVsZW0gPT09ICdzZWxlY3QnID8gPFNlbGVjdEJ1aWxkZXIgcGFyZW50Q2FsbGJhY2s9e215Y2FsbGJhY2t9PjwvU2VsZWN0QnVpbGRlcj4gOiBudWxsKX1cbiAgICAgICAgeyhlbGVtID09PSAndGV4dCcgPyA8SW5wdXRCdWlsZGVyIHBhcmVudENhbGxiYWNrPXtteWNhbGxiYWNrfT48L0lucHV0QnVpbGRlcj4gOiBudWxsKX1cblxuICAgICAgICBcbiAgICAgIDwvTGVmdEJhcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbjxGb3JtU2FuZEJveD5cbjxidXR0b24gb25DbGljaz17KCk9PnNldFNlbGVjdExpc3QoW10pfT54PC9idXR0b24+XG48YnV0dG9uPj88L2J1dHRvbj4gey8qIFRPRE8gLSBhZGQgaW4gdG9vbCB0aXAgLi4uIG1heWJlIGxpbmssIG9uIGhvdmVyKi99XG57LyogUkVPUkRFUiBTVEFSVCAqL31cbiB7LyogeyhlbGVtID09PSAnc2VsZWN0JyA/ICovfVxuPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e29uRHJhZ0VuZH0+XG4gICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIj5cbiAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XG4gICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICAgIC8vIHN0eWxlPXtnZXRMaXN0U3R5bGUoc25hcHNob3QuaXNEcmFnZ2luZ092ZXIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2VsZWN0TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e2luZGV4fSBkcmFnZ2FibGVJZD17YGRyYWdnYWJsZSR7aW5kZXh9YH0gaW5kZXg9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXtnZXRJdGVtU3R5bGUoXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICBzbmFwc2hvdC5pc0RyYWdnaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgcHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHMuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAvLyApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIHtpdGVtfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7LyogICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57aXRlbS5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgIHsoaXRlbS52YWx1ZXMgPyBcbiAgICAgICAgICA8c2VsZWN0IGlkPVwiZWxlbVwiIG5hbWU9XCJlbGVtXCIgb25DaGFuZ2U9e2hhbmRsZUVsZW1TZWxlY3R9PlxuICAgICAgICAgICAge2l0ZW0udmFsdWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+e3ZhbHVlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0pfSBcbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA6IDxpbnB1dCB0eXBlPXtpdGVtLnR5cGV9ID48L2lucHV0PiApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAgKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRHJvcHBhYmxlPlxuICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICAgICB7LyogOiBudWxsKX0gKi99XG5cbiAgICAgIDwvRm9ybVNhbmRCb3g+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG57LyogUkVPUkRFUiBFTkQgKi99XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAge2BcbiAgICBpbnB1dFt0eXBlPXRleHRdLCBzZWxlY3Qge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XG4gICAgfVxuXG4gICAgZGl2LmNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAuZWxlbUNvbnRhaW5lciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmZsZXgtZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgfVxuICAgIC5jb2wge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgIC5mbGV4LWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gICAgYH1cbjwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/pages/form_builder.js */")));
}

/***/ })

})
//# sourceMappingURL=form_builder.js.2cb2fde565c7dae63c62.hot-update.js.map