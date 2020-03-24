import React, { useState } from 'react';


export default function CheckBoxBuilder() {

	const [defaultValue, setDefaultValue] = useState(false);
  
	return (
		<>
			

			<div className="custom-control custom-switch">
				{/* <label className="custom-control-label" htmlFor="checkboxDefault">Defaulted</label> */}

				<input 
					onChange={
						(e) => {
							console.log(typeof(e.target.value))
							console.log('e.target.value', e.target.value)
							console.log(typeof(defaultValue))

							setDefaultValue(!defaultValue)
						}
					} 
					value={defaultValue}
					type="checkbox" 
                    
					className="custom-control-input" 
					id="checkboxDefault"
				></input>
				<label className="custom-control-label" htmlFor="checkboxDefault">Default</label>

				<p>{defaultValue.toString()}</p>

			</div>

		
		</>
	);
}