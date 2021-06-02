import { useEffect, useState } from 'react';
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
  const [cityData, setCityData] = useState(null);
  const [theStreets, setTheStreets] = useState(null);
  const [theStreet, setTheStreet] = useState(null);
  // const [error, setError] = useState(null);
  const [err, setErr] = useState(false);
  // const [open, setOpen] = useState(true);
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
      setTheStreets(data);
    };
    if (cityId) {
      getStreets();
    }
  }, [cityId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (false === inputs.city) {
      setErr(true);
    }
    const dataToSend = {
      ...inputs,
      city: JSON.stringify(cityData),
      street: JSON.stringify(theStreet),
      username: inputs.email,
    };

    setError(null);
    // setLoading(true);
    try {
      const { data, status } = await UserAPI.register(dataToSend);
      if (200 !== status) {
        setError(status);
      }

      if (data?.user) {
        // TODO: Set cookie with nookies
        resetForm();
        Router.push('/'); // TODO: go to last page user visited
      }
    } catch (errr) {
      setError(errr);
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <div className="registerPage_container -mt-24 max-w-5xl mx-auto mb-40">
      {/* <ConditionsPopup /> */}
      <MainTitle />
      <div className="registerPage_form_container relative bg-white  px-32 pt-14 pb-9 register-form rounded-md">
        <Group18Img />
        <Group11 />
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
            err={err}
          />
          <SearchStreetInput
            required
            theStreets={theStreets}
            setTheStreet={setTheStreet}
            handleChange={handleChange}
          />
          <hr className="dashed col-start-1 col-end-3" />

          <EmailInput handleChange={handleChange} value={inputs.email} />

          <FullnameInput handleChange={handleChange} value={inputs.fullname} />

          <CellphoneInput handleChange={handleChange} value={inputs.cellphone} />

          <AgeInput handleChange={handleChange} value={inputs.age} />

          <div className="my-4 col-start-1 col-end-3">
            <p className="inline-block text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor">
              לפנ י שאנחנו ממשיכים, איך נוח לך שנפנה אליך?
            </p>
            <MaleRadio handleChange={handleChange} />
            <FemaleRadio handleChange={handleChange} />
          </div>

          <hr className="dashed col-start-1 col-end-3" />
          <CoefficientCheckbox handleChange={handleChange} />

          <div className="register_bottom col-start-1 col-end-3 flex justify-between ">
            <ConditionsCheckbox termsText={termsText} handleChange={handleChange} />
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
