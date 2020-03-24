import Head from 'next/head';
import SideBarLayout from './sidebar/SideBarLayout';
import Header from './Header';
import React, { useState } from 'react';
// import { logout } from '../utils/auth';

import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import getHost from '../utils/get-host'
import { withRedux } from '../lib/redux';

import { useDispatch } from 'react-redux'




// const LayoutApp  => (
const LayoutApp = props => {


	const [sideNavWidth, setsideNavWidth] = useState(true)
	const [navBtn, setNavBtn] = useState(false)
	const [isActive, setIsActive] = useState(false)


	const [ hoverState, setHoverState ] = useState(false)


	const toggleState = () => {
		setHoverState(!hoverState)
	} 

	const dispatch = useDispatch()

	const logout = () => {

		// to support logging out from all windows
		// window.localStorage.setItem('logout', Date.now())
		dispatch({
			type: 'LOGOUT',
		});
		// Router.push('/login')
	}


	return (

		<>

				<SideBarLayout/>
   

			<div id="content-wrapper">
				{/* <button style={{fontSize:'12px', width: '100px', marginBottom: '15px'}} className={`btn btn-warning ${sideNavWidth ? 'inactive' : '' }`} onClick={toggleWidth}>Toggle Nav</button> */}
				<button style={{fontSize:'12px', width: '100px', marginBottom: '15px'}} className={`btn btn-warning`} onClick={()=>logout()}>Logout</button>
           
				{props.children}
			</div>
      
      




			<style jsx>{`



   


      #content-wrapper{
        margin: 2rem 2rem 0 5rem;
        // margin-left: 160px; /* Same as the width of the sidebar */
        padding: 0px 10px;
      }

      .flex-column {
        flex-direction: column!important;
      }

      .d-flex {
        display: flex!important;
      }

      body {
        height: 100%;
        width: 100%;
        overflow-x: none;
      }


      p {
        font-family: 'Montserrat', sans-serif;  
      }
      h1 h2 h3 {
        font-family: 'Roboto', sans-serif;
      }





    `}</style>
		</>
	)};

//  I DONT KNOW IF I NEED THIS OR NOT
//  DOUBLE CHECK https://jasonraimondi.com/posts/secure-a-next-js-application-with-jwt-and-a-private-route-higher-order-component/ 
//  TO SEE IF THEY ARE USING GETINITPROPS EVERYWHERE 

LayoutApp.getInitialProps = async ctx => {
	const { token } = nextCookie(ctx)
	console.log('pro', token)
	const apiUrl = getHost(ctx.req) + '/dashboard'
	console.log(apiUrl)
	const redirectOnError = () => {
		console.log('redirect on error')
		typeof window !== 'undefined'
			? Router.push('/login')
			: ctx.res.writeHead(302, { Location: '/login' }).end()
	}

	try {
		const response = await fetch(apiUrl, {
			credentials: 'include',
			headers: {
				Authorization: JSON.stringify({ token })
			}
		})

		if (response.ok) {
			console.log('res good', response)
  
		} else {
			return await redirectOnError()
		}
	} catch (error) {
		console.log('error', error)
		// Implementation or Network error
		return redirectOnError()
	}
}

export default withRedux(LayoutApp);