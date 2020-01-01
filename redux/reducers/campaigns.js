import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'


import {
    CAMPAIGN_DATA_LOADED,
    ADD_CAMPAIGN
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
            // ...payload,
            data: [...payload]
        
        };
        case ADD_CAMPAIGN:
          console.log('hello from add campaign reducer', payload)
          console.log('hello from add campaign reducer', state.data)
          
          return {
            ...state,
            data: [...state.data, payload]

          }
  
      default:
        return state;
    }
  }