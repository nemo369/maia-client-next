import React, { useState, useContext } from 'react';
import Inputs from '../common/Inputs';
import Arrow from '../svg/Arrow';
import RadioMaleFemale from '../common/RadioMaleFemale';
import { AppContext } from '../../src/context/state';
import Check from '../common/Check';
import Tooltip from '../common/Tooltip';
import EditInfo from '../svg/EditInfo';
import useForm from '../../src/hooks/useForm';
import ProfileAPI from '../../src/services/profile.service';
import { SET_PROFILE } from '../../src/context/appReducer';

export default function ProfileDetails() {
  const { profile, user, dispatch } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDiabled] = useState(false);
  const { inputs, handleChange, resetForm } = useForm({
    first_name: profile.first_name,
    last_name: profile.last_name,
    age: profile.age,
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
  const tooltipSendedJobs = `<span>סגירת מצב ״מחפש עבודה״ תציג אותך במצב לא פעיל אצל
  <br /> המעסקים שאליהם שלחת בקשה והם לא יכולו לראות את <br /> פרטיך האישיים.</span>`;

  return (
    <div>
      <button
        className="flex justify-between my-[10px] mx-[30px] focus:outline-none w-full pl-16"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <h2 className="text-gray text-[19px] font-bold">פרטים אישיים</h2>
        <div className={`transition ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <Arrow />
        </div>
      </button>
      {isOpen && (
        <form className="absolute bg-white z-10 w-full" onSubmit={onSubmit}>
          <div className="flex flex-col items-center">
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
              className="profile-inputs text-[#717171]"
              placeholder="טלפון"
              value={profile.cellphone}
              disabled
            />
            <Inputs
              type="mail"
              status="main"
              className="profile-inputs text-[#717171]"
              placeholder="מייל"
              onChange={handleChange}
              value={profile.user_email}
              disabled
            />
            <Inputs
              onChange={handleChange}
              type="text"
              status="main"
              className={`profile-inputs ${isDisabled ? 'text-[#717171]' : ''}`}
              placeholder="עיר מגורים"
              value={JSON.parse(profile.city).name}
              disabled={isDisabled}
            />
            <Inputs
              type="text"
              onBlur={editInfo}
              onChange={handleChange}
              status="main"
              placeholder="גיל"
              className={`profile-inputs ${isDisabled ? 'text-[#717171]' : ''}`}
              value={inputs.age}
              name="age"
              disabled={isDisabled}
            />
            <div className="flex items-center justify-between w-[365px]">
              <RadioMaleFemale name="gender" onChange={handleRadioChange} value={inputs.gender} />
            </div>
            <div className="flex justify-between w-[345px] my-[5px]">
              <Check content="אני מאשר/ת ליועץ/ת לצפות בפרטים שלי" />
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
            <div className="dash w-[365px] border-b-[2px] border-dashed border-[#979797] opacity-20 h-1" />
            <a href={profile.vendor_token} className="my-[15px] flex w-[365px] justify-between">
              <div className="text-[#666666] text-[18px]">עריכת פרטי שאלון אוטוביוגרפיה</div>
              <div className="opacity-50 focus:outline-none hover:opacity-100" herf="#">
                <EditInfo />
              </div>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
