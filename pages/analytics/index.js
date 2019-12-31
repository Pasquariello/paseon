import { useRouter } from 'next/router';
import Layout from '../../components/LayoutApp';
import PieChart from '../../components/Charts/pieChart';
import { auth } from '../../utils/auth'
import campaigns from '../campaignManagment/campaigns';
import CampaignLink from '../../components/CampaignLink';
import { withRedux } from '../../lib/redux';
import getUrl from '../../utils/getUrl';

const Analytics = props => (
  <Layout>

    <h2>Analytics</h2>

    {props.data.map(campaign => {
      console.log(campaign)
      return (
        <CampaignLink key={campaign.id} id={campaign.id} title={campaign.campaign_name} directory="analytics"/>
      )
    })}

    <PieChart data={props.dataArray}/>


  </Layout>
);

Analytics.getInitialProps = async function(ctx) {
    
    
  
//   // this will need to be a req to DB
//     const res = await fetch(`http://localhost:3001/campaign/get_campaign_details/${id}`);
//     const data = await res.json();
    // let data =   [
    //         { x: 'Test Label', y: 5 },
    //         { x: 2, y: 4 },
    //         { x: 3, y: 2 },
    //         { x: 4, y: 3 },
    //         { x: 5, y: 1 }
    //       ]


    

    const userId = await auth(ctx);
    const res = await fetch(`${getUrl}/campaign/analytics/${userId}`);
    const data = await res.json();

    let dataArray = data.map(campaign => {
        console.log('campaign_name', campaign.campaign_name)
        
        //let response_count = !campaign.jsonb_array_length ? 0 : campaign.jsonb_array_length
        
        return {x: campaign.campaign_name, y:campaign.jsonb_array_length}
    })

    return {dataArray, data}
 
    // TODO 
    // table columns need to be form fields mapped to columns - make editable?
};

export default withRedux(Analytics);
