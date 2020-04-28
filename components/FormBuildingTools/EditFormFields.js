import React, { useState, useEffect } from "react";
import CheckBoxBuilderEdit from './FormBuilders/CheckboxBuilderEdit';

//TODO: hook up required and placeholder
export default function EditFormFields({activeField, setEditToggle, handleSetCampaignForm}) {
	// TODO - rename
	useEffect(() => {
		activeField = activeField
	}, [activeField])
	const [field, setField] = useState();
    
	useEffect(() => {
    
		if (activeField.type == 'checkbox' ) {
			setField(<CheckBoxBuilderEdit  />)
	
		} else if (activeField.tag == 'select') {
			setField(
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
			setField(
				<div className="form-group">
					<label htmlFor="cust_placeholder">Placeholder</label>
					<input 
						type="text"
						className="form-control" 
						id="cust_placeholder" 
						placeholder="Enter Custom Placeholder"
						value={activeField.placeholder}
						onChange={(e)=> {
							//activeField.placeholder = e.target.value
							handleSetCampaignForm(e.target.value)
							//setCampaignForm({...campaignForm, fields:activeField})
						}}
					></input>

					<div className="form-group">
						<label htmlFor="cust_default">Default</label>
						<input 
							type="text"
							className="form-control" 
							id="cust_default" 
							placeholder="Default Field Value"
							onChange={(e)=> {
								activeField.default = e.target.value
							//setCampaignForm({...campaignForm, fields:activeField})
							}}
						></input>
					</div>
				</div>
			)
		} else {
			setField();
		}

	}, [])
    
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
						onChange={(e)=> {
							activeField.label = e.target.value
							activeField.name = activeField.name !== 'email' || activeField.name!== 'subject' || activeField.name !== 'body' ? e.target.value.split(' ').join('_').toLowerCase() : activeField.name;
							//setCampaignForm({...campaignForm, fields:activeField})
						}
              
						} 
					></input>
				</div>

              
				{ field // TODO - RENAME
				}


				<div className="custom-control custom-switch">
     
					<input 
						onChange={()=> {
							activeField.required = !activeField.required
							//setCampaignForm({...campaignForm, fields:activeField})

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
	);
}
