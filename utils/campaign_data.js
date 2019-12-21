import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { compose } from 'redux'
// import { login_action } from '../redux/actions/auth'
import { useDispatch } from 'react-redux'


export const getCampaignData  = async (ctx) =>  {

  const { userId } = nextCookie(ctx)

  try {

    const res = await fetch(`http://localhost:3001/campaign/get_campaigns/${userId}`);
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