import router from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { setCookie } from 'nookies';
import UserAPI from '../../../src/services/user.service';
import Loader from '../../common/Loader';
import { SET_USER } from '../../../src/context/appReducer';
import { AppContext } from '../../../src/context/state';
import { USER_COOKIE } from '../../../src/utils/consts';

const sucsessClass = `bg-green-success focus:ring-0 
focus:ring-green-successBorder border-2 border-green-successBorder text-green-successBorder`;

const classes = 'bg-white focus:ring-2 focus:ring-orange text-orange';
const errorClass = `bg-[#FFDBDB] focus:ring-0 
focus:ring-red border-2 border-red text-red`;
const VerificationPhone = (props) => {
  const { cell } = props;
  const { dispatch } = useContext(AppContext);

  const [loader, setLoader] = useState(false);
  const [isAllowdResend, setIsAllowdResend] = useState(false);
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsAllowdResend(true);
    }, 5000);
  }, []);
  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phoneNumberString;
  }
  const reSend = async () => {
    // const { data, status } = await UserAPI.magicLogin({ phone: cell, type: 'phone' });
    await UserAPI.magicLogin({ phone: cell, type: 'phone' });
  };
  const handleSumbit = async () => {
    setLoader(true);
    setError(false);
    const pin = [...inputs].reverse().join('');
    const { data, status } = await UserAPI.phoneVerification({ phone: cell, pin });
    setLoader(false);
    if (200 !== status || !data) {
      setError(data.message ? data.message : 'שגיאת שרת');
      setInputs(['', '', '', '']);
      document.activeElement?.blur();
      return;
    }
    if (data?.token) {
      setCookie(null, USER_COOKIE, JSON.stringify({ ...data, vendorTest: null }), {
        maxAge: 12 * 60 * 60, //12 hours as in Iam token
        path: '/',
        sameSite: true,
      });
      dispatch({ type: SET_USER, user: data });
      router.push({ pathname: '/', query: { refetchuser: 'true' } });
    }
    setLoader(false);
  };
  const keyUp = (e, index) => {
    setError(false);

    const el = e.currentTarget;
    if ('Backspace' === e.code && el.nextElementSibling) {
      el.nextElementSibling?.focus();
      return;
    }
    if (0 !== index && '' !== e.target.value) {
      el.previousElementSibling?.focus();
      return;
    }
    if (4 === inputs.length && !loader) {
      setLoader(true);
      setTimeout(() => {
        handleSumbit();
      }, 0);
    }
  };
  return (
    <div className="relative">
      <h1 className="font-black text-2xl">התחברות</h1>
      <div>
        אנא הזן/י את הקוד שקיבלת
        <br />
        בהודעת SMS לטלפון שלך
        <span className="mr-2">{formatPhoneNumber(cell)}</span>
      </div>
      {isAllowdResend ? (
        <button type="button" className="mt-2 mb-4 underline" onClick={reSend}>
          לא קיבלת? שלח שוב
        </button>
      ) : (
        <div className="mt-2 mb-4 h-6" />
      )}
      <div className="text-white h-6">
        {!!error && <span className="shake block">{error}</span>}
      </div>
      <div className="flex h-16 gap-x-7">
        {[0, 1, 2, 3].map((index, key) => (
          <input
            type="text"
            key={key}
            onChange={(e) => {
              const newInputs = [...inputs];
              newInputs[index] = e.target.value;
              setInputs(newInputs);
            }}
            value={inputs[index]}
            onKeyUp={(e) => keyUp(e, index)}
            maxLength="1"
            className={`${!error && !loader ? classes : ''} ${error ? errorClass : ''} ${
              loader ? sucsessClass : ''
            } num-input max-w-[65px] text-[42px] leading-[49px] text-center  focus:outline-none rounded-md`}
          />
        ))}
      </div>

      <Loader loading={loader} className="absolute right-0 left-0 m-auto bottom-[-210px]" />
    </div>
  );
};

export default VerificationPhone;
