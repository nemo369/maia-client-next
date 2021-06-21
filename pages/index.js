import { NextSeo } from 'next-seo';
import { useContext } from 'react';
import { getUserSession } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';
import StepperOne from '../components/common/StepperOne';
import { AppContext } from '../src/context/state';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardSummary from '../components/dashboard/DashboardSummary';
import Dashboard from '../components/dashboard/Dashboard';
import Banner from '../components/dashboard/Banner';
// import Test from '../components/Test';

export default function Home() {
  const { user } = useContext(AppContext);

  const seo = seoMerge({
    title: 'ראשי',
  });
  return (
    <>
      <NextSeo {...seo} />
      <section className="dashboard pl-16">
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
