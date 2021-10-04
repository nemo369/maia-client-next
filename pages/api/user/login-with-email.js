import axios from 'axios';
// import { setCookie } from 'nookies';
// import { USER_COOKIE } from '../../../src/utils/consts';

export default async function loginWithMail(req, res) {
  const { WORDPRESS_ENDPOINT, NODE_ENV } = process.env;
  const { method } = req;
  // destroyCookie({ res }, USER_COOKIE);
  const { email, password } = req.query;

  switch (method) {
    case 'GET':
      // Get data from your database
      try {
        if (!password || !email || 6 > password.length) {
          throw new Error();
        }
        const { data: user } = await axios.get(
          `${WORDPRESS_ENDPOINT}/wp-json/wp/v2/user/user?email=${email}&key=${password}`
        );

        if (!user) {
          throw new Error('No data :(');
        }

        // setCookie({ res }, USER_COOKIE, JSON.stringify(user), {
        //   secure: 'production' === NODE_ENV,
        //   maxAge: 12 * 60 * 60, //12 hours as in Iam token
        //   httpOnly: true,
        //   path: '/',
        // });
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
