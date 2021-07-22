/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import Inputs from '../common/Inputs';
import Arrow from '../svg/Arrow';
import RadioMaleFemale from '../common/RadioMaleFemale';
import { AppContext } from '../../src/context/state';
import Check from '../common/Check';
import Tooltip from '../common/Tooltip';
import EditInfo from '../svg/EditInfo';

export default function ProfileDetails() {
  const { profile } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDiabled] = useState(true);
  console.log(profile);
  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  const editInfo = () => {
    setIsDiabled(!isDisabled);
  };

  const tooltipSendedJobs = '<span>סגירת מצב ״מחפש עבודה״ תציג אותך במצב לא פעיל אצל<br /> המעסקים שאליהם שלחת בקשה והם לא יכולו לראות את <br /> פרטיך האישיים.</span>';

  return (
    <div>
      <div className="flex justify-between my-[10px] mx-[30px]">
        <div className="text-gray text-[19px] font-bold">פרטים אישיים</div>
        <button className="focus:outline-none" onClick={toggleInfo} type="button">
          <div className={isOpen && 'rotate-180'}>
            <Arrow />
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="absolute bg-white z-10 w-full">
          <div className="flex flex-col items-center">
            <Inputs
              type="text"
              status="main"
              className={`profile-inputs ${isDisabled && 'text-[#717171]'}`}
              placeholder="שם"
              value={profile.display_name}
              disabled={isDisabled}
            />
            <Inputs
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
              value={profile.user_email}
              disabled
            />
            <Inputs
              type="text"
              status="main"
              className={`profile-inputs ${isDisabled && 'text-[#717171]'}`}
              placeholder="עיר מגורים"
              value={JSON.parse(profile.city).name}
              disabled={isDisabled}
            />
            <Inputs
              type="text"
              status="main"
              className={`profile-inputs ${isDisabled && 'text-[#717171]'}`}
              placeholder="שפת אם"
              value="עברית"
              disabled={isDisabled}
            />
            <div className="flex items-center justify-between w-[365px]">
              <Inputs
                type="text"
                status="main"
                placeholder="גיל"
                className={`profile-inputs-age ${isDisabled && 'text-[#717171]'}`}
                value={profile.age}
                disabled={isDisabled}
              />
              <RadioMaleFemale initialValue={profile.gender} />
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
            <div className="my-[15px] flex w-[365px] justify-between">
              <div className="text-[#666666] text-[18px]">
                עריכת פרטי שאלון אוטוביוגרפיה
              </div>
              <button className="opacity-50 focus:outline-none" onClick={editInfo} type="button"><EditInfo /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
