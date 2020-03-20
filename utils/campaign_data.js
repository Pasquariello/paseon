
import nextCookie from 'next-cookies'
// import { login_action } from '../redux/actions/auth'
import getUrl from './getUrl';

export const getCampaignData  = async (ctx) =>  {
	console.log('store state:', ctx.reduxStore.getState())

	const { userId } = nextCookie(ctx)
  
	try {
  
		const res = await fetch(`${getUrl}/campaign/get_campaigns/${userId}`);
		const data = await res.json()
        
		const { dispatch } = ctx.reduxStore;
		console.log('DATA', data)
		await dispatch({
			type: 'CAMPAIGN_DATA_LOADED',
			payload: data
		});
    
	} catch (error) {
		console.error('You have an error in your code or there are Network issues.',error)

		//const { response } = error
   
	}
  
}