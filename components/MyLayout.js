import Head from 'next/head';
import Header from './Header';

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD',
// };

const Layout = props => (

  <div id='myLayout'>
     <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet"></link>
          
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>



          <title>
              Paseon
          </title>
        </Head>
    <Header />
    {props.children}
    <style jsx>
      {`


      #myLayout {
        width: 100%;
        overflow-x:hidden; 
      }
      
      p {
        font-family: 'Montserrat', sans-serif;  
      }
      h1 h2 h3 {
        font-family: 'Roboto', sans-serif;
      }

      `}
    </style>
  </div>
);

export default Layout;