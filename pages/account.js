import Layout from '../components/MyLayout';
import Link from 'next/link';
import LayoutApp from '../components/LayoutApp'
import QuickAnalytics from '../components/QuickAnalytics';
import { auth, getUserData, editUserData } from '../utils/auth';
import fetch from 'isomorphic-unfetch';
import { withRedux } from '../lib/redux';
import React, { useEffect, useState } from 'react';
import {states} from '../utils/states';

///edit_user_acct/:id


function Account({user}) {

	const [idList, setIdList] = useState([]);

	const [userState, setUserState] = useState(user)

	let state_names = states.map(state => state.name);

	let quickAnalyticsData = [
		// {
		//   title: 'Account Type',
		//   body: userState.account_type,
  
		// },
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


	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(user)
		editUserData(userState);

	}

	console.log('kdjfkdjfdkjfkdjfkd', userState)

	return (
		<LayoutApp>
			{/* <QuickAnalytics
				data={quickAnalyticsData}
			/> */}
			<div className="row">
				<div className="col-md-6">
					<h3>Basic Account Information</h3>
					<form onSubmit={handleSubmit}>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputFirstName">First Name</label>
								<input 
									value={userState.first_name ? userState.first_name : ''} 
									type="text" 
									className="form-control" 
									id="inputFirstName" 
									placeholder="First Name"
									onChange={(e) => setUserState({...userState, first_name: e.target.value})}></input>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputLastName">Last Name</label>
								<input 
									value={userState.last_name ? userState.last_name : ''} 
									type="text" 
									className="form-control" 
									id="inputLastName" 
									placeholder="Last Name"
									onChange={(e) => setUserState({...userState, last_name: e.target.value})}></input>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputCompany">Company</label>
							<input 
								value={userState.company ? userState.company : ''}  
								type="text" 
								className="form-control" 
								id="inputCompany" 
								placeholder="Company"
								onChange={(e) => setUserState({...userState, company: e.target.value})}></input>
						</div>
						<div className="form-group">
							<label htmlFor="inputEmail">Email</label>
							<input 
								required
								value={userState.email ? userState.email : ''}  
								type="text" 
								className="form-control" 
								id="inputEmail" 
								placeholder="Email Address"
								onChange={(e) => setUserState({...userState, email: e.target.value})}></input>
						</div>
						{/* <div className="form-group">
							<label htmlFor="inputPassword">Password</label>
							<input 
								type="password" 
								className="form-control" 
								id="inputPassword" 
								placeholder="Password"></input>
						</div>
						<div className="form-group">
							<label htmlFor="inputRepeatPassword">Repeat Password</label>
							<input 
								type="password" 
								className="form-control" 
								id="inputRepeatPassword" 
								placeholder="Repeat Password"></input>
						</div> */}
						{/* <div className="form-group">
							<label htmlFor="inputSrtreetAddress">Street Address</label>
							<input 
								type="text" 
								className="form-control" 
								id="inputSrtreetAddress" 
								placeholder="Street Address"></input>
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
						</div> */}

						<input className="btn btn-outline-primary" type="submit"/>

					</form>
				</div>

				<div className="col-md-6">
					<h3>Payment Information</h3>
				

				</div>
			</div>

       
		</LayoutApp>

	)

}

Account.getInitialProps = async (ctx) => {
	auth(ctx)

	//if  (!ctx.reduxStore.getState().user.user){
	await getUserData(ctx)
	//}
     

	// TODO add check for user in redux if no user then fetch
	// const userId = auth(ctx);

	return {
		user: ctx.reduxStore.getState().user.user
	};
}

export default withRedux(Account)