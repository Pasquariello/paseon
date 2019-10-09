import Link from 'next/link';

const linkStyle = {
  marginRight: 15,

};



const Header = () => (
  // <div>
  //   <Link href="/">
  //     <a style={linkStyle}>Home</a>
  //   </Link>
  //   <Link href="/about">
  //     <a style={linkStyle}>About</a>
  //   </Link>
  //   <Link href="/form_builder">
  //     <a style={linkStyle}>Form Builder</a>
  //   </Link>
  // </div>
<>
<nav className="navbar">
<span className="navbar-toggle" id="js-navbar-toggle">
    <i className="fas fa-bars"></i>
</span>
<a href="#" className="logo">logo</a>
<ul className="main-nav" id="js-menu">
    <li>
    <Link href="/">
      <a style={linkStyle}>HOME</a>
    </Link>    
    </li>
    <li>
      <Link href="/about">
        <a style={linkStyle}>ABOUT</a>
      </Link>    
    </li>
    <li>
      <Link href="/form_builder">
        <a style={linkStyle}>FORM BUILDER</a>
      </Link>    
    </li>
    <li>
    <Link href="/">
      <a style={linkStyle}>PRICING</a>
    </Link>    
    </li>
    <li>
    <Link href="/">
      <a style={linkStyle}>GLOSSARY</a>
    </Link>    
    </li>
    <li>
    <Link href="/">
      <a style={linkStyle}>FREE/BASIC FORMS</a>
    </Link>
    <Link href="/login">
      <a style={linkStyle}>LOGIN</a>
    </Link>     
    </li>

</ul>
</nav>
<style jsx>{`
* {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }

        body {
            font-family: 'Josefin Sans', sans-serif;
        }

        .navbar {
            font-size: 18px;
            padding-bottom: 10px;
        }

        .main-nav {
            list-style-type: none;
            display: none;
        }

        .nav-links,
        .logo {
            text-decoration: none;
            color: white
        }

        .main-nav li {
            text-align: center;
            margin: 15px auto;
        }

        .logo {
            display: inline-block;
            font-size: 22px;
            margin-top: 10px;
            margin-left: 20px;
        }

        .navbar-toggle {
            position: absolute;
            top: 10px;
            right: 20px;
            cursor: pointer;
            color: black
            font-size: 24px;
        }

        .active {
            display: block;
        }

        @media screen and (min-width: 768px) {
            .navbar {
                display: flex;
                justify-content: space-between;
                padding-bottom: 0;
                height: 70px;
                align-items: center;
            }

            .main-nav {
                display: flex;
                margin-right: 30px;
                flex-direction: row;
                justify-content: flex-end;
            }

            .main-nav li {
                margin: 0;
            }

            .nav-links {
                margin-left: 40px;
            }

            .logo {
                margin-top: 0;
            }

            .navbar-toggle {
                display: none;
            }

            .logo:hover,
            .nav-links:hover {
                color: rgba(255, 255, 255, 1);
            }
        }
`}</style>
</>
);

export default Header;