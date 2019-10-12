import Link from 'next/link';

const SideBar = props => (


 
    <ul className="border-right sidenav sidebar-ul">
    <div>
    <h2>Paseon</h2>
    <hr></hr>
  </div>
      <li className="sidebar-item" >
        <Link href="/">
          <a className="nav-link">Dashboard</a>
        </Link>    
      </li>
      <li className="  sidebar-item" >
        <Link href="/">
          <a className="nav-link">Account Settings</a>
        </Link>    
      </li>
      <li className="  sidebar-item" >
        <Link href="/">
          <a className="nav-link">My Forms</a>
        </Link>    
      </li>
      <li className="  sidebar-item" >
        <Link href="/">
          <a className="nav-link">Form Builder</a>
        </Link>    
      </li>
      <li className="  sidebar-item" >
        <Link href="/">
          <a className="nav-link">Archived Emails</a>
        </Link>    
      </li>
      <li className="  sidebar-item" >
        <Link href="/">
          <a className="nav-link">Integrations</a>
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

    .sidebar-ul{
        list-style-type: none;
        padding-right: 40px;
    }


    .sidenav {
      // z-index: 1;
      top: 0;
      left: 0;
      overflow-x: hidden;
      padding-top: 20px;

      width: 14rem
      min-height: 100vh;
    }


    @media (max-width: 770px) {
      .sidenav {
        width: 6.5rem !important;
      }

      .sidebar-ul{
        padding-left: 0px;
    }

    .sidebar-item {
      font-size: .65rem;
    display: block;
  }
    }

    media (min-width: 771px)
.sidebar {
    width: 14rem!important;
}


    `}
    </style>



    </ul>

);
export default SideBar;