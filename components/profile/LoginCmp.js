import React, { useEffect, useState } from 'react';
import { LOGIN_TYPE_LS } from '../../src/utils/consts';
import { Case, Switch } from '../common/Switch';
import SilverLog from '../svg/SilverLog';
import LoginWithMail from './login/LoginWithMail';
import LoginWithPassword from './login/LoginWithPassword';
import PhoneLog from './login/PhoneLog';

export default function LoginCmp() {
  const [loginType, setLoginType] = useState();
  useEffect(() => {
    setLoginType(localStorage.getItem(LOGIN_TYPE_LS) || 'email');
  }, []);
  const changeLoginType = (type) => {
    localStorage.setItem(LOGIN_TYPE_LS, type);
    setLoginType(type);
  };
  return (
    <section className="flex flex-col  h-full">
      <div className="logo-wrapper mb-16">
        <SilverLog />
      </div>
      <Switch test={loginType}>
        <Case value="password">
          <LoginWithPassword />
        </Case>
        <Case value="email">
          <LoginWithMail changeLoginType={changeLoginType} />
        </Case>
        <Case value="phone">
          <PhoneLog changeLoginType={changeLoginType} />
        </Case>
      </Switch>
      <p className="text-center mt-4">נתקלת בבעיה? 03-6450072</p>
      <div className="mt-auto relative mx-auto text-center">
        <a>
          <span>עדיין לא רשום/ה?</span>
          <strong>התחל/י כאן</strong>
        </a>
      </div>
    </section>
  );
}
