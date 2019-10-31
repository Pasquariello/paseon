//import Layout from '../components/MyLayout';
import LayoutApp from '../LayoutApp'

import LeftBar from '../LeftBar';
import SelectBuilder from './SelectBuilder';
import InputBuilder from './InputBuilder';

import FormSandBox from '../FormSandBox';

import React, { useState } from 'react';


/////////////////////////////
/////////////////////////////
/////////////////////////////
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';
import { renderToString } from 'react-dom/server';

// ...

resetServerContext();
renderToString(Form_Builder);

/////////////////////////////
/////////////////////////////
/////////////////////////////
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  console.log('result', result)
  return result;
};

export default function Form_Builder(props) {



const blankInputTest = {
  tag: '',
  type: 'text',
  label: '',
  value: '',
  required: false,
  placholder: '',
} 

const [buttonValue, setButtonValue] = useState()
const [entered, setEntered] = useState(false);
const [up, setUp] = useState(false)
const [isMouseInside, setIsMouseInside] = useState(false)

function mouseDown(e){
  console.log('dude', e)

  setButtonValue(blankInputTest);
  // e.currentTarget.style.border = "dashed";

  // Set the drag's format and data. Use the event target's id for the data 
  //e.dataTransfer.setData("text/plain", e.target.id);  // grab the element 
  // setstate for selectedItem to blank version
  console.log('buttonValue', buttonValue)
}


function dragStart(event) {
  setButtonValue(blankInputTest);

  console.log('oh')
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}

function dragOver(event) {
  event.preventDefault();
}


function drop(event) {
  setSelectList([...selectList, { ...blankInputTest }]);
  setButtonValue()
  // const id = event
  //   .dataTransfer
  //   .getData('text');

  // const draggableElement = document.getElementById(id);
  // const dropzone = event.target;
  
  // dropzone.appendChild(draggableElement);

  event
    .dataTransfer
    .clearData();
}



function mouseEnter(buttonValue) {
  setIsMouseInside(true)
  console.log('hello', up)
  // setSelectList([...selectList, { ...blankInputTest }]);
  // if (isMouseInside ){
  //   console.log('hello')
  // }
}

function mouseLeave() {
  setIsMouseInside(false)
}

function mouseUp(){
  
  if(isMouseInside && buttonValue){
      setSelectList([...selectList, { ...blankInputTest }]);
      setButtonValue()
  }
}

function entering(e) {
  console.log('in you', e)
  if (buttonValue && (up == true) ){
    console.log('UP')
  } 
}
  
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

const [items, setItem] = useState([])

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
function onDragEnd(result) {
  // dropped outside the list
  if (!result.destination) {
    return;
  }

  const items = reorder(
    selectList,
    //this.state.items,
    result.source.index,
    result.destination.index
  );
  setSelectList([...items])
  // this.setState({
  //   items
  // });
}
/////////////////////////////
/////////////////////////////
/////////////////////////////

    const [elem, setElem] = useState([]); 

    const [selectList, setSelectList] = useState([]);
    

    function handleElemSelect(e){
      setElem(e.target.value)
      console.log('TAYLOR',e)
    }
    
    function mycallback(val){
      console.log('CLICKED ME', val)
      // setElem([...elem, {...val}])
      // setSelectList({...selectList, ...val });
      setSelectList([...selectList, { ...val }]);
      console.log('ttown', selectList)
        //since list is being set here in form, maybe I pass this selectList to parentCallback instead of creating/setting state there too? 
        

      props.parentCallback(val)
      // do something with value in parent component, like save to state
    }

    function clearList(e){
      e.preventDefault();
      setSelectList([]);

      
      // props.parentCallback(val)

    }



    // var el = document.getElementById('items');
    // var sortable = Sortable.create(el);

  return (
    <>

      <div className="flex-grid">
<div className="col">
      <LeftBar>
        {/*TODO - start hooking these up!  */}
      {/* <h4>-Basic Options-</h4>
        <button id="myTextInputButton" draggable="true" onDragStart={dragStart} onMouseDown={(e)=>mouseDown(e)}>Name Field</button> 
        <button>Long Answer</button>
        <button>Basic Input</button>
        <button>Number</button>
        <button>Dropdown List</button>
        <button>Checkbox</button>
<hr></hr> */}
        <label htmlFor="elem">New Element</label>
        <select id="elem" name="elem" defaultValue="choose" onChange={handleElemSelect}>
          <option value="choose" disabled >Choose here</option>
          <option value="text">Text Input</option>
          <option value="select">Select Dropdown</option>
          <option value="checkbox">Checkbox</option>
        </select>

      <h4>-Advanced Options-</h4>
   

        {/* TODO! rename parentCallback */}
        {(elem === 'select' ? <SelectBuilder parentCallback={mycallback}></SelectBuilder> : null)}
        {(elem === 'text' ? <InputBuilder parentCallback={mycallback}></InputBuilder> : null)}

        
      </LeftBar>
      </div>
      <div className="col"  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onDragOver={dragOver} onDrop={drop}>

<FormSandBox>
<button onClick={(e)=>clearList(e)}>x</button>
<button>?</button> {/* TODO - add in tool tip ... maybe link, on hover*/}
{/* REORDER START */}
 {/* {(elem === 'select' ? */}
<DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              // style={getListStyle(snapshot.isDraggingOver)}
            >
              {selectList.map((item, index) => (
                <Draggable key={index} draggableId={`draggable${index}`} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      // style={getItemStyle(
                      //   snapshot.isDragging,
                      //   provided.draggableProps.style
                      // )}
                    >
                      {/* {item} */}
                      {/*  */}
                      <div className="elemContainer">
                      <label>{item.label}</label>
          {(item.values ? 
          <select id="elem" name="elem" onChange={handleElemSelect}>
            {item.values.map(value => {
                return (
                  <option>{value}</option>
                )
              
              })} 
          </select>
          : <input type={item.type} ></input> )}
          </div>
                      {/*  */}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* : null)} */}

      </FormSandBox>
      {/* TODO: hook these up  */}
      
      {/* to see raw form with complete structure */}
      <button>Raw Form</button>   
      {/* to see the custom paseon form with attribute that points to correct saved form object */}
      <button>Paseon Form</button>
      </div>
      </div>

{/* REORDER END */}

      <style jsx>
    {`
    input[type=text], select {
        padding: 12px 20px;
        margin: 8px 0;
        display: block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }

    div.container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }

    .elemContainer {
      border-radius: 5px;
      background-color: #f2f2f2;
      padding: 20px;
      margin: 10px;
    }
    
    .flex-grid {
      display: flex;
      justify-content: space-between;

    }
    .col {
      width: 100%;

    }

    @media (max-width: 700px) {
      .flex-grid {
        display: block;
      }
    }
    `}
</style>
 
    </>
  );
}