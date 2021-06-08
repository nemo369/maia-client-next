import Link from 'next/link';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import LightBulb from '../svg/LightBulb';
import { AppContext } from '../../src/context/state';
import Logosvg from '../svg/Logo';
import Information from '../svg/Information';
import SchoolHat from '../svg/SchoolHat';
import Briefcase from '../svg/Briefcase';
import ProfilePic from '../svg/ProfilePic';
import SilverLogo from '../svg/SilverLogo';
import Group11 from '../svg/Group11';
import malePic from '../svg/MalePic';
import MalePic from '../svg/MalePic';

const NavBar = () => {
  const { pathname } = useRouter();
  const { user } = useContext(AppContext);
  console.log(user);

  const links = [
    // { href: '/dashbaord', icon: <ProfilePic /> },
    { href: '/dashbaord', name: 'ראשי', icon: <LightBulb /> },
    { href: '/professions', name: 'זירת המקצועות', icon: <Information /> },
    { href: '/school', name: 'מאגר הלימודים', icon: <SchoolHat /> },
    { href: '/jobs', name: 'משרות פנויות', icon: <Briefcase /> },
    // { href: '/jobs', icon: <SilverLogo /> },
  ];

  const LinkButton = ({ link, isActive }) => (
    <li
      className={`transition-all rounded active-svg text-white text-base py-3 nav__button flex flex-col items-center justify-center  ${
        isActive ? 'active' : 'disabled'
      }`}
    >
      <Link href={link.href}>
        <a>
          {link.icon}
          <span>{link.name}</span>
        </a>
      </Link>
    </li>
  );
  return (
    <div className="nav__wrapper flex bg-green-500 gap-x-8">
      <div className="nav__placeholder h-screen w-[150px]" />
      <div className="nav__border rounded-r-lg  hidden md:block z-20" />
      <aside className="fixed z-10 w-[115px] right-8 nav flex flex-col h-screen justify-between bg-green-500  items-center">
        <div className="nav__profile">
          <Link href="/ProfilePage">
            <>
              {'m' === user?.user_gender ? <MalePic /> : <ProfilePic />}

              <a>{user?.user_display_name}</a>
            </>
          </Link>
        </div>
        <ul className="nav__links flex flex-col items- mx-4 justify-center gap-y-10">
          {links.map((link) => (
            <LinkButton key={link.href} link={link} isActive={pathname === link.href} />
          ))}
        </ul>
        <div className="nav__logo">
          <Link href="/">
            <a>
              {/* <Logosvg /> */}
              <SilverLogo />
            </a>
          </Link>
        </div>
      </aside>
    </div>
  );
};
export default NavBar;
