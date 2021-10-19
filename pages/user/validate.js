/* eslint-disable prettier/prettier */
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import MailVerification from '../../components/profile/login/MailVerification';
import MainTitle from '../../components/profile/register_form/texts/MainTItle';
import SignUpHeader from '../../components/SignUpHeader';
import Group18Img from '../../components/svg/Group18Img';
import { seoMerge } from '../../src/utils/next-seo.config';

const Validate = function () {
  const { t } = useTranslation('common');
  const seo = seoMerge({
    title: t('הרשמה למערכת'),
  });

  const { query } = useRouter();

  return (
    <main
      className="bg-lightgreybackground w-full validate-page
     min-h-screen"
    >
      <NextSeo {...seo} />
      <SignUpHeader />
      <section className="registerPage_container mt-9 relative max-w-5xl mx-auto mb-40 mq-register">
        <MainTitle />
        <div className="registerPage_form_container relative bg-white px-32 pt-14 pb-9 register-form rounded-lg mq-form">
          <Group18Img />
          <MailVerification email={query.email} redirectToTest />
          <div className="dash border-b-[1px] border-dashed border-[#979797] opacity-20 w-full h-1 mt-16 mb-24" />
        </div>

      </section>
    </main>
  );
};

export default Validate;
