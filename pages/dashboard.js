
import React from 'react'
// import fetch from 'isomorphic-unfetch'
import LayoutApp from '../components/LayoutApp'
import { withRedux } from '../lib/redux';

import QuickAnalytics from '../components/QuickAnalytics';

import { auth } from '../utils/auth';
import { getCampaignData } from '../utils/campaign_data';

import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import CampaignLink from '../components/CampaignLink';

import PropTypes from 'prop-types';




function Dashboard ({campaignList}) { 

	// todo - think about how I want to make all quick analytics more dry but still custom for each page - pass in props? 
	// const [quickAnalytics, setQuickAnalytics] = useState({ title: 'TOTAL MONTHLY SUBMISSIONS', body: '50%' })


	let totalForms = campaignList.length
	let totalSubmissions = 0

	campaignList.forEach(campaign => {
      
		totalSubmissions = totalSubmissions + campaign.jsonb_array_length
      
	})

	let quickAnalyticsData = [

		{
			title: 'TOTAL FORMS MANAGED',
			body: totalForms
		},
		{
			title: 'TOTAL MONTHLY SUBMISSIONS',
			body: totalSubmissions
		}
	]

	return (
		<LayoutApp>
          
			<div className="row"> 
				<h3>Dashboard</h3> 
			</div>

			<QuickAnalytics
				data={quickAnalyticsData}
			/>

			<div className="row"> 

				<div  
					className="col-md-6 mb-4"
				>
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<Link href="/campaignManagment/new_campaign">
								{/* <h6 className="m-0 font-weight-bold text-primary">Create a New Campaign</h6>\ */}
								<a>Create a New Campaign</a>

							</Link>
						</div>
						<div className="card-body">
							<div className="text-center">
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="../static/images/undraw_master_plan_95wa.svg" alt=""></img>
							</div>
							<p>Campaigns can be used to help you collect data, process emails, interpret survey results, or anything else you can think of. The boundries are only your own imagination!</p>
							<a target="_blank" rel="noopener noreferrer nofollow"href="https://undraw.co/">See this cool link →</a>
						</div>
					</div>
				</div>
				<div className="col-md-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
        
							<Dropdown>
								<h6 className="m-0 font-weight-bold text-primary">
									<Dropdown.Toggle variant="link" id="dropdown-basic">
                            Manage Your Current Campaigns
									</Dropdown.Toggle>
								</h6>

								<Dropdown.Menu>
									{campaignList.length ? 
										campaignList.map( (campaign, index) => {
											return  <Dropdown.Item key={index}><CampaignLink id={campaign.id} title={campaign.campaign_name} directory="campaignManagment"/></Dropdown.Item>
										})
										: 
										<Dropdown.Item>You currently Have No Campaigns</Dropdown.Item>
									}
								</Dropdown.Menu>
							</Dropdown>
                                  
						</div>
						<div className="card-body">
							<div className="text-center">
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="../static/images/undraw_dev_focus_b9xo.svg" alt=""></img>
							</div>
							<p>Keep track of the submission data for all your campaigns. Analyze the data to better hone in on your goals</p>
							<Link href="/campaignManagment/campaigns">
								<a>See All Campaigns →</a>
							</Link>
						</div>
					</div>
				</div>

			</div>        
		</LayoutApp>
	)
}

Dashboard.getInitialProps = async (ctx) => {
	//check if page is authorized
	auth(ctx);
	await getCampaignData(ctx);
	

	return {
		campaignList: ctx.reduxStore.getState().campaigns.data
	}

}

Dashboard.propTypes = {
	campaignList: PropTypes.array
};



export default withRedux(Dashboard)
