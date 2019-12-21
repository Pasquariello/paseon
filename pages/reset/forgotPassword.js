import React, { useState } from 'react'
// import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../../components/MyLayout'

import Router from 'next/router'

import getUrl from '../../utils/getUrl';






function ForgotPassword () {


  const [userData, setUserData] = useState({ username: '', error: '' })


  async function handleSubmit (event) {
    
    event.preventDefault()
    setUserData(Object.assign({}, userData, { error: '' }))
    const username = userData.username

    let url = `${getUrl}/login/resetLink`

    try {

      const response = await fetch(url, {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
        
      }).then(
        function(response) {
          if (response.status !== 200) {
            console.log('RESET LINK failed.')
              let error = new Error(response.statusText)
              error.response = response
              throw error
          }

          response.json().then(function(data){
           
            setUserData(
              Object.assign({}, userData, {
                message: data.msg
              })
            );
          })
        }
      )
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )

      const { response } = error
      setUserData(
        Object.assign({}, userData, {
          message: response ? response.statusText : error.message
        })
      )
    }
  }

  return (
    <Layout>
      
      <div className='login' style={{overflow: 'auto'}}>
        <form onSubmit={handleSubmit}>
        <div style={{textAlign: 'center'}}>
          <h3>Trouble Logging in?</h3>
          <p>Enter your username to reset your passord</p>
        </div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={userData.username}
            onChange={event =>
              setUserData(
                Object.assign({}, userData, { username: event.target.value })
              )
            }
          />

          <button type='submit'>Send Login Link</button>
          
        </form>
        
        {userData.message && <p className='success'>{userData.message}</p>}


      </div>

      <style jsx>{`
        .login {
          max-width: 340px;
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

// ForgotPassword.getInitialProps = () => {

//   return {}
// }

export default ForgotPassword;
