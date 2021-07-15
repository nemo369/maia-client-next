import { parseCookies } from 'nookies';
import { USER_COOKIE } from './consts';

export const redirectToLogin = {
  redirect: {
    destination: '/user/login?error=401',
    permanent: false,
  },
};
export const getUserSession = (req) => {
  const userCookie = parseCookies(req)[USER_COOKIE];
  if (!userCookie) {
    return [redirectToLogin, null];
  }
  const data = JSON.parse(userCookie);
  const user = { ...data };
  return [user, data.token];
};
