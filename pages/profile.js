/* eslint-disable prettier/prettier */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React, { useContext, useEffect, useState } from 'react';
import BreadCrumbs from '../components/common/BreadCrumbs';
import DashboardSummary from '../components/dashboard/DashboardSummary';
import ProfileFavorite from '../components/profile/ProfileFavorite';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileNotifications from '../components/profile/ProfileNotifications';
import { SET_NOTIFICATIONS } from '../src/context/appReducer';
import { AppContext } from '../src/context/state';
import useProfile from '../src/hooks/useProfile';
import NotificationAPI from '../src/services/notification.service';
import VendorAPI from '../src/services/vendor.service';
import { getUserSession } from '../src/utils/getUser';
import { seoMerge } from '../src/utils/next-seo.config';

export default function Profile({ notifications, cities }) {
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

  const removeFromTypes = () => {
    const professionsIds = profile.professions.map((profession) => +profession.id);
    const studiesIds = profile.studies.map((study) => +study.id);

    const filteredProfessions = professions.filter((profession) => professionsIds.includes(profession.id));
    const filteredStudies = studies.filter((study) => studiesIds.includes(study.id));

    setStudies(filteredStudies);
    setProfessions(filteredProfessions);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      if (!profile || !profile.professions) return;
      if (fetchOnce) {
        removeFromTypes();
        return;
      }
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
    fetchCategories();
  }, [profile, user.token]);
  useEffect(() => {
    dispatch({ type: SET_NOTIFICATIONS, notifications: notifications });
  }, []);

  return (
    <>
      <NextSeo {...seo} />
      <div className="profile pt-10  max-w-full">
        <BreadCrumbs breadCrumbs={[{ title: 'משתמש', href: '/profile' }]} />
        <h1 className="pofile-header text-gray-mid text-[38px] font-black">אזור אישי</h1>
        <div className="flex w-full pl-4 2xl:flex-nowrap flex-wrap gap-x-4  max-w-full">
          <div className="flex flex-col   justify-between mb-2 flex-1 max-w-full">
            <div className="flex justify-between gap-x-2">
              <div className="2xl:max-w-lg">
                <ProfileNotifications />
              </div>
              <DashboardSummary direction="horizontal" />
              {/* <ProfileConclusion stage="3" /> */}
            </div>
            <ProfileFavorite studies={studies} professions={professions} />
          </div>
          <ProfileInfo cities={cities} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(req) {
  const [user, token] = getUserSession(req);
  if (user.redirect) return user;
  const { WORDPRESS_ENDPOINT } = process.env;

  // const { data: notifications } = await NotificationAPI.full_notification(token);
  const [cities, { data: notifications }] = await Promise.all([
    // eslint-disable-next-line prettier/prettier
    fetch(`${WORDPRESS_ENDPOINT}/wp-content/themes/canaan/data/cities.json`).then((res) => res.json()),
    NotificationAPI.full_notification(token),
  ]);

  return {
    props: {
      ...(await serverSideTranslations(req.locale, ['common'])),
      user,
      cities,
      notifications,
    }, // will be passed to the page component as props
  };
}
