import React, { useState } from 'react';
import useForm from '../../src/hooks/useForm';
import Button from '../common/Button';
import Loader from '../common/Loader';
import Group11 from '../svg/Group11';
import Group18Img from '../svg/Group18Img';

function WrongArea({ fullname, location, email }) {
  const [loader, setLoader] = useState(false);

  const { inputs, handleChange, resetForm } = useForm({
    fullname,
    location,
    email,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const dataToSend = {
      ...inputs,
    };

    // const { data, status } = await UserAPI.register(dataToSend);
    // if (200 !== status) {
    //   console.log(status);
    // }

    // if (200 === status) {
    //   resetForm();
    // //   router.push('/user/login?error="200"'); // TODO: go to last page user visited
    // }
  };
  return (
    <div className="mt-24 relative max-w-5xl mx-auto mb-40   bg-white px-32 pt-14 pb-9 register-form rounded-lg">
      <Group11 />
      <h1 className="sign-up-main-title  font-bold text-4xl leading-10 text-center text-gray mb-11">
        <span className="text-orange-mainOr font-black ">מצטערים, </span>
        אבל מאיה לא פועלת
        <br />
        באזור שלך כרגע
      </h1>
      <p className="text-3xl leading-8  text-gray-dark text-center mb-7 text-gray">
        <strong>רוצים לדעתך מתי היא באזורכם? </strong>
        <span>השאירו פרטים ונדאג לעדכן אותכם</span>
      </p>
      <Group18Img />
      <form
        className="registerPage_form block mx-auto rounded-md relative"
        method="POST"
        onSubmit={handleSubmit}
      >
        <Loader
          loading={loader}
          className="absolute right-0 left-0 m-auto top-0 z-20 bottom-0 my-auto"
        />
        <div className="flex justify-between gap-x-5">
          <input
            type="text"
            required
            name="fullname"
            autoComplete="on"
            placeholder="שם מלא*"
            value={inputs.fullname}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-12 w-full bwc bg-gray-disabled  rounded-md"
          />
          <input
            type="text"
            required
            autoComplete="off"
            name="fullname"
            placeholder="מקום מגורים"
            value={inputs.location}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-12 w-full bwc bg-gray-disabled  rounded-md"
          />
          <input
            type="email"
            autoComplete="email"
            required
            name="fullname"
            placeholder="מייל*"
            value={inputs.email}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-12 w-full bwc bg-gray-disabled  rounded-md"
          />
        </div>
        <input type="text" />
        <div className=" flex justify-center">
          <Button
            type="submit"
            status="main"
            name="שליחה"
            className="h-[50px] w-[250px]"
            disabled={loader}
          />
        </div>
      </form>
    </div>
  );
}

export default WrongArea;
