/* eslint-disable react/prop-types */
// TODO - fix the way item to edit gets set! similar to setItemToMoveIndex? 
// TODO: bug on delete last index error
// TODO - set open edit toggle to ID!


//todo currently edit togggle gets set to an object - this works for the initial setting of the form input objects so they can be 'edited' 
// this does NOT work for updating formStruct

import LeftBar from '../LeftBar';
import FormSandBox from '../FormSandBox';

import React, { useEffect, useState } from 'react';
import getUrl  from '../../utils/getUrl';

import classNames from 'classnames'
import {states} from '../../utils/states';

//TODO: reflect edit field changes in paseon and raw form HTML view
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
// import { motion } from "framer-motion";
import uuid from 'react-uuid'

import Browser from '../Assets/Broswer';
import EditFormFields from './EditFormFields';

import CheckBoxBuilderEdit from '../FormBuildingTools/CheckboxBuilder'


export default function FormBuilderBeta({data, userId}) {
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
		placeholder: '',

	}

	const last_name_obj = {
		id: '',
		type: 'text',
		tag: 'input',
		label: 'Last Name',
		name: 'last_name',
		value: '',
		required: false,
		placeholder: '',
		float: 'left',
	}

	const phone_number_obj = {
		id: '',
		type: 'tel',
		tag: 'input',
		label: 'Phone Number',
		name: 'phone_number',
		value: '',
		required: false,
		placeholder: '',
	}

	const email_obj = {
		id: '',
		type: 'email',
		tag: 'input',
		label: 'Email',
		name: 'email',
		value: '',
		required: false,
		placeholder: '',
	}

	const street_address_obj = {
		id: '',
		type: 'text',
		tag: 'input',
		label: 'Street Address',
		name: 'street_address',
		value: '',
		required: false,
		placeholder: '',
	}

	const city_obj = {
		id: '',
		type: 'text',
		tag: 'input',
		label: 'City',
		name: 'city',
		value: '',
		required: false,
		placeholder: '',
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
		placeholder: '',
	}

	const zip_code_obj = {
		id: '',
		type: 'text',
		tag: 'input',
		label: 'Zip Code',
		name: 'zip_code_obj',
		value: '',
		required: false,
		placeholder: '',
	}

	const single_text_obj = {
		id: '',
		type: 'text',
		tag: 'input',
		label: '',
		placeholder: '',
		placeholder2: {
			name: 'Placeholder',
			value: ''
		},
		name: '',
		value: '',
		required: false,
	}

	const multiline_text_obj = {
		id: '',
		tag: 'textarea',
		label: '',
		placeholder: '',
		placeholder2: {
			name: 'Placeholder',
			value: ''
		},
		name: '',
		value: '',
		required: false,
	}

	const select_obj = {
		id: '',
		tag: 'select',
		label: '',
		options: [],
		name: '',
		value: '',
		required: false,
	}

	const single_checkbox_obj = {
		id: '',
		type: 'checkbox',
		tag: 'input',
		label: '',
		value: false,
		required: false,
	}



	///////////////////////////////////////
	////////END INPUT OBJECTSSSSSS/////////
	///////////////////////////////////////

	/////state values
	const [campaignForm, setCampaignForm] = useState(
		{ 
			campaign_name: data.data_schema ? data.data_schema[0].campaign_name : '',
			form_type: '',
			email_bool: 'no',
			shareable: 'no',
			recipient_email: '', 
		}
	)

	const initialFormdShema = data.data_schema ? data.data_schema[0].form_schema : []

	const [editItemDetails, setEditItemDetails] = useState({outer: null, inner: null})
	const [itemToMoveIndex, setItemToMoveIndex] = useState({outer: null, inner: null});
	const [fieldToEditIndecies, setFieldToEditIndecies] = useState({outer: null, inner: null});

	const [activeDropZone, setActiveDropZone] = useState();
	const [initDrag, setInitDrag] = useState();
	// TODO - keep this but remove campainForm fields array
	const [formStruct, setFormStruct] = useState(initialFormdShema);
	const [editToggle, setEditToggle] = useState()

	const [recipientEmailToggle, setRecipientEmailToggle] = useState()

	function clearList(e){
		e.preventDefault();
		setFormStruct([]);      

	}

	function addToForm (input_obj) {
		input_obj.id = uuid();
		console.log('addToForm')
		// if (!input_obj.label) {
		// 	setEditToggle(input_obj)
		// }
		window.scrollTo(0,document.body.scrollHeight);

		// todo - set input_obj id so I have a unique identifier to grab values off later
		setFormStruct([...formStruct, [input_obj]])
	}

	function handleEditFieldData(e) {
		const {outer, inner} = fieldToEditIndecies;

		let newArr = [...formStruct]; 
		newArr[outer][inner][e.target.name] = e.target.value;
		setFormStruct(newArr);
	}

	// TODO - break out into sep components for each differnet type of thing being edited
	function renderEditInputView() {

		
		const {outer, inner} = fieldToEditIndecies;
		const activeField = formStruct[outer][inner]
		
		let field;

		if (activeField.type == 'checkbox' ) {
			field = <CheckBoxBuilderEdit  />
	
		} else if (activeField.tag == 'select') {
			field = (
				<div className="form-group">
					<label htmlFor="cust_placeholder">Add Option</label> 
					<textarea 
						className="form-control" 
						id="cust_placeholder" 
						placeholder="Enter a Comma separated list for new dropdown options..."
						value={activeField.options}
						onChange={(e)=> {
							let optionsArray = e.target.value.split(',');
							activeField.options = optionsArray
						}
						}
					></textarea>

				</div> 
			)} else if (activeField.tag == 'input'){
			field = (
				<div className="form-group">
					<label htmlFor="cust_placeholder">Placeholder</label>
					<input 
						type="text"
						className="form-control" 
						id="cust_placeholder" 
						placeholder="Enter Custom Placeholder"
						value={activeField.placeholder}
						name="placeholder"
						onChange={handleEditFieldData}
					></input>

					<div className="form-group">
						<label htmlFor="cust_default">Default</label>
						<input 
							type="text"
							className="form-control" 
							id="cust_default" 
							placeholder="Default Field Value"
							name="default"
							onChange={handleEditFieldData}
						></input>
					</div>
				</div>
			)
		} else {
			field = null;
		}
		// rememnber addToForm with no arg passed in created an empty field in the field list!
		return (
			<>
				<div>
					<label htmlFor="elem">Edit: {activeField.label} </label>
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
							value={activeField.label}
							name="label"
							onChange={handleEditFieldData}
						></input>
					</div>

              
					{ field // TODO - RENAME
					}


					<div className="custom-control custom-switch">
     
						<input 
							onChange={(e)=> {
								activeField.required = !activeField.required
								handleEditFieldData(e)
							}
              
							} 
							type="checkbox" 
							checked={activeField.required}
							className="custom-control-input" 
							id="customSwitch1"
						></input>
						<label className="custom-control-label" htmlFor="customSwitch1">Make This Field  Required</label>

					</div>

					{/* TODO - will I need this button ? */}
					{/* <button type="submit" className="btn btn-outline-primary">Submit</button> */}
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

	

	// TODO- needs work
	function removeOne(e, outerIndex, innerIndex) {
		e.stopPropagation()
		e.preventDefault();

		setEditToggle();

		let newList = formStruct.map((row, rowIndex) =>  {
			if (rowIndex === outerIndex ) {
				return row.filter((colItem, colIndex) => colIndex !== innerIndex)
			} else {
				return row
			}
		}).filter(x => x.length);


		setFormStruct(newList) 
	}

	// TODO - rewrite to match edit zone
	function transfromJSONtoHTMLStringORIG() {
		// TAYLOR

		if	(formStruct.length) { 

		
			return ( 
				formStruct.map((row, index) => {

					return ( 
						<div key={index} 
							className="flex-container"
						>
							{row.map((col, i) => {
								return (
									<div key={i} >&nbsp;   {/* Adds a Space */}
										{`
										<label>${col.label}</label>
										<${col.tag} 
											type="${(col.type ? col.type : '')}" 
											${col.required ? 'required' : ''}
											placeholder="${(col.placeholder ? col.placeholder : '')}"
										>
										</${col.tag}>
									`}
										<br></br>
									</div>
								)
							})}
						</div>
					)
				})
			)
		}  else {
			return `Start using the form building tool to see what your raw HTML will look like!`
		}

	}

	//////// DRAG FUNCTIONS
	function dragOver(event, position) {
		event.preventDefault();
		setActiveDropZone(position)
	}

	function dragLeave(event){
		event.preventDefault();
		setActiveDropZone()
	}

 

	function dragStart(event, outer, inner) {
		setItemToMoveIndex({outer, inner});
		setInitDrag(true);
		//set all inputs to disabled

		event
			.dataTransfer
			.setData('text/plain', event.target.id);
	}

	function dragEnd() {
		setInitDrag(false);  
	}

	// RENAME - COL DROP? 
	function newDropLeft (event, outerIndexTo, innerIndexTo) {
		event.preventDefault();
		setInitDrag();
		

		setActiveDropZone();
		//outerIndexTo will be the row index we are moving the element to
		//innerIndexTo will be the position/index in the row that it is being moved into
		let arrayCopy = formStruct; // going to/manipulating this
		let elementFrom = formStruct[itemToMoveIndex.outer][itemToMoveIndex.inner] // this is the element being dragged

		

		if (innerIndexTo > itemToMoveIndex.inner && innerIndexTo != 0) {
			innerIndexTo = innerIndexTo -1;
		} 

		if (itemToMoveIndex.outer !== outerIndexTo) {
			innerIndexTo = innerIndexTo  - 1;
		}

		// TODO add check IF FROM OTHER ROW
		

		//innerIndexTo = innerIndexTo - 1

		if (arrayCopy[outerIndexTo].length < 1){
			arrayCopy.splice(itemToMoveIndex.outer, 1);
		} else {
			arrayCopy[itemToMoveIndex.outer].splice(itemToMoveIndex.inner, 1);
		}
		// MUST BE AFTER ABOVE STUFF SPLICE
		arrayCopy[outerIndexTo].splice(innerIndexTo, 0, elementFrom);

		// Clean up all empty rows
		arrayCopy = arrayCopy.filter(function(x) {
			return x.length;
		});

		setFormStruct(arrayCopy)
		event
			.dataTransfer
	}

	function bottomDrop(event) {
		event.preventDefault();

		setInitDrag();
		setActiveDropZone(null);

		let arr = formStruct; //TODO rename
		
		const element = arr[itemToMoveIndex.outer][itemToMoveIndex.inner];
		
		arr.push([element]);
	
		if (arr[itemToMoveIndex.outer].length === 1) {
			arr.splice([itemToMoveIndex.outer], 1);
		} else {
			arr[itemToMoveIndex.outer].splice(itemToMoveIndex.inner, 1);
		}
		
		setFormStruct([...arr])
		event
			.dataTransfer
			//.clearData(); - breaks fire fox
	}


	// RENAME - ROW DROP? 
	function newDrop(event, index){
		event.preventDefault();
		setInitDrag();
		setActiveDropZone();

		let arr = formStruct; //TODO rename
		// needed to preserve order of where dropping
		if (arr[itemToMoveIndex.outer].length === 1 && index > itemToMoveIndex.outer && index != 0) {
			index = index - 1
		} 

		var element = arr[itemToMoveIndex.outer][itemToMoveIndex.inner];
		
		if (arr[itemToMoveIndex.outer].length === 1) {
			arr.splice(itemToMoveIndex.outer, 1);
		} else {
			arr[itemToMoveIndex.outer].splice(itemToMoveIndex.inner, 1);
		}
		
		arr.splice(index, 0, [element]);

		setFormStruct([...arr])
		event
			.dataTransfer
			//.clearData();
	}


	// taylor - TODO make sep component
	const renderDynamicFields = (item,  disabled) => {

		return (
			<div>
				{/* TODO- move out of return */}
				{item.tag == 'input' && <input className='input' placeholder={item.placeholder} disabled type={item.type} value={item.default}></input>  }
				{item.tag == 'textarea' && <textarea disabled></textarea> }

				{ item.tag == 'select' && <select className="select" id="elem" name="elem" disabled >
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

						input, select, textarea[type="text"]:disabled {
							background: #fff;
						}
    				`}
				</style>

			</div>
		)
	}

	function leftDropZone(outerIndex, innerIndex) {
		let classes = classNames(
			{
				'hoverDropZone': activeDropZone == `${outerIndex}${innerIndex}`, //'hoverDropZone': activeDropZone == outerIndex,
				'dropZone': initDrag,
				'dropZoneHide' :!initDrag
			}
		);
		return (
			<>
				<div
					className={classes}
					onDragOver={(event) => dragOver(event, `${outerIndex}${innerIndex}`)}
					onDragLeave={(event) => dragLeave(event)}
					onDrop = {(event) => {
						newDropLeft(event, outerIndex, innerIndex)
					}}
				></div> 
				<style jsx>
					{`
						.dropZone {
							height: auto;  
							width: 10px;
							border: 1px dashed blue;
							visibility: visible;
						}

						.dropZoneHide {
							visibility: hidden;
						}

						.hoverDropZone {
							background-color: pink;						
						}
					`}
				</style>
			</>
		)
	}

	// TODO - make constents for col-md-12 and col-md-6
	function dropZoneRow(index, pos) {

		let classes = classNames(
			{
				'hoverDropZone': activeDropZone == `${index}`,
				'dropZone': initDrag,
				'dropZoneHide' :!initDrag
			}
		);

		return (
			<>
				<div 
					className={classes}
					onDragOver={(event) => dragOver(event, `${index}`)}
					onDragLeave={(event) => dragLeave(event)}
					onDrop = {(event) => {
						pos === 'top' ? newDrop(event, index) : bottomDrop(event)
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


	function buildContainerClasses(position) {

		return classNames(
			'elemContainer',
			{
				'elemContainerHighlight': editItemDetails.outer == position.outer && editItemDetails.inner == position.inner,
			}
		);
	}


	async function handleSubmit (e) {
		e.preventDefault()

		let url = `${getUrl}/campaign/${userId}`

		const method = campaignId === 'new' ? 'POST' : 'PUT'
		try {
			console.log('try', url)
			const response = await fetch(url, {
            
				method,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					campaign_name: campaignForm.campaign_name,
					recipient_email: campaignForm.recipient_email,
					fields: formStruct
				}
					
				)
			}).then(response => response.json())
				.then(data => {console.log('data', data)
					console.log('icoming data',data)

					// dispatch({
					// 	type: 'ADD_CAMPAIGN',
					// 	payload: data[0]
					// });
				})
		
		} catch (error) {
			console.error(
				'You have an error in your code or there are Network issues.',
				error
			)
    
			const { response } = error

		}
	}
	

	function handleSelectFormType(e) {
		
		e.target.value === 'basic_contact' && setRecipientEmailToggle(true);

		// THIS WILL NEED TO BE FETCHED DATA AT SOME POINT
		let basic_forms = {
			basic_contact: [
				[{...email_obj, name: 'email',  required: true}],
				[{...single_text_obj, label: 'Subject', name: 'subject'}],
				[{...multiline_text_obj, label: 'Body', name: 'body', required: true}]
			],
			basic_rsvp: [
				[{...first_name_obj, name: 'First Name', rquired: true}, {...last_name_obj, name: 'Last Name', rquired: true}],
				[{...email_obj, name: 'email',  required: true}],
				[{...phone_number_obj, label: 'Phone', name: 'phone', required: true}],
				[{...single_text_obj, label: 'Count', name: 'count', required: true, type: 'number'}]
			],
		}
		
		setCampaignForm({...campaignForm, form_type: e.target.value})
		setFormStruct([...formStruct, ...basic_forms[e.target.value]]);
		
	}

	// REMEMBER -  https://stackoverflow.com/questions/21868610/make-column-fixed-position-in-bootstrap
	return (
		<>
			<div className="row">
				<div className="col-md-5">
					{/* Remove this container div */}
					<LeftBar> 
						<div>

							<label style={{fontSize: '11px'}}>Campaign Name</label>
							<input className="input" 
								value={campaignForm.campaign_name}
								onChange={
									(e)=>setCampaignForm({...campaignForm, campaign_name:e.target.value })
								}
							></input>

							<label style={{fontSize: '11px'}} htmlFor="formType">Form Type</label>
							<select id="formType" className="form-control" value={campaignForm.form_type} onChange={handleSelectFormType}>
								<option value="choose">Choose...</option>
								<option value="basic_contact">Basic Contact</option>
								<option value="basic_rsvp">Basic RSVP</option>
								<option value="basic_sign_up">Basic Sign Up</option>
								<option value="basic_mailing_list">Basic Mailing List</option>
								<option value="custom">Custom</option>
							</select> 	

							{recipientEmailToggle ? 
								<>
									<label style={{fontSize: '11px'}}>Recipient Email</label>
									<input className="input" 
										value={campaignForm.recipient_email}
										onChange={
											(e)=>setCampaignForm({...campaignForm, recipient_email:e.target.value })
										}
									></input> 
								</>: null }
					
							<hr/>
						</div>
						{editToggle != null && formStruct.length ? renderEditInputView() :
							<>
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

									<div className="col-md-4 mb-4" onClick={()=>addToForm(single_text_obj)}>
										<div className="card mb-4">
											<div className="card-body">
												<p className="card-title">Single Line</p>
											</div>
										</div>
									</div>

									<div className="col-md-4 mb-4" onClick={() => addToForm(multiline_text_obj)}>
										<div className="card mb-4">
											<div className="card-body">
												<p className="card-title">Multi Line</p>
											</div>
										</div>
									</div>

									<div className="col-md-4 mb-4" onClick={() => addToForm(select_obj)}>
										<div className="card mb-4">
											<div className="card-body">
												<p className="card-title">Drop Down</p>
											</div>
										</div>
									</div>

								</div>

								<div className="row"> 

									<div className="col-md-4 mb-4" onClick={()=>addToForm(single_checkbox_obj)}>
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
							</>
						}
						{/* End Advanced build tools */}
					</LeftBar>
				</div>

				<div className="col-md-7">
					<FormSandBox>

						<button className="btn btn-outline-info" style={{margin: '10px'}} type="button" onClick={handleSubmit}>Save</button>   

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
						<div style={{marginTop: '20px', marginBottom: '20px'}}>
						
							{ formStruct.map((row, index) => {
								

								return ( 
									<div key={index} 
										className="flex-container"
									>
									
										
										{( (formStruct[itemToMoveIndex.outer] && formStruct[itemToMoveIndex.outer].length !== 1 ) || (row.length !== 1 && index !== itemToMoveIndex.outer + 1) || (index !== itemToMoveIndex.outer+1  && index !== itemToMoveIndex.outer )) && dropZoneRow(index, 'top')} 

										{row.map((col, i) => {
											return (
												
												<div 
													key={col.id}
													style={{width: `${100 /row.length}%`, padding: '5px'}}
												>
											
													<div 
														style={{ display: 'flex', flexDirection: 'row', padding: '10px'}}
														className={buildContainerClasses({outer: index, inner: i})}
													> 

														{(itemToMoveIndex.outer !== index || (itemToMoveIndex.inner !== i && i !== itemToMoveIndex.inner+1) ) && leftDropZone(index, i)}
														
														<div 
															className="flex-item-full"
															id={`draggableSpan`}
															draggable='true'
															onDragStart={(event) => dragStart(event, index, i)}
															onDragEnd={() =>  dragEnd()}
															onMouseEnter={() => setEditItemDetails({outer: index, inner: i})}
															onMouseLeave={() => setEditItemDetails({outer: null, inner: null})}  
															onClick={()=> {
																setEditToggle(col)
																setFieldToEditIndecies({outer: index, inner: i});
															}}
														>


															<div className={(editItemDetails.outer == index && editItemDetails.inner == i ? 'sub' : 'hiddenSub')}>

																<div className="btn-group btn-group-toggle" data-toggle="buttons">
																	<button 
																		className="btn btn-secondary" 
																		onClick={()=> {setEditToggle(col)}}
																	>
																		<FontAwesomeIcon fixedWidth width="0" icon={faEdit} />
																	</button>
																	<button 
																		className="btn btn-secondary" 
																		onClick={(e)=>removeOne(e, index, i)}// TODO- needs work
																	>
																		<FontAwesomeIcon fixedWidth width="0" icon={faTrashAlt} />
																	</button>
																</div>
															</div>

															<div>
																<label style={{fontSize: '11px'}}>{col.label} {(col.required ? '*' : null)}</label>
																{/* start dynamically added fields - right panel */}
																{renderDynamicFields(col, false)}
															</div>

														</div>


													</div>
													{/* </motion.div> */}
												</div>
											)
										})}


									</div>
								)

								
							})}
							{/* TODO - put into var */}
							
							{(itemToMoveIndex.outer !== formStruct.length - 1 || (formStruct[itemToMoveIndex.outer] && formStruct[itemToMoveIndex.outer].length !== 1))  &&  dropZoneRow(formStruct.length, 'bottom')}
							
						</div>

					</FormSandBox>
    
    
					<button type="button" data-toggle="modal" data-target="#exampleModal">
						Paseon Form
					</button>
				</div>
			</div>

			{/* START MODAL - TODO PUT INTO OWN COMPONENT*/}

			{/* <!-- Modal --> */}
			<div className="modal fade" id="rawFormModal" tabIndex="-1" role="dialog" aria-labelledby="rawFormModal" aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
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
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="paseonFormModalLabel">Paseon Tags</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div style={{margin: '20px'}}>
								{`<script type="module" src="https://paseon-forms.web.app/src/paseonForm.js">`}
							</div>
							<div style={{margin: '20px'}}>
								{`<paseon-form></paseon-form>`}
							</div>
							{/* PREVIEW FORM */}

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
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="iewFormModalLabel">Preview</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{/* TODO toggle active */}
							<div style={{marginBottom: '50px'}}>
								<div className="btn-group btn-group-toggle" data-toggle="buttons">
									<button 
										className="btn btn-outline-primary active" 
										onClick={()=>{}}
									>
									Desktop
									</button>
									<button className="btn btn-outline-primary">
									Mobile
									</button> {/* TODO - add in tool tip ... maybe link, on hover*/}
								</div>
							</div>
						
							{/* PREVIEW FORM */}

							{ 
								formStruct.length ? <Browser> { formStruct.map((row, index) => {
									return ( 		
										<div key={index} 
											className="flex-container"
										>
											{row.map((col, i) => {
												return (
													<div key={i} style={{width: `${100 /row.length}%`, padding: '5px'}}>
														<label style={{fontSize: '11px'}}>{col.label} {(col.required ? '*' : null)}</label>
														{renderDynamicFields(col, true)}
													</div>
												)
											})}

										</div>
											
									)
								})} </Browser> : 'Start building your form using the Paseon drag and drop form builder tool.'
							}
							
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>

			{/* END MODALs */}


			{/* REORDER END */}

			<style jsx>
				{`
						


					.card:hover {
						cursor: pointer
					}
					
					.flex-container {
						/* We first create a flex layout context */
						display: flex;
						flex-flow: row wrap;
						justify-content: space-around;
						padding: 0;
						margin: 0;
						list-style: none;
					}

					.flex-item-full {
						padding: 5px;
						width: 100%;
					}

					.flex-item-half {
						padding: 5px;
						width: 50%;
					}
					

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
						height: 100%;
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