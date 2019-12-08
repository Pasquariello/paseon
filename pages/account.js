import Layout from '../components/MyLayout';
import Link from 'next/link';
import LayoutApp from '../components/LayoutApp'
import QuickAnalytics from '../components/QuickAnalytics';
import { auth, getUserData } from '../utils/auth';
import fetch from 'isomorphic-unfetch';
import { withRedux } from '../lib/redux';
import React, { useState } from 'react';
import {states} from '../utils/states';



 function Account(props) {

    const [idList, setIdList] = useState([]);

    const [userState, setUserState] = useState(props.user)

    let state_names = states.map(state => state.name);


    let quickAnalyticsData = [
        {
          title: 'Account Type',
          body: userState.account_type,
  
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
            <QuickAnalytics
                data={quickAnalyticsData}
            />
            <div style={{marginTop: '50px'}}>
                <h3>Basic Account Information</h3>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input 
                            value={userState.email ? userState.email : ''} 
                            type="email" 
                            className="form-control" 
                            id="inputEmail4" 
                            placeholder="Email"></input>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="inputPassword4" 
                            placeholder="Password"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCompany">Company</label>
                        <input 
                            value={userState.company ? userState.company : ''}  
                            type="text" 
                            className="form-control" 
                            id="inputCompany" 
                            placeholder="Company"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputAddress2" 
                            placeholder="Apartment, studio, or floor"></input>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputCity"></input>
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select 
                            id="inputState" 
                            defaultValue="choose" 
                            className="form-control">
                                <option value="choose">Choose...</option>
                                {state_names.map((state_opt, index) => {
                                    return <option key={index} value={state_opt}>{state_opt}</option>
                                })}
                        </select>
                        </div>
                        <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputZip"></input>
                        </div>
                    </div>
                </form>
            </div>
       
        </LayoutApp>

    )

}

Account.getInitialProps = async (ctx) => {
     auth(ctx)

    if  (!ctx.reduxStore.getState().user.user){
        await getUserData(ctx)
    }
     

    // TODO add check for user in redux if no user then fetch
    // const userId = auth(ctx);

    return {
        user: ctx.reduxStore.getState().user.user
    };
  }

  export default withRedux(Account)