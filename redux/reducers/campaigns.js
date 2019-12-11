import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'


import {
    CAMPAIGN_DATA_LOADED
  } from "../actions/types";
  
  const initialState = {
    //token: localStorage.getItem("token"),
   data : []
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CAMPAIGN_DATA_LOADED:
          console.log('hello from reducer')
        //localStorage.setItem("token", payload.token);
        return {
          ...state,
          ...payload,
        
        };
  
      default:
        return state;
    }
  }