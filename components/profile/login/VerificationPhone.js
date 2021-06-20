import router from 'next/router';
import React, { useState } from 'react';
import UserAPI from '../../../src/services/user.service';
import Loader from '../../common/Loader';
import { SET_USER } from '../../../src/context/userReucder';

const sucsessClass = `bg-green-success focus:ring-0 
focus:ring-green-successBorder border-2 border-green-successBorder text-green-successBorder`;

const classes = 'bg-white focus:ring-2 focus:ring-orange text-orange';
const errorClass = `bg-red-error focus:ring-0 
focus:ring-red border-2 border-red text-red`;
const VerificationPhone = (props) => {
  const { cell } = props;
  const [loader, setLoader] = useState(false);
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phoneNumberString;
  }
  const handleSumbit = async () => {
    setLoader(true);
    setError(false);
    const { data, status } = await UserAPI.phoneVerification({ phone: cell, pin: inputs });
    setInputs(['', '', '', '']);
    setLoader(false);
    if (200 !== status || !data) {
      setError(true);
      return;
    }

    //////ככה??/////
    if (data?.token) {
      dispatch({ type: SET_USER, user: data });

      router.push('/');
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
    if (4 === inputs.join('').length && !loader) {
      handleSumbit();
    }
  };
  return (
    <div className="relative">
      <div className="font-black text-2xl">התחברות</div>
      <div className="mb-11">
        אנא הזן/י את הקוד שקיבלת
        <br />
        בהודעת SMS לטלפון שלך
        <span className="mr-2">{formatPhoneNumber(cell)}</span>
      </div>
      <div className="text-white h-6">{error && 'מספר לא תקין. בבקשה נסה שוב'}</div>
      <div className="flex h-16 gap-x-7">
        {[0, 1, 2, 3].map((index, key) => (
          <input
            type="text"
            key={key}
            onChange={(e) => {
              const newInputs = [...inputs];
              newInputs[index] = !Number.isNaN(+e.target.value) ? +e.target.value : '';
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
