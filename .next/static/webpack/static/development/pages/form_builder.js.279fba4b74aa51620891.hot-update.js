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

  function mouseDown(e) {
    // grab the element 
    // setstate for selectedItem to blank version
    console.log('buttonValue', buttonValue);
  }

  function MouseUp(e) {// if mousedown is true and if entered is true
    // add component to list state with a callback
  }

  function entering() {
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


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      items = _useState4[0],
      setItem = _useState4[1];

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


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      elem = _useState5[0],
      setElem = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      selectList = _useState6[0],
      setSelectList = _useState6[1];

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
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-256686956" + " " + "flex-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-256686956" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_components_LeftBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "-Basic Options-"), __jsx("button", {
    onMouseDown: function onMouseDown(e) {
      return mouseDown(e);
    },
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Name Field"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Long Answer"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Basic Input"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Number"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Dropdown List"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Checkbox"), __jsx("hr", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "elem",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "New Element"), __jsx("select", {
    id: "elem",
    name: "elem",
    onChange: handleElemSelect,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("option", {
    value: "",
    selected: true,
    disabled: true,
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Choose here"), __jsx("option", {
    value: "text",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Text Input"), __jsx("option", {
    value: "select",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Select Dropdown"), __jsx("option", {
    value: "checkbox",
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Checkbox")), __jsx("h4", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "-Advanced Options-"), elem === 'select' ? __jsx(_components_SelectBuilder__WEBPACK_IMPORTED_MODULE_8__["default"], {
    parentCallback: mycallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }) : null, elem === 'text' ? __jsx(_components_InputBuilder__WEBPACK_IMPORTED_MODULE_9__["default"], {
    parentCallback: mycallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }) : null)), __jsx("div", {
    className: "jsx-256686956" + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_components_FormSandBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onMouseEnter: function onMouseEnter() {
      return entering();
    },
    onMouseUp: function onMouseUp() {
      return setUp(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setSelectList([]);
    },
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "x"), __jsx("button", {
    className: "jsx-256686956",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "?"), " ", __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["Droppable"], {
    droppableId: "droppable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, function (provided, snapshot) {
    return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.droppableProps, {
      ref: provided.innerRef // style={getListStyle(snapshot.isDraggingOver)}
      ,
      className: "jsx-256686956" + " " + (provided.droppableProps.className != null && provided.droppableProps.className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }), selectList.map(function (item, index) {
      return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["Draggable"], {
        key: index,
        draggableId: "draggable".concat(index),
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, function (provided, snapshot) {
        return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          className: "jsx-256686956" + " " + (provided.dragHandleProps.className != null && provided.dragHandleProps.className || provided.draggableProps.className != null && provided.draggableProps.className || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-256686956" + " " + "elemContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, __jsx("label", {
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, item.label), item.values ? __jsx("select", {
          id: "elem",
          name: "elem",
          onChange: handleElemSelect,
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, item.values.map(function (value) {
          return __jsx("option", {
            className: "jsx-256686956",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }, value);
        })) : __jsx("input", {
          type: item.type,
          className: "jsx-256686956",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        })));
      });
    }), provided.placeholder);
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "256686956",
    __self: this
  }, "input[type=text].jsx-256686956,select.jsx-256686956{padding:12px 20px;margin:8px 0;display:block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;}input[type=submit].jsx-256686956{width:100%;background-color:#4CAF50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer;}input[type=submit].jsx-256686956:hover{background-color:#45a049;}div.container.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;}.elemContainer.jsx-256686956{border-radius:5px;background-color:#f2f2f2;padding:20px;margin:10px;}.flex-grid.jsx-256686956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.col.jsx-256686956{width:100%;}@media (max-width:700px){.flex-grid.jsx-256686956{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXlsb3JwYXNxdWFyaWVsbG8vbGVhcm5pbmdfcmVzb3VyY2VzL2hlbGxvLW5leHQvcGFnZXMvZm9ybV9idWlsZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9PSyxBQUcyQixBQVNQLEFBV2MsQUFJUCxBQU1GLEFBT0wsQUFLRixBQU1LLFdBdENXLEFBa0M3QixHQUtFLElBaERlLEFBd0JZLEFBTUYsT0FWM0IsTUFuQmtCLEtBU0YsT0FlQyxBQU1GLEVBN0JXLEdBU0osUUFldEIsQUFNYyxVQXBCRyxDQVRLLENBOEJ0QixNQUlnQyxLQXhCaEIsTUFUVSxNQVVKLGdCQVR0QixFQVVtQixlQUNuQixpRUF1QkEiLCJmaWxlIjoiL1VzZXJzL3RheWxvcnBhc3F1YXJpZWxsby9sZWFybmluZ19yZXNvdXJjZXMvaGVsbG8tbmV4dC9wYWdlcy9mb3JtX2J1aWxkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MZWZ0QmFyJztcbmltcG9ydCBTZWxlY3RCdWlsZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0QnVpbGRlcic7XG5pbXBvcnQgSW5wdXRCdWlsZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRCdWlsZGVyJztcblxuaW1wb3J0IEZvcm1TYW5kQm94IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVNhbmRCb3gnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IHsgcmVzZXRTZXJ2ZXJDb250ZXh0IH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG4vLyAuLi5cblxucmVzZXRTZXJ2ZXJDb250ZXh0KCk7XG5yZW5kZXJUb1N0cmluZyhGb3JtX0J1aWxkZXIpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCByZW9yZGVyID0gKGxpc3QsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20obGlzdCk7XG4gIGNvbnN0IFtyZW1vdmVkXSA9IHJlc3VsdC5zcGxpY2Uoc3RhcnRJbmRleCwgMSk7XG4gIHJlc3VsdC5zcGxpY2UoZW5kSW5kZXgsIDAsIHJlbW92ZWQpO1xuICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybV9CdWlsZGVyKCkge1xuXG5cblxuY29uc3QgYmxhbmtJbnB1dFRlc3QgPSB7XG4gIHR5cGU6ICd0ZXh0JyxcbiAgbGFiZWw6ICcnLFxuICB2YWx1ZTogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgcGxhY2hvbGRlcjogJycsXG59IFxuXG5jb25zdCBbYnV0dG9uVmFsdWUsIHNldEJ1dHRvblZhbHVlXSA9IHVzZVN0YXRlKClcbmNvbnN0IFtlbnRlcmVkLCBzZXRFbnRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IFt1cCwgc2V0VXBdID0gdXNlU3RhdGUoZmFsc2UpXG5cbmZ1bmN0aW9uIG1vdXNlRG93bihlKXtcbiAgLy8gZ3JhYiB0aGUgZWxlbWVudCBcbiAgLy8gc2V0c3RhdGUgZm9yIHNlbGVjdGVkSXRlbSB0byBibGFuayB2ZXJzaW9uXG4gIGNvbnNvbGUubG9nKCdidXR0b25WYWx1ZScsIGJ1dHRvblZhbHVlKVxufVxuXG5mdW5jdGlvbiBNb3VzZVVwKGUpIHtcbiAgLy8gaWYgbW91c2Vkb3duIGlzIHRydWUgYW5kIGlmIGVudGVyZWQgaXMgdHJ1ZVxuICAvLyBhZGQgY29tcG9uZW50IHRvIGxpc3Qgc3RhdGUgd2l0aCBhIGNhbGxiYWNrXG5cblxufVxuXG5mdW5jdGlvbiBlbnRlcmluZygpIHtcbiAgaWYgKGJ1dHRvblZhbHVlICYmICh1cCA9PSB0cnVlKSApe1xuICAgIGNvbnNvbGUubG9nKCdVUCcpXG4gIH0gXG59XG4gIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICBzdXBlcihwcm9wcyk7XG4vLyAgIHRoaXMuc3RhdGUgPSB7XG4vLyAgICAgaXRlbXM6IGdldEl0ZW1zKDEwKVxuLy8gICB9O1xuLy8gICB0aGlzLm9uRHJhZ0VuZCA9IHRoaXMub25EcmFnRW5kLmJpbmQodGhpcyk7XG4vLyB9XG5cbmNvbnN0IFtpdGVtcywgc2V0SXRlbV0gPSB1c2VTdGF0ZShbXSlcblxuY29uc3QgcmVvcmRlciA9IChsaXN0LCBzdGFydEluZGV4LCBlbmRJbmRleCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKGxpc3QpO1xuICBjb25zdCBbcmVtb3ZlZF0gPSByZXN1bHQuc3BsaWNlKHN0YXJ0SW5kZXgsIDEpO1xuICByZXN1bHQuc3BsaWNlKGVuZEluZGV4LCAwLCByZW1vdmVkKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbmZ1bmN0aW9uIG9uRHJhZ0VuZChyZXN1bHQpIHtcbiAgLy8gZHJvcHBlZCBvdXRzaWRlIHRoZSBsaXN0XG4gIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaXRlbXMgPSByZW9yZGVyKFxuICAgIHNlbGVjdExpc3QsXG4gICAgLy90aGlzLnN0YXRlLml0ZW1zLFxuICAgIHJlc3VsdC5zb3VyY2UuaW5kZXgsXG4gICAgcmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4XG4gICk7XG4gIHNldFNlbGVjdExpc3QoWy4uLml0ZW1zXSlcbiAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgaXRlbXNcbiAgLy8gfSk7XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCBbZWxlbSwgc2V0RWxlbV0gPSB1c2VTdGF0ZShbXSk7IFxuXG4gICAgY29uc3QgW3NlbGVjdExpc3QsIHNldFNlbGVjdExpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIFxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRWxlbVNlbGVjdChlKXtcbiAgICAgIHNldEVsZW0oZS50YXJnZXQudmFsdWUpXG4gICAgICBjb25zb2xlLmxvZygnVEFZTE9SJyxlKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBteWNhbGxiYWNrKHZhbCl7XG4gICAgICBjb25zb2xlLmxvZygnQ0xJQ0tFRCBNRScsIHZhbClcbiAgICAgIC8vIHNldEVsZW0oWy4uLmVsZW0sIHsuLi52YWx9XSlcbiAgICAgIC8vIHNldFNlbGVjdExpc3Qoey4uLnNlbGVjdExpc3QsIC4uLnZhbCB9KTtcbiAgICAgIHNldFNlbGVjdExpc3QoWy4uLnNlbGVjdExpc3QsIHsgLi4udmFsIH1dKTtcbiAgICAgIFxuICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdmFsdWUgaW4gcGFyZW50IGNvbXBvbmVudCwgbGlrZSBzYXZlIHRvIHN0YXRlXG4gICAgfVxuXG5cblxuICAgIC8vIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcycpO1xuICAgIC8vIHZhciBzb3J0YWJsZSA9IFNvcnRhYmxlLmNyZWF0ZShlbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxMYXlvdXQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncmlkXCI+XG48ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgPExlZnRCYXI+XG4gICAgICAgIHsvKlRPRE8gLSBzdGFydCBob29raW5nIHRoZXNlIHVwISAgKi99XG4gICAgICA8aDQ+LUJhc2ljIE9wdGlvbnMtPC9oND5cbiAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17KGUpPT5tb3VzZURvd24oZSl9Pk5hbWUgRmllbGQ8L2J1dHRvbj4gXG4gICAgICAgIDxidXR0b24+TG9uZyBBbnN3ZXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbj5CYXNpYyBJbnB1dDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uPk51bWJlcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uPkRyb3Bkb3duIExpc3Q8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbj5DaGVja2JveDwvYnV0dG9uPlxuPGhyPjwvaHI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWxlbVwiPk5ldyBFbGVtZW50PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBpZD1cImVsZW1cIiBuYW1lPVwiZWxlbVwiIG9uQ2hhbmdlPXtoYW5kbGVFbGVtU2VsZWN0fT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQgPkNob29zZSBoZXJlPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRleHRcIj5UZXh0IElucHV0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPlNlbGVjdCBEcm9wZG93bjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPkNoZWNrYm94PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICA8aDQ+LUFkdmFuY2VkIE9wdGlvbnMtPC9oND5cbiAgIFxuXG4gICAgICAgIHsvKiBUT0RPISByZW5hbWUgcGFyZW50Q2FsbGJhY2sgKi99XG4gICAgICAgIHsoZWxlbSA9PT0gJ3NlbGVjdCcgPyA8U2VsZWN0QnVpbGRlciBwYXJlbnRDYWxsYmFjaz17bXljYWxsYmFja30+PC9TZWxlY3RCdWlsZGVyPiA6IG51bGwpfVxuICAgICAgICB7KGVsZW0gPT09ICd0ZXh0JyA/IDxJbnB1dEJ1aWxkZXIgcGFyZW50Q2FsbGJhY2s9e215Y2FsbGJhY2t9PjwvSW5wdXRCdWlsZGVyPiA6IG51bGwpfVxuXG4gICAgICAgIFxuICAgICAgPC9MZWZ0QmFyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuPEZvcm1TYW5kQm94IG9uTW91c2VFbnRlcj17KCk9PmVudGVyaW5nKCl9IG9uTW91c2VVcD17KCk9PnNldFVwKHRydWUpfT5cbjxidXR0b24gb25DbGljaz17KCk9PnNldFNlbGVjdExpc3QoW10pfT54PC9idXR0b24+XG48YnV0dG9uPj88L2J1dHRvbj4gey8qIFRPRE8gLSBhZGQgaW4gdG9vbCB0aXAgLi4uIG1heWJlIGxpbmssIG9uIGhvdmVyKi99XG57LyogUkVPUkRFUiBTVEFSVCAqL31cbiB7LyogeyhlbGVtID09PSAnc2VsZWN0JyA/ICovfVxuPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e29uRHJhZ0VuZH0+XG4gICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIj5cbiAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XG4gICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICAgIC8vIHN0eWxlPXtnZXRMaXN0U3R5bGUoc25hcHNob3QuaXNEcmFnZ2luZ092ZXIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2VsZWN0TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e2luZGV4fSBkcmFnZ2FibGVJZD17YGRyYWdnYWJsZSR7aW5kZXh9YH0gaW5kZXg9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXtnZXRJdGVtU3R5bGUoXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICBzbmFwc2hvdC5pc0RyYWdnaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgcHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHMuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAvLyApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIHtpdGVtfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7LyogICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57aXRlbS5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgIHsoaXRlbS52YWx1ZXMgPyBcbiAgICAgICAgICA8c2VsZWN0IGlkPVwiZWxlbVwiIG5hbWU9XCJlbGVtXCIgb25DaGFuZ2U9e2hhbmRsZUVsZW1TZWxlY3R9PlxuICAgICAgICAgICAge2l0ZW0udmFsdWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+e3ZhbHVlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0pfSBcbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA6IDxpbnB1dCB0eXBlPXtpdGVtLnR5cGV9ID48L2lucHV0PiApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAgKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRHJvcHBhYmxlPlxuICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICAgICB7LyogOiBudWxsKX0gKi99XG5cbiAgICAgIDwvRm9ybVNhbmRCb3g+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG57LyogUkVPUkRFUiBFTkQgKi99XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAge2BcbiAgICBpbnB1dFt0eXBlPXRleHRdLCBzZWxlY3Qge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XG4gICAgfVxuXG4gICAgZGl2LmNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAuZWxlbUNvbnRhaW5lciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmZsZXgtZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgfVxuICAgIC5jb2wge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgIC5mbGV4LWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gICAgYH1cbjwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/taylorpasquariello/learning_resources/hello-next/pages/form_builder.js */")));
}

/***/ })

})
//# sourceMappingURL=form_builder.js.279fba4b74aa51620891.hot-update.js.map