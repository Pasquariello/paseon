import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
	render() {
		/**
    * Here we use _document.js to add a "lang" propery to the HTML object if
    * one is set on the page.
    **/
		return (
			<html lang='en'>
				{/* {this.props.__NEXT_DATA__.props.pageProps.lang || 'en'} */}
				<Head>


					<link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet"></link>
          
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
					<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    

				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}