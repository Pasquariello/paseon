import Link from 'next/link';
import React, { useState } from 'react';





// const SideBar = props => (
export default function SideBar(props) {

 
  

  return(
    <>
    <ul className={`${props.sideNavWidth ? 'sidenav-active': 'sidenav-hidden'} sidenav border-right`}>
    <div>
    <button className="btn" onClick={props.toggleWidth} data-toggle="collapse" data-target="#collapseExample">&#171;</button>
    <h2 className="logoFont">Paseon</h2>
    <hr></hr>
  </div>
      <li className="sidebar-item" >
        <Link href="/dashboard">
          <a className="nav-link">Dashboard</a>
        </Link>    
      </li>
      <li className="sidebar-item" >
        <Link href="/account">
          <a className="nav-link">Account Settings</a>
        </Link>    
      </li>
      <li className="sidebar-item" >
        <Link href="/campaignManagment/campaigns">
          <a className="nav-link">Campaigns</a>
        </Link>    
      </li>
      <li className="sidebar-item" >
        <Link href="/zTestPage">
          <a className="nav-link">Form Builder</a>
        </Link>    
      </li>
      <li className="sidebar-item" >
        <Link href="/email_archives">
          <a className="nav-link">Archived Emails</a>
        </Link>    
      </li>
      <li className="sidebar-item" >
        <Link href="/">
          <a className="nav-link">Integrations</a>
        </Link>    
      </li>
   
      </ul>

    <style jsx>{`
   .sidebar-item {
        // font-weight: bold;
        text-decoraion: none;
        margin-top: 15px;
        margin-bottom: 15px;
        display: block;
    }


    .sidebar-ul{
        list-style-type: none;
        padding-right: 40px;
        
    }

    .sidenav-hidden{
      width: 0rem;
      padding-right: 0px;
      transition: 0.5s;
      padding-left: 0;
    }


    .sidenav-active {
      width: 19rem;
      padding-right: 40px;
      transition: 0.5s;

     
    }

    .sidenav {
      top: 0;
      left: 0;
      overflow-x: hidden;
      padding-top: 20px;
      min-height: 100vh;
    }

    .open-sidenav {
      display: none
    }

    .openbtn-active {
      display: block
    }

    .openbtn-close {
      display: none
    }

   


    @media (max-width: 770px) {
      // .sidenav {
      //   width: 6.5rem;
      //   padding-left: 0px;

      // }

      // .sidenav-hidden{
      //   width: 0rem;
      //   padding-right: 0px;
      // }
  
  
      .sidenav-active {
        width: 6.5rem;
        padding-left: 0px;
      }

      .sidebar-item {
        font-size: .65rem;
        display: block;
      }
      .logoFont{
        font-size: 1rem;  
        padding-left: 10px;
      }
    }

     @media (max-width: 525px) {

    // .sidenav{
    //   display: none;
    // }

     }




    

    




    `}
    </style>
   
    </>
)
}
