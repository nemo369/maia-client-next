import { NextSeo } from 'next-seo';
import { useContext, useEffect } from 'react';
import { getUserSession } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardSummary from '../components/dashboard/DashboardSummary';
import DashboardCatergory from '../components/dashboard/DashboardCatergory';
import Banner from '../components/dashboard/Banner';
import ProfileAPI from '../src/services/profile.service';
import { SET_PROFILE } from '../src/context/userReucder';
import { AppContext, useAppContext } from '../src/context/state';
import VendorAPI from '../src/services/vendor.service';
// import Test from '../components/Test';
let allCategories = {
  professions: [],
  jobs: [],
  studies: [],
};
export default function Home({ profile, categories }) {
  const { dispatch } = useContext(AppContext);
  const { user } = useAppContext(AppContext);

  const seo = seoMerge({
    title: 'ראשי',
  });
  useEffect(() => {
    const fetchAll = async () => {
      const [{ data: professions }, { data: jobs }, { data: studies }] = await Promise.all([
        VendorAPI.getCategory(user.token, 'professions'),
        VendorAPI.getCategory(user.token, 'jobs'),
        VendorAPI.getCategory(user.token, 'studies'),
      ]);
      console.log([professions, jobs, studies]);
      allCategories = {
        professions: [],
        jobs: [],
        studies: [],
      };
    };
    fetchAll();
  }, [categories]);
  useEffect(() => {
    dispatch({ type: SET_PROFILE, profile });
  }, [profile, dispatch]);
  return (
    <>
      <NextSeo {...seo} />
      <section className="dashboard md:pl-16 md:pr-0 px-3">
        <DashboardHeader />
        <div className="dashboard__grid xl:grid ">
          <DashboardSummary />
          <DashboardCatergory allCategories={allCategories} />
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
  return {
    props: { user, profile: data.data }, // will be passed to the page component as props
  };
}
