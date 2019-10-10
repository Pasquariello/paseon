import Head from 'next/head';
import Header from './Header';

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD',
// };

const Layout = props => (

  <div>
     <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet"></link>
          <title>
              Paseon
          </title>
        </Head>
    <Header />
    {props.children}
    <style jsx>
      {`
      
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