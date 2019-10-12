import Link from 'next/link';

const SideBar = props => (

<div className="border-right" style={{width: '400px', height: '100%', position: 'absolute', left: '0'}}>

    <div  style={{padding: '20px 20px 50px 20px'}}>
        <ul className="sidebar-ul flex-column">
        <li className="  sidebar-item" >
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
        </ul>
    </div>

    <style jsx>{`
   .sidebar-item {
        font-size: 22px;
        
        text-decoraion: none;
        margin: 15px;
    }

    .sidebar-ul{
        list-style-type: none;
    }




    


    `}
    </style>



</div>

);
export default SideBar;