import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import { getUserSession } from '../../src/utils/getUser';
import { seoMerge } from '../../src/utils/next-seo.config';

export default function Professions() {
  const seo = seoMerge({
    title: 'זירת המקצועות',
  });
  const { t } = useTranslation('common');

  return (
    <>
      <NextSeo {...seo} />
      <section className="professions">
        <BreadCrumbs breadCrumbs={[{ title: t('מקצועות'), href: '/professions' }]} />
        <h1 className="text-black text-3xl font-black">{t('זירת המקצוענות')}</h1>
        <Link href={`professions/${'1'}`}>
          <a>
            <u>{t('בדיקה')}</u>
          </a>
        </Link>
      </section>
    </>
  );
}

export async function getServerSideProps(req) {
  const [user] = getUserSession(req);
  if (user.redirect) return user;
  const locale = `he${user.gender}`;
  // Here you can add more data
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'professions'])),

      user,
    },
  };
}
