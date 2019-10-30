import Head from 'next/head';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import React, { useState } from 'react';




// const LayoutApp  => (
export default function LayoutApp (props) {


// const [sideBarWidth, setSideBarWidth] = useState('20%');
// const [bodyWidth, setbodyWidth] = useState('80%');

// function updateWidth() {
//   console.log('I was clicked')
//   if (sideBarWidth != 0){
//   let sideBarWidthNew = '0'
//   let bodyWidthNew = '100%'
//   setSideBarWidth(sideBarWidthNew)
//   setbodyWidth(sideBarWidthNew)


//   }else {
//     setSideBarWidth('20%')
//     setbodyWidth('80%')
//   }

// }

const [sideNavWidth, setsideNavWidth] = useState(true)
const [navBtn, setNavBtn] = useState(false)
const [isActive, setIsActive] = useState(false)


// todo - move this to layout? 
function toggleWidth() {
  setsideNavWidth(!sideNavWidth);
  setNavBtn(!navBtn)
}




return (

  <div  className="wrapper">
     <Head>
          <link rel="stylesheet" href="node_modules/react-table/react-table.css"></link>
          <link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css"></link>
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet"></link>
          
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>



          <title>
              Paseon
          </title>
        </Head>
            <SideBar
              sideNavWidth={sideNavWidth}
              navBtn={navBtn}
              toggleWidth={toggleWidth}
            />

   

          <div id="content-wrapper" className="d-flex flex-column" style={{width: '100%', padding: '50px'}}>
          <button style={{fontSize:'12px', width: '100px', marginBottom: '15px'}} className={`btn btn-warning ${sideNavWidth ? 'inactive' : '' }`} onClick={toggleWidth}>Toggle Nav</button>
           
{/* <button className="navbar-toggler" onClick={toggleWidth} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
<span className={sideNavWidth ? 'active' : ''} style={{padding: '2px'}}>
<div className="toggle-btn type11"></div>
</span>
</button> */}
           
            {props.children}
          </div>
      
      




    <style jsx>{`


      .wrapper {
        display: flex;
        //flex-wrap: wrap;
   
      }

      .active{
        display:block;
      }

      .inactive{
        visibility:hidden;
      }


      #content-wrapper{
        //width: 100%;
        overflow-x: hidden;
        height: 100vh;
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
  </div>
)};

// export default LayoutApp;