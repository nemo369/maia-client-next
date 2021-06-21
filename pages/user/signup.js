import { NextSeo } from 'next-seo';
import nookies from 'nookies';
import RegisterForm from '../../components/profile/RegisterForm';
import SignUpHeader from '../../components/SignUpHeader';
import { seoMerge } from '../../src/utils/next-seo.config';

const Register = function (props) {
  const seo = seoMerge({
    title: 'הרשמה למערכת',
  });
  const { cities, termsText } = props;
  return (
    <div
      className="bg-lightgreybackground w-full
     min-h-screen"
    >
      <NextSeo {...seo} />
      <SignUpHeader />
      <RegisterForm cities={cities} termsText={termsText} />
    </div>
  );
};

export default Register;

export async function getStaticProps(ctx) {
  nookies.set(ctx, 'token-cookie', null, {
    maxAge: 0,
    path: '/',
  });
  const { WORDPRESS_ENDPOINT } = process.env;
  try {
    const [cities, termsText] = await Promise.all([
      fetch(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/info/city`).then((res) => res.json()),
      fetch(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/info/conditions-text`).then((res) => res.json()),
    ]);

    console.log(cities);
    return {
      props: { cities, termsText }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);

    return {
      props: { cities: [], termsText: '' },
    };
  }
}
