import Link from 'next/link';



class Header extends React.Component {

  // const linkStyle = {
  //   marginRight: 15,
  
  // };
  state = {
    isActive: false
  }
  toggleClass() {
    
    this.setState({isActive: !this.state.isActive})
    console.log('clicked',this.state.isActive  )
  }

render(){
return (
<>


{/* style={{backgroundImage: "linear-gradient(to right, #f83600 0%, #f9d423 100%)", color: '#fff'}} */}
<nav className="navbar navbar-expand-lg navbar-light static-top">
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}


  <Link href="/">
        <a className="nav-link">LOGO</a>
  </Link> 
        {/* <div className='block' onClick={() => this.toggleClass()}> */}
        <button className="navbar-toggler" onClick={() => this.toggleClass()} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">

            <span className={this.state.isActive ? 'active' : ''} style={{padding: '2px'}}>
                <div className="toggle-btn type11"></div>
            </span>
        </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
  
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
  
      
      <li className="nav-item" >
      <Link href="/">
        <a className="nav-link">HOME</a>
      </Link>    
      </li>
      <li className="nav-item">
        <Link href="/about">
          <a className="nav-link">ABOUT</a>
        </Link>    
      </li>
      <li className="nav-item ">
        <Link href="/form_builder">
          <a className="nav-link">FORM BUILDER</a>
        </Link>    
      </li>
      <li className="nav-item ">
      <Link href="/pricing">
        <a className="nav-link">PRICING</a>
      </Link>    
      </li>
      <li className="nav-item ">
      <Link href="/">
        <a className="nav-link">FREE/BASIC FORMS</a>
      </Link>
      </li>
      <li className="nav-item ">
      <Link href="/login">
        <a className="nav-link">LOGIN</a>
      </Link>     
      </li>


    </ul>

  </div>
</nav>

<style jsx>{`
  
 
.cta {
  height: 50px;
  width: 50px;
  cursor: pointer; }

.toggle-btn {
  height: 2px;
  width: 25px;
  background-color: #fff;
  position: relative;
  top: 50%;
  left: 0;
  margin: auto;
  transition: all 0.3s ease-in-out; }
  .toggle-btn:before {
    content: "";
    height: 2px;
    width: 25px;
    box-shadow: 0 -10px 0 0 #fff;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out; }
  .toggle-btn:after {
    content: "";
    height: 2px;
    width: 25px;
    box-shadow: 0 10px 0 0 #fff;
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

        `}
      </style>


</>
  )};
}

export default Header;