import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import nookies from 'nookies';
import WrongArea from '../../components/notValid/WrongArea';
import SignUpHeader from '../../components/SignUpHeader';
import { USER_COOKIE } from '../../src/utils/consts';
import { seoMerge } from '../../src/utils/next-seo.config';
import { getUserSession } from '../../src/utils/getUser';

const Login = ({ fullname, location, email }) => {
  const { t } = useTranslation('common');
  const seo = seoMerge({
    title: t('מאיה עדיין לא פועלת באזורך'),
  });

  return (
    <div
      className="bg-lightgreybackground w-full
     min-h-screen"
    >
      <NextSeo {...seo} />
      <SignUpHeader />
      <WrongArea fullname={fullname} location={location} email={email} />
    </div>
  );
};

export default Login;

export async function getServerSideProps(ctx) {
  let { fullname, location, email } = ctx.query;
  const [user] = getUserSession(ctx);
  if (!fullname) {
    fullname = !user.redirect ? user.displayName : '';
  }
  if (!location) {
    location = user?.street ? JSON.parse(user.city)?.name : '';
  }
  if (!email) {
    email = !user.redirect ? user.email : '';
  }

  nookies.set(ctx, USER_COOKIE, null, {
    maxAge: 0,
    path: '/',
  });
  return {
    props: {
      fullname: fullname || '',
      location: location || '',
      email: email || '',
    },
  };
}
