import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import { useEffect, useState } from 'react';
import LoginCmp from '../../components/profile/LoginCmp';
import { USER_COOKIE } from '../../src/utils/consts';
import { seoMerge } from '../../src/utils/next-seo.config';

const Login = () => {
  const { t } = useTranslation('common');
  const seo = seoMerge({
    title: t('התחברות'),
  });
  const router = useRouter();
  const { error } = router.query;
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    switch (+error) {
      case 400:
        setErrorMsg(t('תוקף קישור זה פג'));
        break;
      case 401:
        setErrorMsg(t('אנא התחברו מחדש'));
        break;
      case 200:
        setErrorMsg(t('נרשמת בהצלחה, כעת נותר להתחבר'));
        break;

      default:
        setErrorMsg(null);

        break;
    }
  }, [error, t]);
  return (
    <>
      <NextSeo {...seo} />
      <section className="login__wrapper flex justify-center items-center md:h-screen overflow-auto md:overflow-hidden relative">
        <div className="md:flex login text-white w-full">
          <div className="login__form bg-green-500 z-40 rounded-[20px] px-14 py-11">
            {errorMsg && (
              <h2 className="text-2xl text-red-500 text-center font-bold shake">{errorMsg}</h2>
            )}
            <LoginCmp />
          </div>
          <div className="login__image flex-grow hidden md:block">
            <img
              width="1374"
              height="837"
              src="/images/login-image.svg"
              alt="התחברות למאי״ה"
              className="object-contain  block max-w-none mq"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

export async function getServerSideProps(ctx) {
  nookies.set(ctx, USER_COOKIE, null, {
    maxAge: 0,
    path: '/',
  });
  return { props: {} };
}
