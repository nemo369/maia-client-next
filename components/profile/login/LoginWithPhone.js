import React, { useState } from 'react';
import UserAPI from '../../../src/services/user.service';
import Loader from '../../common/Loader';

function LoginWithPhone() {
  const [cellNumber, setCellNUmber] = useState('');
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [popup, setPopup] = useState('');
  const validatePhoneNumber = (emailToValidate) => {
    // eslint-disable-next-line prettier/prettier
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(emailToValidate);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false || validatePhoneNumber(cellNumber));
    if (!cellNumber) {
      setError(true);
      return;
    }
    setLoader(true);
    const { data, status } = await UserAPI.emailLogin(email);
    setLoader(false);
    if (200 !== status || !data.data.message) {
      setError(true);
    } else {
      setPopup(data.data.message);
    }
  };
  return (
    <div>
      <div className="font-black text-2xl">התחברות</div>
      <div className="mb-11">
        כדי שנוכל לשמור על פרטיותך ולהגן על הנתונים שלך נשלח לך באמצעות SMS סיסמא חד פעמי
      </div>
      <form method="POST" onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
            setError(false);
          }}
          className={`email1 w-full h-[50px] rounded-md text-grey px-3 font-bold text-[18px] ${
            error
              ? 'focus:ring-2 focus:ring-red-500 focus:text-red-700 text-red-700 focus:font-bold focus:text-lg ring-2 ring-red-500 bg-opacity-80 bg-red-error placeholder-red-800'
              : ''
          }`}
          placeholder="נייד"
          // placeholder={error ? `${email}מייל לא קיים או לא תקין` : 'mail'}
        />
        <button
          type="submit"
          className="submit mt-32 bg-mainOrange w-full text-center rounded py-4 hover:bg-opacity-90"
        >
          התחברות
        </button>
        <Loader loading={loader} />
        {popup && <p>{popup}</p>}
        {error ? (
          <div className="absolute top-3  right-auto left-2  font-bold  text-red-500 grid grid-flow-col items-center">
            נייד לא תקין
            <div className="w-5  leading-4 h-5 font-bold text-center mr-3 text-lg border-2 border-red-500  text-red-500 rounded-full inline-block">
              i
            </div>
          </div>
        ) : (
          ''
        )}
      </form>
      {/* <div className=" w-[200px] h-[300px] bg-red-active ">תבדוק את המייל שלך</div> */}
    </div>
  );
}

export default LoginWithPhone;
