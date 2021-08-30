// import axios from 'axios';

import { createProxyMiddleware } from 'http-proxy-middleware';

const { WORDPRESS_ENDPOINT } = process.env;

export default createProxyMiddleware({
  target: WORDPRESS_ENDPOINT,
  changeOrigin: true,
  pathRewrite: { '/api/user/profile-pic': '/wp-json/wp/v2/media' },
  xfwd: true,
});

export const config = {
  api: {
    bodyParser: false, // enable POST requests
    externalResolver: true, // hide warning message
  },
};
