import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import UserAPI from '../../../src/services/user.service';
import Loader from '../../common/Loader';

const MailLog = ({ changeLoginType, setTheEmail }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const validateEmail = (emailToValidate) => {
    // eslint-disable-next-line prettier/prettier
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailToValidate);
  };
  const { t } = useTranslation('common');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loader) {
      return;
    }
    setError(false);
    if (!email || !validateEmail(email)) {
      setError(t('כתובת מייל לא תקינה'));
      return;
    }
    setLoader(true);
    const { data, status } = await UserAPI.magicLogin({ email, type: 'email' });
    if (200 !== status) {
      setLoader(false);
      setError(data.message ? data.message : data);
    } else {
      setTheEmail(email);
    }
  };
  return (
    <div>
      <h1 className="font-black text-2xl">{t('התחברות')}</h1>
      <div className="mb-11">
        {t(
          'כדי שנוכל לשמור על פרטיותך ולהגן על הנתונים שלך נשלח לך באמצעות המייל סיסמא חד פעמית קישור להתחברות'
        )}
      </div>
      <form method="POST" onSubmit={handleSubmit} className="relative mt-11">
        <div>
          <label>
            <span className="sr-only">מייל</span>
            <input
              autoComplete="email"
              // type="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              className={`text-gray w-full h-[50px] rounded-md  px-3 font-bold text-[18px]
              ${
                error
                  ? 'focus:ring-2 focus:ring-red-500 focus:text-red-700 text-red-700 focus:font-bold focus:text-lg ring-2 ring-red-500 bg-opacity-80 bg-[#FFDBDB] placeholder-red-800'
                  : ''
              }`}
              placeholder="מייל"
            />
          </label>
          <div className="text-left pt-1">
            <button className="underline" type="button" onClick={() => changeLoginType('phone')}>
              אני מעוניין/ת לקבל קוד לנייד
            </button>
          </div>
        </div>
        <button
          disabled={loader}
          type="submit"
          className="submit mt-36 bg-mainOrange w-full text-center rounded py-4 hover:bg-opacity-90"
        >
          התחברות
        </button>
        <Loader loading={loader} className="mx-auto -mt-11 absolute right-0 left-0 top-p[153px]" />

        {error ? (
          <div className="absolute top-3  right-auto left-2  font-bold  text-red-500 grid grid-flow-col items-center">
            {error}
            <div className="w-5  leading-4 h-5 font-bold text-center mr-3 text-lg border-2 border-red-500  text-red-500 rounded-full inline-block">
              i
            </div>
          </div>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

export default MailLog;
