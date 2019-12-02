import Link from 'next/link';
import LayoutApp from '../../components/LayoutApp';
import React, { useState } from 'react';
import Form_Builder from '../../components/FormBuildingTools/Form_Builder';
// import ReactTable from 'react-table';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import { withAuthSync } from '../../utils/auth'

import {
    useTable,
    useGroupBy,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
  } from 'react-table'


// export default function NewCampaign() 

//TODO: 
/* 
move recipient email after select form type so users can choose to have a form submit to an email or not
if user selects 'custom' have a checkbox for, 'will this campaign need to be emailed?' if yes, add recipient email
    if not then just build out form and data table
*/
   
 const NewCampaign = (props) =>  {

    const [quickAnalytics, setQuickAnalytics] = useState({ title: 'TOTAL MONTHLY SUBMISSIONS', body: '50%' })

    const [campaignForm, setCampaignForm] = useState(
        { 
            campaign_name: '',
            form_type: '', 
            email_bool: 'no',
            shareable: 'no',
            recipient_email: '', 
            fields: []
        }
    )


    async function handleSubmit (e) {
        e.preventDefault()
        console.log('hit handle submit!', campaignForm)
        // setUserData(Object.assign({}, userData, { error: '' }))
        let form = campaignForm
        //const username = userData.username
        let url = 'http://localhost:3001/campaign/new_campaign'
    
        try {
            console.log('try', url)
          const response = await fetch(url, {
            
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(campaignForm)
          }).then(response => response)
          .then(data => console.log('data', data))
        //   .then((res)=>{
        //       console.log('taylor', res)
        //   }).then(response => console.log('items', response))
        //   if (response.status === 200) {
        //     console.log(response )
        //     console.log('success')
           
        //   } else {
        //     console.log('Post failed.')
        //     let error = new Error(response.statusText)
        //     error.response = response
        //     throw error
        //   }
        } catch (error) {
          console.error(
            'You have an error in your code or there are Network issues.',
            error
          )
    
          const { response } = error

        }
      }


    const handleFormChange = (e) => {
        if (e.target.value != 'custom'){
            renderBasicForms(e.target.value);
        } 
        else {            
            setCampaignForm({...campaignForm, form_type: e.target.value, fields:[]})
        }
    }


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
        // add new field object to campaingForm field array
        // setSelectList([...selectList, { ...val }]);
        setCampaignForm({...campaignForm, fields:[...campaignForm.fields, obj]})
        console.log('Do I have what I need?', campaignForm);
        

    }

    

    const renderBasicForms = (form) => {
        // THIS WILL NEED TO BE FETCHED DATA AT SOME POINT
        let basic_forms = {
            basic_contact: { 
                //form_type: 'basic_contact', 
                // NOT ALL OF THESE KEYS ARE NECESSARY! THIS IS JUST FOR BUILDING THE DATA TABLE
                fields: [
                    {
                        "type": "email",
                        "tag": "input",
                        "label": "Recipient Email",
                        "name": "recipient_email",
                        "value": ""
                    }, 
                    {
                        "type": "text",
                        "tag": "input",
                        "label": "Name",
                        "name": "name",
                        "value": ""
                    },
                    {
                        "type": "text",
                        "tag": "input",
                        "label": "Subject",
                        "name": "subject",
                        "value": ""
                    },
                    {
                        "type": "",
                        "tag": "textarea",
                        "label": "Body",
                        "name": "body",
                        "value": ""
                    }
                ]
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
                        value: '',
                    }, 
                    {
                        type: 'text',
                        tag: 'input',
                        label: 'test',
                        name: 'test',
                        value: '',
                    },
                    {
                        type: 'text',
                        tag: 'input',
                        label: 'test',
                        name: 'test',
                        value: '',
                    },
                    {
                        type: '',
                        tag: 'textarea',
                        label: 'test',
                        name: 'test',
                        value: '',

                        tag: '',
                        type: 'text',
                        label: '',
                        value: '',
                    },
                ],
            },
        }
        
        let fields = []
        basic_forms[form] ? fields = basic_forms[form].fields : fields = [];
        
        //return basic_forms[form].fields
        setCampaignForm({...campaignForm, fields : fields, form_type: form});    
    }

    const removeSingle = (newFields) => {
        console.log('newFields',newFields)
        // e.preventDefault();
        // console.log('HELLO', val)
        // console.log(index)
        // let newList = selectList.filter((item, i) =>  i != index)
        // console.log('newList', newList)
        // setSelectList(newList);
  
        // this will eventually be handled with REDUX ?
        // props.parentCallback(val)
        setCampaignForm({...campaignForm, fields : newFields});    

  
      }

    const renderCustomFormBuilder = () => {
        return (
            <>
                <p>Use the form builder tool below to create your new campaign data collection and visualization.</p>
                <Form_Builder parentCallback={handleAddInput} removeSingle={removeSingle} fieldList={campaignForm.fields}/>
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
            defaultPageSize={3}
            /> 
            </>
        )
    }


        // campaignForm.form_type == 'custom' ? renderCustomFormBuilder() : renderBasicForms(campaignForm.form_type)}
    
         const popover = (text) => (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Info</Popover.Title>
              <Popover.Content>
                  {text}
              </Popover.Content>
            </Popover>
          );
   

          let email_bool_text = 'Do the submissions of this form need to be sent to an email?';
          let shareable_text = 'Will you be sending this form directly to your users to fill out?';

    return (
        <LayoutApp>
            <div>
                <div style={{marginBottom: '50px'}}>
                    <h3>New Campaign</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="campaign_name">Campaign Name</label>
                        <input value={campaignForm.campaign_name} type="text" className="form-control" id="campaign_name" placeholder="Campaign Name" onChange={(e) => setCampaignForm({...campaignForm, campaign_name: e.target.value})}></input>
                    </div>

<fieldset className="form-group">
    <div className="row">
        
      <legend className="col-form-label col-sm-2 pt-0">
          Send Responses to an Email Address
      </legend>
            <OverlayTrigger trigger="click" placement="right" overlay={popover(email_bool_text)} text={email_bool_text}>
    <button type="button" className="btn btn-info btn-circle">?<i className="fa fa-check"></i></button>
</OverlayTrigger>
      <div className="col-sm-10">
       
        <div className="form-check">
            <input 
                className="form-check-input" 
                type="radio" 
                name="gridRadios" 
                id="gridRadios1" 
                value="yes" 
                checked={campaignForm.email_bool === 'yes'}
                onChange={(e) => setCampaignForm({...campaignForm, email_bool: e.target.value})} 
        ></input>
          <label className="form-check-label" htmlFor="gridRadios1">
            Yes
          </label>
        </div>

        <div className="form-check">
            <input 
                className="form-check-input" 
                type="radio" 
                name="gridRadios" 
                id="gridRadios2" 
                value="no" 
                checked={campaignForm.email_bool === 'no'}
                onChange={(e) => setCampaignForm({...campaignForm, email_bool: e.target.value})} 
            ></input>
          <label className="form-check-label" htmlFor="gridRadios2">
            No
          </label>
        </div>

      </div>
    </div>
</fieldset>


                {campaignForm.email_bool === 'yes'  ? 
                    <div className="form-group">
                        <label htmlFor="recipient_email">Recipient Email</label>
                        <input value={campaignForm.recipient_email} onChange={(e) => setCampaignForm({...campaignForm, recipient_email: e.target.value})} type="text" className="form-control" id="recipient_email" placeholder="Recipient Email"></input>
                    </div>
                : null }


<fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">
        Does this form need to be shareable
        </legend>
        <OverlayTrigger trigger="click" placement="right" overlay={popover(shareable_text)}>
            <button type="button" className="btn btn-info btn-circle">?<i className="fa fa-check"></i></button>
        </OverlayTrigger>


  
      <div className="col-sm-10">
<div className="form-check">
            <input 
                className="form-check-input" 
                type="radio" 
                name="gridRadios1" 
                id="gridRadios11" 
                value="yes" 
                checked={campaignForm.shareable === 'yes'}
                onChange={(e) => setCampaignForm({...campaignForm, shareable: e.target.value})} 
        ></input>
          <label className="form-check-label" htmlFor="gridRadios1">
            Yes
          </label>
        </div>

        <div className="form-check">
            <input 
                className="form-check-input" 
                type="radio" 
                name="gridRadios1" 
                id="gridRadios12" 
                value="no" 
                checked={campaignForm.shareable === 'no'}
                onChange={(e) => setCampaignForm({...campaignForm, shareable: e.target.value})} 
            ></input>
          <label className="form-check-label" htmlFor="gridRadios2">
            No
          </label>
        </div>

      </div>
    </div>
</fieldset>

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
       
            <style jsx>{`

.btn-circle.btn-xl {
    width: 20px;
    height: 20px;
    // padding: 10px 16px;
    margin: 5px;
    border-radius: 35px;
    font-size: 24px;
    line-height: 1.33;
}

.btn-circle {
    width: 20px;
    height: 20px;
    margin: 15px;

    padding: 2px 0px;
    border-radius: 15px;
    // text-align: center;
    font-size: 10px;
   // line-height: 1.42857;
}



`}</style>

        </LayoutApp>


    )  
    

}

export default withAuthSync(NewCampaign);