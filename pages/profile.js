import React, { useContext, useEffect, useState } from 'react';
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
import VendorAPI from '../src/services/vendor.service';
import HelpInfo from '../components/popups/HelpInfo';

export default function Profile({ notifications }) {
  const { t } = useTranslation('common');
  const { dispatch, user, profile } = useContext(AppContext);
  useProfile();

  // const [jobs, setJobs] = useState([])
  const [studies, setStudies] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [fetchOnce, setfetchOnce] = useState(false);

  const seo = seoMerge({
    title: t('פרופיל אישי'),
  });

  useEffect(() => {
    const fetcCategorys = async () => {
      if (!profile || !profile.professions) return;
      if (fetchOnce) return;
      const professionsIds = profile.professions.map((profession) => +profession.id);
      const studiesIds = profile.studies.map((study) => +study.id);
      const [{ data: professionsData }, { data: studiesData }] = await Promise.all([
        VendorAPI.getCategorys(user.token, 'professions', { ids: professionsIds }),
        VendorAPI.getCategorys(user.token, 'studies', { ids: studiesIds }),
      ]);
      setStudies(studiesData);
      setProfessions(professionsData);
      setfetchOnce(true);
    };
    fetcCategorys();
  }, [profile, user.token]);
  useEffect(() => {
    dispatch({ type: SET_NOTIFICATIONS, notifications: notifications });
  }, []);

  return (
    <>
      <NextSeo {...seo} />
      <div className="profile">
        <BreadCrumbs breadCrumbs={[{ title: 'משתמש', href: '/profile' }]} />
        <h1 className="pofile-header text-gray-mid text-[38px] font-black">אזור אישי</h1>
        <div className="flex flex-wrap">
          <div className="profile-container flex flex-col w-[1160px] ml-5 justify-between mb-2">
            <div className="flex justify-between">
              <ProfileNotifications />
              <ProfileConclusion stage="3" />
            </div>
            <div>
              <ProfileFavorite studies={studies} professions={professions} />
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <ProfileInfo />
            <HelpInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  if (user.redirect) return user;
  const { data: notifications } = await NotificationAPI.full_notification(token);

  return {
    props: {
      ...(await serverSideTranslations(req.locale, ['common'])),
      user,
      notifications,
    }, // will be passed to the page component as props
  };
}
