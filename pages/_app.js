import ProgressBar from '@badrap/bar-of-progress';
import { appWithTranslation } from 'next-i18next';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { AppWrapper } from '../src/context/state';
import '../styles/main.scss';

const isSSR = () => 'undefined' === typeof window;
const progress = new ProgressBar({
  size: 2,
  color: '#FF3344',
  className: 'bar-of-progress',
  delay: 100,
});
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

if ('production' !== process.env.NODE_ENV && !isSSR()) {
  const React = require("react"); // eslint-disable-line
  const DOM = require("react-dom"); // eslint-disable-line
  const axe = require("react-axe"); // eslint-disable-line
  axe(React, DOM, 1000);
}

const AppComponent = ({ Component, pageProps }) => (
  <AppWrapper userProp={pageProps.user}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppWrapper>
);

export default appWithTranslation(AppComponent);
