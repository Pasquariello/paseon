import Layout from '../../components/LayoutApp';
import fetch from 'isomorphic-unfetch';
// import ReactTable from 'react-table';
import moment from 'moment';
import { CSVLink, CSVDownload } from "react-csv";
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
import Table from '../../components/Table'
import getUrl from '../../utils/getUrl';


function Campaign(props) {

	const renderTable = (fields) => {
       
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

		const data = props.data.form_data.map(responses => responses.field_values)

		const columns = Object.keys(response_schema).map((key, i)=>{
			return {
				id: `${i}`,
				Header: response_schema[key].label,
				accessor: props => {
					console.log('PROPS', props)
					return props[key]
				}
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
				{/* TODO - broken */}
				<CSVLink
					data={ data }
					headers={headers}
					filename={campaign_name}
				>
                Download me 
					<FontAwesomeIcon fixedWidth width="0" icon={faFileCsv} />

				</CSVLink>

          
				{!data.length ? 'no data' : 
					<Table columns={columns} data={data} />
				}
			</>
		)
	}

	return (

		<Layout>
			<p>Campaign Name:</p>
			<h3>{props.data.data_schema[0].campaign_name}</h3>
			<p>Date Created: {moment(props.data.data_schema[0].date_created).format('LLL')}</p>
			<Link href={`/campaignManagment/campaign/[id]`}  as={`/campaignManagment/campaign/${props.id}`}>
				<a className="btn btn-outline-primary">Edit</a>
			</Link>
			{props.data.form_data ? renderTable() : null}

		</Layout>
	);
}

Campaign.getInitialProps = async function(context, props) {
	const {id} = context.query;
	//const userId = await auth(context)

	// this will need to be a req to DB
	const res = await fetch(`${getUrl}/campaign/get_campaign_details/${id}`); // TODO - needs to also get by user_id
	const data = await res.json();
    
	return {
		data,
		id
	}
	// TODO 
	// table columns need to be form fields mapped to columns - make editable?
};

export default Campaign;