import { NextSeo } from 'next-seo';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import BreadCrumbs from '../components/common/BreadCrumbs';
import ProfileConclusion from '../components/profile/ProfileConclusion';
import UploadedFiles from '../components/profile/UploadedFiles';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileNotifications from '../components/profile/ProfileNotifications';
import ProfileFavorite from '../components/profile/ProfileFavorite';
import { seoMerge } from '../src/utils/next-seo.config';
import { getUserSession } from '../src/utils/getUser';
import ProfileAPI from '../src/services/profile.service';

const stage = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function Profile(props) {
  console.log(props);
  const { t } = useTranslation('common');
  const seo = seoMerge({
    title: t('פרופיל אישי'),
  });
  return (
    <>
      <NextSeo {...seo} />
      <div className="profile">
        <BreadCrumbs breadCrumbs={[{ title: 'משתמש', href: '/profile' }]} />
        <div className="pofile-header text-gray-mid text-[38px] font-black">אזור אישי</div>
        <div className="flex flex-wrap">
          <div className="profile-container flex flex-col w-[1160px] ml-5 justify-between mb-2">
            <div className="flex justify-between">
              <ProfileNotifications />
              <ProfileConclusion stage={stage} />
            </div>
            <div>
              <ProfileFavorite />
            </div>
          </div>
          <div className="flex flex-col">
            <ProfileInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  if (user.redirect) return user;
  const { data: profile, status } = await ProfileAPI.profile(token);
  // Here you can add more data
  if (200 !== status || !profile) {
    return {
      props: { user, profile: null }, // will be passed to the page component as props
    };
  }
  // console.log(req.locale);
  return {
    props: {
      ...(await serverSideTranslations(req.locale, ['common'])),
      user,
      profile,
    }, // will be passed to the page component as props
  };
}
