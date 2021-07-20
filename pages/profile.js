import React, { useContext } from 'react';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { AppContext } from '../src/context/state';
import BreadCrumbs from '../components/common/BreadCrumbs';
import ProfileConclusion from '../components/profile/ProfileConclusion';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileNotifications from '../components/profile/ProfileNotifications';
import ProfileFavorite from '../components/profile/ProfileFavorite';
import { seoMerge } from '../src/utils/next-seo.config';
import { getUserSession } from '../src/utils/getUser';
import NotificationAPI from '../src/services/notification.service';
import useProfile from '../src/hooks/useProfile';
import { SET_NOTIFICATIONS } from '../src/context/appReducer';

export default function Profile({ notifications }) {
  const { t } = useTranslation('common');
  const { dispatch } = useContext(AppContext);
  dispatch({ type: SET_NOTIFICATIONS, notifications: notifications });
  useProfile();
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
              <ProfileConclusion stage="3" />
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
  const notifications = await NotificationAPI.full_notification(token);
  return {
    props: {
      ...(await serverSideTranslations(req.locale, ['common'])),
      user,
      notifications: notifications.data,
    }, // will be passed to the page component as props
  };
}
