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
  
      case USER_LOADED:
        return {
          ...state,
          user: payload,
        //   loading: false
        };
  
      default:
        return state;
    }
  }