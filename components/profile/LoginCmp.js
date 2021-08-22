import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LOGIN_TYPE_LS } from '../../src/utils/consts';
import { Case, Switch } from '../common/Switch';
import SilverLog from '../svg/SilverLog';
import LoginWithMail from './login/LoginWithMail';
// import LoginWithPassword from './login/LoginWithPassword';
import PhoneLog from './login/PhoneLog';
import { getLs, setLs } from '../../src/utils/localStorge';

export default function LoginCmp() {
  const [loginType, setLoginType] = useState();
  console.log(loginType);
  useEffect(() => {
    setLoginType(getLs(LOGIN_TYPE_LS));
  }, []);
  const changeLoginType = (type) => {
    setLs(LOGIN_TYPE_LS, type);
    setLoginType(type);
  };
  return (
    <section className="flex flex-col  h-full">
      <div className="logo-wrapper mb-16">
        <SilverLog />
      </div>
      <Switch test={loginType}>
        {/* <Case value="password">
          <LoginWithPassword />
        </Case> */}
        <Case value="email">
          <LoginWithMail changeLoginType={changeLoginType} />
        </Case>
        <Case value="phone">
          <PhoneLog changeLoginType={changeLoginType} />
        </Case>
      </Switch>
      <a className="text-center mt-4 block" href="tel:036450072">
        נתקלת בבעיה? 03-6450072
      </a>
      <button className="hidden" type="button" onClick={() => setLoginType('password')}>
        התחברות עם סיסמא
      </button>
      <div className="mt-[120px] relative mx-auto text-center">
        <Link href="/user/signup">
          <a>
            <span>עדיין לא רשום/ה?</span>
            <strong className="mr-2">
              <u>התחל/י כאן</u>
            </strong>
          </a>
        </Link>
      </div>
    </section>
  );
}
