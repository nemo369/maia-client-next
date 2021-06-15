import React, { useState } from 'react';
import UserAPI from '../../../src/services/user.service';
import SmallHatGreen from '../../svg/SmallHatGreen';

const LoginWithMail = () => {
  const [email, setEmail] = useState('');
  // const change = (e) => {
  //   setEmail(e.target.value);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, status } = await UserAPI.login(email);
    if (200 !== status) {
      setError(data.message);
    }
  };

  return (
    <div>
      <div className="font-black text-2xl">התחברות</div>
      <div className="mb-11">
        כדי שנוכל לשמור על פרטיותך ולהגן על הנתונים שלך נשלח לך באמצעות מייל מייל סיסמא חד פעמי
      </div>
      <form method="POST" onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          className="w-full h-[50px] rounded-md text-gray"
          placeholder="מייל"
        />
        <button
          type="submit"
          // onClick={}
          className="mt-16 bg-mainOrange w-full text-center rounded py-4 hover:bg-opacity-90"
        >
          התחברות
        </button>
      </form>
      {/* <div className=" w-[200px] h-[300px] bg-red-active ">תבדוק את המייל שלך</div> */}
      <SmallHatGreen />
    </div>
  );
};

export default LoginWithMail;
