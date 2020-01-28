import Head from 'next/head';
import SideBarLayout from './sidebar/SideBarLayout';
import Header from './Header';
import React, { useState } from 'react';
// import { logout } from '../utils/auth';

import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import getHost from '../utils/get-host'




// const LayoutApp  => (
const LayoutApp = props => {


const [sideNavWidth, setsideNavWidth] = useState(true)
const [navBtn, setNavBtn] = useState(false)
const [isActive, setIsActive] = useState(false)


const [ hoverState, setHoverState ] = useState(false)


const toggleState = () => {
  setHoverState(!hoverState)
} 

const logout = () => {
  const dispatch = useDispatch()

  // to support logging out from all windows
  // window.localStorage.setItem('logout', Date.now())
  dispatch({
    type: 'LOGOUT',
  });
  // Router.push('/login')
}


return (

  <>
     {/* <Head> */}

          {/* <link rel="stylesheet" href="node_modules/react-table/react-table.css"></link>
          <link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css"></link>
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet"></link>
          
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

          <title>
              Paseon
          </title> */}
        {/* </Head> */}
          <div
            onMouseEnter={()=> setHoverState(true)} onMouseLeave={()=> setHoverState(false)}
            // onClick={()=> toggleState()} // Need onClick for mobile view!
            className={`${hoverState ?  'sidenav-active' : 'sidenav-hidden'} sidenav border-right`}
          >
            <SideBarLayout
              toggleState={toggleState}
              hoverState={hoverState}
              className="sidenav"
              sideNavWidth={sideNavWidth}
              navBtn={navBtn}
            />
          </div>
   

          <div id="content-wrapper">
          {/* <button style={{fontSize:'12px', width: '100px', marginBottom: '15px'}} className={`btn btn-warning ${sideNavWidth ? 'inactive' : '' }`} onClick={toggleWidth}>Toggle Nav</button> */}
           <button style={{fontSize:'12px', width: '100px', marginBottom: '15px'}} className={`btn btn-warning`} onClick={()=>logout()}>Logout</button>
           
            {props.children}
          </div>
      
      




    <style jsx>{`


      .wrapper {
        // display: inline-block;
        // display: flex;
        //flex-wrap: wrap;
   
      }

      .sidenav-hidden{
        width: 3rem;
        padding-right: 0px;
        transition: 0.25s;
        padding-left: 0;
      }
  
  
      .sidenav-active {
        width: 19rem;
        padding-right: 40px;
        transition: 0.25s;
  
       
      }

      .sidenav {
        height: 100%; /* Full-height: remove this if you want "auto" height */
        // width: 160px; /* Set the width of the sidebar */
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        left: 0;
        background-color: #fff;
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 20px;
      }

      .active{
        display:block;
      }

      .inactive{
        visibility:hidden;
      }


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



      /////////
      .cta {
        height: 50px;
        width: 50px;
        cursor: pointer; }
      
      .toggle-btn {
        height: 2px;
        width: 25px;
        // background-color: red;
        position: relative;
        top: 50%;
        left: 0;
        margin: auto;
        transition: all 0.3s ease-in-out; }
        .toggle-btn:before {
          content: "";
          height: 2px;
          width: 25px;
          box-shadow: 0 -10px 0 0 ;
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.3s ease-in-out; }
        .toggle-btn:after {
          content: "";
          height: 2px;
          width: 25px;
          box-shadow: 0 10px 0 0 ;
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.3s ease-in-out; }
      
      .active .toggle-btn {
        width: 100px;
        background-color: transparent;
        transition: all 0.2s ease-in-out; }
        .active .toggle-btn:before {
          top: 0;
          transition: all 0.3s ease-in-out; }
        .active .toggle-btn:after {
          top: 0;
          transition: all 0.3s ease-in-out; }
      
      .active .type11 {
        transform: rotate(90deg);
        transition: all 0.4s ease-in-out; }
        .active .type11:before {
          transform: translateY(0) rotate(40deg); }
        .active .type11:after {
          transform: translateY(0) rotate(-40deg); }
      


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

export default LayoutApp;