import React, { useState } from 'react';
import UserAPI from '../../../src/services/user.service';
import Loader from '../../common/Loader';

function LoginWithPhone(props) {
  const { changeLoginType } = props;
  const [cellNumber, setCellNUmber] = useState('');
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  const [popup, setPopup] = useState('');
  const { setCell } = props;
  const validatePhoneNumber = (num) => {
    if (!num) return false;
    if (!num.startsWith('05')) return false;

    return 10 === num.length;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (!cellNumber || !validatePhoneNumber(cellNumber)) {
      setError('מספר לא תקין');
      return;
    }
    setLoader(true);
    const { data, status } = await UserAPI.magicLogin({ phone: cellNumber, type: 'phone' });
    setLoader(false);
    if (200 !== status || !data.data.message) {
      setError('נייד לא תקין');
      return;
    } else {
      setPopup(data.data.message);
    }
    setCell(cellNumber);
  };
  return (
    <div className="mb-auto">
      <h1 className="font-black text-2xl">התחברות</h1>
      <div className="mb-11">
        כדי שנוכל לשמור על פרטיותך ולהגן על הנתונים שלך נשלח לך באמצעות SMS סיסמא חד פעמי
      </div>
      <form method="POST" onSubmit={handleSubmit} className="relative">
        <label>
          <span className="sr-only">נייד</span>
          <input
            type="tel"
            autoComplete="tel-local"
            onChange={(e) => {
              setCellNUmber(e.target.value);
              setError(false);
            }}
            className={`email1 w-full h-[50px] rounded-md text-gray px-4  text-lg focus:outline-none focus:ring  ${
              error
                ? 'focus:ring-2 focus:ring-red focus:text-red text-red focus:font-bold focus:text-lg ring-2 ring-red bg-opacity-80 bg-red-error placeholder-red-800'
                : ''
            }`}
            placeholder="נייד"
          />
        </label>
        <div className="text-left pt-1">
          <button className="underline " type="button" onClick={() => changeLoginType('email')}>
            אני מעוניין/ת לקבל קוד למייל
          </button>
        </div>
        <div className="h-32">
          <Loader
            className="absolute  w-32 h-32 text-white right-0 left-0 top-auto bottom-0 m-auto"
            loading={loader}
          />
        </div>
        {!loader && (
          <button
            type="submit"
            className="submit  bg-mainOrange w-full text-center rounded py-4 hover:bg-opacity-90"
          >
            התחברות
          </button>
        )}

        {popup && <p>{popup}</p>}
        {error ? (
          <div className="absolute top-3  right-auto left-2  font-bold  text-red grid grid-flow-col items-center">
            {error}
            <div className="w-5 text-sm leading-4 h-5 font-normal text-center mr-3  border-2 border-red  text-red rounded-full inline-block">
              i
            </div>
          </div>
        ) : (
          ''
        )}
      </form>
    </div>
  );
}

export default LoginWithPhone;
