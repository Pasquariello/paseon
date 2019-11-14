import Layout from '../../components/LayoutApp';
import fetch from 'isomorphic-unfetch';
import ReactTable from 'react-table';
import moment from 'moment';
import CampaignLink from '../../components/CampaignLink';
import Link from 'next/link';
import { CSVLink, CSVDownload } from "react-csv";
import { useState } from 'react';




export default function Campaign(props) {



    const renderTable = (fields) => {
        
        // let response_schema = props.data.data_schema[0].response_schema;
        let data = props.data.form_data.length ? props.data.form_data[0].field_values : []
        // let file_name = props.data.data_schema[0].campaign_name;
        const {response_schema, campaign_name } = props.data.data_schema[0]
        //NEEED THIS FOR IT TO WORK! - todo add schema to DB ?  
        // - keep the schema column we have in order to preserve the form make a new column for schema to look like this
        // KEEP THIS
        // let myschema = {
        //     "name": {
        //         "label": "name",
        //         "value": ""
        //     },
        //     "age":{
        //         "label": "age",
        //         "value": ""
        //     }

        // }

        const columns = Object.keys(response_schema).map((key, i)=>{
            return {
                id: `${i}`,
                Header: response_schema[key].label,
                accessor: props => props[key].value
            }
        });
       
        const headers = Object.keys(response_schema).map((obj, i)=>{
           return {
                label: response_schema[obj].label,
                key: `${obj}.value`
            }; 
        });


        //TODO: turn this into its own function that takes in columns? 
        return (
            <>
            <CSVLink
                data={ data}
                headers={headers}
                filename={campaign_name}
            >
                Download me
            </CSVLink>

          
                <ReactTable
                    columns={columns}
                    data={ data} //TODO destructure this!
                    resolveData={data => data.map(row => row)}
                /> 
            </>
        )
    }

return (

  <Layout>
    <p>Campaign Name:</p>
    <h3>{props.data.data_schema[0].campaign_name}</h3>
    <p>Date Created: {moment(props.data.data_schema[0].date_created).format('LLL')}</p>

    {props.data.form_data ? renderTable() : null}

  </Layout>
);
}

Campaign.getInitialProps = async function(context, props) {
    const {id} = context.query;
  
  // this will need to be a req to DB
    const res = await fetch(`http://localhost:3001/campaign/get_campaigns/${id}`);
    const data = await res.json();

    return {data}
    // TODO 
    // table columns need to be form fields mapped to columns - make editable?
};