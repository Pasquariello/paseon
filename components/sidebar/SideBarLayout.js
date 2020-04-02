import React, {useState} from 'react';
import Link from 'next/link';

import { faHome, faUserCog, faWrench, faChartBar, faBlenderPhone, faEnvelope, faBullhorn, faFeatherAlt, faUserPlus, faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import NavElem from './NavElem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router'
import classNames from 'classnames'


// export default function SideBarLayout(props) {
// 	const router = useRouter();

// 	let navItems = [
// 		{
// 			link: '/dashboard',
// 			icon: faHome,
// 			title: 'Dashboard'
// 		},
// 		{
// 			link: '/account',
// 			icon: faUserCog,
// 			title: 'Account Settings'
// 		},
// 		{
// 			link: '/zTestPage',
// 			icon: faWrench,
// 			title: 'Form Builder'
// 		},
// 		{
// 			link: '/email_archives',
// 			icon: faEnvelope,
// 			title: 'Archived Emails'
// 		},
// 		{
// 			link: '/analytics',
// 			icon: faChartBar,
// 			title: 'Analytics'
// 		},
// 		// WAIT TO ADD UNTIL INTEGRATIONS LOGIC IS WORKED OUT
// 		// { 
// 		//   link: '/',
// 		//   fontAwesomeIcon: faBlenderPhone,
// 		//   title: 'Integrations'
// 		// },
// 		{
// 			link: '/',
// 			icon: faBlenderPhone,
// 			title: 'Integrations'
// 		},
// 		{
// 			link: '/campaignManagment/campaigns',
// 			icon: faBullhorn,
// 			title: 'Campaigns'
// 		},
    
// 	]


// 	let subNavItems = [
// 		{
// 			link: '/campaignManagment/new_campaign',
// 			icon: null,
// 			title: 'New'
// 		},
// 		{
// 			link: '/campaignManagment/campaigns',
// 			icon: null,
// 			title: 'Existing'
// 		},
    
// 	]


// 	const renderNavElems = (item, index) => {
// 		let classes = classNames(
// 			{
// 				'activePath': item.link == router.pathname,
// 				'activePathOpen': props.hoverState,
// 				'activePathClosed': !props.hoverState,
// 				'myElem': true,
// 				// 'dropZone': initDrag,
// 				// 'dropZoneHide' :!initDrag
// 			}
// 		);

// 		return (
// 			<div key={index}>
// 				<div className={classes}>
// 					<NavElem hoverState={props.hoverState} data={item} setActivePage={props.setActivePage} />
// 					{item.link == router.pathname && console.log('match')}
// 				</div>

// 				<style jsx>{`
//     .activePath {
//         background: rgba(108, 99, 255, 1);
//     }

//     .activePathOpen {
//       border-radius: 0 50px 50px 0;
//       transition: all 0.1s ease-in-out;
  
//     }

//     .activePathClosed {
//       border-radius: 0;
//       transition: all 0.1s ease-in-out;
//     }

//     .myElem:hover {
//         background: rgba(108, 99, 255, 0.5);
//         border-radius: 0 50px 50px 0;
//     }
//   `}
// 				</style>
  

// 			</div>
// 		)
// 	}


// 	return(
// 		<>
   

// 			<ul>
// 				<div className="navWrap">
// 					<button className="navbar-toggler" onClick={() => props.toggleState()} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">

// 						<span className={props.hoverState ? 'active' : ''} style={{padding: '2px'}}>
// 							<div className="toggle-btn type11"></div>
// 						</span>
// 					</button>
      
// 					<h2 style={{display: "inline-block"}}>
         
            
// 						<span className="logoFont"
// 							style={{visibility: props.hoverState ? 'visible': 'hidden' , position: 'absolute'}}
// 						>
// 							<FontAwesomeIcon fixedWidth width="0" icon={faFeatherAlt} />

//               Paseon
// 						</span>
// 					</h2>
// 					<hr></hr>
// 				</div>
// 				{/* TODO: set up class as objects?  */}
// 				{
// 					navItems.map((item, index) => {
// 						return (
// 							renderNavElems(item, index)
// 						)
// 					})

// 				}
// 			</ul>

// 			<style jsx>{`

//   .item-title {
//     color: black;
//   }
//   .btn-link:hover {
//   text-decoraion: none !important
//   }
//   .btn {
//     text-decoraion: none !important
//     }

//   .sidebar-item {
//     font-weight: bold;
//     text-decoraion: none;
//     display: block;
//     margin-top: 30px;
//     margin-bottom: 30px;
// }

// button:focus {
//   outline: none;
// }

//     ul {
//       padding-left: 0
//      }
   
//      .logoFont{
//       margin-left: 20px;
     
//     }

//     .navWrap{
//       overflow: hidden;
//       text-overflow: ellipsis;
//       white-space: nowrap;
//     }

  

//     // 

//     .toggle-btn {
//       height: 2px;
//       width: 25px;
//       background-color: #000;
//       position: relative;
//       top: 50%;
//       left: 0;
//       margin: auto;
//       transition: all 0.3s ease-in-out; }
//       .toggle-btn:before {
//         content: "";
//         height: 2px;
//         width: 25px;
//         box-shadow: 0 -10px 0 0 #000;
//         position: absolute;
//         top: 0;
//         left: 0;
//         transition: all 0.3s ease-in-out; }
//       .toggle-btn:after {
//         content: "";
//         height: 2px;
//         width: 25px;
//         box-shadow: 0 10px 0 0 #000;
//         position: absolute;
//         top: 0;
//         left: 0;
//         transition: all 0.3s ease-in-out; }
    
//     .active .toggle-btn {
//       background-color: transparent;
//       transition: all 0.2s ease-in-out; }
//       .active .toggle-btn:before {
//         top: 0;
//         transition: all 0.3s ease-in-out; }
//       .active .toggle-btn:after {
//         top: 0;
//         transition: all 0.3s ease-in-out; }
    
//     .active .type11 {
//       transform: rotate(90deg);
//       transition: all 0.4s ease-in-out; }
//       .active .type11:before {
//         transform: translateY(0) rotate(40deg); }
//       .active .type11:after {
//         transform: translateY(0) rotate(-40deg); }


//     // 



//     @media (max-width: 770px) {
 

//       .sidebar-item {
//         font-size: .65rem;
//         display: block;
//       }
//       .logoFont{
//         font-size: 1rem;  
//         padding-left: 10px;
//       }
//     }

 

//     `}</style>
   
// 		</>
// 	)
// }


export default function SideBarLayout({setActivePage}) {

  


	// eslint-disable-next-line no-unused-vars
	const [ activeNav, setActiveNav ] = useState('');
	const router = useRouter();

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
		{
			link: '/campaignManagment/campaigns',
			icon: faBullhorn,
			title: 'Campaigns'
		},
    
	]

    
 
	// const signout = () => {
	// 	cookie.remove('token')
	// 	Router.push('/')
	// }

	const toggleState = () => {
		setHoverState(!hoverState)
  } 
  
   	const renderNavElems = (item) => {
		let classes = classNames(
			{
				'activePath': item.link == router.pathname,
				'activePathOpen': hoverState,
				'activePathClosed': !hoverState,
				'myElem': true,
				// 'dropZone': initDrag,
				// 'dropZoneHide' :!initDrag
			}
		);

		return (
			<div key={item.title}>
				<div className={classes}>
					<NavElem hoverState={hoverState} data={item} setActivePage={setActivePage} />
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
  

			</div>
		)
	}


	return(
		<div  onMouseEnter={()=> setHoverState(true)} onMouseLeave={()=> setHoverState(false)}
			// onClick={()=> toggleState()} // Need onClick for mobile view!
			className={`${hoverState ?  'sidenav-active' : 'sidenav-hidden'} sidenav border-right`}
		>


			<ul>

				<div className="navWrap">
					<button className="navbar-toggler" onClick={() => toggleState()} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
						<span className={hoverState ? 'active' : ''} style={{display:'block', margin: '0 auto'}}>
							<div className="toggle-btn type11"></div>
						</span>
					</button>
					<span className="logoFont"
						style={{visibility: hoverState ? 'visible': 'hidden', position: 'absolute', color: 'white'}}
					>
						<h2> Goodman </h2>
					</span>
       
				</div>

				<hr></hr>
			
        {
					navItems.map((item, index) => {
						return (
							renderNavElems(item, index)
						)
					})

				}

			</ul>
			<style jsx>{`

.activePath {
    // background: rgba(108, 99, 255, 1);
     background: rgba(255, 255, 255, 0.5);
    // color: #000;

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
    // background: rgba(108, 99, 255, 0.5);
    background: rgba(255, 255, 255, 0.2);
    color: #000;
    border-radius: 0 50px 50px 0;
}

.btn, .btn-link{
    color: black
  }
  .sidebar-item {
       font-weight: bold;
       text-decoraion: none;
       display: block;
       margin-top: 30px;
       margin-bottom: 30px;
       color: black;
  
   }
  
   .item-title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 15px;
   }



  .item-title {
    color: white;
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
      margin-bottom: 25px;
  
      //text-overflow: ellipsis;
      white-space: nowrap;
    }

  

    // 


  .sidenav-hidden{
    width: 3.25rem;

    // padding-right: 0px;
    transition: 0.25s;
    //padding-left: 0;
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



  p {
    font-family: 'Montserrat', sans-serif;  
  }
  h1 h2 h3 {
    font-family: 'Roboto', sans-serif;
  }



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
   
		</div>
	)
}
