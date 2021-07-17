import Link from 'next/link';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import LightBulb from '../svg/LightBulb';
import { AppContext } from '../../src/context/state';
import Information from '../svg/Information';
import SchoolHat from '../svg/SchoolHat';
import Briefcase from '../svg/Briefcase';
import FemalePic from '../svg/FemalePic';
import SilverLogo from '../svg/SilverLogo';
import MalePic from '../svg/MalePic';
import LinkButton from './LinkButton';

const NavBar = () => {
  const { pathname } = useRouter();
  const { user } = useContext(AppContext);
  const { t } = useTranslation('common');
  const links = [
    { href: '/', name: t('ראשי'), icon: <LightBulb /> },
    { href: '/professions', name: t('זירת המקצועות'), icon: <Information /> },
    { href: '/studies', name: t('מאגר הלימודים'), icon: <SchoolHat /> },
    { href: '/jobs', name: t('משרות פנויות'), icon: <Briefcase /> },
  ];
  return (
    <div className="nav__wrapper md:flex bg-green-500 gap-x-8">
      <div className="nav__placeholder md:h-screen md:w-[150px]  h-24" />
      <aside className="md:w-[155px] w-full py-3 px-5 fixed z-10  nav flex md:flex-col md:h-screen h-24 justify-between bg-green-500  items-center top-0">
        <div className="nav__profile  md:w-full md:mt-4 md:mb-1 ">
          <Link href="/profile">
            <a>
              <div className="md:w-[84px]  mx-auto  h-[73px] w-10">
                {'m' === user?.gender ? <MalePic /> : <FemalePic />}
              </div>
              <div className="w-full  nav-profile-img-text text-lg text-white leading-[18px] text-center pt-1 mt-1 font-bold">
                {user?.displayName}
              </div>
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
          <Link href="/">
            <a className="text-xs text-white opacity-70">
              {/* <Logosvg /> */}
              <SilverLogo />
              אדם מילה Powered by
            </a>
          </Link>
        </div>
      </aside>
      <div className="nav__border rounded-r-lg  hidden md:block z-20 mr-[-37px]" />
    </div>
  );
};
export default NavBar;
