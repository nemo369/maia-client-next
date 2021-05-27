/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import useForm from '../../src/hooks/useForm';
import DisplayError from '../common/error/DisplayError';
import PopoutExample from './SearchCountryInput';

const RegisterForm = () => {
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(true);
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
    <div className="registerPage_container w-registercontainer_Width   mx-auto">
      <h1 className="font-black text-registerPageTitle text-mainOrange leading-reegisterPageTitle">
        העתיד שלך מתחיל כאן
      </h1>
      <p className="text-registerPageSubTitle text-registerPageSubTitle_fontsize leading-regiterPageSubTitle opacity-7 mb-fifty">
        הרשמה למערכת מאיה
      </p>
      <div className="registerPage_form_container bg-registercontainer_white px-fifty register-form">
        <form
          className="registerPage_form grid grid-cols-2  mx-auto gap-x-4 gap-y-3"
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
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={inputs.username}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          <div>
            {/* <button
              type="button"
              name="city"
              placeholder="בחר יישובים"
              value={inputs.city}
              onChange={handleChange}
              onClick={handleSearchInput}
              className="relative regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
            >
              םבחר יישובי
            </button> */}
            <PopoutExample open={open} setOpen={setOpen} />
          </div>
          {/* {isBrowser ? <SearchInput /> : ''} */}
          <hr className="dashed col-start-1 col-end-3" />
          <input
            type="email"
            name="email"
            placeholder="מייל *"
            value={inputs.email}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          <input
            type="text"
            name="fullname"
            placeholder="שם מלא *"
            value={inputs.fullname}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          <input
            type="text"
            name="cellphone"
            placeholder="נייד"
            value={inputs.cellphone}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          <input
            type="number"
            name="age"
            placeholder="גיל"
            value={inputs.age}
            onChange={handleChange}
            className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
          />
          <div className="my-4 col-start-1 col-end-3">
            <p className="inline-block text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor">
              לפנ י שאנחנו ממשיכים, איך נוח לך שנפנה אליך?
            </p>
            <label className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor">
              <input
                className="inline-block male mx-4"
                id="input-gender-male"
                name="gender"
                type="radio"
                value="m"
                checked
                onChange={handleChange}
                placeholder="זכר"
              />
              זכר
            </label>
            <label className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor">
              <input
                className="inline-block female mx-4"
                id="input-gender-female"
                name="gender"
                type="radio"
                value="f"
                onChange={handleChange}
                placeholder="נקבה"
              />
              נקבה
            </label>
          </div>
          <hr className="dashed col-start-1 col-end-3" />
          <div className="my-4">
            <input
              className="checkbox ml-4"
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
          <div className="register_bottom col-start-1 col-end-3 flex justify-between ">
            <div>
              <div className="my-4">
                <input
                  className="checkbox ml-4"
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
            <button
              p
              type="submit"
              className="bg-registerPageButtonGrey font-medium py-2 justify-self-end mt-twenty mb-fifty px-sixty rounded-md hover:bg-mainOrange hover:text-mainWhite"
            >
              שנתחיל?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
