import axios from 'axios';
import { setCookie, destroyCookie } from 'nookies';

export default async function login(req, res) {
  const { WORDPRESS_ENDPOINT, NODE_ENV } = process.env;
  const { method } = req;
  destroyCookie({ res }, 'token-cookie');
  const { nonce, email, key } = req.query;

  switch (method) {
    case 'GET':
      // Get data from your database
      try {
        if (!nonce || !email || !key || 20 > key.length) {
          throw new Error();
        }
        await axios
          .get(
            `${WORDPRESS_ENDPOINT}/wp-json/wp/v2/user/user?nonce=${nonce}&email=${email}&key=${key}`
          )
          .then(({ data: user }) => {
            setCookie({ res }, 'token-cookie', JSON.stringify(user), {
              secure: 'production' === NODE_ENV,
              maxAge: 72576000,
              httpOnly: true,
              path: '/',
            });
            res.writeHead(307, { Location: '/' });
            res.end();
          })
          .catch(({ response }) => {
            res.writeHead(307, { Location: `/user/login?error=${response.data.message}` });
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
