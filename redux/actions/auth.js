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

  // import setAuthToken from "../utils/setAuthToken";
  
  // Load User
//   export const loadUser = () => async dispatch => {
//     if (localStorage.token) {
//       //setAuthToken(localStorage.token);
//     }
  
//     try {
//       const res = await axios.get("/api/auth");
//       dispatch({
//         type: USER_LOADED,
//         payload: res.data
//       });
//     } catch (error) {
//       dispatch({
//         type: AUTH_ERROR
//       });
//     }
//   };
  
  // Register
  export const register = ({ name, email, password }) => async dispatch => {
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
  
      dispatch(loadUser());
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
  //export async function login_action (userData) {

    console.log('in action login_action')
    const {username} = userData
    let url = 'http://localhost:3001/login/auth'

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
  
  // Logout
  export const logout = () => async dispatch => {
    // dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOGOUT });
  };