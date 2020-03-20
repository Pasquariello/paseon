import React from "react";
import App from "next/app";
import Head from "next/head";
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', url => {
	console.log(`Loading: ${url}`)
	NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<script src="https://js.stripe.com/v3/" />
					<script type="module" src="https://paseon-forms.web.app/src/paseonForm.js">
					</script>
					<link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
					<title>
            Paseon
					</title>
				</Head>
				<Component {...pageProps} />
			</>
		);
	}
}

export default MyApp;
