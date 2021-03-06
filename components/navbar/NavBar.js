import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { SET_NOTIFICATIONS } from '../../src/context/appReducer';
import { AppContext } from '../../src/context/state';
import NotificationAPI from '../../src/services/notification.service';
import FemalePic from '../svg/FemalePic';
import Information from '../svg/Information';
import LightBulb from '../svg/LightBulb';
import MalePic from '../svg/MalePic';
import SchoolHat from '../svg/SchoolHat';
import SilverLogo from '../svg/SilverLogo';
import LinkButton from './LinkButton';

const NavBar = () => {
  const { pathname } = useRouter();
  const { user, dispatch, notifications, profile } = useContext(AppContext);
  const { t } = useTranslation('common');
  const links = [
    { href: '/', name: t('ראשי'), icon: <LightBulb /> },
    { href: '/professions', name: t('זירת המקצועות'), icon: <Information /> },
    { href: '/studies', name: t('מאגר הלימודים'), icon: <SchoolHat /> },
    // { href: '/jobs', name: t('משרות פנויות'), icon: <Briefcase /> },
  ];

  useEffect(() => {
    const getNotifications = async () => {
      const { data } = await NotificationAPI.full_notification(user?.token);
      if (data && Array.isArray(data.data)) {
        dispatch({ type: SET_NOTIFICATIONS, notifications: data.data });
      }
    };
    getNotifications();
  }, []);

  return (
    <div className="nav__wrapper md:flex bg-green-500 gap-x-8">
      <div className="nav__placeholder md:h-screen md:w-[150px]  h-24" />
      <aside className="md:w-[155px] w-full py-3 px-5 fixed z-10  nav flex md:flex-col md:h-screen h-24 justify-between bg-green-500  items-center top-0">
        <div className="nav__profile  md:w-full md:mt-4 md:mb-1 ">
          <Link href="/profile">
            <a>
              {notifications?.length ? (
                <div className="text-center leading-[19px] absolute top-[35px] right-[40px] text-white text-[16px] font-black rounded-full border-2 border-white w-[22px] h-[22px] bg-[#EF4444]">
                  {notifications?.length}
                </div>
              ) : null}
              <div className="md:w-[84px]  mx-auto  h-[73px] w-10">
                {profile?.avatar ? (
                  <div className="w-[68px] h-[68px] overflow-hidden rounded-full">
                    <img
                      className="w-full h-full object-cover"
                      src={profile.avatar.src}
                      widh={68}
                      height={68}
                      loading="lazy"
                      alt={profile.first_name}
                    />
                  </div>
                ) : null}
                {'m' === profile?.gender && !profile?.avatar && <MalePic />}
                {'f' === profile?.gender && !profile?.avatar && <FemalePic />}
              </div>
              <div className="w-full  nav-profile-img-text text-lg text-white leading-[18px] text-center pt-1 mt-1 font-bold">
                {profile?.first_name}
                &nbsp;
                {profile?.last_name}
              </div>
              <div className="sr-only">לעמוד הפרופיל</div>
            </a>
          </Link>
        </div>
        <ul className="nav__links flex md:flex-col justify-center gap-y-4 items-center">
          {links.map((link) => (
            <LinkButton
              key={link.href}
              link={link}
              isActive={
                ('/' !== link.href && pathname.includes(link.href)) || pathname === link.href
              }
            />
          ))}
        </ul>
        <div className="nav__logo">
          <a
            href="https://adam-milo.co.il"
            className="text-xs text-white opacity-70"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Logosvg /> */}
            <SilverLogo />
            אדם מילא Powered by
          </a>
        </div>
      </aside>
      <div className="nav__border rounded-r-lg  hidden md:block z-20 mr-[-37px]" />
    </div>
  );
};
export default NavBar;
