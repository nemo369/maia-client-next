import Link from 'next/link';
import React from 'react';

const LinkButton = ({ link, isActive }) => (
  <li
    className={`transition-all li-button flex-grow-0 rounded text-white leading-4 text-base py-3 nav__button flex flex-col items-center justify-center  ${
      isActive ? 'active active-svg' : 'disabled'
    }`}
  >
    <Link href={link.href}>
      <a className="grid">
        {link.icon}
        <span
          className={`mt-2  text-base text-white  leading-4
              ${isActive ? ' text-sm font-bold' : ' '}
            `}
        >
          {link.name}
        </span>
      </a>
    </Link>
  </li>
);
export default LinkButton;
