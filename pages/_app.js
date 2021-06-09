import '../styles/main.scss';
import '../styles/global.css';
import Layout from '../components/layout/Layout';
import { AppWrapper } from '../src/context/state';
// import { ReactElement as RE } from "react";

const isSSR = () => 'undefined' === typeof window;

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

export default AppComponent;
