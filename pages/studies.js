import React from 'react';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { seoMerge } from '../src/utils/next-seo.config';
import { getUserSession } from '../src/utils/getUser';

export default function Studies() {
  const { t } = useTranslation('common');
  const seo = seoMerge({
    title: t('מאגר הלימודים'),
  });
  return (
    <>
      <NextSeo {...seo} />
      <div>School</div>
    </>
  );
}

export async function getServerSideProps(req) {
  const [user] = getUserSession(req);
  if (user.redirect) return user;
  // Here you can add more data
  const locale = `he${user.gender}`;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'studies'])),
      user,
    },
  };
}
