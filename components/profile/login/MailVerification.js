import router from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import UserAPI from '../../../src/services/user.service';
import Loader from '../../common/Loader';
import { SET_USER } from '../../../src/context/appReducer';
import { AppContext } from '../../../src/context/state';
import Button from '../../common/Button';

const MailVerification = ({ email }) => {
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
      setIsAllowedResend(true);
    }, 30000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input || 10 > input.length) {
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
      console.log(data.token);
      dispatch({ type: SET_USER, user: data });
      router.push('/');
    } else {
      setError('משהו השתבש');
    }
    setLoader(false);
  };

  return (
    <div className="relative">
      <h1 className="font-black text-2xl">התחברות</h1>
      <div>
        אנא הזן/י את הקוד שקיבלת באימייל
        <br />
        {email}
      </div>
      {isAllowedResend ? (
        <button type="button" className="mt-2 mb-4 underline" onClick={reSend}>
          לא קיבלת? שלח שוב
        </button>
      ) : (
        <div className="mt-2 mb-4 h-6" />
      )}
      <div className="text-white h-6">
        {!!error && <span className="shake block">{error}</span>}
      </div>
      <form className="block h-16 gap-x-7" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="password" className="hidden">
          {' '}
          הזן סיסמא
        </label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          className={`regiserPageInput justify-self-center h-12 w-full bwc bg-gray-disabled  rounded-md ${
            error ? '' : ''
          }`}
        />
        <Button status="main" type="submit" className="mt-3 w-full" disabled={loader}>
          שליחה
        </Button>
      </form>

      <Loader loading={loader} className="absolute right-0 left-0 m-auto bottom-[-210px]" />
    </div>
  );
};

export default MailVerification;
