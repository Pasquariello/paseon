//import Layout from '../components/MyLayout';
// import LayoutApp from '../LayoutApp'

import LeftBar from '../LeftBar';
import SelectBuilder from './SelectBuilder';
import InputBuilder from './InputBuilder';

import FormSandBox from '../FormSandBox';

import React, { useState } from 'react';

import classNames from 'classnames'


/////////////////////////////
/////////////////////////////
/////////////////////////////
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';
import { renderToString } from 'react-dom/server';
import { func } from 'prop-types';

// ...

resetServerContext();
renderToString(FormBuilderBeta);

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

export default function FormBuilderBeta(props) {


/////////////////////////////////////////
////////START INPUT OBJECTSSSSSS/////////
/////////////////////////////////////////

// todo: put all into an array and map to make elements? 
// might have a problem with bootstrap
const first_name_obj = {
  type: 'text',
  tag: 'input',
  label: 'First Name',
  name: 'first_name',
  value: '',
  required: false,
  placholder: '',
}

const last_name_obj = {
  type: 'text',
  tag: 'input',
  label: 'Last Name',
  name: 'last_name',
  value: '',
  required: false,
  placholder: '',
}

const phone_number_obj = {
  type: 'tel',
  tag: 'input',
  label: 'Phone Number',
  name: 'phone_number',
  value: '',
  required: false,
  placholder: '',
}

const email_obj = {
  type: 'email',
  tag: 'input',
  label: 'Email',
  name: 'email',
  value: '',
  required: false,
  placholder: '',
}

const street_address_obj = {
  type: 'text',
  tag: 'input',
  label: 'Street Address',
  name: 'street_address',
  value: '',
  required: false,
  placholder: '',
}

const city_obj = {
  type: 'text',
  tag: 'input',
  label: 'City',
  name: 'city',
  value: '',
  required: false,
  placholder: '',
}
//todo: change for select
const state_region_obj = {
  type: 'text',
  tag: 'input',
  label: 'State/Region',
  name: 'state_region',
  value: '',
  required: false,
  placholder: '',
}

const zip_code_obj = {
  type: 'text',
  tag: 'input',
  label: 'Zip Code',
  name: 'zip_code_obj',
  value: '',
  required: false,
  placholder: '',
}


///////////////////////////////////////
////////END INPUT OBJECTSSSSSS/////////
///////////////////////////////////////


/////state values
const [campaignForm, setCampaignForm] = useState(
  { 
      fields: []
  }
)
const [editItemDetails, setEditItemDetails] = useState()

const [itemToMove, setItemToMove] = useState();

const [activeDropZone, setActiveDropZone] = useState();

const [initDrag, setInitDrag] = useState();
 


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
    fieldList,
    //this.state.items,
    result.source.index,
    result.destination.index
  );
  // props.removeSingle(items)


}
/////////////////////////////
/////////////////////////////
/////////////////////////////

    const [elem, setElem] = useState([]); 

    

    

    function handleElemSelect(e){
      setElem(e.target.value)
      console.log('TAYLOR',e)
    }
    
    function mycallback(val){
      console.log('IN THIS dude')
      // setElem([...elem, {...val}])
      // setSelectList({...selectList, ...val });
     // setSelectList([...selectList, { ...val }]); // TAYLOR THIS IS WHERE I NEED TO BE DUDE!
        //since list is being set here in form, maybe I pass this selectList to parentCallback instead of creating/setting state there too? 
        

      props.parentCallback(val)
      // do something with value in parent component, like save to state
    }

    function clearList(e){
      e.preventDefault();
      //setSelectList([]);

      
      // this will eventually be handled with REDUX ? or handle state in the parent component
      props.removeSingle([])

    }


    function addToForm (input_obj) {
      console.log('hello from addToForm', input_obj)
      setCampaignForm({...campaignForm, fields:[...campaignForm.fields, input_obj]})

    }


