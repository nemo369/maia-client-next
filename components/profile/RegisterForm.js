/* eslint-disable jsx-a11y/label-has-associated-control */
// import Router from 'next/router';
import { useState } from 'react';
import useForm from '../../src/hooks/useForm';
// import UserAPI from '../../src/services/user.service';
import DisplayError from '../common/error/DisplayError';

const RegisterForm = () => {
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { inputs, handleChange, resetForm } = useForm({
    username: '',
    email: '',
    password: '',
    city: '',
    street: '',
    cellphone: '',
    age: '',
    fullname: '',
    gender: '',
    employment_coefficient: null,
    terms_and_conditions: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    console.log(resetForm);
    console.log(setError);
    // setError(null);
    // setLoading(true);
    // try {
    //   const { data, status } = await UserAPI.register(inputs);
    //   // console.log(data, status);
    //   if (200 !== status) {
    //     setError(status);
    //   }

    //   if (data?.user) {
    //     // TODO: Set cookie with nookies
    //     resetForm();
    //     Router.push('/'); // TODO: go to last page user visited
    //   }
    // } catch (err) {
    //   setError(err);
    //   setTimeout(() => {
    //     setError(null);
    //   }, 5000);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="registerPage_container w-registercontainer_Width h-registercontainer_Heigth  mx-auto">
      <h1 className="font-black text-registerPageTitle text-mainOrange leading-reegisterPageTitle">
        העתיד שלך מתחיל כאן
      </h1>
      <p className="text-registerPageSubTitle text-registerPageSubTitle_fontsize leading-regiterPageSubTitle opacity-7 mb-fifty">
        הרשמה למערכת מאיה
      </p>
      {/* <div className="registerPage_header">header</div> */}
      <div className="registerPage_form_container bg-registercontainer_white px-fifty">
        <form
          className="registerPage_form grid grid-cols-2 w-ninetyPercent mx-auto gap-x-4 gap-y-3"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="py-4">
            <p className="mb-2 text-registerPageSubSubTitle_fontsize text-topBarGrey leading-regiterPageSubSubTitle font-black">
              פרטים אישיים
            </p>
            <p className=" text-regiterPageSmallGreyText text-topBarGrey leading-regiterPageSmallGreyText">
              * פרטי המייל ו/או נייד ישמשו לצורך התחברות חוזרת למערכת
            </p>
          </div>
          <span />
          <DisplayError error={error} />
          {/* <fieldset disabled={loading}> */}
          {/* <label htmlFor="username"> */}
          <input
            type="text"
            name="username"
            placeholder="User Name"
            // autoComplete="username"
            value={inputs.username}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          {/* </label> */}
          {/* <label htmlFor="password"> */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            // autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          {/* </label> */}
          {/* <label htmlFor="city"> */}
          <input
            type="text"
            name="city"
            placeholder="בחר יישוב"
            // autoComplete="password"
            value={inputs.city}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          {/* </label> */}
          {/* <label htmlFor="street"> */}
          <input
            type="text"
            name="street"
            placeholder="בחר רחוב"
            // autoComplete="password"
            value={inputs.street}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          {/* </label> */}
          {/* <label htmlFor="email"> */}
          <hr className="dashed col-start-1 col-end-3" />
          <input
            type="email"
            name="email"
            placeholder="מייל *"
            // autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          {/* </label> */}
          {/* <label htmlFor="passwordConfirmation"> */}
          <input
            type="text"
            name="fullname"
            placeholder="שם מלא *"
            // autoComplete="fullname"
            value={inputs.fullname}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          {/* </label> */}
          {/* <label htmlFor="cellphone"> */}
          <input
            type="text"
            name="cellphone"
            placeholder="נייד"
            // autoComplete="password"
            value={inputs.cellphone}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          {/* </label> */}
          {/* <label htmlFor="age"> */}
          <input
            type="number"
            name="age"
            placeholder="גיל"
            // autoComplete="password"
            value={inputs.age}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          {/* </label> */}

          {/* </fieldset> */}
          <div className="my-4 col-start-1 col-end-3">
            <p className="inline-block text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor">
              לפנ י שאנחנו ממשיכים, איך נוח לך שנפנה אליך?
            </p>
            <input
              className="inline-block mx-4"
              id="input-gender-male"
              name="male"
              type="radio"
              value="male"
              onChange={handleChange}
              placeholder="זכר"
            />
            <label
              htmlFor="male"
              className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor"
            >
              זכר
            </label>
            <input
              className="inline-block mx-4"
              id="input-gender-female"
              name="female"
              type="radio"
              value="female"
              onChange={handleChange}
              // value={inputs.username}
              placeholder="נקבה"
            />
            <label
              htmlFor="female"
              className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor"
            >
              נקבה
            </label>
          </div>
          <hr className="dashed col-start-1 col-end-3" />
          {/* <div className="register-page-divider col-start-1 col-end-3" /> */}
          <div className="register_bottom col-start-1 col-end-3">
            {/* <span /> */}
            <div className="my-4">
              <input
                className=" ml-4"
                id="employment_coefficient"
                name="employment_coefficient"
                type="checkbox"
                value="employment_coefficient"
                onChange={handleChange}
              />
              <label
                htmlFor="employment_coefficient"
                name="employment_coefficient"
                className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor"
              >
                אני מאשר/ת למקדם/ת תעסוקה לצפות בפרטים שלי
              </label>
            </div>
            {/* <span /> */}
            <div>
              <div className="my-4">
                <input
                  className=" ml-4"
                  id="terms_and_conditions"
                  name="terms_and_conditions"
                  type="checkbox"
                  value="terms_and_conditions"
                  onChange={handleChange}
                />
                <label
                  htmlFor="terms_and_conditions"
                  name="terms_and_conditions"
                  className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor"
                >
                  אני מאשר/ת כי קראתי בעיון ואישרתי את כל
                  <u> תנאי התקנון </u>
                  ואני מסכים/ה
                  <br />
                  לתהילך המוצע ובתנאים הרשומים
                </label>
              </div>
            </div>
            <button type="submit">Sign In!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
