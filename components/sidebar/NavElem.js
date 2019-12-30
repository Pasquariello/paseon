import Link from 'next/link';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




// const SideBar = props => (
export default function NavElem(props) {


  

  return(
    <React.Fragment>
    <li className="sidebar-item" >
    <Link href={props.data.link}>
     
      <a className="nav-link">
        <div>
          <FontAwesomeIcon fixedWidth width="0" icon={props.data.icon} />
        </div>
        {props.data.title}
      </a>
    </Link>    
  </li>

<style jsx>{`
.sidebar-item {
     // font-weight: bold;
     text-decoraion: none;
     margin-top: 15px;
     margin-bottom: 15px;
     display: block;
 }
 `}
 </style>

 </React.Fragment>
  )

  }