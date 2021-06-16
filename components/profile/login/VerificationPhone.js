import router from 'next/router';
import React, { useState } from 'react';
import UserAPI from '../../../src/services/user.service';
import Loader from '../../common/Loader';
import { SET_USER } from '../../../src/context/userReucder';

const VerificationPhone = (props) => {
  const { cell } = props;
  const [loader, setLoader] = useState(false);
  const [classes, setClasses] = useState('bg-white focus:ring-2 focus:ring-orange text-orange');
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const [popup, setPopup] = useState('');
  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }
  const keyUp = (e, index) => {
    const el = e.currentTarget;
    if (3 !== index && e.target.value) {
      el.nextElementSibling.focus();
    }
    if (4 === inputs.join('').length) {
      setLoader(true);
      const { data, status } = UserAPI.phoneVerification({ phone: cell, pin: inputs });
      if (200 !== status || !data.data.message) {
        setClasses(
          'bg-green-success focus:ring-0 focus:ring-green-successBorder border-2 border-green-successBorder text-green-successBorder'
        );
        setError(true);
        setPopup(data.message);
      } else {
        setClasses(
          'bg-green-success focus:ring-0 focus:ring-green-successBorder border-2 border-green-successBorder text-green-successBorder'
        );
      }

      //////ככה??/////
      if (data?.token) {
        dispatch({ type: SET_USER, user: data });

        router.push('/');
      }
      setLoader(false);
    }
  };

  return (
    <div>
      <div className="font-black text-2xl">התחברות</div>
      <div className="mb-11">
        אנא הזן/י את הקוד שקיבלת בהודעת SMS לטלפון שלך
        <br />
        {formatPhoneNumber(cell)}
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
            className={`${classes} num-input max-w-[65px] text-[42px] leading-[49px] text-center  focus:outline-none rounded-md`}
          />
        ))}
        {popup && <p>{popup}</p>}
      </div>

      <Loader loading={loader} />
      {error ? (
        <div className="absolute top-3  right-auto left-2  font-bold  text-red-500 grid grid-flow-col items-center">
          מספר לא תקין, אנא נסה שוב
          <div className="w-5  leading-4 h-5 font-bold text-center mr-3 text-lg border-2 border-red-500  text-red-500 rounded-full inline-block">
            i
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default VerificationPhone;
