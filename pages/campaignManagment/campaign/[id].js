import React, { useState } from 'react';
// import Form_Builder from '../../components/FormBuildingTools/Form_Builde';
// import ReactTable from 'react-table';
import LayoutApp from '../../../components/LayoutApp';

import { auth } from '../../../utils/auth';
import { getCampaignData } from '../../../utils/campaign_data';

import New_Campaign from '../../../components/Campaign/New_Campaign';
import FormBuilderBeta from '../../../components/FormBuildingTools/FormBuilderBeta';

import getUrl from '../../../utils/getUrl';



// export default function NewCampaign() 

//TODO: 
/* 
move recipient email after select form type so users can choose to have a form submit to an email or not
if user selects 'custom' have a checkbox for, 'will this campaign need to be emailed?' if yes, add recipient email
    if not then just build out form and data table
*/
   
const CampaignBeta = ({id, data, userId}) =>  {

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
	console.log('props', data)
    
	const setFormStructure = (fields) => {
		fields.flat(2);
		setCampaignForm({...campaignForm, fields: fields});    

	}

    
	return (
		<LayoutApp>
			<FormBuilderBeta 
				// addFields={setFormStructure} 
				// handleSetCampaignName={(name)=>{setCampaignForm({...campaignForm, campaign_name: name})}}
				// handleSetCampaignType={()=>{}}
				userId={userId} 
				// campaignId={id} 
				data={data} 
				//handleSubmit={handleSubmit}
			/>
		</LayoutApp>

	)
}

CampaignBeta.getInitialProps = async function(context) {
    
	const userId = await auth(context)

	const { id } = context.query;
  

	//await getCampaignData(context)
	let res;
	let data = []
	if (id !== 'new') {
		console.log('NOT NEW')
		res = await fetch(`${getUrl}/campaign/get_campaign_details/${id}`);
		data = await res.json();
		// let data1  = await res.json();  
		// console.log('heerr', data1)
		// data =  data1.data_schema[0].form_schema
	}
	//console.log('DATA', data2.data_schema[0].form_schema)
	//const data = data.data_schema[0].form_schema 
	// this will need to be a req to DB
	//const res = await fetch(`${getUrl}/campaign/get_campaign_details/${id}`);
	//const data = await res.json();
    
	return {
		userId,
		id,
		data
	}
	// TODO 
	// table columns need to be form fields mapped to columns - make editable?
};

  
export default CampaignBeta

// export default withAuthSync(NewCampaign);