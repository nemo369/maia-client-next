import axios from 'axios';
import { setCookie, destroyCookie } from 'nookies';

export default async function login(req, res) {
  const { WORDPRESS_ENDPOINT, NODE_ENV } = process.env;
  const { method } = req;
  destroyCookie({ res }, 'token-cookie');

  switch (method) {
    case 'POST':
      // Get data from your database
      try {
        const { data: tokenData } = await axios.post(
          `${WORDPRESS_ENDPOINT}/wp-json/jwt-auth/v1/token`,
          req.body
        );
        if (!tokenData?.token) {
          throw new Error('No token :(');
        }

        await axios
          .get(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/user/user`, {
            headers: {
              Authorization: `Bearer ${tokenData.token}`,
            },
          })
          .then(({ data: moreData }) => {
            const user = {
              ...tokenData,
              ...moreData,
            };
            setCookie({ res }, 'token-cookie', JSON.stringify(user), {
              secure: 'production' === NODE_ENV,
              maxAge: 72576000,
              httpOnly: true,
              path: '/',
            });
            res.status(200).json({ ...user, token: 'token' });
          });
      } catch ({ response }) {
        res.status(response.status).json(response.data);
      }

      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
