import axios from 'axios';
import { setCookie, destroyCookie } from 'nookies';
import { USER_COOKIE } from '../../../src/utils/consts';

export default async function loginWithPhone(req, res) {
  const { WORDPRESS_ENDPOINT, NODE_ENV } = process.env;
  const { method } = req;
  destroyCookie({ res }, USER_COOKIE);
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
        setCookie(res, USER_COOKIE, JSON.stringify(user), {
          secure: 'production' === NODE_ENV,
          maxAge: 12 * 60 * 60, //12 hours as in Iam token
          httpOnly: true,
          path: '/',
        });
        res.status(200).json({ ...user });
      } catch (response) {
        res.status(response?.response.status ? response?.response.status : 502).json(response.data);
      }

      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
