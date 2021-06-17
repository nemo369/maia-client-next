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
          <LoginWithMail />
        </Case>
        <Case value="phone">
          <PhoneLog />
        </Case>
      </Switch>
      <p className="text-center mt-4">נתקלת בבעיה? 03-6450072</p>
      <div className="mt-auto relative mx-auto text-center">
        {'phone' !== loginType && (
          <button
            className="block underline mx-auto"
            // className="block relative  bottom-52 right-[92px] underline mx-auto my-auto "
            type="button"
            onClick={() => changeLoginType('phone')}
          >
            אני מעוניין/ת לקבל קוד לנייד
          </button>
        )}
        {'email' !== loginType && (
          <button
            className="block underline mx-auto"
            type="button"
            onClick={() => changeLoginType('email')}
          >
            אני מעוניין/ת לקבל קוד למייל
          </button>
        )}
        {'password' !== loginType && (
          <button
            className="block underline mx-auto"
            type="button"
            onClick={() => changeLoginType('password')}
          >
            התחברות עם סיסמא
          </button>
        )}
        <a>
          <span>עדיין לא רשום/ה?</span>
          <strong>התחל/י כאן</strong>
        </a>
      </div>
    </section>
  );
}
