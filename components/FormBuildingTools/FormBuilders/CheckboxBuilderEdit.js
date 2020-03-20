import React, { useState } from 'react';


export default function CheckBoxBuilder() {

    const [defaultValue, setDefaultValue] = useState(false);    
    console.log(typeof(defaultValue))
	return (
		<>
			

			<div className="custom-control custom-switch">
                <label className="custom-control-label" htmlFor="checkboxDefault">Defaulted</label>

				<input 
					onChange={(e) => {
                        console.log(typeof(e.target.value))
                        setDefaultValue(!defaultValue)}
                    } 
					value={!!defaultValue}
                    type="checkbox" 
                    
					// className="custom-control-input" 
					id="checkboxDefault"
				></input>
<p>{defaultValue}</p>

			</div>

		
		</>
	);
}