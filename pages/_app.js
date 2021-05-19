/* eslint-disable react/prop-types */
import '../styles/main.scss';
import '../styles/global.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
