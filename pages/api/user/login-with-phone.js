import axios from 'axios';
import { setCookie, destroyCookie } from 'nookies';

export default async function login(req, res) {
  const { WORDPRESS_ENDPOINT, NODE_ENV } = process.env;
  const { method } = req;
  destroyCookie({ res }, 'token-cookie');
  const { pin, phone } = req.query;

  switch (method) {
    case 'GET':
      // Get data from your database
      try {
        if (!pin || !phone || 4 !== pin.length) {
          throw new Error();
        }
        const { data: user } = await axios.get(
          `${WORDPRESS_ENDPOINT}/wp-json/wp/v2/user/user?pin=${pin}&phone=${phone}`
        );

        if (!user) {
          throw new Error('No data :(');
        }
        setCookie({ res }, 'token-cookie', JSON.stringify(user), {
          secure: 'production' === NODE_ENV,
          maxAge: 72576000,
          httpOnly: true,
          path: '/',
        });
        res.status(200).json({ ...user, token: 'token' });
      } catch ({ response }) {
        res.status(response.status).json(response.data);
      }

      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
