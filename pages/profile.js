import { NextSeo } from 'next-seo';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BreadCrumbs from '../components/common/BreadCrumbs';
import ProfileConclusion from '../components/profile/ProfileConclusion';
import UploadedFiles from '../components/profile/UploadedFiles';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileNotifications from '../components/profile/ProfileNotifications';
import ProfileFavorite from '../components/profile/ProfileFavorite';
import { seoMerge } from '../src/utils/next-seo.config';
import { getUserSession } from '../src/utils/getUser';
import ProfileAPI from '../src/services/profile.service';

export default function Profile(props) {
  console.log(props);
  const seo = seoMerge({
    title: 'פרופיל אישי',
  });
  return (
    <>
      <NextSeo {...seo} />
      <div className="profile">
        <BreadCrumbs breadCrumbs={[{ title: 'משתמש', href: '/profile' }]} />
        <div className="pofile-header text-gray-mid text-[38px] font-black">אזור אישי</div>
        <div className="flex flex-wrap">
          <div className="profile-container flex flex-col w-[1160px] ml-5 justify-between">
            <div className="flex justify-between">
              <ProfileNotifications />
              <ProfileConclusion />
            </div>
            <div>
              <ProfileFavorite />
            </div>
          </div>
          <div className="flex flex-col">
            <ProfileInfo />
            <UploadedFiles />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  if (user.redirect) return user;
  const { data, status } = await ProfileAPI.profile(token);
  // Here you can add more data
  if (200 !== status || !data?.data) {
    return {
      props: { user, profile: null }, // will be passed to the page component as props
    };
  }
  console.log(req.locale);
  return {
    props: {
      ...(await serverSideTranslations(req.locale, ['common'])),
      user,
      profile: data.data,
    }, // will be passed to the page component as props
  };
}
