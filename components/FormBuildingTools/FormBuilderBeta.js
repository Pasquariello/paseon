//import Layout from '../components/MyLayout';
// import LayoutApp from '../LayoutApp'

import LeftBar from '../LeftBar';
import SelectBuilder from './SelectBuilder';
import InputBuilder from './InputBuilder';

import FormSandBox from '../FormSandBox';

import React, { useState } from 'react';

import classNames from 'classnames'
import {states} from '../../utils/states';

/////////////////////////////
/////////////////////////////
/////////////////////////////

//TODO: reflect edit field changes in paseon and raw form HTML view
import { resetServerContext } from 'react-beautiful-dnd';
import { renderToString } from 'react-dom/server';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons'



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
let state_names = states.map(state => state.name);
// todo: put all into an array and map to make elements? 
// might have a problem with bootstrap
const first_name_obj = {
  type: 'text',
  tag: 'input',
  label: 'First Name',
  name: 'first_name',
  value: '',
  required: false,
  default: '', // LAST SPOT TOUCH
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
  tag: 'select',
  label: 'State/Region',
  name: 'state_region',
  value: '',
  options: state_names,
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

const blank_obj = { 
  type: 'text',
  tag: 'input',
  label: '',
  name: '',
  value: '',
  required: false,
  placholder: '',
}


const single_text_obj = {
  type: 'text',
  tag: 'input',
  label: '',
  placeholder: '',
  placholder2: {
    name: 'Placeholder',
    value: ''
  },
  name: '',
  value: '',
  required: false,
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

const [itemToMoveIndex, setItemToMoveIndex] = useState();

const [activeDropZone, setActiveDropZone] = useState();

const [initDrag, setInitDrag] = useState();

const [selected, setSelected] = useState()


const [fieldAction, setFieldAction] = useState();


 


/////////////////////////////
/////////////////////////////
/////////////////////////////

    const [elem, setElem] = useState([]); 

    

    function showPaseonTag() {

      console.log('<h1>hell this is a form</h1>')

      

    }

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
      
      setCampaignForm({...campaignForm, fields:[...campaignForm.fields, input_obj]})
      setEditToggle()
    }

    const [editToggle, setEditToggle] = useState()
    
    function openEdit(input_obj){
      addToForm (input_obj)
      

      let lastElem = 0;

      if (campaignForm.fields.length  > 0) {
        lastElem = campaignForm.fields.length
      } 
      
      setEditToggle(lastElem)
    }

    function editInputView() {
      
      console.log('um hello', selected)
      let index = editToggle
      let edit_obj = campaignForm.fields[index]

      // const [array, setArray] = useState([
      // {'id': 0, text: '0'},
      // {'id': 1, text: '1'},
      // {'id': 2, text: '2'}
      // ]);

      // ... somewhere else.
      let copy = []
      copy = [...campaignForm.fields ]
      console.log('Copy  of Entire Array', copy)

      let toEditField = copy[index];


      // copy[index].text = '3' 
      // setArray(copy)
      
      // maybe pass in an object that is the schema for each type?
      // rememnber addToForm with no arg passed in created an empty field in the field list!
      return (
        <>
        <div>
      <label htmlFor="elem">Edit {copy[index].label} </label>
        <div style={{float: 'right'}} onClick={()=>setEditToggle() }>
        <button>x</button>
        </div>
        </div>
        <hr></hr>
        <form>

          <div className="form-group">
            <label htmlFor="cust_label">Label</label>
            <input 
              type="text"
              className="form-control" 
              id="cust_label" 
              placeholder="Enter Custom Label"
              value={copy[index].label}
              onChange={(e)=> {
                  copy[index].label = e.target.value
                  setCampaignForm({...campaignForm, fields:copy})
                }
              
              } 
              ></input>
          </div>

          <div className="form-group">
            <label htmlFor="cust_placeholder">Placeholder</label>
            <input 
              type="text" 
              className="form-control" 
              id="cust_placeholder" 
              placeholder="Enter Custom Placeholder"
              value={copy[index].placeholder}
              onChange={(e)=> {
                  copy[index].placeholder = e.target.value
                  setCampaignForm({...campaignForm, fields:copy})
                }
              }
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="cust_default">Default</label>
            <input 
              type="text"
              className="form-control" 
              id="cust_default" 
              placeholder="Enter Custom Label"
              onChange={(e)=> {
                  copy[index].default = e.target.value
                  setCampaignForm({...campaignForm, fields:copy})
                }
              }
              ></input>
          </div>

          <div className="custom-control custom-switch">
     
            <input 
              onChange={()=> {
                  copy[index].required = !copy[index].required
                  setCampaignForm({...campaignForm, fields:copy})

                }
              
              } 
              value={copy[index].required}
              type="checkbox" 
              className="custom-control-input" 
              id="customSwitch1"
            ></input>
            <label className="custom-control-label" htmlFor="customSwitch1">Make This Field  Require</label>

          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </>
      )

    }

    function removeOne(e, index, val) {

      e.preventDefault();
      setEditToggle()
      let newList = campaignForm.fields.filter((item, i) =>  i != index)
      setCampaignForm({...campaignForm, fields:newList}) 

    }


    function transfromJSONtoHTML() {
      // TEST DATA
        // let my_arry = [
        //   {
        //     tag: 'input',
        //     type: 'text',
        //     label: 'test label'
        //   },
        //   {
        //     tag: 'input',
        //     type: 'email',
        //     label: 'test label',
        //     placeholder: 'taylor@pasq.net'
        //   },
        //   {
        //     tag: 'input',
        //     type: 'email',
        //     label: 'test label',
        //     placeholder: 'taylor@pasq.net'
        //   }
        // ]

        // / = &sol;
        // < = &lt;
        // > = &gt;

        return ( 
        <div>
          {`<form>`} <br></br>
          
        
          {campaignForm.fields.map((field, index) => {
                       
                       
                return (
                <div key={index} >&nbsp; {/* ADDS SPACE*/}
                 {`
                 <label>${field.label}</label>
                 <${field.tag} type="${field.type}"></${field.tag}>
                `}
                <br></br>
                </div>
              ) 
        
            
            
            })  }
            
          
        
          {`</form>`}

        </div>

        )

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
      
      setItemToMoveIndex(index)
      setInitDrag(true);
      console.log('TAAYY', itemToMoveIndex)

      //set all inputs to disabled

      
      event
        .dataTransfer
        .setData('text/plain', event.target.id);
    }

    function dragEnd(event, index) {
      setInitDrag(false);
      console.log('initDrag', initDrag)
  
    }

    function drop(event, index) {
      console.log('DROP')
      setActiveDropZone(null);
      let arr = campaignForm.fields; //TODO rename


        var element = arr[itemToMoveIndex];
        arr.splice(itemToMoveIndex, 1);
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
          'dropZone': initDrag,
          'dropZoneHide' :!initDrag
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
          .dropZone {
            min-height: 10px;  
            width: 100%;
            border: 1px dashed blue;
            visibility: visible;
          }

          .dropZoneHide {
            min-height: 10px;  
            width: 100%;
            visibility: hidden;
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
    
    function buildContainerClasses(index) {
      return classNames(
        'elemContainer',
      
        {
          'elemContainerHighlight': editItemDetails == index,
          // 'hoverDropZone': activeDropZone == index,
          // 'dropZoned': initDrag
        }
      );
    }


let lastElem = campaignForm.fields.length - 1
let elems = transfromJSONtoHTML()
  return (
    <>

      <div className="flex-grid">
        <div className="col">
      <LeftBar>
        {editToggle != null ? editInputView() : null}
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


        <div className="col-md-6 mb-4" onClick={() => addToForm(street_address_obj)}>
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
    {/* Start Advanced build tools */}
    <label htmlFor="elem">New Element</label>

    <div className="row"> 

      <div className="col-md-4 mb-4" onClick={()=>openEdit(single_text_obj)}>
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
     {/* End Advanced build tools */}


   

        {/* TODO! rename parentCallback */}
        {(elem === 'select' ? <SelectBuilder parentCallback={mycallback}></SelectBuilder> : null)}
        {(elem === 'text' ? <InputBuilder parentCallback={mycallback}></InputBuilder> : null)}

        
      </LeftBar>
</div>

      <div className="col">
        {/* DO I STILL NEED THIS ? */}
{/* //onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onDragOver={dragOver} onDrop={drop} */}
    <button>Raw Form</button>   
      {/* to see the custom paseon form with attribute that points to correct saved form object */}
      {/* <button>Paseon Form</button> */}
      <button type="button" data-toggle="modal" data-target="#exampleModal">
        Paseon Form
      </button>
<FormSandBox>
{/* <button onClick={(e)=>clearList(e)}>x</button> */}
<div className="btn-group btn-group-toggle" data-toggle="buttons">
<button 
  className="btn btn-secondary" 
  onClick={(e)=>removeOne(e, index, item)}
>
  <FontAwesomeIcon fixedWidth width="0" icon={faTrashAlt} />
</button>
<button className="btn btn-secondary">
  <FontAwesomeIcon fixedWidth width="0" icon={faInfoCircle}></FontAwesomeIcon>
</button> {/* TODO - add in tool tip ... maybe link, on hover*/}
</div>
{/* REORDER START */}


{fieldList.map((item, index) => (  
<div key={index}>

  {dropzone(index)}

  <div 
    id='draggableSpan'
    draggable='true'
    onDragStart={(event) => dragStart(event, index)}
    onDragEnd={(event) =>  dragEnd(event, index)}
    style={{padding: '10px'}}
    className={buildContainerClasses(index)}
    onMouseEnter={() => setEditItemDetails(index)}
    onMouseLeave={() => setEditItemDetails(null)}  
  >


    <div className={(editItemDetails == index ? 'sub' : 'hiddenSub')}>

      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <button 
          className="btn btn-secondary" 
          onClick={(e)=> {setEditToggle(index)}}
        >
        <FontAwesomeIcon fixedWidth width="0" icon={faEdit} />
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={(e)=>removeOne(e, index, item)}
        >
        <FontAwesomeIcon fixedWidth width="0" icon={faTrashAlt} />
        </button>
      </div>
    </div>

    <label style={{fontSize: '11px'}}>{item.label} {(item.required ? '*' : null)}</label>

    {(item.tag == 'select' ? 
      <select id="elem" name="elem" onChange={handleElemSelect}>
        {item.options.map((value, index) => {
          console.log('item',item)
          return (
            <option key={index}>{value}</option>
          )

        })} 
      </select>
    : <input disabled={initDrag} type={item.type} ></input> )}
    
  </div>

</div>
))}
              


      </FormSandBox>
     {/* TODO: hook these up  */}
      
      {/* to see raw form with complete structure */}
      {/* <button>Raw Form</button>   
    
      <button type="button" data-toggle="modal" data-target="#exampleModal">
        Paseon Form
      </button> */}
      </div>
      </div>

{/* START MODAL - TODO PUT INTO OWN COMPONENT*/}
      {/* <!-- Button trigger modal --> */}


{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Paseon Tags</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

      {elems}

        {/* <p>Copy and paste the below HTML anywhere you would like to display your new custom campaign.</p>
      &lt; PaseonForms &#47;&gt;
      <br></br>
      &lt; Script &gt;  &lt;&#47; Script &gt;       */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* END MODAL */}

{/* REORDER END */}

      <style jsx>
    {`


.sub{
  height:50px;
  //border:solid 1px black;
  position:absolute;
  top:-20px;
  right: 50px;
}

.hiddenSub{
  display: none
}

    p {
      font-size: 10px;
    }

    input, select {
        width: 100%;
        padding: 5px 20px;
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
      margin: 10px;
      position:relative;
    }
   

    .elemContainerHighlight {
      margin: 10px;
      border: 1px solid blue;
      background-color: #f2f2f2;
      cursor: grab;

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