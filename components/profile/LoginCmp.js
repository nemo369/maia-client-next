import React from 'react';
import Logosvg from '../svg/Logo';
import LoginWithPassword from './login/LoginWithPassword';

export default function LoginCmp() {
  return (
    <section className="flex flex-col  h-full">
      <div className="mb-16">
        <Logosvg />
      </div>
      <LoginWithPassword />

      <div className="mt-auto text-center">
        <a>
          <span>עדיין לא רשום/ה?</span>
          <strong>התחל/י כאן</strong>
        </a>
      </div>
    </section>
  );
}
