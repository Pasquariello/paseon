import React, { useState } from 'react'
// import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/MyLayout'
import { login } from '../utils/auth'

import { useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
// import { login } from '../redux/actions/auth'
import Router from 'next/router'


import getUrl from '../utils/getUrl';





function Login () {
	const dispatch = useDispatch()


	const [userData, setUserData] = useState({ username: '', password: '', error: '' })


	async function handleSubmit (event) {
    
		event.preventDefault()
		setUserData(Object.assign({}, userData, { error: '' }))
		const username = userData.username

		//let url = 'https://paseonforms.com/login/auth'
		let url = `${getUrl}/login/auth`    
  

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
							type: 'LOGIN_SUCCESS',
							payload: data
						});


						Router.push('/dashboard')

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
					error: response ? response.statusText : error.message
				})
			)
		}
	}

	return (
		<Layout>
      
			<div className='login' style={{overflow: 'auto'}}>
				<form onSubmit={handleSubmit}>
					<label htmlFor='username'>Username / Email</label>

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

					<label htmlFor='username'>Password</label>

					<input
						type='password'
						id='password'
						name='password'
						value={userData.password}
						onChange={event =>
							setUserData(
								Object.assign({}, userData, { password: event.target.value })
							)
						}
					/>

					<button type='submit'>Login</button>

					{userData.error && <p className='error'>Error: {userData.error}</p>}
				</form>
          
				<div style={{float: 'left'}}>
					<Link href="/register">
						<a>Register</a>
					</Link>
				</div>

				<div style={{float: 'right'}}>
					<Link href="/reset/forgotPassword">
						<a>Forgot Password</a>
					</Link>
				</div>
				{/* <div style={{clear: 'both'}}></div> */}


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