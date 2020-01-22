//import Layout from '../components/MyLayout';
// import LayoutApp from '../LayoutApp'

// TODO: bug on delete last index error
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
import { motion } from "framer-motion";

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import getUrl  from '../../utils/getUrl';



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

const multiline_text_obj = {
  tag: 'textarea',
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

const select_obj = {
  tag: 'select',
  label: '',
  options: [],
  name: '',
  value: '',
  required: false,
}

const single_checkbox_obj = {
  tag: 'select',
  label: '',
  options: [],
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
      campaign_name: '',
      fields: []
  }
)

const [campaignName, setCampaignName] = useState()

const [editItemDetails, setEditItemDetails] = useState()

const [itemToMoveIndex, setItemToMoveIndex] = useState();

const [activeDropZone, setActiveDropZone] = useState();

const [initDrag, setInitDrag] = useState();




 


/////////////////////////////
/////////////////////////////
/////////////////////////////



    function clearList(e){
      e.preventDefault();
      setCampaignForm({...campaignForm, fields: []})      

    }


    function addToForm (input_obj, tag) {
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
      
      let index = editToggle
      let edit_obj = campaignForm.fields[index]

      let copy = []
      copy = [...campaignForm.fields ]

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


          { copy[index].tag == 'select' ? 
            
            <div className="form-group">
              <label htmlFor="cust_placeholder">Add Option</label> 
              <textarea 
                // type="text" 
                className="form-control" 
                id="cust_placeholder" 
                placeholder="Enter a Comma separated list for new dropdown options..."
                value={copy[index].options}
                onChange={(e)=> {
                  let optionsArray = e.target.value.split(',');
                  copy[index].options = optionsArray
                  setCampaignForm({...campaignForm, fields:copy})
                  }
                }
              ></textarea>
              {/* <button
                onClick={(e)=> {
                  e.preventDefault();
                 
                  let optionsArray = e.target.value.split(',');
                  console.log('optionsArray', optionsArray)
                  copy[index].options = optionsArray
                  setCampaignForm({...campaignForm, fields:copy})
                }}
              >add</button> */}

            </div> 
           
           :

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

          }

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
      e.stopPropagation()
      e.preventDefault();
      setEditToggle()
      let newList = campaignForm.fields.filter((item, i) =>  i != index)
      setCampaignForm({...campaignForm, fields:newList}) 

    }


    function transfromJSONtoHTMLStringORIG() {

      if (campaignForm.fields.length) {

        return ( 
          <div>
            {`<form>`} <br></br>
            
          
            {campaignForm.fields.map((field, index) => {                       
                  return (
                  <div key={index} >&nbsp; {/* ADDS SPACE*/}
                    {`
                    
                    <label>${field.label}</label>
                    <${field.tag} type="${(field.type ? field.type : null)}"></${field.tag}>
                  `}
                  <br></br>
                  </div>
                ) 
          
              
              
              })  }
              
            
          
            {`</form>`}

          </div>

        )
      } else {
            return `Start using the form building tool to see what your raw HTML will look like!`
          }

    }


    function transfromJSONtoHTMLString() {

      if (campaignForm.fields.length) {

        return ( 
          `
            <form>
            
           
            ${campaignForm.fields.map((field, index) => {                       
                  return ( 
                  `
                    <label>${field.label}</label>
                    <${field.tag} type="${(field.type ? field.type : null)}"></${field.tag}>
                  `
                ) 
              })  
        }
              <form>`

        )
      } else {
            return `Start using the form building tool to see what your raw HTML will look like!`
          }

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

// taylor
    const renderDynamicFields = (item) => {
      console.log('yol')

      // let obj = {

      //   input: <input className='input' disabled={initDrag} type={item.type} ></input>,
      //   textarea: <textarea></textarea>,
      //   select: <select className="select" id="elem" name="elem">

       
      //   { item.options ? 
      //   item.options.map((value, index) => {
      //     // console.log('item',item)
      //     return (
      //       <option>{value}</option>
      //      )
      //   }) : <option></option>
      //   }  
      // </select>

      // }
      // return obj[item.tag]
      console.log(item)
     return (
      <div>
      {
      item.tag == 'input' ? <input className='input' disabled={initDrag} type={item.type} ></input> :
      item.tag == 'select' ? <select className="select" id="elem" name="elem">
        { item.options ? 
        item.options.map((value, index) => {
          console.log('item',item)
          return (
            <option>{value}</option>
           )
        }) : <option></option>
        }  
      </select> :
      item.tag == 'textarea' ? <textarea></textarea> : null
      }

<style jsx>
    {`

    input, select, textarea {
        width: 100%;
        padding: 5px 20px;
        margin: 8px 0;
        display: block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    `}
    </style>

     </div>
     )
      

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
          className={classes}
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


let lastElem = campaignForm.fields.length - 1;

let elems = transfromJSONtoHTMLString();




async function handleSubmit (e) {
  e.preventDefault()
  console.log('hit handle submit!', campaignForm)
  
  // setUserData(Object.assign({}, userData, { error: '' }))
  let form = campaignForm
  //const username = userData.username

  //let url = `${getUrl}/campaign/new_campaign/${props.userId}`
  let url = `${getUrl}/campaign/new_campaign/2`

  try {
      console.log('try', url)
    const response = await fetch(url, {
      
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(campaignForm)
    }).then(response => response.json())
    .then(data => {console.log('data', data)
    console.log('icoming data',data)

    dispatch({
      type: 'ADD_CAMPAIGN',
      payload: data[0]
    });
      })
  } catch (error) {
    console.error(
      'You have an error in your code or there are Network issues.',
      error
    )

    const { response } = error

  }
}



  return (
    <>

      <div className="flex-grid">
        <div className="col-33">
          {/* Remove this container div */}
      <LeftBar> 
        {editToggle != null && campaignForm.fields.length ? editInputView() : null}
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

      <div className="col-md-4 mb-4" onClick={() => openEdit(multiline_text_obj)}>
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-title">Multi Line</p>
            </div>
        </div>
      </div>

      <div className="col-md-4 mb-4" onClick={() => openEdit(select_obj)}>
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
        {/* {(elem === 'select' ? <SelectBuilder parentCallback={mycallback}></SelectBuilder> : null)}
        {(elem === 'text' ? <InputBuilder parentCallback={mycallback}></InputBuilder> : null)} */}

        
      </LeftBar>
</div>

      <div className="col">
        {/* DO I STILL NEED THIS ? */}

      <button type="button" data-toggle="modal" data-target="#saveModal">Save</button>   

      <button type="button" data-toggle="modal" data-target="#rawFormModal">Raw Form</button>   
  
      <button type="button" data-toggle="modal" data-target="#paseonFormeModal">
        Paseon Form
      </button>

<FormSandBox>
{/* <button onClick={(e)=>clearList(e)}>x</button> */}
<div className="btn-group btn-group-toggle" data-toggle="buttons">
<button 
  className="btn btn-secondary" 
  // onClick={(e)=>removeOne(e, index, item)} // here!
  onClick={(e)=>clearList(e)}
>
  <FontAwesomeIcon fixedWidth width="0" icon={faTrashAlt} />
</button>
<button className="btn btn-secondary">
  <FontAwesomeIcon fixedWidth width="0" icon={faInfoCircle}></FontAwesomeIcon>
</button> {/* TODO - add in tool tip ... maybe link, on hover*/}
</div>
{/* REORDER START */}


{fieldList.map((item, index) => (  
  <motion.div
  initial={{ scale: 0 }}
  animate={{  scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>
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
    onClick={()=> {setEditToggle(index)}}
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
{/* start dynamically added fields - right panel */}
      
      {renderDynamicFields(item)}
    
    {/* {(item.tag == 'select' ? 
      <select id="elem" name="elem" onChange={handleElemSelect}>
        {item.options.map((value, index) => {
          console.log('item',item)
          return (
            <option key={index}>{value}</option>
          )

        })} 
      </select>
    : <input disabled={initDrag} type={item.type} ></input> )} */}
{/* end dynamically added fields - right panel */}

  </div>

</div>
</motion.div>
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
<div className="modal fade" id="rawFormModal" tabIndex="-1" role="dialog" aria-labelledby="rawFormModal" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="rawFormModalLabel">Paseon Tags</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

      {transfromJSONtoHTMLStringORIG()}

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


{/* <!-- Modal --> */}
<div className="modal fade" id="paseonFormeModal" tabIndex="-1" role="dialog" aria-labelledby="paseonFormeModal" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="paseonFormeModalLabel">Paseon Tags</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

 
 {/* PREVIEW FORM */}
{/* 
      {fieldList.map((item, index) => {
          return (
            <>
              <label style={{fontSize: '11px'}}>{item.label} {(item.required ? '*' : null)}</label>
              {renderDynamicFields(item)}
            </>
          )
        }
        )} 
*/}

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" >Save changes</button>
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="saveModal" tabIndex="-1" role="dialog" aria-labelledby="saveModal" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="saveModalLabel">Save Campaign</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

      
        <label style={{fontSize: '11px'}}>Campaign Name</label>
        <input class="input" onChange={(e)=>setCampaignForm({...campaignForm, campaign_name:e.target.value })}></input>

      

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Save Campaing</button>
      </div>
    </div>
  </div>
</div>

{/* END MODALs */}


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

    .input, select {
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
      // display: flex;
      flex-direction: column;
      flex-basis: 100%;
      flex: 2;
    }

    .col-30 {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      flex: 1;
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