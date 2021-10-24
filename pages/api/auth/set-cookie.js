import cookie from 'cookie';
import { USER_COOKIE } from '../../../src/utils/consts';

export default async function magicLogin(req, res) {
  const { NODE_ENV } = process.env;
  const { body, method } = req;

  switch (method) {
    case 'POST':
      // setCookie({ res }, USER_COOKIE, JSON.stringify(body), {
      //   secure: 'production' === NODE_ENV,
      //   maxAge: 12 * 60 * 60, //12 hours as in Iam token
      //   httpOnly: true,
      //   path: '/',
      // });

      // res.status(200).json({ body });
      res.setHeader(
        'Set-Cookie',
        cookie.serialize(USER_COOKIE, JSON.stringify(body), {
          httpOnly: true,
          secure: 'development' !== NODE_ENV,
          // maxAge: 60 * 60 * 60, //12 hours as in Iam token
          maxAge: 24 * 60 * 60 * 30, //30 days
          sameSite: true,
          path: '/',
        })
      );
      res.statusCode = 200;
      res.json({ success: true });

      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
