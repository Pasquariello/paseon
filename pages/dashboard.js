
import React, { useState } from 'react'
// import fetch from 'isomorphic-unfetch'
import LayoutApp from '../components/LayoutApp'
import { withRedux } from '../lib/redux';

import QuickAnalytics from '../components/QuickAnalytics';
import { withAuthSync } from '../utils/auth';

import { useSelector, shallowEqual } from 'react-redux';
import { auth, getUserData } from '../utils/auth';
import { getCampaignData } from '../utils/campaign_data';

import { motion } from "framer-motion";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import CampaignLink from '../components/CampaignLink';


import TestChart from '../components/TESTCHART';

const getUserInfo = () => {
  return useSelector(
    state => ({
      isAuthenticated: state.isAuthenticated,
    }),
    shallowEqual
  )
}


function Dashboard (props) { 

  // todo - think about how I want to make all quick analytics more dry but still custom for each page - pass in props? 
  // const [quickAnalytics, setQuickAnalytics] = useState({ title: 'TOTAL MONTHLY SUBMISSIONS', body: '50%' })


  let totalForms = props.campaignList.length
  let totalSubmissions = 0
  let countArray = []

    props.campaignList.forEach(campaign => {
      
      totalSubmissions = totalSubmissions + campaign.jsonb_array_length
      // countArray = [...countArray, campaign.jsonb_array_length]
      
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="col-md-6 mb-4"
            >
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Create a New Campaign</h6>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="../static/images/undraw_master_plan_95wa.svg" alt=""></img>
                  </div>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                  <a target="_blank" rel="nofollow" href="https://undraw.co/">See this cool link →</a>
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
                          {props.campaignList.length ? 
                            props.campaignList.map( campaign => {
                              console.log(campaign)
                            return  <Dropdown.Item><CampaignLink id={campaign.id} title={campaign.campaign_name} directory="campaignManagment"/></Dropdown.Item>
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
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                  <Link href="/campaignManagment/campaigns">
                    <a>See All Campaigns →</a>
                  </Link>
                </div>
              </div>
            </div>



{/*  
            <div className="col-md-6">
                    

                    <div className="card" style={{ width: "18rem"}}>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                      </div>
                    </div>
              
                  </div> */}
          </div>



{/*  */}

{/* <TestChart/> */}


<div className="row"> 
            <div className="col-md-6">
                    

              <div className="card mb-4">
                <div className="card-body">

                 

                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
        
            </div>
            <div className="col-md-6">
                    

                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
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

    if  (!ctx.reduxStore.getState().campaigns.data.length){
      await getCampaignData(ctx)
    } 

    return {
      campaignList: ctx.reduxStore.getState().campaigns.data

    }

  }


  
export default withRedux(Dashboard)
  // export default Dashboard;
