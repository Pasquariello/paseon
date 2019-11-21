import React, { useState } from 'react'
// import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/MyLayout'
 import { login } from '../utils/auth'

import { useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
// import { login } from '../redux/actions/auth'
import Router from 'next/router'
import { func } from 'prop-types'







function Login () {
  const dispatch = useDispatch()


  const [userData, setUserData] = useState({ username: '', error: '' })

  async function handleSubmit (event) {
    
    event.preventDefault()
    setUserData(Object.assign({}, userData, { error: '' }))
    const username = userData.username
    console.log('hi', username)

    let url = 'http://localhost:3001/login/auth'

    try {

      const response = await fetch(url, {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
      }).then(
        function(response) {
          if (response.status !== 200) {
            console.log('Login failed.')
              let error = new Error(response.statusText)
              error.response = response
              throw error
          }

          response.json().then(function(data){
            console.log('DATA', data)

            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: data
            });


            Router.push('/dashboard')

          })
        }
      )
      // if (response.status !== 200) {
      //   console.log('problem')
        // console.log('success')
        // const { token, userData } = await response.json()

        //  console.log('payload', userData)
        // //await login({ token })

        // dispatch({
        // type: 'LOGIN_SUCCESS',
        // payload: token
        // });

        
        // dispatch({
        //   type: 'USER_LOADED',
        //   payload: userData
        // });

        // TODO: causing a weird flash
        // Router.push('/dashboard')
        // console.log('token', token)
     // } 
      // else {
      //   console.log('Login failed.')
      //   let error = new Error(response.statusText)
      //   error.response = response
      //   throw error
      // }
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

  return (
    <Layout>
      <div className='login'>
        <form onSubmit={handleSubmit}>
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

          <button type='submit'>Login</button>

          {userData.error && <p className='error'>Error: {userData.error}</p>}
        </form>

        <Link href="/register">
          <a>Register</a>
        </Link>

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

Login.getInitialProps = ({ reduxStore }) => {
  console.log('reduxStore',reduxStore)
  // Tick the time once, so we'll have a
  // valid time before first render
  // const { dispatch } = reduxStore
  // dispatch({
  //   type: 'LOGIN',
  //   current_user: 2
  //   //light: typeof window === 'object',
  //   //lastUpdate: Date.now(),
  // })

  return {}
}

export default withRedux(Login)

// export default Login



// function ProfilePage({ profile }) {
//   return (
//     <>
//       <div>
//         <img src={profile.avatar} />
//         <h1>{profile.name}</h1>
//         <p>{profile.address}</p>
//         <p>{profile.email}</p>
//         <Link href="/">
//           <a>← Back to profiles</a>
//         </Link>
//       </div>
//     </>
//   )
// }

// export default ProfilePage