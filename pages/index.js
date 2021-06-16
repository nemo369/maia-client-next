import { NextSeo } from 'next-seo';
import { getUserSession } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';

import Test from '../components/Test';

export default function Home() {
  const seo = seoMerge({
    title: 'ראשי',
  });
  return (
    <>
      <NextSeo {...seo} />
      <div>
        <Test />
      </div>
    </>
  );
}
export async function getServerSideProps(req) {
  const userSession = getUserSession(req);
  if (userSession.redirect) return userSession;

  // Here you can add more data
  return userSession;
}
