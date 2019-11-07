import Layout from '../../components/LayoutApp';
import fetch from 'isomorphic-unfetch';
import ReactTable from 'react-table';
import moment from 'moment';
import CampaignLink from '../../components/CampaignLink';
import Link from 'next/link';

export default function Campaign(props) {

    const renderTable = (fields) => {
        
        const columns = [];

        let myArray = props.data.form_data.map(obj =>{
            return obj.field_values
        })
        

        const columnData = props.data.data_schema[0].schema.map((key, i)=>{
            columns.push({
                id: `${i}`,
                Header: d => key.label,
                accessor: d => d.field_values[i].value
            })
        })


    //TODO: turn this into its own function that takes in columns? 
        return (
            <>
                <ReactTable
                    columns={columns}
                    data={props.data.form_data}
                /> 
            </>
        )
    }
    


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