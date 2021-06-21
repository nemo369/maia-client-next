import { NextSeo } from 'next-seo';
import { useContext } from 'react';
import { getUserSession } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';
import StepperOne from '../components/common/StepperOne';
import { AppContext } from '../src/context/state';
// import Test from '../components/Test';

export default function Home() {
  const { user } = useContext(AppContext);

  const seo = seoMerge({
    title: 'ראשי',
  });
  return (
    <>
      <NextSeo {...seo} />
      <section className="dashboard">
        <StepperOne step={user.step || 'one'} className="w-[650px] h-[80px]" />
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
