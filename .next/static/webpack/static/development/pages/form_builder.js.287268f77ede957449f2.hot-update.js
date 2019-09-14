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
    // grab the element 
    // setstate for selectedItem to blank version
    console.log('buttonValue', buttonValue);
  }

  function MouseUp(e) {// if mousedown is true and if entered is true
    // add component to list state with a callback
  }

  function mouseEnter() {
    setIsMouseInside(true);

    if (isMouseInside) {
      console.log('hello');
    }
  }

  function mouseLeave() {
    setIsMouseInside(false);
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
      lineNumber: 149
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-256686956" + " " + "flex-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("div", {
    onMouseEnter: mouseEnter,
    onMouseLeave: mouseLeave,
    className: "jsx-256686956" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_components_LeftBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "-Basic Options-"), __jsx("button", {
    onMouseDown: function onMouseDown(e) {
      return mouseDown(e);
    },
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Name Field"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Long Answer"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Basic Input"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Number"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Dropdown List"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Checkbox"), __jsx("hr", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "elem",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "New Element"), __jsx("select", {
    id: "elem",
    name: "elem",
    onChange: handleElemSelect,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("option", {
    value: "",
    selected: true,
    disabled: true,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Choose here"), __jsx("option", {
    value: "text",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Text Input"), __jsx("option", {
    value: "select",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Select Dropdown"), __jsx("option", {
    value: "checkbox",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Checkbox")), __jsx("h4", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "-Advanced Options-"), elem === 'select' ? __jsx(_components_SelectBuilder__WEBPACK_IMPORTED_MODULE_8__["default"], {
    parentCallback: mycallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }) : null, elem === 'text' ? __jsx(_components_InputBuilder__WEBPACK_IMPORTED_MODULE_9__["default"], {
    parentCallback: mycallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }) : null)), __jsx("div", {
    onMouseUp: function onMouseUp() {
      return setUp(true);
    },
    className: "jsx-256686956" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(_components_FormSandBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setSelectList([]);
    },
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "x"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "?"), " ", __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["Droppable"], {
    droppableId: "droppable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, function (provided, snapshot) {
    return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.droppableProps, {
      ref: provided.innerRef // style={getListStyle(snapshot.isDraggingOver)}
      ,
      className: "jsx-256686956" + " " + (provided.droppableProps.className != null && provided.droppableProps.className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }), selectList.map(function (item, index) {
      return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["Draggable"], {
        key: index,
        draggableId: "draggable".concat(index),
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, function (provided, snapshot) {
        return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          className: "jsx-256686956" + " " + (provided.dragHandleProps.className != null && provided.dragHandleProps.className || provided.draggableProps.className != null && provided.draggableProps.className || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-256686956" + " " + "elemContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        }, __jsx("label", {
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }, item.label), item.values ? __jsx("select", {
          id: "elem",
          name: "elem",
          onChange: handleElemSelect,
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, item.values.map(function (value) {
          return __jsx("option", {
            className: "jsx-256686956",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 215
            },
            __self: this
          }, value);
        })) : __jsx("input", {
          type: item.type,
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        })));
      });
    }), provided.placeholder);
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "256686956",
    __self: this
  }, "input[type=text].jsx-256686956,select.jsx-256686956{padding:12px 20px;margin:8px 0;display:block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-256686956{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-256686956:hover{background-color:#45a049;}div.container.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;}.elemContainer.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;margin:10px;}.flex-grid.jsx-256686956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.col.jsx-256686956{width:100%;}@media (max-width:700px){.flex-grid.jsx-256686956{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvZm9ybV9idWlsZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdQSyxBQUcyQixBQVNQLEFBV2MsQUFJUCxBQU1GLEFBT0wsQUFLRixBQU1LLFdBdENXLEFBa0M3QixHQUtFLElBaERlLEFBd0JZLEFBTUYsT0FWM0IsTUFuQmtCLEtBU0YsT0FlQyxBQU1GLEVBN0JXLEdBU0osUUFldEIsQUFNYyxVQXBCRyxDQVRLLENBOEJ0QixNQUlnQyxLQXhCaEIsTUFUVSxNQVVKLGdCQVR0QixFQVVtQixlQUNuQixpRUF1QkEiLCJmaWxlIjoiL1VzZXJzL3RheWxvcnBhc3F1YXJpZWxsby9sZWFybmluZ19yZXNvdXJjZXMvaGVsbG8tbmV4dC9wYWdlcy9mb3JtX2J1aWxkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MZWZ0QmFyJztcbmltcG9ydCBTZWxlY3RCdWlsZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0QnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRCdWlsZGVyJztcblxuaW1wb3J0IEZvcm1TYW5kQm94IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVNhbmRCb3gnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IHsgcmVzZXRTZXJ2ZXJDb250ZXh0IH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG4vLyAuLi5cblxucmVzZXRTZXJ2ZXJDb250ZXh0KCk7XG5yZW5kZXJUb1N0cmluZyhGb3JtX0J1aWxkZXIpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCByZW9yZGVyID0gKGxpc3QsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20obGlzdCk7XG4gIGNvbnN0IFtyZW1vdmVkXSA9IHJlc3VsdC5zcGxpY2Uoc3RhcnRJbmRleCwgMSk7XG4gIHJlc3VsdC5zcGxpY2UoZW5kSW5kZXgsIDAsIHJlbW92ZWQpO1xuICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybV9CdWlsZGVyKCkge1xuXG5cblxuY29uc3QgYmxhbmtJbnB1dFRlc3QgPSB7XG4gIHR5cGU6ICd0ZXh0JyxcbiAgbGFiZWw6ICcnLFxuICB2YWx1ZTogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgcGxhY2hvbGRlcjogJycsXG59IFxuXG5jb25zdCBbYnV0dG9uVmFsdWUsIHNldEJ1dHRvblZhbHVlXSA9IHVzZVN0YXRlKClcbmNvbnN0IFtlbnRlcmVkLCBzZXRFbnRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IFt1cCwgc2V0VXBdID0gdXNlU3RhdGUoZmFsc2UpXG5jb25zdCBbaXNNb3VzZUluc2lkZSwgc2V0SXNNb3VzZUluc2lkZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuZnVuY3Rpb24gbW91c2VEb3duKGUpe1xuICAvLyBncmFiIHRoZSBlbGVtZW50IFxuICAvLyBzZXRzdGF0ZSBmb3Igc2VsZWN0ZWRJdGVtIHRvIGJsYW5rIHZlcnNpb25cbiAgY29uc29sZS5sb2coJ2J1dHRvblZhbHVlJywgYnV0dG9uVmFsdWUpXG59XG5cbmZ1bmN0aW9uIE1vdXNlVXAoZSkge1xuICAvLyBpZiBtb3VzZWRvd24gaXMgdHJ1ZSBhbmQgaWYgZW50ZXJlZCBpcyB0cnVlXG4gIC8vIGFkZCBjb21wb25lbnQgdG8gbGlzdCBzdGF0ZSB3aXRoIGEgY2FsbGJhY2tcblxuXG59XG5cbmZ1bmN0aW9uIG1vdXNlRW50ZXIoKSB7XG4gIHNldElzTW91c2VJbnNpZGUodHJ1ZSlcbiAgaWYgKGlzTW91c2VJbnNpZGUpe1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpXG4gIH1cbn1cbmZ1bmN0aW9uIG1vdXNlTGVhdmUoKSB7XG4gIHNldElzTW91c2VJbnNpZGUoZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGVudGVyaW5nKGUpIHtcbiAgY29uc29sZS5sb2coJ2luIHlvdScsIGUpXG4gIGlmIChidXR0b25WYWx1ZSAmJiAodXAgPT0gdHJ1ZSkgKXtcbiAgICBjb25zb2xlLmxvZygnVVAnKVxuICB9IFxufVxuICBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgc3VwZXIocHJvcHMpO1xuLy8gICB0aGlzLnN0YXRlID0ge1xuLy8gICAgIGl0ZW1zOiBnZXRJdGVtcygxMClcbi8vICAgfTtcbi8vICAgdGhpcy5vbkRyYWdFbmQgPSB0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpO1xuLy8gfVxuXG5jb25zdCBbaXRlbXMsIHNldEl0ZW1dID0gdXNlU3RhdGUoW10pXG5cbmNvbnN0IHJlb3JkZXIgPSAobGlzdCwgc3RhcnRJbmRleCwgZW5kSW5kZXgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gQXJyYXkuZnJvbShsaXN0KTtcbiAgY29uc3QgW3JlbW92ZWRdID0gcmVzdWx0LnNwbGljZShzdGFydEluZGV4LCAxKTtcbiAgcmVzdWx0LnNwbGljZShlbmRJbmRleCwgMCwgcmVtb3ZlZCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5mdW5jdGlvbiBvbkRyYWdFbmQocmVzdWx0KSB7XG4gIC8vIGRyb3BwZWQgb3V0c2lkZSB0aGUgbGlzdFxuICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zID0gcmVvcmRlcihcbiAgICBzZWxlY3RMaXN0LFxuICAgIC8vdGhpcy5zdGF0ZS5pdGVtcyxcbiAgICByZXN1bHQuc291cmNlLmluZGV4LFxuICAgIHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleFxuICApO1xuICBzZXRTZWxlY3RMaXN0KFsuLi5pdGVtc10pXG4gIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgIGl0ZW1zXG4gIC8vIH0pO1xufVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgW2VsZW0sIHNldEVsZW1dID0gdXNlU3RhdGUoW10pOyBcblxuICAgIGNvbnN0IFtzZWxlY3RMaXN0LCBzZXRTZWxlY3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVsZW1TZWxlY3QoZSl7XG4gICAgICBzZXRFbGVtKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgY29uc29sZS5sb2coJ1RBWUxPUicsZSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbXljYWxsYmFjayh2YWwpe1xuICAgICAgY29uc29sZS5sb2coJ0NMSUNLRUQgTUUnLCB2YWwpXG4gICAgICAvLyBzZXRFbGVtKFsuLi5lbGVtLCB7Li4udmFsfV0pXG4gICAgICAvLyBzZXRTZWxlY3RMaXN0KHsuLi5zZWxlY3RMaXN0LCAuLi52YWwgfSk7XG4gICAgICBzZXRTZWxlY3RMaXN0KFsuLi5zZWxlY3RMaXN0LCB7IC4uLnZhbCB9XSk7XG4gICAgICBcbiAgICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHZhbHVlIGluIHBhcmVudCBjb21wb25lbnQsIGxpa2Ugc2F2ZSB0byBzdGF0ZVxuICAgIH1cblxuXG5cbiAgICAvLyB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKTtcbiAgICAvLyB2YXIgc29ydGFibGUgPSBTb3J0YWJsZS5jcmVhdGUoZWwpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8TGF5b3V0PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JpZFwiPlxuPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJ9IG9uTW91c2VMZWF2ZT17bW91c2VMZWF2ZX0+XG4gICAgICA8TGVmdEJhcj5cbiAgICAgICAgey8qVE9ETyAtIHN0YXJ0IGhvb2tpbmcgdGhlc2UgdXAhICAqL31cbiAgICAgIDxoND4tQmFzaWMgT3B0aW9ucy08L2g0PlxuICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXsoZSk9Pm1vdXNlRG93bihlKX0+TmFtZSBGaWVsZDwvYnV0dG9uPiBcbiAgICAgICAgPGJ1dHRvbj5Mb25nIEFuc3dlcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uPkJhc2ljIElucHV0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24+TnVtYmVyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24+RHJvcGRvd24gTGlzdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uPkNoZWNrYm94PC9idXR0b24+XG48aHI+PC9ocj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbGVtXCI+TmV3IEVsZW1lbnQ8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkPVwiZWxlbVwiIG5hbWU9XCJlbGVtXCIgb25DaGFuZ2U9e2hhbmRsZUVsZW1TZWxlY3R9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZCBkaXNhYmxlZCA+Q2hvb3NlIGhlcmU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGV4dFwiPlRleHQgSW5wdXQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VsZWN0XCI+U2VsZWN0IERyb3Bkb3duPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Q2hlY2tib3g8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgIDxoND4tQWR2YW5jZWQgT3B0aW9ucy08L2g0PlxuICAgXG5cbiAgICAgICAgey8qIFRPRE8hIHJlbmFtZSBwYXJlbnRDYWxsYmFjayAqL31cbiAgICAgICAgeyhlbGVtID09PSAnc2VsZWN0JyA/IDxTZWxlY3RCdWlsZGVyIHBhcmVudENhbGxiYWNrPXtteWNhbGxiYWNrfT48L1NlbGVjdEJ1aWxkZXI+IDogbnVsbCl9XG4gICAgICAgIHsoZWxlbSA9PT0gJ3RleHQnID8gPElucHV0QnVpbGRlciBwYXJlbnRDYWxsYmFjaz17bXljYWxsYmFja30+PC9JbnB1dEJ1aWxkZXI+IDogbnVsbCl9XG5cbiAgICAgICAgXG4gICAgICA8L0xlZnRCYXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgb25Nb3VzZVVwPXsoKT0+c2V0VXAodHJ1ZSl9PlxuPEZvcm1TYW5kQm94PlxuPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0U2VsZWN0TGlzdChbXSl9Png8L2J1dHRvbj5cbjxidXR0b24+PzwvYnV0dG9uPiB7LyogVE9ETyAtIGFkZCBpbiB0b29sIHRpcCAuLi4gbWF5YmUgbGluaywgb24gaG92ZXIqL31cbnsvKiBSRU9SREVSIFNUQVJUICovfVxuIHsvKiB7KGVsZW0gPT09ICdzZWxlY3QnID8gKi99XG48RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cbiAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiPlxuICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cbiAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbiAgICAgICAgICAgICAgLy8gc3R5bGU9e2dldExpc3RTdHlsZShzbmFwc2hvdC5pc0RyYWdnaW5nT3Zlcil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZWxlY3RMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17aW5kZXh9IGRyYWdnYWJsZUlkPXtgZHJhZ2dhYmxlJHtpbmRleH1gfSBpbmRleD17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e2dldEl0ZW1TdHlsZShcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIHNuYXBzaG90LmlzRHJhZ2dpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICBwcm92aWRlZC5kcmFnZ2FibGVQcm9wcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgIC8vICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Lyoge2l0ZW19ICovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntpdGVtLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgeyhpdGVtLnZhbHVlcyA/IFxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJlbGVtXCIgbmFtZT1cImVsZW1cIiBvbkNoYW5nZT17aGFuZGxlRWxlbVNlbGVjdH0+XG4gICAgICAgICAgICB7aXRlbS52YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj57dmFsdWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSl9IFxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDogPGlucHV0IHR5cGU9e2l0ZW0udHlwZX0gPjwvaW5wdXQ+ICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgey8qICAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgICAgIHsvKiA6IG51bGwpfSAqL31cblxuICAgICAgPC9Gb3JtU2FuZEJveD5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbnsvKiBSRU9SREVSIEVORCAqL31cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICB7YFxuICAgIGlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbiAgICB9XG5cbiAgICBkaXYuY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cblxuICAgIC5lbGVtQ29udGFpbmVyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZmxleC1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICB9XG4gICAgLmNvbCB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgLmZsZXgtZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgICBgfVxuPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/pages/form_builder.js */")));
}

/***/ })

})
//# sourceMappingURL=form_builder.js.287268f77ede957449f2.hot-update.js.map