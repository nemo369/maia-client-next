import { NextSeo } from 'next-seo';
import RegisterForm from '../../components/profile/RegisterForm';
import SignUpHeader from '../../components/SignUpHeader';

const Register = function (props) {
  const { cities } = props;
  return (
    <div
      className="bg-lightgreybackground w-full
     min-h-screen"
    >
      <NextSeo title="Simple Usage Example" description="A short description goes here." />
      <SignUpHeader />
      <RegisterForm cities={cities} />
      {/* <RegisterForm /> */}
    </div>
  );
};

export default Register;

export async function getStaticProps() {
  const { WORDPRESS_ENDPOINT } = process.env;
  const res = await fetch(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/info/city`);
  const data = await res.json();
  console.log(data);
  if (!data || !Array.isArray(data)) {
    return {
      cities: [],
    };
  }

  return {
    props: { cities: data }, // will be passed to the page component as props
  };
}
