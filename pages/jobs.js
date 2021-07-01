import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React from 'react';
import { getUserSession } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';

export default function Jobs() {
  const { t } = useTranslation('common');

  const seo = seoMerge({
    title: t('משרות פנויות'),
  });
  return (
    <>
      <NextSeo {...seo} />
      <div>jobs</div>
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
      ...(await serverSideTranslations(locale, ['common', 'jobs'])),
      user: user,
    },
  };
}
