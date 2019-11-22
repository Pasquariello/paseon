import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'


import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    DELETE_ACCOUNT
  } from "../actions/types";
  
  const initialState = {
    //token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case REGISTER_SUCCESS:
        console.log('REGISTER reducer success', payload)
        cookie.set('token', payload.token, { expires: 36000 })
        cookie.set('userId', payload.payload.id, { expires: 36000 })
        //localStorage.setItem("token", payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        };
  
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case AUTH_ERROR:
      case LOGOUT:
      case DELETE_ACCOUNT:
        //localStorage.removeItem("token");
        cookie.remove('token')
        return {
          ...state,
         // token: null,
          isAuthenticated: false,
          loading: false
        };
  
      case LOGIN_SUCCESS:
        console.log('LOGIN_SUCCESS reducer success', payload)
        cookie.set('token', payload.token, { expires: 36000 })
        cookie.set('userId', payload.userData.id, { expires: 36000 })
       // localStorage.setItem("token", payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
        //   loading: false
        };
  
      case USER_LOADED:
        console.log('USER_LOADED reducer success', payload)
        return {
          ...state,
          user: payload,
        //   loading: false
        };
  
      default:
        return state;
    }
  }