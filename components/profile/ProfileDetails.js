import { useTranslation } from 'next-i18next';
import React, { useContext, useState } from 'react';
import { SET_PROFILE } from '../../src/context/appReducer';
import { AppContext } from '../../src/context/state';
import useForm from '../../src/hooks/useForm';
import ProfileAPI from '../../src/services/profile.service';
import { FRONT_URL } from '../../src/utils/consts';
import Check from '../common/Check';
import Inputs from '../common/Inputs';
import RadioMaleFemale from '../common/RadioMaleFemale';
import Tooltip from '../common/Tooltip';
import Arrow from '../svg/Arrow';
import EditInfo from '../svg/EditInfo';
import ProfileDetailsEditStreet from './ProfileDetailsEditStreet';
import AgeInputSimple from './register_form/inputs/AgeInputSimple';
import ResetPopUp from './register_form/ResetPopUp';

export default function ProfileDetails({ cities }) {
  const { profile, user, dispatch } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDiabled] = useState(false);
  const { inputs, handleChange, resetForm } = useForm({
    first_name: profile.first_name,
    last_name: profile.last_name,
    birth_year: +profile.birth_year,
    gender: profile.gender,
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const editInfo = async () => {
    setIsDiabled(true);
    const { data, status } = await ProfileAPI.updateProfile(user.token, {
      ...inputs,
      gender: document.querySelector('#female').checked ? 'f' : 'm',
      birth_year: +document.querySelector('#birth_year').value,
    });
    if (200 === status && data?.updated_profile) {
      dispatch({ type: SET_PROFILE, profile: data.updated_profile });
    } else {
      resetForm();
    }
    setIsDiabled(false);
  };
  const handleRadioChange = (e) => {
    handleChange(e);
    editInfo();
  };
  const handleYearOfBirthChange = (e) => {
    handleChange(e);
    editInfo();
  };
  const tooltipSendedJobs = `<p>
  מקדם תעסוקתי ילווה אותך בתהליכי קבלת ההחלטות לבניית מסלול אישי לקרייה שלך וללא עלות.
</p>
<p style="color:#41C2C4; margin-top: 2px">מה בתאכלס מקדם התעסוקה יראה?</p>
<p>
  1. את פרטי ההרשמה שלך (דרכם הוא גם יצור קשר איתך) 2. את הדוחות המסכמים שעלו מתוך האבחון
  שתעבור 
</p>`;

  const [isTestOpen, setIsTestOpen] = useState(false);
  const loading = false;
  const openResetTestPopup = (e) => {
    e.preventDefault();
    setIsTestOpen(true);
  };
  const openTest = () => {
    window.location.href = `${profile.vendor_token}&redirect=${encodeURIComponent(
      `${FRONT_URL.replace('/api', '')}?refetchuser=true&testDone=autoBiography`
    )}`;
  };
  const { t } = useTranslation('common');

  return (
    <div className="px-6">
      <button
        className="flex justify-between  focus:outline-none w-full "
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <h2 className="text-gray text-[19px] font-medium">פרטים אישיים</h2>
        <div className={`transition ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <Arrow />
        </div>
      </button>
      {isOpen && (
        <form className="height-animation bg-white w-full mt-4" onSubmit={onSubmit}>
          <div className="flex flex-col items-center text-[#717171] text-[18px]">
            <Inputs
              onChange={handleChange}
              onBlur={editInfo}
              type="text"
              className={`profile-inputs ${isDisabled ? 'text-[#717171]' : ''}`}
              placeholder="שם פרטי"
              status="main"
              value={inputs.first_name}
              name="first_name"
              disabled={isDisabled}
            />
            <Inputs
              onChange={handleChange}
              onBlur={editInfo}
              type="text"
              className={`profile-inputs ${isDisabled ? 'text-[#717171]' : ''}`}
              placeholder="שם משפחה"
              status="main"
              value={inputs.last_name}
              name="last_name"
              disabled={isDisabled}
            />
            <Inputs
              onChange={handleChange}
              type="tel"
              status="main"
              className="profile-inputs text-[#7D7D7D] opacity-50"
              placeholder="טלפון"
              value={profile.cellphone}
              disabled
            />
            <Inputs
              type="mail"
              status="main"
              className="profile-inputs text-[#7D7D7D] opacity-50"
              placeholder="מייל"
              onChange={handleChange}
              value={profile.user_email}
              disabled
            />
            <div className="opacity-70 text-[#7D7D7D] text-[16px] w-full mb-4 text-sm pr-4">
              * לעריכת מייל ונייד צור קשר עם התמיכה 03-6450072
            </div>
            <ProfileDetailsEditStreet cities={cities} />

            <div className="flex items-center justify-between w-full">
              <AgeInputSimple
                value={inputs.birth_year}
                handleChange={handleYearOfBirthChange}
                disabled={isDisabled}
              />
              <RadioMaleFemale name="gender" onChange={handleRadioChange} value={inputs.gender} />
            </div>
            <div className="flex justify-between mt-8 w-full px-3">
              <Check
                checkWrapper=" "
                content={t('אני מאשר ליועץ לצפות בפרטים שלי')}
                handleChange={handleChange}
              />
              <Tooltip
                trigger={
                  <div className="relative smallpop w-4 h-4 border-solid border-[#666666] border-[1px] rounded-full font-small opacity-50  text-[#666666] text-xs mr-4 hover:bg-[#3C91A0] hover:opacity-100 hover:text-white inline-block text-center">
                    ?
                  </div>
                }
              >
                <div dangerouslySetInnerHTML={{ __html: tooltipSendedJobs }} />
              </Tooltip>
            </div>
          </div>
        </form>
      )}
      <div className="dash  border-b-[2px] border-dashed border-[#979797] opacity-20 h-1 my-6" />
      <a
        href={profile.vendor_token}
        className="my-[15px] flex  justify-between"
        onClick={openResetTestPopup}
      >
        <div className="text-[#666666] text-[18px]">עריכת פרטי שאלון מה עשיתי עד כה</div>
        <div className="opacity-50 focus:outline-none hover:opacity-100">
          <EditInfo />
        </div>
      </a>
      <ResetPopUp
        isOpen={isTestOpen}
        loading={loading}
        startTest={openTest}
        setIsOpen={setIsTestOpen}
      />
    </div>
  );
}
