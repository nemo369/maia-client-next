import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useForm from '../../src/hooks/useForm';
import Infoservice from '../../src/services/info.service';
import AgeInput from './register_form/inputs/AgeInput';
import CellphoneInput from './register_form/inputs/CellphoneInput';
import EmailInput from './register_form/inputs/EmailInput';
import FemaleRadio from './register_form/inputs/FemaleRadio';
import MaleRadio from './register_form/inputs/MaleRadio';
import FullnameInput from './register_form/inputs/FullnameInput';
import SearchCountryInput from './SearchCountryInput';
import SearchStreetInput from './SearchStreetInput';
import CoefficientCheckbox from './register_form/inputs/CoefficientCheckbox';
import ConditionsCheckbox from './register_form/inputs/ConditionsCheckbox';
import MainTitle from './register_form/texts/MainTItle';
import SubTitle from './register_form/texts/SubTitle';
import SubmitButton from './register_form/SubmitButton';
import Group18Img from '../svg/Group18Img';
import Group11 from '../svg/Group11';
import UserAPI from '../../src/services/user.service';

const RegisterForm = ({ cities, termsText }) => {
  const [cityId, setCityId] = useState(null);
  const [cityData, setCityData] = useState('');
  const [theStreets, setTheStreets] = useState(null);
  const [theStreet, setTheStreet] = useState(null);
  const [error, setError] = useState(false);
  const [err, setErr] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [inputValue, setInputValue] = useState(undefined);

  const { inputs, handleChange, resetForm } = useForm({
    username: '',
    email: '',
    password: '',
    city: cityData?.value,
    street: theStreet,
    cellphone: '',
    age: '',
    fullname: '',
    gender: '',
    employment_Coefficient: null,
    terms_and_Conditions: null,
  });

  useEffect(() => {
    const getStreets = async () => {
      const { data } = await Infoservice.getStreetInfo(cityId);
      if (data) {
        setTheStreets(data);
      }
    };
    if (cityId) {
      getStreets();
    }
  }, [cityId]);
  const handleSubmit = async (e) => {
    setOpen(!open);
    e.preventDefault();

    if (undefined === inputs.city) {
      setErr(true);
    }
    const dataToSend = {
      ...inputs,
      city: JSON.stringify(cityData),
      street: JSON.stringify(theStreet),
      username: inputs.email,
    };

    const { data, status } = await UserAPI.register(dataToSend);
    if (200 !== status) {
      setError(data.message);
    }

    if (200 === status) {
      // TODO: Set cookie with nookies
      resetForm();
      router.push('/user/login'); // TODO: go to last page user visited
    }
    setOpen(!open);
  };

  return (
    <div className="registerPage_container mt-24 relative max-w-5xl mx-auto mb-40 ">
      {/* <div className="registerPage_container relative xl:-mt-24 max-w-5xl mx-auto mb-40 "> */}
      {/* <ConditionsPopup /> */}
      <MainTitle />
      <Group11 />
      <div className="registerPage_form_container relative bg-white  px-32 pt-14 pb-9 register-form rounded-lg">
        <Group18Img />
        <form
          className="registerPage_form block grid-cols-2  mx-auto gap-x-4 gap-y-3 rounded-md md:grid"
          method="POST"
          onSubmit={handleSubmit}
          id="theform"
        >
          <SubTitle />
          <span />
          {/* <DisplayError error={error} /> */}

          <SearchCountryInput
            cityId={cityId}
            setCityId={setCityId}
            setCityData={setCityData}
            cities={cities}
            handleChange={handleChange}
            error={error}
            setError={setError}
            setTheStreet={setTheStreet}
            inputValue={inputValue}
            setInputValue={setInputValue}
            err={err}
          />
          <SearchStreetInput
            theStreets={theStreets}
            setTheStreet={setTheStreet}
            handleChange={handleChange}
            cityData={cityData}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <hr className="dashed col-start-1 col-end-3" />

          <EmailInput handleChange={handleChange} value={inputs.email} />

          <FullnameInput handleChange={handleChange} value={inputs.fullname} />

          <CellphoneInput handleChange={handleChange} value={inputs.cellphone} />

          <AgeInput handleChange={handleChange} value={inputs.age} />
          <div className="grid grid-cols-2 col-start-1 col-end-3">
            <div className="my-4 col-start-1 col-end-3 flex">
              <p className="inline-block text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor">
                לפנ י שאנחנו ממשיכים, איך נוח לך שנפנה אליך?
              </p>
              <div className=" inline-block">
                <div className="flex">
                  <MaleRadio handleChange={handleChange} />
                  <FemaleRadio handleChange={handleChange} />
                </div>
              </div>
            </div>

            <CoefficientCheckbox handleChange={handleChange} />
            <hr className="dashed col-start-1 col-end-3 my-4" />

            {error ? <div className="text-red-500 text-left">{error}</div> : ''}
            <ConditionsCheckbox termsText={termsText} handleChange={handleChange} />
            <SubmitButton open={open} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
