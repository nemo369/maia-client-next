import { parseCookies } from 'nookies';

export const getUserSession = (req) => {
  const userCookie = parseCookies(req)['token-cookie'];
  if (!userCookie) {
    return {
      redirect: {
        destination: '/user/login',
        permanent: false,
      },
    };
  }
  const user = { ...JSON.parse(userCookie), token: 'token' };
  return {
    props: { user }, // will be passed to the page component as props
  };
};
