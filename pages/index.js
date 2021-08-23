import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import Banner from '../components/dashboard/Banner';
import DashboardCatergory from '../components/dashboard/DashboardCatergory';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardSummary from '../components/dashboard/DashboardSummary';
import useProfile from '../src/hooks/useProfile';
import { getUserSession, redirectToLogin } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';
import WalkMe from '../components/walkMe/WalkMe';
import WMStepOne from '../components/walkMe/WMStepOne';
import WMStepTwo from '../components/walkMe/WMStepTwo';
import WMStepThree from '../components/walkMe/WMStepThree';

export default function Home() {
  const { t } = useTranslation('common');

  const seo = seoMerge({
    title: t('ראשי'),
  });
  useProfile();

  const isPopUp = true;

  return (
    <>
      <NextSeo {...seo} />
      {isPopUp ? (
        <WalkMe defaultOpen>
          {/* <WMStepOne /> */}
          {/* <WMStepTwo /> */}
          <WMStepThree />
        </WalkMe>
      ) : (
        <section className="dashboard md:pl-16 md:pr-0 px-3">
          <DashboardHeader />
          <div className="dashboard__grid xl:grid pb-10">
            <DashboardSummary />
            <DashboardCatergory />
            <Banner />
          </div>
        </section>
      )}
    </>
  );
}
export async function getServerSideProps(req) {
  const [user] = getUserSession(req);
  if (user.redirect) return redirectToLogin;

  const locale = `he${user.gender}`;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      user,
    },
  };
}
