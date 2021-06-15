import React from 'react';
import { NextSeo } from 'next-seo';
import { seoMerge } from '../src/utils/next-seo.config';
import { getUserSession } from '../src/utils/getUser';

export default function School() {
  const seo = seoMerge({
    title: 'מאגר הלימודים',
  });
  return (
    <>
      <NextSeo {...seo} />
      <div>School</div>
    </>
  );
}

export async function getServerSideProps(req) {
  const userSession = getUserSession(req);
  if (userSession.redirect) return userSession;

  // Here you can add more data
  return userSession;
}
