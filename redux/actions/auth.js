import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    // CLEAR_PROFILE
  } from "./types";

  import { useDispatch } from 'react-redux'
  import getUrl from '../../utils/getUrl';


  
  // Register
  export const register = ({ name, email, password }) => async dispatch => {
    console.log('IN REGISTER ACTION')
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post("/api/users", body, config);
  
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
  
      //dispatch(loadUser());
    } catch (error) {
      const errors = error.response.data.errors;
  
      if (errors) {
        console.log('error')
        //errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      }
  
      dispatch({
        type: REGISTER_FAIL
      });
    }
  };
  
  // Login
  export const login = async(userData) => {

    const {username} = userData
    let url = `${getUrl}/login/auth`

    try {

      const response = await fetch(url, {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
      });
      
      if (response.status === 200) {
        let data = await response.json(); 
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
          });

      } else {
        dispatch({
            type: LOGIN_FAIL
          });
        console.log('Login failed.')
        let error = new Error(response.statusText)
        error.response = response
        throw error
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )

    }
   
  };

  //Load User
  export const loadUser = async(id) => {
  
    let url = `${getUrl}/account/get_acct_details/${id}`
  
    try {

      const response = await fetch(url, {
        
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      
      if (response.status === 200) {
        let data = await response.json(); 

        dispatch({
            type: USER_LOADED,
            payload: data
          });

      } else {
        dispatch({
            type: LOGIN_FAIL
          });
        console.log('Login failed.')
        let error = new Error(response.statusText)
        error.response = response
        throw error
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )

    }
     
  };
  
  // Logout
  export const logout = () => async dispatch => {
    dispatch({ type: LOGOUT });
  };