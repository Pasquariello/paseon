import Layout from '../../components/MyLayout';
import Link from 'next/link';
import LayoutApp from '../../components/LayoutApp'
import QuickAnalytics from '../../components/QuickAnalytics';
// import ReactTable from 'react-table';
import moment from 'moment';
import 'moment-timezone';
import CampaignLink from '../../components/CampaignLink';
import fetch from 'isomorphic-unfetch';
import React, { useState } from 'react';
import { withRedux } from '../../lib/redux';
import { auth } from '../../utils/auth';
import Table from '../../components/Table'


import getUrl from '../../utils/getUrl';

import { getCampaignData } from '../../utils/campaign_data';


import { withAuthSync } from '../../utils/auth'



function Campaigns(props) {

	let totalForms = props.campaignList.length
	let totalSubmissions = 0
	let countArray = []



	props.campaignList.forEach(campaign => {
		let submissions = campaign.jsonb_array_length ? campaign.jsonb_array_length : 0
		totalSubmissions = totalSubmissions + submissions
      
	})

  
    
	let quickAnalyticsData = [
		{
			title: 'Total Forms',
			body: totalForms
  
		},
		{
			title: 'Total Submissions',
			body: totalSubmissions
		}
	] 
       
	// const [idList, setIdList] = useState([]);
	const [campaignListState, setcampaignListState] = useState(props.campaignList);

	const [checkedItems, setCheckedItems] = useState({}); //plain object as state


	const deleteCampaigns = async () => {

    
		// event.preventDefault()
      
		// get list of all IDs that are selected for deletion
		let idList = Object.keys(checkedItems).filter(item => checkedItems[item] == true)
		console.log(idList)
      
		let url = `${getUrl}/campaign/remove_campaign/`    
		try {
    
			const response = await fetch(url, {
            
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ idList })
			})
			console.log('response', response)
			if (response.status === 200) {
				console.log(response)
				console.log('success')
				let val = []
				idList.map((id, i) => {
					val = campaignListState.filter(campaign =>  campaign.id !=  id)
            
				})
				console.log('VAL', val) // TODO: add fix for after filter checkbox is still checked for one below 
				setcampaignListState(val)
			} else {
				console.log('failed.')
				let error = new Error(response.statusText)
				error.response = response
				throw error
			}
		} catch (error) {
			console.error(
				'You have an error in your code or there are Network issues.',
				error
			)
    
			const { response } = error
   
		}
	}

	const selectCampaigns =  (e, id) => {
      
		// console.log('checkboxValue', checkboxValue )
		setCheckedItems({...checkedItems, [e.target.name]: e.target.checked });
		console.log("checkedItems: ", checkedItems);
		// setIdList([...idList, id])
		// console.log("idList: ", idList);

	}

    
	const renderTable = () => {
		const columns = [
     
			{
				//Header: 'select',
				accessor: 'id',
				Cell: props => {
					return  <input name={props.cell.row.original.id} onChange={(e) => selectCampaigns(e, props.cell.row.original.id)} checked={checkedItems[props.cell.row.original.id]} type="checkbox"></input>
				},
				width: 20

			},
			{
				id: 'name',
				Header: 'Name',
				accessor: 'campaign_name',
				Cell: props => {
					return <CampaignLink id={props.cell.row.original.id} title={props.cell.value} directory="campaignManagment"/>
				}

			},
			{
				id: 'date_created',
				Header: 'Date Created',
				accessor: 'date_created',
				Cell: props => moment(props.cell.value).format('LLL')

			},
			// {
			// 	id: 'response_count',
			// 	Header: 'Response Count',
			// 	accessor: 'jsonb_array_length',
			// 	Cell: props => {
			// 		return !props.cell.row.original.jsonb_array_length ? 0 : props.cell.row.original.jsonb_array_length
			// 	}
			// },
		]
		//TODO: turn this into its own function that takes in columns? 
		return (
			<>
				<p>Visual representation of data collected with your new campaign.</p>
      
				<Table columns={columns} data={campaignListState} />

			</>
		)
	}
	return (
		<LayoutApp>
            Basic Form Options:
			{/* <QuickAnalytics
				data={quickAnalyticsData}
			/> */}
			<div className="row" style={{marginTop: '50px', marginBottom: '150px'}}>
				<div className="col-md-6" style={{padding: '20px'}}>
					<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="../static/images/undraw_creative_process_q6aw.svg" alt=""></img>
				</div>
				<div className="col-md-6" style={{padding: '20px'}}>
					<h3>Manage Your Assets</h3> 
					<p>Lorem ipsum dolor sit amet, mel te prima assentior suscipiantur, et sumo ridens commodo nec. Vel no solet animal scaevola, et discere singulis aliquando vix, mentitum postulant constituam ei cum.</p>
				</div>
			</div>
            
			<div className="row">
				<h3 style={{marginRight: '20px'}}>My Campaigns: </h3> 
				<Link href="/campaignManagment/campaign/new">
					<a className="btn btn-outline-primary">Add New</a>
				</Link>
			</div>
			<div style={{marginTop: '20px'}}>
				<button onClick={deleteCampaigns}>Delete</button>
				{campaignListState ? renderTable() : null}

			</div>
            

 
            
		</LayoutApp>

	);

    
}

Campaigns.getInitialProps = async function(ctx) {

    


	//await auth(ctx)
	let userId = await auth(ctx);
	await getCampaignData(ctx);


	// if  (!ctx.reduxStore.getState().campaigns.data.length){
	//  console.log('IDIDIDI:', ctx.reduxStore.getState().auth.user.id)
	//   await getCampaignData(ctx)
	// } 

 
	console.log('list of campaigns', ctx.reduxStore.getState().campaigns.data)


	return {
		campaignList: ctx.reduxStore.getState().campaigns.data
	};
    
}




export default withRedux(Campaigns)