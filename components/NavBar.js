import Link from 'next/link';
import React from 'react';

const NavBar = () => (
  <div className="navbar-container">
    navbar
    <br />
    <Link href="/ProfilePage">
      <a>Profile page</a>
    </Link>
    <br />
    <Link href="/JobVacancies">
      <a>Job vacancies</a>
    </Link>
    <br />
    <Link href="/TheCurriculum">
      <a>The curriculum</a>
    </Link>
    <br />
    <Link href="/professionalism">
      <a>professionalism</a>
    </Link>
  </div>
);
export default NavBar;
