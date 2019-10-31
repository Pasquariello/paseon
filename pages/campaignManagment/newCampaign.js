import Link from 'next/link';
import LayoutApp from '../../components/LayoutApp';
import React, { useState } from 'react';
import Form_Builder from '../../components/FormBuildingTools/Form_Builder';
import ReactTable from 'react-table';


// export default function NewCampaign() 

//TODO: 
/* 
move recipient email after select form type so users can choose to have a form submit to an email or not
if user selects 'custom' have a checkbox for, 'will this campaign need to be emailed?' if yes, add recipient email
    if not then just build out form and data table
*/
   
 const NewCampaign = (props) =>  {

    const [quickAnalytics, setQuickAnalytics] = useState({ title: 'TOTAL MONTHLY SUBMISSIONS', body: '50%' })

    let form = {
    

    }

    const [campaignForm, setCampaignForm] = useState(
        { 
            form_type: '', 
            recipient_email: '', 
            fields: []
        }
    )



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
hello

            </>
        )
    }

    const handleFormChange = (e) => {
        console.log('taylor e', e.target.value)
        

        if (e.target.value != 'custom'){
            renderBasicForms(e.target.value);
        } 
        else {
            // setCampaignForm({...campaignForm, form_type: e.target.value})

            setCampaignForm({...campaignForm, form_type: e.target.value, fields:[]})
        }

        
    }
    // const [campaignForm, setCampaignForm] = useState(
    //     { 
    //         form_type: '', 
    //         recipient_email: '', 
    //         fields: []
    //     }


    const columnsOld = [
        {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            //Cell: props => <CampaignLink id={props.original.id} title={props.value}/>
        }, 
        {
            Header: 'Recipient Email',
            accessor: 'recipient_Email',
            //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, 
        {
            Header: 'Email Hash',
            accessor: 'recipient_Email_hashed'
        },
        {
            id: 'form_type', // Required because our accessor is not a string
            Header: 'Form Type',
            accessor: d => d.form_type.display, // Custom value accessors!
        },
        {
            Header: 'URL',
            accessor: 'url',
            Cell: props =>  <Link prefetch={false} href={`http://${props.value}`}><a target="_blank">{`http://${props.value}`}</a></Link> // Custom cell components!

        },
        {
            Header: 'Date Created',
            accessor: 'date_created',
        }
    ]

    function columns(){
        console.log('in columns')
        let build = [{
            Header: 'Recipient Email',
            accessor: 'recipient email'

        }]

        campaignForm.fields.map(field => {
            build.push({
                Header: field.label,
                accessor: field.label
            })
        })
        return build;
    }



    const handleAddInput = (obj) => {
        console.log('I made it to the top!', obj)
        // add new filed object to campaingForm field array
        //setSelectList([...selectList, { ...val }]);
        setCampaignForm({...campaignForm, fields:[...campaignForm.fields, obj]})
        console.log('Do I have what I need?', campaignForm);
        

    }

    

    const renderBasicForms = (form) => {
        console.log('hahahahahhza', form)
        // THIS WILL NEED TO BE FETCHED DATA AT SOME POINT
        let basic_forms = {
            basic_contact: { 
                //form_type: 'basic_contact', 
                // NOT ALL OF THESE KEYS ARE NECESSARY! THIS IS JUST FOR BUILDING THE DATA TABLE
                fields: [
                    {
                        type: 'email',
                        tag: 'input',
                        label: 'Recipient Email',
                        name: 'recipient_email',
                    }, 
                    {
                        type: 'text',
                        tag: 'input',
                        label: 'Name',
                        name: 'name',
                    },
                    {
                        type: 'text',
                        tag: 'input',
                        label: 'Subject',
                        name: 'subject',
                    },
                    {
                        type: '',
                        tag: 'textarea',
                        label: 'Body',
                        name: 'body',
                    },
                ],
            },
            basic_rsvp: { 
                //form_type: 'basic_contact', 
                // NOT ALL OF THESE KEYS ARE NECESSARY! THIS IS JUST FOR BUILDING THE DATA TABLE
                fields: [
                    {
                        type: 'email',
                        tag: 'input',
                        label: 'test',
                        name: 'test',
                    }, 
                    {
                        type: 'text',
                        tag: 'input',
                        label: 'test',
                        name: 'test',
                    },
                    {
                        type: 'text',
                        tag: 'input',
                        label: 'test',
                        name: 'test',
                    },
                    {
                        type: '',
                        tag: 'textarea',
                        label: 'test',
                        name: 'test',
                    },
                ],
            },
        }
        
        let fields = []
        basic_forms[form] ? fields = basic_forms[form].fields : fields = [];
        
        //return basic_forms[form].fields
        setCampaignForm({...campaignForm, fields : fields, form_type: form});    
    }

    const renderCustomFormBuilder = () => {
        return (
            <>
                <p>Use the form builder tool below to create your new campaign data collection and visualization.</p>
                <Form_Builder parentCallback={handleAddInput}/>
            </>
        )
    }

    const renderTable = (fields) => {
        console.log('in columns', fields)
        // TODO: rename? name columns and make a stateful value? 
        let build = []

        fields.map(field => {
            build.push({
                Header: field.label,
                accessor: field.label,
            });
        });

        //TODO: turn this into its own function that takes in columns? 
        return (
            <>
            <p>Visual representation of data collected with your new campaign.</p>
            <ReactTable
            //data={data}
            columns={build}
            /> 
            </>
        )
    }


        // campaignForm.form_type == 'custom' ? renderCustomFormBuilder() : renderBasicForms(campaignForm.form_type)}
    
   
    return (
        <LayoutApp>
            <div>
                <div style={{marginBottom: '50px'}}>
                    <h3>New Campaign</h3>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="inputEmail4">Campaign Name</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Campaign Name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipient_email">Recipient Email</label>
                        <input value={campaignForm.recipient_email} onChange={(e) => setCampaignForm({...campaignForm, recipient_email: e.target.value})} type="text" className="form-control" id="recipient_email" placeholder="Recipient Email"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputState">Form Type</label>
                        <select id="inputState" className="form-control" value={campaignForm.form_type} onChange={handleFormChange}>
                            <option value="choose">Choose...</option>
                            <option value="basic_contact">Basic Contact</option>
                            <option value="basic_rsvp">Basic RSVP</option>
                            <option value="basic_sign_up">Basic Sign Up</option>
                            <option value="basic_mailing_list">Basic Mailing List</option>
                            <option value="custom">Custom</option>
                        </select>                    
            
                        {/* this will show the defualt form fields with each selection */}

                        {campaignForm.form_type == 'custom' ? renderCustomFormBuilder() : null }
                                               
                        {campaignForm.fields.length ? renderTable(campaignForm.fields) : null}
                    </div>
                    {/* <div className="form-group">
                        <label for="inputState">set additional form fields</label>
                        <button onClick={(e) => addField(e)} >Add</button> 
                    </div> */}
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