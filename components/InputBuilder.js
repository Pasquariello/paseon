import React, { useState, createContext, useContext } from "react";

//TODO: hook up required and placeholder
export default function InputBuilder(props) {

//function buildSelect () {
    const blankInput = {
        type: 'text',
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
        // let myArray = e.target.value.split(',');
        // console.log('myArray ', myArray)
        // setSelectBuilderState({...selectBuilderState, values: myArray })
    }

    function addInput(e) {
        e.preventDefault();
        console.log(e)
        let inputObj = inputBuilderState;
        setInputBuilderState(blankInput)
         props.parentCallback(inputObj)
         console.log('inputObj', inputObj)
    }

    function handleChangeInput(e){
        let  name = e.target.value.toLowerCase().split(" ").join("_")
        setInputBuilderState({...inputBuilderState, label: e.target.value, name})
        
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
                onChange={handleChangeInput}
            >
            </input>
            {/* TODO: pass value - only after decide where this list needs to go */}
            <label htmlFor="elem">Select Input type</label>
            <select id="elem" name="elem">
                <option value="" defaultValue disabled >Choose here</option>
                <option value="text">Text</option>
                <option value="select">Phone</option>
                <option value="checkbox">Email</option>
                 {/* Will Many of these be their own components? will it be in th original select list? will it be in an "advanced" list? */}
                <option value="checkbox">Date</option>
                <option value="checkbox">Time</option>
                <option value="checkbox">Week</option>
                <option value="checkbox">Month</option> 
                {/* Will have to notify user default is 0 - 100 */}
                <option value="checkbox">Range</option>
                <option value="checkbox">Color</option>
                <option value="checkbox">Week</option>
                <option value="checkbox">Week</option>
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