import Link from 'next/link';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




// const SideBar = props => (
export default function NavElem(props) {


  

  return(
    <React.Fragment>
    <li className="sidebar-item" >
    <Link href={props.data.link}>
      <button className="btn btn-link">
        <div>
            <span 
              className="icon"
              // style={{marginLeft: '15px'}}
            > 
              {props.data.icon && <FontAwesomeIcon fixedWidth width="0" icon={props.data.icon} />}
            </span>
            <span className="item-title"
              style={{visibility: props.hoverState ? 'visible': 'hidden' , position: 'absolute'}}
            >{props.data.title}</span>
        </div>
        </button>
    </Link>    
  </li>

<style jsx>{`
.sidebar-item {
     font-weight: bold;
     text-decoraion: none;
     display: block;
     margin-top: 30px;
     margin-bottom: 30px;
 }

 .item-title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 15px;

 }

 
 `}
 </style>

 </React.Fragment>
  )

  }