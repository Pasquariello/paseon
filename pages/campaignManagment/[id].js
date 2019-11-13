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
        
        const columns = [];
        const headers = [];
        let myArray = props.data.form_data.map(obj =>{
            return obj.field_values
        })

        console.log('props.data.form_data', props.data.form_data)

        console.log('props.data.data_schema[0]', props.data.data_schema[0])

        
        //NEEED THIS FOR IT TO WORK! - todo add schema to DB ?  
        // - keep the schema column we have in order to preserve the form make a new column for schema to look like this
        let myschema = {
            name: {
                label: 'name',
                value: ''
            },
            age:{
                label: 'age',
                value: ''
            },

        }

        const mykeys = Object.keys(myschema).map(key => key)
console.log(mykeys)

        const columnData = Object.keys(myschema).map((key, i)=>{
            console.log(key)
            console.log(i)

            columns.push({
                id: `${i}`,
                Header: key,//d => {console.log('key', key) ,key },
                accessor: props => props[key].value
                 //{console.log('barley', props)}
                //d => d.field_values[0][key].value, //console.log('bear',d), console.log('bear 2',d.field_values[i].name.value),
            }); //d.field_values[0][key].value
        });


        

    

        // const headerData = props.data.data_schema[0].schema.map((item, i)=>{
           
        //     return {
        //         label: item.label,
        //         key: 'value'
        //     }
            
        // })
        const myData = []
        const headerData = Object.keys(myschema).map((obj, i)=>{
            console.log(obj)
            console.log(i)
            myData.push(props.data.form_data[0].field_values[i][obj])
            headers.push({
                label: obj,
                key: `${obj}.value`
            }); 
        });

        console.log('headers', headers)

        console.log(props.data.form_data[0].field_values)



  //TODO: turn this into its own function that takes in columns? 
 
        return (
            <>
            <CSVLink
                data={ props.data.form_data[0].field_values} // destructure this!
                // data={props.data.form_data.map((data, i) => data.field_values.map(obj => {obj}))}
                headers={headers}
                onClick={() => {
                console.log("You click the link");
                }}
                >
                Download me
            </CSVLink>

          
                <ReactTable
                    columns={columns}
                    data={ props.data.form_data[0].field_values} //TODO destructure this!
                    resolveData={data => data.map(row => row)}
                /> 
            </>
        )
    }


//     const renderTable = (fields) => {
        
//         const columns = [];
//         const headers = [];
//         let myArray = props.data.form_data.map(obj =>{
//             return obj.field_values
//         })
        
//         const columnData = props.data.data_schema[0].schema.map((key, i)=>{
//             columns.push({
//                 id: `${i}`,
//                 Header: d => key.label,
//                 accessor: d => d.field_values[i].value
//             });
//         });

//         const headerData = props.data.data_schema[0].schema.map((item, i)=>{
           
//             return {
//                 label: item.label,
//                 key: 'value'
//             }
            
//         })


//   //TODO: turn this into its own function that takes in columns? 
//     // kind of works data={props.data.form_data.map((data, i) => data.field_values.map(obj => obj.value))}
//     let csvArray = []
//     let csvData = props.data.form_data.map((data, i) => data.field_values.map(obj => {csvArray.push(obj)}))
//     // let csvData = props.data.form_data.map((data, i) => csvArray.push(data.field_values))



//     console.log(csvArray)
//         return (
//             <>
//             <CSVLink
//                 data={csvArray}
//                 // data={props.data.form_data.map((data, i) => data.field_values.map(obj => {obj}))}

//                 onClick={() => {
//                 console.log("You click the link");
//                 }}
//                 >
//                 Download me
//             </CSVLink>

          
//                 <ReactTable
//                     columns={columns}
//                     data={props.data.form_data}
//                     resolveData={data => data.map(row => row)}
//                 /> 
//             </>
//         )
//     }
    


return (

  <Layout>
    <p>Campaign Name:</p>
    <h3>{props.data.data_schema[0].campaign_name}</h3>
    <p>Date Created: {moment(props.data.data_schema[0].date_created).format('LLL')}</p>
    {/*<p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} /> */}



    {props.data.form_data ? renderTable() : null}


    {/* <ReactTable
        data={props.dataOne}
        columns={props.columns}
    /> */}
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
    // rename data one! 
    // table columns need to be form fields mapped to columns - make editable?
    // export button


};

// {
//     "name" : {
//         "label": "Name",
//         "value": "Taylor"
//     },
//     "age" : {
//         "label": "Age",
//         "value": "Taylor"
//     }

// }