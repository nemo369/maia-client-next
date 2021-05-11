/* eslint-disable react/prop-types */
import '../styles/main.scss';
import '../styles/global.css'
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}



export default MyApp;


// export default class MyApp extends App {
// 	render () {
// 	  const { Component, pageProps } = this.props
// 	  return (
// 		<Layout>
// 		  <Component {...pageProps} />
// 		</Layout>
// 	  )
// 	}
//   }