import { NextSeo } from 'next-seo';
import React from 'react';
import BreadCrumbs from '../components/common/BreadCrumbs';
import ProfileConclusion from '../components/profile/ProfileConclusion';
import UploadedFiles from '../components/profile/UploadedFiles';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileNotifications from '../components/profile/ProfileNotifications';
import ProfileFavorite from '../components/profile/ProfileFavorite';
// import { getUserSession } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';

export default function Profile() {
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

// export async function getServerSideProps(req) {
//   const userSession = getUserSession(req);
//   if (userSession.redirect) return userSession;

//   // Here you can add more data
//   return userSession;
// }