//////// DRAG FUNCTIONS
    function dragOver(event, index) {
      event.preventDefault();
      setActiveDropZone(index)
      console.log('dragging over!', activeDropZone, index);
    }

    function dragLeave(event, index){
      event.preventDefault();
      setActiveDropZone(null)
      console.log('dragging OUT!', activeDropZone, index);
    }

    function dragStart(event, index) {
      setItemToMove(index)
      setInitDrag(true);
      console.log(itemToMove)
      event
        .dataTransfer
        .setData('text/plain', event.target.id);
    }

    function dragEnd(event, index) {
      setInitDrag(false);
      console.log('initDrag', initDrag)
      // event
      //   .dataTransfer
      //   .setData('text/plain', event.target.id);
    }

    function drop(event, index) {
      console.log('DROP')
      setActiveDropZone(null)

      //currently swaps just want to move 1
      // TODO: IS THIS MUTATING STATE!?!?!? 
  //     console.log('not tmp',campaignForm.fields)
  //     let array = campaignForm.fields
  //     var tmp = array[index];
  //     console.log('tmp', tmp)
  //     console.log('itemToMove', itemToMove)
  //     array[index] = array[itemToMove];
  //     array[itemToMove] = tmp;
  // setCampaignForm({...campaignForm, fields:array}) 

        let arr = campaignForm.fields
        
        // arr.splice(index, 0, arr[itemToMove]);
        // setCampaignForm({...campaignForm, fields:arr}) 


        var element = arr[itemToMove];
        arr.splice(itemToMove, 1);
        arr.splice(index, 0, element);

        setCampaignForm({...campaignForm, fields:arr}) 

    
      event
        .dataTransfer
        .clearData();
    }


    function dropzone(index) {

      let classes = classNames(

        {
          'hoverDropZone': activeDropZone == index,
          'dropZoned': initDrag
        }
      );
      return (
        <>
        <div 
        className=  {classes}
        onDragOver={(event) => dragOver(event, index)}
        onDragLeave={(event) => dragLeave(event, index)}
        onDrop = {(event) => drop(event, index)}
        //onMouseEnter = {() => setActiveDropZone(index), console.log('enter!', activeDropZone)}
        //style={{minHeight: '10px', width:'100%', border: '1px dashed blue'}}
      ></div>
  <style jsx>
    {`
 .dropZoned {
  min-height: 10px;  
  width: 100%;
  border: 1px dashed blue;
}

.hoverDropZone {
  background-color: pink;
  min-height: 10px; 
  width:100%;
  border: 1px dashed blue;
}
    `}
    </style>
      </>
      )
    }

    const fieldList = campaignForm.fields;


  return (
    <>

      <div className="flex-grid">
<div className="col">
      <LeftBar>

      <hr></hr>
        <label htmlFor="elem">Frequently Used</label>

        <div className="row"> 

     
        <div className="col-md-6 mb-4" onClick={() => addToForm(first_name_obj)}>
        <div className="card">
          <div className="card-header">
            <p className="card-text">First Name</p>
          </div>  
        </div>
        </div>

        <div className="col-md-6 mb-4" onClick={() => addToForm(last_name_obj)}>
        <div className="card">
          <div className="card-header">
            <p className="card-text">Last Name</p>
          </div>  
        </div>
        </div>

        </div>
        <div className="row"> 


        <div className="col-md-6 mb-4" onClick={() => addToForm(phone_number_obj)}>
        <div className="card">
          <div className="card-header">
            <p className="card-text">Phone Number</p>
          </div>  
        </div>
        </div>

        <div className="col-md-6 mb-4" onClick={() => addToForm(email_obj)}>
        <div className="card">
          <div className="card-header">
            <p className="card-text">Email</p>
          </div>  
        </div>
        </div>

        </div>
        <div className="row"> 


        <div className="col-md-6 mb-4" onClick={() => addToForm(state_region_obj)}>
        <div className="card">
          <div className="card-header">
            <p className="card-text">Street Address</p>
          </div>  
        </div>
        </div>

        <div className="col-md-6 mb-4" onClick={() => addToForm(city_obj)}>
        <div className="card">
          <div className="card-header">
            <p className="card-text">City</p>
          </div>  
        </div>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6 mb-4" onClick={() => addToForm(state_region_obj)}>
        <div className="card">
          <div className="card-header">
            <p className="card-text">State/Region</p>
          </div>  
        </div>
        </div>

        <div className="col-md-6 mb-4" onClick={() => addToForm(zip_code_obj)}>
        <div className="card">
          <div className="card-header">
            <p className="card-text">Zip Code</p>
          </div>  
        </div>
        </div>

      </div>    










<hr></hr>
        <label htmlFor="elem">New Element</label>

    <div className="row"> 

      <div className="col-md-4 mb-4" onClick={addToForm}>
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-title">Single Line</p>
            </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-title">Multi Line</p>
            </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card mb-4">
          <div className="card-body">
            <p className="card-title">Drop Down</p>
          </div>
        </div>
      </div>

    </div>

    <div className="row"> 

      <div className="col-md-4 mb-4">
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-title">Single Checkbox</p>
            </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-title">Multi Checkbox</p>
            </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card mb-4">
          <div className="card-body">
            <p className="card-title">Radio</p>
          </div>
        </div>
      </div>
</div>






{/* SPACE */}




        <div className="card mb-4">
            <div className="card-body">
                <p className="card-title">Card title</p>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>

            </div>
        </div>

        <div className="card mb-4">
            <div className="card-body">
                <p className="card-title">Card title</p>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>

    


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

      <div className="col">
        {/* DO I STILL NEED THIS ? */}
{/* //onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onDragOver={dragOver} onDrop={drop} */}
<FormSandBox>
<button onClick={(e)=>clearList(e)}>x</button>
<button>?</button> {/* TODO - add in tool tip ... maybe link, on hover*/}
{/* REORDER START */}

        
                {fieldList.map((item, index) => (  

      <div>
                    {dropzone(index)}

                      <div 
                      id='draggableSpan'
                      draggable='true'
                      onDragStart={(event) =>  dragStart(event, index)}
                      onDragEnd={(event) =>  dragEnd(event, index)}
                        style={{padding: '10px'}}
                        className={editItemDetails == index ? 'elemContainer' : ''}
                        onMouseEnter={() => setEditItemDetails(index)}
                        onMouseLeave={() => setEditItemDetails(null)}  
                        onClick={() => console.log('hi', index)}>
                        {/* <button onClick={(e)=>removeOne(e, index, item)}>x</button> */}
                      
                      <label>{item.label}</label>
                      {/* {console.log(item)} */}
          {(item.tag == 'select' ? 
          <select id="elem" name="elem" onChange={handleElemSelect}>
            {item.options.map(value => {
                return (
                  <option>{value}</option>
                )
                
              })} 
          </select>
          : <input type={item.type} ></input> )}
          </div>
<br></br>

</div>

              ))}
              


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



    p {
      font-size: 10px;
    }

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
      // border-radius: 5px;
      border: 1px solid blue;
      background-color: #f2f2f2;
      // padding: 20px;
      // margin: 10px;
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