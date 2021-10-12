import axios from 'axios';
// import { setCookie, destroyCookie } from 'nookies';
// import { USER_COOKIE } from '../../../src/utils/consts';

export default async function loginWithPhone(req, res) {
  const { WORDPRESS_ENDPOINT } = process.env;
  const { method } = req;
  const { pin, phone } = req.query;

  switch (method) {
    case 'GET':
      // Get data from your database
      try {
        if (!pin || !phone || 4 !== pin.length) {
          res.status(400).json({ message: 'הקוד אינו תקין' });
          return;
        }
        const { data: user } = await axios.get(
          `${WORDPRESS_ENDPOINT}/wp-json/wp/v2/user/user?pin=${pin}&phone=${phone}`
        );
        if (!user) {
          res.status(500).json({ ...user });
          return;
        }
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
