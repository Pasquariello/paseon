import Head from 'next/head';

const LayoutApp = props => (

  <div style={{height: "100%"}}>
     <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet"></link>
          
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>



          <title>
              Paseon
          </title>
        </Head>
    {props.children}
    <style jsx>
      {`

    body {
        height: 100%;
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

export default LayoutApp;