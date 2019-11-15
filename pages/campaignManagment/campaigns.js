import Layout from '../../components/MyLayout';
import Link from 'next/link';
import LayoutApp from '../../components/LayoutApp'
import QuickAnalytics from '../../components/QuickAnalytics';
import ReactTable from 'react-table';
import moment from 'moment';
import 'moment-timezone';
import CampaignLink from '../../components/CampaignLink';
import fetch from 'isomorphic-unfetch';
import React, { useState } from 'react';



export default function Campaigns(props) {


    let quickAnalyticsData = [
        {
          title: 'Contact Form',
  
        },
        {
          title: 'Sign Up Form',
        },
        {
          title: 'RSVP From',
        },
    ] 
       
    const [idList, setIdList] = useState([]);
    const [campaignListState, setcampaignListState] = useState(props.campaignList);


    const deleteCampaigns = async () => {

    
        // event.preventDefault()
        // setUserData(Object.assign({}, userData, { error: '' }))
    
        let url = 'http://localhost:3001/campaign/remove_campaign/'
    
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

    
    const renderTable = () => {
        const columns = [
                {
                    id: 'select',
                    Header: '',
                    accessor: 'id',
                    Cell: props => <input onChange={() => setIdList([props.original.id])} type="checkbox"></input>

                },
                {
                    id: 'name',
                    Header: 'Name',
                    accessor: 'campaign_name',
                    Cell: props => <CampaignLink id={props.original.id} title={props.value}/>

                },
                {
                    id: 'date_created',
                    Header: 'Date Created',
                    accessor: 'date_created',
                    Cell: props => moment(props.value).format('LLL')

                },
        ]
        console.log('state', campaignListState)
        //TODO: turn this into its own function that takes in columns? 
        return (
            <>
            <p>Visual representation of data collected with your new campaign.</p>
            <ReactTable
            data={campaignListState}
            columns={columns}
            defaultPageSize ='10'
            /> 
            </>
        )
    }
        return (
        <LayoutApp>
            Basic Form Options:
            <QuickAnalytics
                data={quickAnalyticsData}
            />
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
            <h3>My Campaings:</h3> 
                <Link href="/campaignManagment/newCampaign">
                    <a>+ New</a>
                </Link>
            </div>
            <div style={{marginTop: '20px'}}>
            <button onClick={deleteCampaigns}>Delete</button>
            {campaignListState ? renderTable() : null}

            </div>
            

 
            
        </LayoutApp>

    );

    
}

Campaigns.getInitialProps = async function(context) {
    console.log(
        'hello from init props'
    )
    const res = await fetch('http://localhost:3001/campaign/get_campaigns');
    const data = await res.json();
    console.log('resolved');
    
    console.log('I got: ',data);
    return {
      campaignList: data
    };
}
