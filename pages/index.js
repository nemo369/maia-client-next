import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import Banner from '../components/dashboard/Banner';
import DashboardCatergory from '../components/dashboard/DashboardCatergory';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardSummary from '../components/dashboard/DashboardSummary';
import TestPopups from '../components/dashboard/TestPopups';
import WalkMe from '../components/walkMe/WalkMe';
import useProfile from '../src/hooks/useProfile';
import { getUserSession, redirectToLogin } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';

export default function Home() {
  const { t } = useTranslation('common');
  const isServer = 'undefined' === typeof window;

  const seo = seoMerge({
    title: t('ראשי'),
  });
  useProfile();
  return (
    <>
      <NextSeo {...seo} />
      {!isServer && <WalkMe />}
      <section className="dashboard md:pl-16 md:pr-0 px-3">
        <DashboardHeader />
        <TestPopups />
        <div className="dashboard__grid xl:grid my-10">
          <DashboardSummary />
          <DashboardCatergory />
          <Banner />
        </div>
      </section>
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
