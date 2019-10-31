import React, { useState, createContext, useContext } from "react";

//TODO: hook up required
export default function SelectBuilder(props) {

//function buildSelect () {
    const blankSelect = {
        tag: 'select',
        type: 'select',
        label: '',
        options: [],
        required: false,
    }
    const [selectBuilderState, setSelectBuilderState] = useState(blankSelect);

    const [selectList, setSelectList] = useState([
        { ...selectBuilderState },
    ]);
  

    function handleSetSelectOptions(e) {
        let optionsArray = e.target.value.split(',');
        setSelectBuilderState({...selectBuilderState, options: optionsArray })
    }

    function addSelect(e) {
        e.preventDefault();
        let selectObj = selectBuilderState;
        setSelectBuilderState(blankSelect)
        props.parentCallback(selectObj)
    }

    // Might need to move onChange events into this?
    // function handleChangeInput(e, field){
    //     let  name = e.target.value.toLowerCase().split(" ").join("_")
    //     setInputBuilderState({...inputBuilderState, [field]: e.target.value, name})
        
    // }
  
    return (
    <>
        <div>
            <div className="container">
            <label htmlFor="setlabel">Give your select box a label...</label>
            <input
                type="text"
                id="setlabel"
                name="label"
                value={selectBuilderState.label}
                onChange={e => setSelectBuilderState({...selectBuilderState, label: e.target.value})}
            >
            </input>

            <label htmlFor="values">Set the values in your dropdown select<span style={{fontSize: '.75rem'}}>(separate each value with a comma)</span></label>
            <input 
                type="text" 
                id="lnvaluesame" 
                name="values"
                value={selectBuilderState.options} 
                onChange={e => handleSetSelectOptions(e)}></input>
            <button onClick={addSelect}>Add +</button>

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