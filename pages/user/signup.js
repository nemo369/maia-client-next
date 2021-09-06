/* eslint-disable prettier/prettier */
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import nookies from 'nookies';
import Button from '../../components/common/Button';
import StageResults from '../../components/common/stage1results/StageResults';
import StagesPopSide from '../../components/common/StagesPopSide';
import RegisterForm from '../../components/profile/RegisterForm';
import SignUpHeader from '../../components/SignUpHeader';
import { USER_COOKIE } from '../../src/utils/consts';
import { seoMerge } from '../../src/utils/next-seo.config';

const Register = function (props) {
  const { t } = useTranslation('common');

  const seo = seoMerge({
    title: t('הרשמה למערכת'),
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
      <StagesPopSide
        trigger={
          <Button type="button" status="secondary" name="תוצאות השלב" className="h-12 w-full" />
        }
      >
        {/* <StageResults testType="CompletionIAmpro" /> */}
        {/* <StageResults testType="Autobiography" /> */}
        <StageResults testType="Veretas" />
      </StagesPopSide>
    </div>
  );
};

export default Register;

export async function getStaticProps(ctx) {
  nookies.set(ctx, USER_COOKIE, null, {
    maxAge: 0,
    path: '/',
  });
  const { WORDPRESS_ENDPOINT } = process.env;
  try {
    const [cities, termsText] = await Promise.all([
      fetch(`${WORDPRESS_ENDPOINT}/wp-content/themes/canaan/data/cities.json`).then((res) => res.json()),
      fetch(`${WORDPRESS_ENDPOINT}/wp-json/wp/v2/info/conditions-text`).then((res) => res.json()),
    ]);
    return {
      props: { cities, termsText }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: { cities: [], termsText: '' },
    };
  }
}
