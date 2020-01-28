import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { compose } from 'redux'
// import { login_action } from '../redux/actions/auth'
import { useDispatch } from 'react-redux'
import getUrl from './getUrl';

export const getCampaignData  = async (ctx) =>  {
  console.log('store state:', ctx.reduxStore.getState())

  const { userId } = nextCookie(ctx)
  console.log('userId', userId)
  
  // if (ctx.reduxStore.getState().campaigns.data.length) {
  //   console.log(ctx.reduxStore.getState().campaigns.data.length)
  //   return
  // }
  //!ctx.reduxStore.getState().campaigns.data.length
  try {
    
    if (ctx.reduxStore.getState().auth.user.id == !userId) {
      console.log('cookie userId', userId)
      console.log('redux userId', ctx.reduxStore.getState().auth.user.id)
      console.log('PROBLEM PROBLEM PROBLEM PROBLEM PROBLEM PROBLEM PROBLEM PROBLEM PROBLEM')
   
    }

    const res = await fetch(`${getUrl}/campaign/get_campaigns/${userId}`);
    const data = await res.json()
        
    const { dispatch } = ctx.reduxStore;

    await dispatch({
      type: 'CAMPAIGN_DATA_LOADED',
      payload: data
    });
    
  } catch (error) {
    console.error('You have an error in your code or there are Network issues.',error)

    const { response } = error
   
  }
  
}