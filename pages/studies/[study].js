/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import { getUserSession } from '../../src/utils/getUser';
import VendorAPI from '../../src/services/vendor.service';
import { seoMerge } from '../../src/utils/next-seo.config';
import useProfile from '../../src/hooks/useProfile';
import StudyBottomSlider from '../../components/common/StudyBottomSlider';
import StudyMoreInfo from '../../components/stuides/StudyMoreInfo';
import StudyProfile from '../../components/stuides/StudyProfile';

export default function Studies({ study, studies }) {
  const { t } = useTranslation('common');
  useProfile();
  const seo = seoMerge({
    title: 'מאגר הלימודים |' + (study.miK_NAME ? study.miK_NAME : '404'),
  });
  const router = useRouter();
  if (!study) {
    // router.push('/studies');
    return (
      <>
        <NextSeo {...seo} />
        <BreadCrumbs
          breadCrumbs={[
            { title: 'לימודים', href: '/studies' },
            { title: '404', href: router.asPath },
          ]}
        />
        <div className="flex h-full w-full items-center justify-center flex-col gap-y-4">
          <h1 className="text-5xl font-bold">הלימוד אותו חיפשת אינו קיים</h1>
          <Link href="/studies">
            <a className="py-2 px-6 border rounded-xl">חזרה לכל למאגר הלימודים</a>
          </Link>
          <Link href="/">
            <a className="py-2 px-6 border rounded-xl">חזרה לראשי</a>
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="pt-10">
      <section>
        <BreadCrumbs
          breadCrumbs={[
            { title: 'לימודים', href: '/studies' },
            { title: study.hearot, href: router.asPath },
          ]}
        />
        <NextSeo {...seo} />
        <h1 className="text-black text-3xl font-black mb-16">{t('מאגר לימודים')}</h1>
        <div className="md:grid  grid-cols-2 gap-x-4 justify-between">
          <div className="lg:flex felx col-start-1 col-end-3">
            <StudyProfile study={study} />
            <StudyMoreInfo study={study} />
          </div>
          <StudyBottomSlider studies={studies} />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  if (user.redirect) return user;
  const { study } = req.query;
  const [{ data: studies }, { data: studyData }] = await Promise.all([
    VendorAPI.getCategorys(token, 'studies', { byUser: true }),
    VendorAPI.getCategory(token, 'study', study),
  ]);
  // const studyData = fetchedStudy.data;
  const gender = user.gender ? user.gender : 'm';
  const locale = `he${gender}`;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'study'])),
      user,
      // studies: studies.filter((stud) => Number(stud.iD_Num) !== Number(study)),
      studies,
      study: studyData,
    },
  };
}
