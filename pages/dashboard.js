
import React, { useState } from 'react'
// import fetch from 'isomorphic-unfetch'
import LayoutApp from '../components/LayoutApp'
import SideBar from '../components/SideBar';


function Dashboard () { 

    return (
        <LayoutApp>
          
          <div className="row"> 
            <h3>Dashboard</h3> 
          </div>

{/* Start quick analytics  */}
          <div className="row"> 
       

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Total Monthly Submissions</div>
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                        </div>
                        <div class="col">
                          <div class="progress progress-sm mr-2">
                            <div class="progress-bar bg-info" role="progressbar" style={{width: "50%", ariaValuenow:"50", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Forms Managed</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">6</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>
{/* End quick analytics  */}














          <div className="row"> 

          <div class="col-md-6 mb-4">

<div class="card shadow mb-4">
  <div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
  </div>
  <div class="card-body">
    <div class="text-center">
      <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="../static/images/undraw_master_plan_95wa.svg" alt=""></img>
    </div>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
    <a target="_blank" rel="nofollow" href="https://undraw.co/">See this cool link →</a>
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

<div className="row"> 
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
        
            </div>
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
              
                  </div>
          </div>

       
        
            </LayoutApp>
  )
  }

  export default Dashboard;
