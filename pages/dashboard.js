
import React, { useState } from 'react'
// import fetch from 'isomorphic-unfetch'
import LayoutApp from '../components/LayoutApp'
import { withRedux } from '../lib/redux';

import SideBar from '../components/SideBar';
import QuickAnalytics from '../components/QuickAnalytics';
import { withAuthSync } from '../utils/auth';

import { useSelector, shallowEqual } from 'react-redux';
import { auth, getUserData } from '../utils/auth';
import { motion } from "framer-motion";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';

import TestChart from '../components/TESTCHART';

const getUserInfo = () => {
  return useSelector(
    state => ({
      isAuthenticated: state.isAuthenticated,
    }),
    shallowEqual
  )
}


function Dashboard () { 

  const [quickAnalytics, setQuickAnalytics] = useState({ title: 'TOTAL MONTHLY SUBMISSIONS', body: '50%' })
  // const { current_user } = getUserInfo()

  //console.log('current_user', current_user)




    let quickAnalyticsData = [
      {
        title: 'TOTAL MONTHLY SUBMISSIONS',
        body: '50%',

      },
      {
        title: 'TOTAL FORMS MANAGED',
        body: '6'
      },
      {
        title: 'TOTAL MONTHLY SUBMISSIONS',
        body: '50%'
      },
      {
        title: 'TOTAL MONTHLY SUBMISSIONS',
        body: '50%'
      },
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
                  {/* <h6 className="m-0 font-weight-bold text-primary">Manage Your Current Campaigns</h6> */}

                  {/* <DropdownButton style={{background: 'white'}} id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton> */}
                      <Dropdown>
                        <h6 className="m-0 font-weight-bold text-primary">
                          <Dropdown.Toggle variant="link" id="dropdown-basic">
                            Manage Your Current Campaigns
                          </Dropdown.Toggle>
                        </h6>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
    auth(ctx)  

    console.log('STATE REDUX',ctx.reduxStore.getState())


  }


  
export default withRedux(Dashboard)
  // export default Dashboard;
