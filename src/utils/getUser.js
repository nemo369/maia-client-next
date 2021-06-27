import { parseCookies } from 'nookies';
import { USER_COOKIE } from './consts';

export const getUserSession = (req) => {
  const userCookie = parseCookies(req)[USER_COOKIE];
  if (!userCookie) {
    return [
      {
        redirect: {
          destination: '/user/login',
          permanent: false,
        },
      },
      null,
    ];
  }
  const data = JSON.parse(userCookie);
  const user = { ...data };
  return [user, data.token];
};
