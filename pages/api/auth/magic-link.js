import axios from 'axios';
import { setCookie, destroyCookie } from 'nookies';
import { USER_COOKIE } from '../../../src/utils/consts';

export default async function magicLogin(req, res) {
  const { WORDPRESS_ENDPOINT, NODE_ENV } = process.env;
  const { method } = req;
  destroyCookie({ res }, USER_COOKIE);
  const { nonce, email, key } = req.query;

  switch (method) {
    case 'GET':
      // Get data from your database
      try {
        if (!nonce || !email || !key || 20 > key.length) {
          res.status(400).json({ message: 'התוקן אינו תקין' });
          return;
        }
        await axios
          .get(
            `${WORDPRESS_ENDPOINT}/wp-json/wp/v2/user/user?nonce=${nonce}&email=${email}&key=${key}`
          )
          .then(({ data: user }) => {
            setCookie({ res }, USER_COOKIE, JSON.stringify(user), {
              secure: 'production' === NODE_ENV,
              maxAge: 12 * 60 * 60, //12 hours as in Iam token
              httpOnly: true,
              path: '/',
            });
            res.writeHead(307, { Location: '/' });
            res.end();
          })
          .catch(({ response }) => {
            res.writeHead(307, { Location: `/user/login?error=${response.status}` });
            res.end();
          });
      } catch ({ response }) {
        res.writeHead(307, { Location: '/user/login' });
        res.end();
        // res.status(response.status).json(response.data);
      }

      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
