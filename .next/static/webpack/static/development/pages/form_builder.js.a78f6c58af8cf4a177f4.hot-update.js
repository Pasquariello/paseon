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
  var blankInputTest = {
    type: 'text',
    label: '',
    value: '',
    required: false,
    placholder: ''
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(),
      buttonValue = _useState[0],
      setButtonValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      entered = _useState2[0],
      setEntered = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      up = _useState3[0],
      setUp = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      isMouseInside = _useState4[0],
      setIsMouseInside = _useState4[1];

  function mouseDown(e) {
    setButtonValue(blankInputTest);
    e.currentTarget.style.border = "dashed";
    console.log(e.dataTransfer); // Set the drag's format and data. Use the event target's id for the data 

    e.dataTransfer.setData("text/plain", e.target.id); // grab the element 
    // setstate for selectedItem to blank version

    console.log('buttonValue', buttonValue);
  }

  function mouseEnter(buttonValue) {
    setIsMouseInside(true);
    console.log('hello', up); // setSelectList([...selectList, { ...blankInputTest }]);
    // if (isMouseInside ){
    //   console.log('hello')
    // }
  }

  function mouseLeave() {
    setIsMouseInside(false);
  }

  function mouseUp() {
    if (isMouseInside && buttonValue) {
      setSelectList([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectList), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, blankInputTest)]));
      setButtonValue();
    }
  }

  function entering(e) {
    console.log('in you', e);

    if (buttonValue && up == true) {
      console.log('UP');
    }
  } /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: getItems(10)
  //   };
  //   this.onDragEnd = this.onDragEnd.bind(this);
  // }


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      items = _useState5[0],
      setItem = _useState5[1];

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


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      elem = _useState6[0],
      setElem = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      selectList = _useState7[0],
      setSelectList = _useState7[1];

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
      lineNumber: 159
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-256686956" + " " + "flex-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-256686956" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(_components_LeftBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "-Basic Options-"), __jsx("button", {
    id: "myTextInputButton",
    onMouseDown: function onMouseDown(e) {
      return mouseDown(e);
    },
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Name Field"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Long Answer"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Basic Input"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Number"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Dropdown List"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Checkbox"), __jsx("hr", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "elem",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "New Element"), __jsx("select", {
    id: "elem",
    name: "elem",
    onChange: handleElemSelect,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("option", {
    value: "",
    selected: true,
    disabled: true,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Choose here"), __jsx("option", {
    value: "text",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Text Input"), __jsx("option", {
    value: "select",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Select Dropdown"), __jsx("option", {
    value: "checkbox",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Checkbox")), __jsx("h4", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "-Advanced Options-"), elem === 'select' ? __jsx(_components_SelectBuilder__WEBPACK_IMPORTED_MODULE_8__["default"], {
    parentCallback: mycallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }) : null, elem === 'text' ? __jsx(_components_InputBuilder__WEBPACK_IMPORTED_MODULE_9__["default"], {
    parentCallback: mycallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }) : null)), __jsx("div", {
    onMouseEnter: mouseEnter,
    onMouseLeave: mouseLeave,
    onMouseUp: mouseUp,
    className: "jsx-256686956" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx(_components_FormSandBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setSelectList([]);
    },
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "x"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "?"), " ", __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["Droppable"], {
    droppableId: "droppable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, function (provided, snapshot) {
    return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.droppableProps, {
      ref: provided.innerRef // style={getListStyle(snapshot.isDraggingOver)}
      ,
      className: "jsx-256686956" + " " + (provided.droppableProps.className != null && provided.droppableProps.className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }), selectList.map(function (item, index) {
      return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["Draggable"], {
        key: index,
        draggableId: "draggable".concat(index),
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, function (provided, snapshot) {
        return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          className: "jsx-256686956" + " " + (provided.dragHandleProps.className != null && provided.dragHandleProps.className || provided.draggableProps.className != null && provided.draggableProps.className || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-256686956" + " " + "elemContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, __jsx("label", {
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, item.label), item.values ? __jsx("select", {
          id: "elem",
          name: "elem",
          onChange: handleElemSelect,
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, item.values.map(function (value) {
          return __jsx("option", {
            className: "jsx-256686956",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            },
            __self: this
          }, value);
        })) : __jsx("input", {
          type: item.type,
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        })));
      });
    }), provided.placeholder);
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "256686956",
    __self: this
  }, "input[type=text].jsx-256686956,select.jsx-256686956{padding:12px 20px;margin:8px 0;display:block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-256686956{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-256686956:hover{background-color:#45a049;}div.container.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;}.elemContainer.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;margin:10px;}.flex-grid.jsx-256686956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.col.jsx-256686956{width:100%;}@media (max-width:700px){.flex-grid.jsx-256686956{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvZm9ybV9idWlsZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBQSyxBQUcyQixBQVNQLEFBV2MsQUFJUCxBQU1GLEFBT0wsQUFLRixBQU1LLFdBdENXLEFBa0M3QixHQUtFLElBaERlLEFBd0JZLEFBTUYsT0FWM0IsTUFuQmtCLEtBU0YsT0FlQyxBQU1GLEVBN0JXLEdBU0osUUFldEIsQUFNYyxVQXBCRyxDQVRLLENBOEJ0QixNQUlnQyxLQXhCaEIsTUFUVSxNQVVKLGdCQVR0QixFQVVtQixlQUNuQixpRUF1QkEiLCJmaWxlIjoiL1VzZXJzL3RheWxvcnBhc3F1YXJpZWxsby9sZWFybmluZ19yZXNvdXJjZXMvaGVsbG8tbmV4dC9wYWdlcy9mb3JtX2J1aWxkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MZWZ0QmFyJztcbmltcG9ydCBTZWxlY3RCdWlsZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0QnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRCdWlsZGVyJztcblxuaW1wb3J0IEZvcm1TYW5kQm94IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVNhbmRCb3gnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IHsgcmVzZXRTZXJ2ZXJDb250ZXh0IH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG4vLyAuLi5cblxucmVzZXRTZXJ2ZXJDb250ZXh0KCk7XG5yZW5kZXJUb1N0cmluZyhGb3JtX0J1aWxkZXIpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCByZW9yZGVyID0gKGxpc3QsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20obGlzdCk7XG4gIGNvbnN0IFtyZW1vdmVkXSA9IHJlc3VsdC5zcGxpY2Uoc3RhcnRJbmRleCwgMSk7XG4gIHJlc3VsdC5zcGxpY2UoZW5kSW5kZXgsIDAsIHJlbW92ZWQpO1xuICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybV9CdWlsZGVyKCkge1xuXG5cblxuY29uc3QgYmxhbmtJbnB1dFRlc3QgPSB7XG4gIHR5cGU6ICd0ZXh0JyxcbiAgbGFiZWw6ICcnLFxuICB2YWx1ZTogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgcGxhY2hvbGRlcjogJycsXG59IFxuXG5jb25zdCBbYnV0dG9uVmFsdWUsIHNldEJ1dHRvblZhbHVlXSA9IHVzZVN0YXRlKClcbmNvbnN0IFtlbnRlcmVkLCBzZXRFbnRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IFt1cCwgc2V0VXBdID0gdXNlU3RhdGUoZmFsc2UpXG5jb25zdCBbaXNNb3VzZUluc2lkZSwgc2V0SXNNb3VzZUluc2lkZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuZnVuY3Rpb24gbW91c2VEb3duKGUpe1xuICBzZXRCdXR0b25WYWx1ZShibGFua0lucHV0VGVzdCk7XG4gIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXIgPSBcImRhc2hlZFwiO1xuICBjb25zb2xlLmxvZyhlLmRhdGFUcmFuc2ZlcilcbiAgLy8gU2V0IHRoZSBkcmFnJ3MgZm9ybWF0IGFuZCBkYXRhLiBVc2UgdGhlIGV2ZW50IHRhcmdldCdzIGlkIGZvciB0aGUgZGF0YSBcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuaWQpOyAgLy8gZ3JhYiB0aGUgZWxlbWVudCBcbiAgLy8gc2V0c3RhdGUgZm9yIHNlbGVjdGVkSXRlbSB0byBibGFuayB2ZXJzaW9uXG4gIGNvbnNvbGUubG9nKCdidXR0b25WYWx1ZScsIGJ1dHRvblZhbHVlKVxufVxuXG5cblxuZnVuY3Rpb24gbW91c2VFbnRlcihidXR0b25WYWx1ZSkge1xuICBzZXRJc01vdXNlSW5zaWRlKHRydWUpXG4gIGNvbnNvbGUubG9nKCdoZWxsbycsIHVwKVxuICAvLyBzZXRTZWxlY3RMaXN0KFsuLi5zZWxlY3RMaXN0LCB7IC4uLmJsYW5rSW5wdXRUZXN0IH1dKTtcbiAgLy8gaWYgKGlzTW91c2VJbnNpZGUgKXtcbiAgLy8gICBjb25zb2xlLmxvZygnaGVsbG8nKVxuICAvLyB9XG59XG5cbmZ1bmN0aW9uIG1vdXNlTGVhdmUoKSB7XG4gIHNldElzTW91c2VJbnNpZGUoZmFsc2UpXG59XG5cbmZ1bmN0aW9uIG1vdXNlVXAoKXtcbiAgXG4gIGlmKGlzTW91c2VJbnNpZGUgJiYgYnV0dG9uVmFsdWUpe1xuICAgICAgc2V0U2VsZWN0TGlzdChbLi4uc2VsZWN0TGlzdCwgeyAuLi5ibGFua0lucHV0VGVzdCB9XSk7XG4gICAgICBzZXRCdXR0b25WYWx1ZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gZW50ZXJpbmcoZSkge1xuICBjb25zb2xlLmxvZygnaW4geW91JywgZSlcbiAgaWYgKGJ1dHRvblZhbHVlICYmICh1cCA9PSB0cnVlKSApe1xuICAgIGNvbnNvbGUubG9nKCdVUCcpXG4gIH0gXG59XG4gIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICBzdXBlcihwcm9wcyk7XG4vLyAgIHRoaXMuc3RhdGUgPSB7XG4vLyAgICAgaXRlbXM6IGdldEl0ZW1zKDEwKVxuLy8gICB9O1xuLy8gICB0aGlzLm9uRHJhZ0VuZCA9IHRoaXMub25EcmFnRW5kLmJpbmQodGhpcyk7XG4vLyB9XG5cbmNvbnN0IFtpdGVtcywgc2V0SXRlbV0gPSB1c2VTdGF0ZShbXSlcblxuY29uc3QgcmVvcmRlciA9IChsaXN0LCBzdGFydEluZGV4LCBlbmRJbmRleCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKGxpc3QpO1xuICBjb25zdCBbcmVtb3ZlZF0gPSByZXN1bHQuc3BsaWNlKHN0YXJ0SW5kZXgsIDEpO1xuICByZXN1bHQuc3BsaWNlKGVuZEluZGV4LCAwLCByZW1vdmVkKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbmZ1bmN0aW9uIG9uRHJhZ0VuZChyZXN1bHQpIHtcbiAgLy8gZHJvcHBlZCBvdXRzaWRlIHRoZSBsaXN0XG4gIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaXRlbXMgPSByZW9yZGVyKFxuICAgIHNlbGVjdExpc3QsXG4gICAgLy90aGlzLnN0YXRlLml0ZW1zLFxuICAgIHJlc3VsdC5zb3VyY2UuaW5kZXgsXG4gICAgcmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4XG4gICk7XG4gIHNldFNlbGVjdExpc3QoWy4uLml0ZW1zXSlcbiAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgaXRlbXNcbiAgLy8gfSk7XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCBbZWxlbSwgc2V0RWxlbV0gPSB1c2VTdGF0ZShbXSk7IFxuXG4gICAgY29uc3QgW3NlbGVjdExpc3QsIHNldFNlbGVjdExpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIFxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRWxlbVNlbGVjdChlKXtcbiAgICAgIHNldEVsZW0oZS50YXJnZXQudmFsdWUpXG4gICAgICBjb25zb2xlLmxvZygnVEFZTE9SJyxlKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBteWNhbGxiYWNrKHZhbCl7XG4gICAgICBjb25zb2xlLmxvZygnQ0xJQ0tFRCBNRScsIHZhbClcbiAgICAgIC8vIHNldEVsZW0oWy4uLmVsZW0sIHsuLi52YWx9XSlcbiAgICAgIC8vIHNldFNlbGVjdExpc3Qoey4uLnNlbGVjdExpc3QsIC4uLnZhbCB9KTtcbiAgICAgIHNldFNlbGVjdExpc3QoWy4uLnNlbGVjdExpc3QsIHsgLi4udmFsIH1dKTtcbiAgICAgIFxuICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdmFsdWUgaW4gcGFyZW50IGNvbXBvbmVudCwgbGlrZSBzYXZlIHRvIHN0YXRlXG4gICAgfVxuXG5cblxuICAgIC8vIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcycpO1xuICAgIC8vIHZhciBzb3J0YWJsZSA9IFNvcnRhYmxlLmNyZWF0ZShlbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxMYXlvdXQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncmlkXCI+XG48ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgPExlZnRCYXI+XG4gICAgICAgIHsvKlRPRE8gLSBzdGFydCBob29raW5nIHRoZXNlIHVwISAgKi99XG4gICAgICA8aDQ+LUJhc2ljIE9wdGlvbnMtPC9oND5cbiAgICAgICAgPGJ1dHRvbiBpZD1cIm15VGV4dElucHV0QnV0dG9uXCIgb25Nb3VzZURvd249eyhlKT0+bW91c2VEb3duKGUpfT5OYW1lIEZpZWxkPC9idXR0b24+IFxuICAgICAgICA8YnV0dG9uPkxvbmcgQW5zd2VyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24+QmFzaWMgSW5wdXQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbj5OdW1iZXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbj5Ecm9wZG93biBMaXN0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24+Q2hlY2tib3g8L2J1dHRvbj5cbjxocj48L2hyPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVsZW1cIj5OZXcgRWxlbWVudDwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJlbGVtXCIgbmFtZT1cImVsZW1cIiBvbkNoYW5nZT17aGFuZGxlRWxlbVNlbGVjdH0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkIGRpc2FibGVkID5DaG9vc2UgaGVyZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0ZXh0XCI+VGV4dCBJbnB1dDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5TZWxlY3QgRHJvcGRvd248L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5DaGVja2JveDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgPGg0Pi1BZHZhbmNlZCBPcHRpb25zLTwvaDQ+XG4gICBcblxuICAgICAgICB7LyogVE9ETyEgcmVuYW1lIHBhcmVudENhbGxiYWNrICovfVxuICAgICAgICB7KGVsZW0gPT09ICdzZWxlY3QnID8gPFNlbGVjdEJ1aWxkZXIgcGFyZW50Q2FsbGJhY2s9e215Y2FsbGJhY2t9PjwvU2VsZWN0QnVpbGRlcj4gOiBudWxsKX1cbiAgICAgICAgeyhlbGVtID09PSAndGV4dCcgPyA8SW5wdXRCdWlsZGVyIHBhcmVudENhbGxiYWNrPXtteWNhbGxiYWNrfT48L0lucHV0QnVpbGRlcj4gOiBudWxsKX1cblxuICAgICAgICBcbiAgICAgIDwvTGVmdEJhcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiAgb25Nb3VzZUVudGVyPXttb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e21vdXNlTGVhdmV9IG9uTW91c2VVcD17bW91c2VVcH0+XG48Rm9ybVNhbmRCb3g+XG48YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRTZWxlY3RMaXN0KFtdKX0+eDwvYnV0dG9uPlxuPGJ1dHRvbj4/PC9idXR0b24+IHsvKiBUT0RPIC0gYWRkIGluIHRvb2wgdGlwIC4uLiBtYXliZSBsaW5rLCBvbiBob3ZlciovfVxuey8qIFJFT1JERVIgU1RBUlQgKi99XG4gey8qIHsoZWxlbSA9PT0gJ3NlbGVjdCcgPyAqL31cbjxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtvbkRyYWdFbmR9PlxuICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCI+XG4gICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxuICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAvLyBzdHlsZT17Z2V0TGlzdFN0eWxlKHNuYXBzaG90LmlzRHJhZ2dpbmdPdmVyKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlbGVjdExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtpbmRleH0gZHJhZ2dhYmxlSWQ9e2BkcmFnZ2FibGUke2luZGV4fWB9IGluZGV4PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17Z2V0SXRlbVN0eWxlKFxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgc25hcHNob3QuaXNEcmFnZ2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIHByb3ZpZGVkLmRyYWdnYWJsZVByb3BzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiB7aXRlbX0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgey8qICAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2l0ZW0ubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICB7KGl0ZW0udmFsdWVzID8gXG4gICAgICAgICAgPHNlbGVjdCBpZD1cImVsZW1cIiBuYW1lPVwiZWxlbVwiIG9uQ2hhbmdlPXtoYW5kbGVFbGVtU2VsZWN0fT5cbiAgICAgICAgICAgIHtpdGVtLnZhbHVlcy5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPnt2YWx1ZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KX0gXG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgOiA8aW5wdXQgdHlwZT17aXRlbS50eXBlfSA+PC9pbnB1dD4gKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICAgICAgey8qIDogbnVsbCl9ICovfVxuXG4gICAgICA8L0Zvcm1TYW5kQm94PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuey8qIFJFT1JERVIgRU5EICovfVxuXG4gICAgICA8c3R5bGUganN4PlxuICAgIHtgXG4gICAgaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xuICAgIH1cblxuICAgIGRpdi5jb250YWluZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLmVsZW1Db250YWluZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5mbGV4LWdyaWQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIH1cbiAgICAuY29sIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAuZmxleC1ncmlkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICAgIGB9XG48L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/pages/form_builder.js */")));
}

/***/ })

})
//# sourceMappingURL=form_builder.js.a78f6c58af8cf4a177f4.hot-update.js.map