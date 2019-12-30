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
    <React.Fragment>
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
        text-decoraion: none;
        margin-top: 15px;
        margin-bottom: 15px;
        display: block;
    }
   


    @media (max-width: 770px) {
 

      .sidebar-item {
        font-size: .65rem;
        display: block;
      }
      .logoFont{
        font-size: 1rem;  
        padding-left: 10px;
      }
    }

    `}
    </style>
   
    </React.Fragment>
)
}
