import React, { useState, createContext, useContext } from "react";

//TODO: hook up required and placeholder
export default function CheckBoxBuilder(props) {

//function buildSelect () {
    const blankInput = {
        type: '',
        tag: 'input',
        label: '',
        name: '',
        value: '',
        required: false,
        placholder: '',
    }
    const [inputBuilderState, setInputBuilderState] = useState(blankInput);

    // const blankCat = { name: '', age: '' };
    const [selectList, setSelectList] = useState([
        { ...inputBuilderState },
    ]);


    function handleSetValues(e) {
        console.log(e.target.value)
    }

    function addInput(e) {
        e.preventDefault();
        console.log(e)
        let inputObj = inputBuilderState;
        setInputBuilderState(blankInput)
         props.parentCallback(inputObj)
         console.log('inputObj', inputObj)
    }

    function handleChangeInput(e, field){
        let  name = e.target.value.toLowerCase().split(" ").join("_")
        setInputBuilderState({...inputBuilderState, [field]: e.target.value, name})
        
    }
  
    return (
    <>
        <div>
            <div className="container">
            <label htmlFor="setlabel">Give your Input label...</label>
            <input
                type="text"
                id="setlabel"
                name="label"
                value={inputBuilderState.label}
                onChange={(e)=>handleChangeInput(e, 'label')}
            >
            </input>
            {/* TODO: pass value - only after decide where this list needs to go */}
            <label htmlFor="elem">Select Input type</label>
            <select defaultValue="text" id="elem" name="elem" value={inputBuilderState.type} onChange={(e)=>handleChangeInput(e, 'type')}>
                {/* <option value="choose" disabled >Choose here</option> */}
                <option value="text">Text</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                 {/* Will Many of these be their own components? will it be in th original select list? will it be in an "advanced" list? */}
                <option value="date">Date</option>
                <option value="time">Time</option>
                <option value="week">Week</option>
                <option value="month">Month</option> 
                {/* Will have to notify user default is 0 - 100 */}
                <option value="range">Range</option>
                <option value="color">Color</option>
            </select>





            {/* <input type="submit" value="Submit"></input> */}
            {/* <button onClick={()=>props.parentCallback(selectBuilderState)}>Add +</button> */}
            <button onClick={addInput}>Add +</button>

            </div>
        </div>
        
        

        <style jsx>
            {`
            input[type=text] {
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
            `}
        </style>
    </>
  );
  
}
//   export default SelectBuilder;