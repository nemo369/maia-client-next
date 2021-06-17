import { NextSeo } from 'next-seo';
import LoginCmp from '../../components/profile/LoginCmp';
import { seoMerge } from '../../src/utils/next-seo.config';

const Login = () => {
  const seo = seoMerge({
    title: 'התחברות',
  });
  return (
    <>
      <NextSeo {...seo} />
      <section className="login__wrapper flex justify-center items-center h-screen overflow-hidden relative">
        <div className="md:flex login text-white w-full">
          <div className="login__form bg-green-500 z-40  rounded px-14 py-11">
            <LoginCmp />
          </div>
          <div className="login__image flex-grow">
            <img
              width="1374"
              height="837"
              src="/images/login-image.svg"
              alt="התחברות למאי״ה"
              className="object-contain  block max-w-none"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
