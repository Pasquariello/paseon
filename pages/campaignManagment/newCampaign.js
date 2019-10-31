import Link from 'next/link';
import LayoutApp from '../../components/LayoutApp';
import React, { useState } from 'react';


// export default function NewCampaign() 
   
 const NewCampaign = (props) =>  {

      const [quickAnalytics, setQuickAnalytics] = useState({ title: 'TOTAL MONTHLY SUBMISSIONS', body: '50%' })

    function renderFormHTML(form_type){
        let form = {
            basic_contact,
            basic_rsvp,
            basic_sign_up,
        } 

        const blankSelect = {
            type: 'text',
        }

        const [selectBuilderState, setSelectBuilderState] = useState(blankSelect);
        const [list, setList] = useState([]);

       function addField (e){
        e.preventDefault()
        console.log('hello')
            // let selectObj = selectBuilderState;
            // setSelectBuilderState(blankSelect)
            // props.parentCallback(selectObj)
            // console.log(selectList)

            setList([...setList, { }]);
            console.log(list)
        }



        return(
        
            <>


            </>
        )
    }

    return (
        <LayoutApp>
     
            <div>
                <div style={{marginBottom: '50px'}}>
                    <h3>New Campaign</h3>
                </div>
                <form>
                    <div className="form-group">
                        <label for="inputEmail4">Campaign Name</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Campaign Name"></input>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword4">Recipient Email</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Recipient Email"></input>
                    </div>
                    <div className="form-group">
                        <label for="inputState">Form Type</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>Basic Contact</option>
                            <option>Basic RSVP</option>
                            <option>Basic Sign Up</option>
                            <option>Basic Mailing List</option>
                            <option>Custom</option>
                        </select>                    
                    </div>
                    <div>
                        {/* this will show the defualt form fields with each selection */}
                    </div>
                    <div className="form-group">
                        <label for="inputState">set additional form fields</label>
                        <button onClick={(e) => addField(e)} >Add</button> 
                    </div>
                    {/* If custom let them set fields here! so backend can pick up what to do with it all */}
                    <input className="btn btn-primary" type="submit"/>
                </form>
                <div>
                    {/* render a table design for set fields */}
                </div>

            </div>
       
        </LayoutApp>

    )  
    

}

export default NewCampaign;