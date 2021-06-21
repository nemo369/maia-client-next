import { NextSeo } from 'next-seo';
import { getUserSession } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardSummary from '../components/dashboard/DashboardSummary';
import Dashboard from '../components/dashboard/Dashboard';
import Banner from '../components/dashboard/Banner';
// import Test from '../components/Test';

export default function Home() {
  const seo = seoMerge({
    title: 'ראשי',
  });
  return (
    <>
      <NextSeo {...seo} />
      <section className="dashboard md:pl-16 md:pr-0 px-3">
        <DashboardHeader />
        <div className="dashboard__grid md:grid">
          <DashboardSummary />
          <Dashboard />
          <Banner />
        </div>
        {/* <Test /> */}
      </section>
    </>
  );
}
export async function getServerSideProps(req) {
  const userSession = getUserSession(req);
  if (userSession.redirect) return userSession;

  // Here you can add more data
  return userSession;
}
