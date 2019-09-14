import React, { useState, createContext, useContext } from "react";

//TODO: hook up required
export default function SelectBuilder(props) {

//function buildSelect () {
    const blankSelect = {
        type: 'select',
        label: '',
        values: [],
        required: false,
    }
    const [selectBuilderState, setSelectBuilderState] = useState(blankSelect);

    // const [selectList, setSelectList] = useState([...selectBuilderState]);
    const blankCat = { name: '', age: '' };
  const [selectList, setSelectList] = useState([
    { ...selectBuilderState },
  ]);
  
//   const addCat = () => {
//     setCatState([...catState, { ...blankCat }]);
//   };
      


//} 

    function handleSetValues(e) {
        console.log(e.target.value)
        let myArray = e.target.value.split(',');
        console.log('myArray ', myArray)
        setSelectBuilderState({...selectBuilderState, values: myArray })
    }

    function addSelect() {
        
        let selectObj = selectBuilderState;
        setSelectBuilderState(blankSelect)
        props.parentCallback(selectObj)
        console.log(selectList)
    }
  
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
                value={selectBuilderState.values} 
                onChange={e => handleSetValues(e)}></input>

            {/* <input type="submit" value="Submit"></input> */}
            {/* <button onClick={()=>props.parentCallback(selectBuilderState)}>Add +</button> */}
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
//   export default SelectBuilder;