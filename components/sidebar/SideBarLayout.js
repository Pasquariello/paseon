import Link from 'next/link';
import React, { useState } from 'react';

import { faHome, faUserCog, faWrench, faChartBar, faBlenderPhone, faEnvelope, faBullhorn, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

import NavElem from './NavElem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import { useRouter } from 'next/router'
import classNames from 'classnames'


export default function SideBarLayout(props) {
  const router = useRouter();

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
    {
      link: '/campaignManagment/campaigns',
      icon: faBullhorn,
      title: 'Campaigns'
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


  const renderNavElems = (item) => {
  let classes = classNames(
    {
      'activePath': item.link == router.pathname,
      'activePathOpen': props.hoverState,
      'activePathClosed': !props.hoverState,
      'myElem': true,
      // 'dropZone': initDrag,
      // 'dropZoneHide' :!initDrag
    }
  );

  return (
    <>
    <div className={classes}>
    <NavElem hoverState={props.hoverState} data={item} setActivePage={props.setActivePage} />
  {item.link == router.pathname && console.log('match')}
  </div>

  <style jsx>{`
    .activePath {
        background: rgba(108, 99, 255, 1);
    }

    .activePathOpen {
      border-radius: 0 50px 50px 0;
      transition: all 0.1s ease-in-out;
  
    }

    .activePathClosed {
      border-radius: 0;
      transition: all 0.1s ease-in-out;
    }

    .myElem:hover {
        background: rgba(108, 99, 255, 0.5);
        border-radius: 0 50px 50px 0;
    }
  `}
  </style>
  

  </>
  )
  }


  return(
    <>
   

      <ul>
      <div className="navWrap">
      <button className="navbar-toggler" onClick={() => props.toggleState()} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">

        <span className={props.hoverState ? 'active' : ''} style={{padding: '2px'}}>
            <div className="toggle-btn type11"></div>
        </span>
      </button>
      
            <h2 style={{display: "inline-block"}}>
         
            
            <span className="logoFont"
              style={{visibility: props.hoverState ? 'visible': 'hidden' , position: 'absolute'}}
            >
              <FontAwesomeIcon fixedWidth width="0" icon={faFeatherAlt} />

              Paseon
            </span>
        </h2>
          <hr></hr>
        </div>
    {/* TODO: set up class as objects?  */}
        {
          navItems.map(item => {
            return (
              renderNavElems(item)
              // <div className={item.link == router.pathname ? 'activePath myElem': 'myElem'}>
              //   <NavElem hoverState={props.hoverState} data={item} setActivePage={props.setActivePage} />
              // {item.link == router.pathname && console.log('match')}
              // </div>
            )
          })

        }

        {/* <div className="myElem">
          <Dropdown>
            <DropdownButton variant="link" id="dropdown-basic" title={
            <span><FontAwesomeIcon fixedWidth width="0" icon={faBullhorn} />
            <span className="item-title"
                style={{visibility: props.hoverState ? 'visible': 'hidden', marginLeft: '15px'}}
              >Campaigns</span></span>}
            >

            {
            subNavItems.map(item => {
              return ( 
                <Dropdown.Item>
                  <Link href={item.link}>
                    <button className="btn btn-link">{item.title}</button>
                  </Link>
                </Dropdown.Item>
              )
            })

            }
            </DropdownButton>
          </Dropdown>
        </div> */}



    </ul>

    <style jsx>{`




  .item-title {
    color: black;
  }
  .btn-link:hover {
  text-decoraion: none !important
  }
  .btn {
    text-decoraion: none !important
    }

  .sidebar-item {
    font-weight: bold;
    text-decoraion: none;
    display: block;
    margin-top: 30px;
    margin-bottom: 30px;
}

button:focus {
  outline: none;
}

    ul {
      padding-left: 0
     }
   
     .logoFont{
      margin-left: 20px;
     
    }

    .navWrap{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

  

    // 

    .toggle-btn {
      height: 2px;
      width: 25px;
      background-color: #000;
      position: relative;
      top: 50%;
      left: 0;
      margin: auto;
      transition: all 0.3s ease-in-out; }
      .toggle-btn:before {
        content: "";
        height: 2px;
        width: 25px;
        box-shadow: 0 -10px 0 0 #000;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s ease-in-out; }
      .toggle-btn:after {
        content: "";
        height: 2px;
        width: 25px;
        box-shadow: 0 10px 0 0 #000;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s ease-in-out; }
    
    .active .toggle-btn {
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


    // 



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

 

    `}</style>
   
    </>
)
}
