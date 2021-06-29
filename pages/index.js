import { NextSeo } from 'next-seo';
import { useContext, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getUserSession } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardSummary from '../components/dashboard/DashboardSummary';
import DashboardCatergory from '../components/dashboard/DashboardCatergory';
import Banner from '../components/dashboard/Banner';
import ProfileAPI from '../src/services/profile.service';
import { SET_PROFILE } from '../src/context/userReucder';
import { AppContext } from '../src/context/state';

// import Test from '../components/Test';

export default function Home({ profile }) {
  const { dispatch } = useContext(AppContext);

  const seo = seoMerge({
    title: 'ראשי',
  });

  useEffect(() => {
    dispatch({ type: SET_PROFILE, profile });
  }, [profile, dispatch]);
  return (
    <>
      <NextSeo {...seo} />
      <section className="dashboard md:pl-16 md:pr-0 px-3">
        <DashboardHeader />
        <div className="dashboard__grid xl:grid pb-10">
          <DashboardSummary />
          <DashboardCatergory />
          <Banner />
        </div>
        {/* <Test /> */}
      </section>
    </>
  );
}
export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  if (user.redirect) return user;
  const { data, status } = await ProfileAPI.profile(token);
  // Here you can add more data
  if (200 !== status || !data?.data) {
    return {
      props: { user, profile: null }, // will be passed to the page component as props
    };
  }
  const locale = `he${user.gender}`;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'dashboard'])),
      user,
      profile: data.data,
    }, // will be passed to the page component as props
  };
}
