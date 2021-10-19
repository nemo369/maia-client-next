import router from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { setCookie } from 'nookies';
import UserAPI from '../../../src/services/user.service';
import Loader from '../../common/Loader';
import { SET_USER } from '../../../src/context/appReducer';
import { AppContext } from '../../../src/context/state';
import { FRONT_URL, USER_COOKIE } from '../../../src/utils/consts';
import FourDigitsInputs from './FourDigitsInputs';

const MailVerification = ({ email, redirectToTest }) => {
  const { dispatch } = useContext(AppContext);

  const [loader, setLoader] = useState(false);
  const [isAllowedResend, setIsAllowedResend] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsAllowedResend(true);
    }, 30000);
  }, []);

  const reSend = async () => {
    setIsAllowedResend(false);
    await UserAPI.magicLogin({ email, type: 'email' });
    setTimeout(() => {
      if (setIsAllowedResend) {
        setIsAllowedResend(true);
      }
    }, 30000);
  };
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!input || 4 !== input.length) {
      return;
    }
    setLoader(true);
    setError(false);
    const { data, status } = await UserAPI.emailVerification({ email, password: input });
    setLoader(false);
    if (200 !== status || !data) {
      setError(data.message ? data.message : 'שגיאת שרת');
      setInput('');
      return;
    }
    if (data?.token) {
      setCookie(null, USER_COOKIE, JSON.stringify({ ...data, vendorTest: null }), {
        maxAge: 12 * 60 * 60, //12 hours as in Iam token
        path: '/',
        sameSite: true,
      });
      dispatch({ type: SET_USER, user: data });
      if (redirectToTest && data.vendorTest) {
        window.location.href = `${data.vendorTest}&redirect=${encodeURIComponent(
          `${FRONT_URL.replace('/api', '')}?refetchuser=true&testDone=autoBiography`
        )}`;
        return;
      }
      router.push({ pathname: '/', query: { refetchuser: 'true' } });
    } else {
      setError('משהו השתבש');
    }
    setLoader(false);
  };

  useEffect(() => {
    if (input && 4 === input.length) {
      handleSubmit();
    }
  }, [input]);

  return (
    <div className="relative">
      <h1 className="font-black text-2xl">התחברות</h1>
      <div>
        אנא הזן/י את הקוד שקיבלת באימייל
        <br />
        {email}
      </div>
      {isAllowedResend ? (
        <button type="button" className="mt-2 mb-4" onClick={reSend}>
          לא קיבלת?
          <span className="underline text-orange mr-1">שלח שוב</span>
        </button>
      ) : (
        <div className="mt-2 mb-4 h-6" />
      )}
      <div className="text-gray-400">*שימו לב, אולי המייל נכנס בטעות לתקיית הספאם שלך.</div>

      <div className="text-white h-6">
        {!!error && <span className="shake block">{error}</span>}
      </div>
      <form className="validate-form block h-16 gap-x-7" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="password" className="hidden">
          {' '}
          הזן סיסמא
        </label>
        {/* <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="password"
          id="password"
          autoComplete="off"
          className={`regiserPageInput justify-self-center h-12 w-full bwc bg-gray-disabled  rounded-md ${
            error ? '' : ''
          }`}
        /> */}
        <FourDigitsInputs
          error={error}
          loader={loader}
          setLoader={setLoader}
          setError={setError}
          setInput={setInput}
        />
        {/* <Button status="main" type="submit" className="mt-3 w-full" disabled={loader}>
          שליחה
        </Button> */}
      </form>
      <Loader loading={loader} className="absolute right-0 left-0 m-auto " />
    </div>
  );
};

export default MailVerification;
