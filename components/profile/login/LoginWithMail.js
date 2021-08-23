import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import UserAPI from '../../../src/services/user.service';
import Loader from '../../common/Loader';
import PopUp from '../../common/PopUp';
import MailMarked from '../../svg/MailMarked';

const LoginWithMail = (props) => {
  const { changeLoginType } = props;
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [popup, setPopup] = useState(false);

  const validateEmail = (emailToValidate) => {
    // eslint-disable-next-line prettier/prettier
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailToValidate);
  };
  const { t } = useTranslation('common');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (!email || !validateEmail(email)) {
      setError(t('המייל אינו תקין'));
      return;
    }
    setLoader(true);
    const { data, status } = await UserAPI.magicLogin({ email, type: 'email' });
    setLoader(false);
    if (200 !== status) {
      setError(data.message);
    } else {
      console.log(data.data.magic_link);
      setPopup(data.data.message);
    }
  };

  return (
    <div>
      <h1 className="font-black text-2xl">{t('התחברות')}</h1>
      <div className="mb-11">
        {t(
          'כדי שנוכל לשמור על פרטיותך ולהגן על הנתונים שלך נשלח לך באמצעות מייל מייל סיסמא חד פעמי'
        )}
      </div>
      <form method="POST" onSubmit={handleSubmit} className="relative">
        <div>
          <label>
            <span className="sr-only">מייל</span>
            <input
              autoComplete="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              className={`email1 text-gray w-full h-[50px] rounded-md  px-3 font-bold text-[18px]
            ${
              error
                ? 'focus:ring-2 focus:ring-red-500 focus:text-red-700 text-red-700 focus:font-bold focus:text-lg ring-2 ring-red-500 bg-opacity-80 bg-red-error placeholder-red-800'
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
          {popup && (
            <PopUp defaultOpen>
              <MailSucsees msg={popup} />
            </PopUp>
          )}
        </div>
        <button
          type="submit"
          className="submit mt-32 bg-mainOrange w-full text-center rounded py-4 hover:bg-opacity-90"
        >
          התחברות
        </button>
        <Loader loading={loader} />

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

export default LoginWithMail;
const MailSucsees = ({ msg }) => (
  <div className="flex flex-col items-center justify-center py-16 px-16">
    <h2 className="text-center text-3xl font-bold ">{msg}</h2>
    <div className="rounded-lg w-[200px] h-[200px] mt-10  border border-gray-200 flex items-center justify-center">
      <MailMarked />
    </div>
  </div>
);
