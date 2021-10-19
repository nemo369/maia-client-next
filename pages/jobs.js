import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React from 'react';
import BreadCrumbs from '../components/common/BreadCrumbs';
import JobsForm from '../components/jobs/JobsForm';
import JobsHeader from '../components/jobs/JobsHeader';
import JobsList from '../components/jobs/JobsList';
import useProfile from '../src/hooks/useProfile';
import VendorAPI from '../src/services/vendor.service';
import { getUserSession } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';

export default function Jobs({ jobs }) {
  const { t } = useTranslation('common');
  useProfile();

  const seo = seoMerge({
    title: t('משרות פנויות'),
  });
  return (
    <div className="pl-2">
      <NextSeo {...seo} />
      <BreadCrumbs breadCrumbs={[{ title: t('משרות'), href: '/jobs' }]} />
      <JobsHeader count={0} />
      <JobsForm />
      <JobsList jobs={jobs} />
    </div>
  );
}
export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  if (user.redirect) return user;
  const { data: jobs } = await VendorAPI.getCategorys(token, 'jobs');

  // Here you can add more data
  const gender = user.gender ? user.gender : 'm';
  const locale = `he${gender}`;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      jobs,
      user: user,
    },
  };
}
