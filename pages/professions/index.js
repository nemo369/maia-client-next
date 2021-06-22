import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import { getUserSession } from '../../src/utils/getUser';
import { seoMerge } from '../../src/utils/next-seo.config';

export default function Professions() {
  const seo = seoMerge({
    title: 'זירת המקצועות  | ',
  });
  return (
    <>
      <NextSeo {...seo} />
      <section className="professions">
        <BreadCrumbs breadCrumbs={[{ title: 'מקצועות', href: '/professions' }]} />
        <h1 className="text-black text-3xl font-black">זירת המקצוענות</h1>
        <Link href={`professions/${'asda'}`}>
          <a>
            <u> בדיקה </u>
          </a>
        </Link>
      </section>
    </>
  );
}

export async function getServerSideProps(req) {
  const [user] = getUserSession(req);
  if (user.redirect) return user;

  // Here you can add more data
  return {
    props: { user },
  };
}
