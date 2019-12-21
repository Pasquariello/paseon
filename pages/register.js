import React, { useState } from 'react'
// import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/MyLayout'
 import { login } from '../utils/auth'

import { useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
// import { login } from '../redux/actions/auth'
import Router from 'next/router'
import  getUrl  from '../utils/getUrl';


function Register () {
  const dispatch = useDispatch()
  

  const [userData, setUserData] = useState({
      firstname: '',
      lastname: '',
      password1: '',
      password2: '',
      email: '',
      company: ''
  })

  async function handleSubmit (event) {
    
    event.preventDefault();



    if (userData.password1 !== userData.password2){
      console.log('no match')
      
      setUserData(
        Object.assign({}, userData, {
          error: "Passwords Do Not Match"
        })
      )

      return;
    }

    setUserData(Object.assign({}, userData, { error: '' }))
    
    const username = userData.username

    let url = `${getUrl}//register/`

    try {

      const response = await fetch(url, {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      }).then(
        function(response) {
          if (response.status !== 200) {
            console.log('Login failed.')
              let error = new Error(response.statusText)
              error.response = response
              throw error
          }

          response.json().then(function(data){
            
            dispatch({
              type: 'REGISTER_SUCCESS',
              payload: data
            });

            Router.push('/dashboard')

          });
        }
      );
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )

      const { response } = error
      setUserData(
        Object.assign({}, userData, {
          error: response ? response.statusText : error.message
        })
      )
    }
  }

  function setFormValuesToState(e, state_key){
    setUserData({...userData, [state_key]: e.target.value})
  }

  return (
    <Layout>
      <div className='login'>

      <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">First Name</label>
                        <input 
                            onChange={(e) => setFormValuesToState(e, 'firstname')}
                            type="text" className="form-control" 
                            id="inputFirstName" 
                            placeholder="First Name"
                            required></input>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputLastName">Last Name</label>
                        <input 
                            onChange={(e) => setFormValuesToState(e, 'lastname')}
                            type="text" 
                            className="form-control" 
                            id="inputLastName" 
                            placeholder="Last Name"
                            required></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="inputEmail4">Email</label>
                        <input 
                            onChange={(e) => setFormValuesToState(e, 'email')}
                            type="email" 
                            className="form-control" 
                            id="inputEmail4" 
                            placeholder="Email"
                            required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword1">Password</label>
                        <input 
                            onChange={(e) => setFormValuesToState(e, 'password1')}
                            type="password" 
                            className="form-control" 
                            id="inputPassword1" 
                            placeholder="Password"
                            required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword2">Re-Enter Password</label>
                        <input
                            onChange={(e) => setFormValuesToState(e, 'password2')}
                            type="password" 
                            className="form-control" 
                            id="inputPassword2" 
                            placeholder="Password"
                            required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCompany">Company</label>
                        <input 
                            onChange={(e) => setFormValuesToState(e, 'company')}
                            type="text" 
                            className="form-control" 
                            id="inputCompany" 
                            placeholder="Company"></input>
                    </div>
            <button type="submit">Register</button>
       
{/* */}
          {userData.error && <p className='error'>Error: {userData.error}</p>}
        </form>


      </div>
      <style jsx>{`
        .login {
          max-width: 700px;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        form {
          display: flex;
          flex-flow: column;
        }
        label {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error {
          margin: 0.5rem 0 0;
          color: brown;
        }
      `}</style>
    </Layout>
  )
}

Register.getInitialProps = ({ reduxStore }) => {


  return {}
}

export default withRedux(Register)

