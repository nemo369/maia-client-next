import Head from 'next/head';
import { getUserSession } from '../src/utils/getUser';
// import Test from '../components/Test';

export default function Home() {
  return (
    <>
      <Head>
        <title>עמוד הבית</title>
      </Head>
      <div>{/* <Test /> */}</div>
    </>
  );
}
export async function getServerSideProps(req) {
  const userSession = getUserSession(req);
  if (userSession.redirect) return userSession;

  // Here you can add more data
  return userSession;
}
