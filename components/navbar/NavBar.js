import Link from 'next/link';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import LightBulb from '../svg/LightBulb';
import { AppContext } from '../../src/context/state';
import Logosvg from '../svg/Logo';

const NavBar = () => {
  const { pathname } = useRouter();
  const { user } = useContext(AppContext);

  const links = [
    { href: '/dashbaord', name: 'ראשי', icon: <LightBulb /> },
    { href: '/professions', name: 'זירת המקצועות', icon: <LightBulb /> },
    { href: '/school', name: 'מאגר הלימודים', icon: <LightBulb /> },
    { href: '/jobs', name: 'משרות פנויות', icon: <LightBulb /> },
  ];

  const LinkButton = ({ link, isActive }) => (
    <li
      className={`transition-all rounded text-white text-base py-3 nav__button flex flex-col items-center justify-center ${
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
    <div className="nav__wrapper flex bg-green-500">
      <div className="nav__placeholder h-screen w-[150px]" />
      <div className="nav__border rounded-r-lg bg-gr hidden md:block z-20" />
      <aside className="fixed z-10 w-[115px] right-5 nav flex flex-col h-screen justify-between bg-green-500 items-center">
        <div className="nav__profile">
          <Link href="/ProfilePage">
            <a>{user?.user_display_name}</a>
          </Link>
        </div>
        <ul className="nav__links flex flex-col items-center justify-center">
          {links.map((link) => (
            <LinkButton key={link.href} link={link} isActive={pathname === link.href} />
          ))}
        </ul>
        <div className="nav__logo">
          <Link href="/">
            <a>
              <Logosvg />
            </a>
          </Link>
        </div>
      </aside>
    </div>
  );
};
export default NavBar;
