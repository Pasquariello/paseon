import React from 'react';
// import Form_Builder from '../../components/FormBuildingTools/Form_Builde';
// import ReactTable from 'react-table';
import { withRedux } from '../../lib/redux';

import { auth } from '../../utils/auth';
import { getCampaignData } from '../../utils/campaign_data';

import New_Campaign from '../../components/Campaign/New_Campaign';



// export default function NewCampaign() 

//TODO: 
/* 
move recipient email after select form type so users can choose to have a form submit to an email or not
if user selects 'custom' have a checkbox for, 'will this campaign need to be emailed?' if yes, add recipient email
    if not then just build out form and data table
*/
   
const NewCampaign = ({campaignList, userId }) =>  (
	<New_Campaign campaignList={campaignList} userId={userId} />
)

NewCampaign.getInitialProps = async function(ctx) {

    


	// await auth(ctx)
      
	let userId = await auth(ctx);
  
	if  (!ctx.reduxStore.getState().campaigns.data.length){
		await getCampaignData(ctx)
	} 
   
	console.log('list of campaigns', ctx.reduxStore.getState().campaigns.data)
  
  
	return {
		campaignList: ctx.reduxStore.getState().campaigns.data,
		userId 
	};
      
}

  
export default withRedux(NewCampaign)

// export default withAuthSync(NewCampaign);