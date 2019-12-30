import Link from 'next/link';
import React, { useState } from 'react';

import { faHome, faUserCog, faWrench, faChartBar, faBlenderPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import NavElem from './NavElem';


export default function SideBarLayout(props) {


  const [ hoverState, setHoverState ] = useState(false)
  

  let navItems = [
    {
      link: '/dashboard',
      icon: faHome,
      title: 'Dashboard'
    },
    {
      link: '/account',
      icon: faUserCog,
      title: 'Account Settings'
    },
    {
      link: '/zTestPage',
      icon: faWrench,
      title: 'Form Builder'
    },
    {
      link: '/email_archives',
      icon: faEnvelope,
      title: 'Archived Emails'
    },
    {
      link: '/analytics',
      icon: faChartBar,
      title: 'Analytics'
    },
    // WAIT TO ADD UNTIL INTEGRATIONS LOGIC IS WORKED OUT
    // { 
    //   link: '/',
    //   fontAwesomeIcon: faBlenderPhone,
    //   title: 'Integrations'
    // },
    {
      link: '/',
      icon: faBlenderPhone,
      title: 'Integrations'
    },
  ]


  let subNavItems = [
    {
      link: '/campaignManagment/new_campaign',
      icon: null,
      title: 'New'
    },
    {
      link: '/campaignManagment/campaigns',
      icon: null,
      title: 'Existing'
    },
    
  ]





  return(
    <div>
      <ul>
      <div>
    <button className="btn" onClick={props.toggleWidth} data-toggle="collapse" data-target="#collapseExample">&#171;</button>
    <h2 className="logoFont">Paseon</h2>
    <hr></hr>
  </div>
    {
      navItems.map(item => {
        return <NavElem data={item}/>
      })

    }
      <span className="sidebar-item" >
      <a className="nav-link" data-toggle="collapse" href="#campaignOptionCollapse"  aria-expanded="true" aria-controls="campaignOptionCollapse">Campaigns <span style={{fontSize: '12px'}}>&#x25BC;</span></a>

      <div className="collapse multi-collapse hide" id="campaignOptionCollapse"> 
      
      {
      subNavItems.map(item => {
        return <NavElem data={item}/>
      })

      }
      </div>
      </span>


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

    // .sidenav-hidden{
    //   width: 3rem;
    //   padding-right: 0px;
    //   transition: 0.25s;
    //   padding-left: 0;
    // }


    // .sidenav-active {
    //   width: 19rem;
    //   padding-right: 40px;
    //   transition: 0.25s;

     
    // }

  

  

    .openbtn-active {
      display: block
    }

    .openbtn-close {
      display: none
    }

   


    @media (max-width: 770px) {
 
  
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
   
    </div>
)
}
