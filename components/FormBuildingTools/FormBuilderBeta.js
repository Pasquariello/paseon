//import Layout from '../components/MyLayout';
// import LayoutApp from '../LayoutApp'



// TODO - fix the way item to edit gets set! similar to setItemToMoveIndex? 

// TODO: bug on delete last index error
import LeftBar from '../LeftBar';
import SelectBuilder from './SelectBuilder';
import InputBuilder from './InputBuilder';
import CheckBoxBuilderEdit from './FormBuilders/CheckboxBuilderEdit';
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
		id: '',
		type: 'text',
		tag: 'input',
		label: 'First Name',
		name: 'first_name',
		value: '',
		required: false,
		default: '', // LAST SPOT TOUCH
		placholder: '',
		float: 'right',
		width: 'col-md-6'
	}

	const last_name_obj = {
		id: '',
		type: 'text',
		tag: 'input',
		label: 'Last Name',
		name: 'last_name',
		value: '',
		required: false,
		placholder: '',
		float: 'left',
		width: 'col-md-6'
	}

	const phone_number_obj = {
		id: '',
		type: 'tel',
		tag: 'input',
		label: 'Phone Number',
		name: 'phone_number',
		value: '',
		required: false,
		placholder: '',
		width: 'col-md-12'
	}

	const email_obj = {
		id: '',
		type: 'email',
		tag: 'input',
		label: 'Email',
		name: 'email',
		value: '',
		required: false,
		placholder: '',
		width: 'col-md-12'
	}

	const street_address_obj = {
		id: '',
		type: 'text',
		tag: 'input',
		label: 'Street Address',
		name: 'street_address',
		value: '',
		required: false,
		placholder: '',
		width: 'col-md-12'
	}

	const city_obj = {
		id: '',
		type: 'text',
		tag: 'input',
		label: 'City',
		name: 'city',
		value: '',
		required: false,
		placholder: '',
		width: 'col-md-12'
	}
	//todo: change for select
	const state_region_obj = {
		id: '',
		type: 'text',
		tag: 'select',
		label: 'State/Region',
		name: 'state_region',
		value: '',
		options: state_names,
		required: false,
		placholder: '',
		width: 'col-md-12'
	}

	const zip_code_obj = {
		id: '',
		type: 'text',
		tag: 'input',
		label: 'Zip Code',
		name: 'zip_code_obj',
		value: '',
		required: false,
		placholder: '',
		width: 'col-md-12'
	}

	const blank_obj = { 
		id: '',
		type: 'text',
		tag: 'input',
		label: '',
		name: '',
		value: '',
		required: false,
		placholder: '',
		width: 'col-md-12'
	}


	const single_text_obj = {
		id: '',
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
		width: 'col-md-12'
	}

	const multiline_text_obj = {
		id: '',
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
		width: 'col-md-12'
	}

	const select_obj = {
		id: '',
		tag: 'select',
		label: '',
		options: [],
		name: '',
		value: '',
		required: false,
		width: 'col-md-12'
	}

	const single_checkbox_obj = {
		id: '',
		type: 'checkbox',
		tag: 'input',
		label: '',
		value: false,
		required: false,
		width: 'col-md-12'
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

	const [elemWidth, setElemWidth] = useState();
	const [elemFloat, setElemFloat] = useState();



	const [formStruct, setFormStruct] = useState([]);




		


 


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


		// todo - set input_obj id so I have a unique identifier to grab values off later

		setFormStruct([...formStruct, [input_obj]])
	}

	// console.log('FORMSTRUCT', formStruct)

	const [editToggle, setEditToggle] = useState()
    
	function openEdit(input_obj) {

		addToForm (input_obj)
      
		let lastElem = 0;

		if (campaignForm.fields.length  > 0) {
			lastElem = campaignForm.fields.length
		} 
      
		setEditToggle(lastElem)
	}



	// TODO - break out into sep components for each differnet type of thing being edited
	function editInputView() {
		const {outer, inner} = editToggle
		let copy = []
		copy = [...formStruct ]
		console.log('oh', copy[outer])


		let field;

		if (copy[outer][inner].type == 'checkbox' ) {
			field = <CheckBoxBuilderEdit  />
		} else if (copy[outer][inner].tag == 'select') {
			field = (
				<div className="form-group">
					<label htmlFor="cust_placeholder">Add Option</label> 
					<textarea 
						className="form-control" 
						id="cust_placeholder" 
						placeholder="Enter a Comma separated list for new dropdown options..."
						value={copy[outer][inner].options}
						onChange={(e)=> {
							let optionsArray = e.target.value.split(',');
							copy[outer][inner].options = optionsArray
							setCampaignForm({...campaignForm, fields:copy})
						}
						}
					></textarea>

				</div> 
			)} else if (copy[outer][inner].tag == 'input'){
				console.log('HERE')
			field = (
				<div className="form-group">
					<label htmlFor="cust_placeholder">Placeholder</label>
					<input 
						type="text"
						className="form-control" 
						id="cust_placeholder" 
						placeholder="Enter Custom Placeholder"
						value={copy[outer][inner].placeholder}
						onChange={(e)=> {
							copy[outer][inner].placeholder = e.target.value
							setCampaignForm({...campaignForm, fields:copy})
						}
						}
					></input>

					<div className="form-group">
						<label htmlFor="cust_default">Default</label>
						<input 
							type="text"
							className="form-control" 
							id="cust_default" 
							placeholder="Enter Custom Label"
							onChange={(e)=> {
								copy[outer][inner].default = e.target.value
								setCampaignForm({...campaignForm, fields:copy})
							}
							}
						></input>
					</div>
				</div>
			)
		} else {
			field = null;
		}
		
      
		// maybe pass in an object that is the schema for each type?
		// rememnber addToForm with no arg passed in created an empty field in the field list!
		return (
			<>
				<div>
					<label htmlFor="elem">Edit {copy[outer][inner].label} </label>
					<div style={{float: 'right'}} onClick={()=>setEditToggle() }>
						<button className="btn-outline-danger btn-circle btn-sm">X</button>
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
							value={copy[outer][inner].label}
							onChange={(e)=> {
								copy[outer][inner].label = e.target.value
								setCampaignForm({...campaignForm, fields:copy})
							}
              
							} 
						></input>
					</div>

              
					{ field // TODO - RENAME
					}

					{console.log('copy[index].required', copy[outer][inner].required)}

					<div className="custom-control custom-switch">
     
						<input 
							onChange={()=> {
								copy[outer][inner].required = !copy[outer][inner].required
								setCampaignForm({...campaignForm, fields:copy})

							}
              
							} 
							type="checkbox" 
							checked={copy[outer][inner].required}
							className="custom-control-input" 
							id="customSwitch1"
						></input>
						<label className="custom-control-label" htmlFor="customSwitch1">Make This Field  Require</label>

					</div>

					

					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
				<style jsx>{`

					.btn-circle.btn-sm { 
						width: 30px; 
						height: 30px; 
						padding: 4px 0px; 
						border-radius: 15px; 
						font-size: 10px; 
						text-align: center; 
					} 
					
				`}</style>
			</>
		)

	}

	function removeOne(e, index, val) {
		e.stopPropagation()
		e.preventDefault();

		setEditToggle();

		// let newList = formStruct.map(k => k.filter(e => e[index] !== index));
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
									<${field.tag} 
										type="${(field.type ? field.type : '')}" 
										${field.required ? 'required' : ''}
										placeholder="${(field.placeholder ? field.placeholder : '')}"
									>
									</${field.tag}>
								`}
								<br></br>
							</div>
						) 
					})}
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
	}

	function dragLeave(event, index){
		event.preventDefault();
		setActiveDropZone(null)
	}

 

	function dragStart(event, outer, inner) {
		setItemToMoveIndex({outer, inner});
		setInitDrag(true);
		//set all inputs to disabled

		event
			.dataTransfer
			.setData('text/plain', event.target.id);
	}

	function dragEnd(event, index) {
		setInitDrag(false);
		// console.log('initDrag', initDrag)
  
	}

	function newDropLeft (event, outerIndexTo, innerIndexTo) {
		//outerIndexTo will be the row index we are moving the element to
		//innerIndexTo will be the position/index in the row that it is being moved into

		let arrayCopy = formStruct; // going to/manipulating this
		let elementFrom = formStruct[itemToMoveIndex.outer][itemToMoveIndex.inner] // this is the element being dragged

		let rowTo = arrayCopy[outerIndexTo]; // this is the row we are moving the element into this is the same as arrayCopy[outerIndexTo]
		console.log('elementFrom', elementFrom)
		console.log('rowFrom', itemToMoveIndex.outer)


		//rowTo.splice(itemToMoveIndex.outer, 1);
		arrayCopy.splice(itemToMoveIndex.outer, 1);

		arrayCopy[outerIndexTo].splice(innerIndexTo, 0, elementFrom);

		setFormStruct(arrayCopy)
		event
			.dataTransfer
			.clearData();
	}

	console.log('FORMSTRUCT!!!!', formStruct)

	function newDrop(event, index){
		console.log('BEAR',  itemToMoveIndex.outer)

		let arr = formStruct; //TODO rename
		// needed to preserve order of where dropping
		if (index > itemToMoveIndex.outer && index != 0) {
			index = index - 1
		} 

		var element = arr[itemToMoveIndex.outer][itemToMoveIndex.inner];
		
		if (arr[itemToMoveIndex.outer].length === 1) {
			arr.splice(itemToMoveIndex.outer, 1);
		} else {
			arr[itemToMoveIndex.outer].splice(itemToMoveIndex.inner, 1);
		}
		
		arr.splice(index, 0, [element]);

		// arr.splice(index, 0, arr.splice(itemToMoveIndex, 1)[0]);  
		setFormStruct([...arr])
		event
			.dataTransfer
			.clearData();
	}

//  WORKS WELL ISH FOR COLUUMNS!!!!
	// function newDrop(event, index){
	// 	console.log(itemToMoveIndex)

	// 	let arr = formStruct; //TODO rename
	// 	// needed to preserve order of where dropping
	// 	if (index > itemToMoveIndex.outer && index != 0) {
	// 		index = index - 1
	// 	} 

	// 	var element = arr[itemToMoveIndex.outer][itemToMoveIndex.inner];

	// 	// arr.splice(itemToMoveIndex.outer, 1);
	// 	// arr.splice(index, 0, element);
	// 	arr[index].push(element)

	// 	// arr.splice(index, 0, arr.splice(itemToMoveIndex, 1)[0]);  
	// 	setFormStruct([...arr])
	// 	event
	// 		.dataTransfer
	// 		.clearData();
	// }


	function drop(event, index) {
		setActiveDropZone(null);
		let arr = campaignForm.fields; //TODO rename

		// needed to preserve order of where dropping
		if (index < itemToMoveIndex && index != 0) {
			index = index + 1
		}

		



		var element = arr[itemToMoveIndex];
		// console.log('arr', arr)
		// console.log('element', element)


		arr.splice(itemToMoveIndex, 1);
		arr.splice(index, 0, element);

		setCampaignForm({...campaignForm, fields:arr}) 

    
		event
			.dataTransfer
			.clearData();
	}

	// taylor - TODO 
	const renderDynamicFields = (item) => {

		return (
			<div>
				
				{/* TODO- move out of return */}
				{item.tag == 'input' && <input className='input' placeholder={item.placeholder} disabled={initDrag} type={item.type} value={item.default}></input>  }
				{item.tag == 'textarea' && <textarea></textarea> }

				{ item.tag == 'select' && <select className="select" id="elem" name="elem">
					{ item.options ? 
						item.options.map((value, index) => {
							return (
								<option key={index} value={value}>{value}</option>
							)
						}) : <option></option>
					}  
							
				</select> 
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


	// TODO - make constents for col-md-12 and col-md-6
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
					onDrop = {(event) => {
						//campaignForm.fields[itemToMoveIndex].width = 'col-md-12'
						// TODO - figure out why above two lines work but setting state does not
						// setCampaignForm({...campaignForm.fields[itemToMoveIndex], width: 'col-md-12'})
						newDrop(event, index)
						//drop(event, index)
					}}
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

	const fieldList = [...campaignForm.fields];
    
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


	async function handleSubmit (e) {
		e.preventDefault()
  
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

							<div className="col-md-4 mb-4" onClick={()=>openEdit(single_checkbox_obj)}>
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

     

					<FormSandBox>
						{/* <button onClick={(e)=>clearList(e)}>x</button> */}



						<button className="btn btn-outline-info" style={{margin: '10px'}} type="button" data-toggle="modal" data-target="#saveModal">Save</button>   

						<button className="btn btn-outline-info" style={{margin: '10px'}} type="button" data-toggle="modal" data-target="#previewFormModal">
  Preview
						</button>

						<button className="btn btn-outline-info" style={{margin: '10px'}} type="button" data-toggle="modal" data-target="#rawFormModal">Raw Form</button>   

						<button className="btn btn-outline-info" style={{margin: '10px'}} type="button" data-toggle="modal" data-target="#paseonFormModal">
  Paseon Form
						</button>

						<br/><br/>


						<div className="btn-group btn-group-toggle" data-toggle="buttons">
							<button 
								className="btn btn-secondary" 
								onClick={(e)=>clearList(e)}
							>
								<FontAwesomeIcon fixedWidth width="0" icon={faTrashAlt} />
							</button>
							<button className="btn btn-secondary">
								<FontAwesomeIcon fixedWidth width="0" icon={faInfoCircle}></FontAwesomeIcon>
							</button> {/* TODO - add in tool tip ... maybe link, on hover*/}
						</div>

						{/* REORDER START */}
						<div style={{marginTop: '20px', border: '1px solid green'}}>
							{/* <div className="col-md-12"> */}
							{/* {dropzone(0)} */}
							{ formStruct.map((row, index) => {
							//fieldList.map((item, index) => (  ==== working
								console.log('row', row)
								// console.log('ITEM', row)
								return ( 
									<div key={index} className="row">
										{dropzone(index)} 
										{row.map((col, i) => {
											return (
												<motion.div
													key={i} 
													className={row.length === 1 ? 'col-md-12': 'col-md-6'}
													initial={{ scale: 0 }}
													animate={{  scale: 1 }}
													transition={{
														type: "spring",
														stiffness: 260,
														damping: 20
													}}
													style={{ display: 'inline-block'}}
												>


													<div
														//style={{ display: 'flex', flexDirection: 'row', padding: '10px'}}
														className={buildContainerClasses(index + i)} // TODO - wth is this
													> {index}

														{/* left dropzone */}
														<div
															
															style={{display: 'inline-block', width: '10px', height: '10px', border: '1px dashed blue'}}
															onDragOver={(event) => dragOver(event, i)}
															onDragLeave={(event) => dragLeave(event, i)}
															onDrop = {(event) => {
													
																newDropLeft(event, index, i)
																//drop(event, index)
															}}
															//onMouseEnter = {() => setActiveDropZone(index), console.log('enter!', activeDropZone)}
															//style={{minHeight: '10px', width:'100%', border: '1px dashed blue'}}
														></div> 


														<div 
															id={`draggableSpan`}
															draggable='true'
															onDragStart={(event) => dragStart(event, index, i)}
															onDragEnd={(event) =>  dragEnd(event, i)}
															//style={{width:'100%'}}
															onMouseEnter={() => setEditItemDetails(index + i)}
															onMouseLeave={() => setEditItemDetails(null)}  
															onClick={()=> {
																setEditToggle({outer:index, inner: i})
															}}
														>


															<div className={(editItemDetails == index + i ? 'sub' : 'hiddenSub')}>

																<div className="btn-group btn-group-toggle" data-toggle="buttons">
																	<button 
																		className="btn btn-secondary" 
																		onClick={()=> {setEditToggle({outer:index, inner: i})}}
																	>
																		<FontAwesomeIcon fixedWidth width="0" icon={faEdit} />
																	</button>
																	<button 
																		className="btn btn-secondary" 
																		onClick={(e)=>removeOne(e, [index][i], col)}
																	>
																		<FontAwesomeIcon fixedWidth width="0" icon={faTrashAlt} />
																	</button>
																</div>
															</div>

															<div>
																<label style={{fontSize: '11px'}}>{col.label} {(col.required ? '*' : null)}</label>
																{/* start dynamically added fields - right panel */}
																{renderDynamicFields(col)}
															</div>

														</div>

														{/* right dropzone */}
														{/* <div 
	style={{width: '10px', height: 'auto',border: '1px dashed blue'}}
	onDragOver={(event) => dragOver(event, index)}
	onDragLeave={(event) => dragLeave(event, index)}
	onDrop = {(event) => drop(event, index)}
//onMouseEnter = {() => setActiveDropZone(index), console.log('enter!', activeDropZone)}
//style={{minHeight: '10px', width:'100%', border: '1px dashed blue'}}
></div>  */}

													</div>
													
													{/* {(fieldList[index + 1 ] && item.width === 'col-md-12' && fieldList[index + 1 ].width !== 'col-md-12') && dropzone(index+1)} */}
													{/* {item.width === 'col-md-12' && dropzone(index)} */}


												</motion.div>
												
											)
										})}


									</div>
								)
							
							})}
							{/* </div> */}
						</div>


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
			<div className="modal fade" id="paseonFormModal" tabIndex="-1" role="dialog" aria-labelledby="paseonFormModal" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="paseonFormModalLabel">Paseon Tags</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">

							{`<paseon-form></paseon-form>`}

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

			{/* <!-- Modal --> */}
			<div className="modal fade" id="previewFormModal" tabIndex="-1" role="dialog" aria-labelledby="paseonFormModal" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="previewFormModalLabel">Preview</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">


							{/* PREVIEW FORM */}

							{
								!fieldList.length ? 'Start using the form building tool to see what your form will look like!' :
									<div className="row">
										{fieldList.map((item, index) => {
											return (
												<div key={index} className={item.width}>
													<label style={{fontSize: '11px'}}>{item.label} {(item.required ? '*' : null)}</label>
													{renderDynamicFields(item)}
												</div>
											)
										})}
									</div>
							} 


						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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
							<input className="input" onChange={(e)=>setCampaignForm({...campaignForm, campaign_name:e.target.value })}></input>

      

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
      border: 1px solid red;
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



