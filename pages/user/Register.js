import { NextSeo } from 'next-seo';
import RegisterForm from '../../components/profile/RegisterForm';
import SignUpHeader from '../../components/SignUpHeader';

const Register = function (props) {
  const { cities, termsText } = props;
  return (
    <div
      className="bg-lightgreybackground w-full
     min-h-screen"
    >
      <NextSeo title="Simple Usage Example" description="A short description goes here." />
      <SignUpHeader />
      <RegisterForm cities={cities} termsText={termsText} />
    </div>
  );
};

export default Register;

export async function getStaticProps() {
  const { WORDPRESS_ENDPOINT } = process.env;
  try {
    const res = await fetch(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/info/city`);
    const conditionsText = await fetch(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/info/conditions-text`);
    const data = await res.json();
    const text = await conditionsText.json();
    if (!data || !conditionsText) {
      return {
        notFound: true,
      };
    }

    return {
      props: { cities: data, termsText: text }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: { cities: [], termsText: '' },
    };
  }
}
