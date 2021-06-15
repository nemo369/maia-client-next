import { NextSeo } from 'next-seo';
import React from 'react';
import { getUserSession } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';

export default function Profile() {
  const seo = seoMerge({
    title: 'פרופיל אישי',
  });
  return (
    <>
      <NextSeo {...seo} />
      <div>profile</div>
    </>
  );
}

export async function getServerSideProps(req) {
  const userSession = getUserSession(req);
  if (userSession.redirect) return userSession;

  // Here you can add more data
  return userSession;
}
