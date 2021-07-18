import React, { useState } from 'react';
import Inputs from '../common/Inputs';
import Arrow from '../svg/Arrow';
import RadioMaleFemale from '../common/RadioMaleFemale';

export default function ProfileDetails() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex justify-between my-[15px] mx-[30px]">
        <div className="text-gray text-[19px] font-bold">פרטים אישיים</div>
        <button className="focus:outline-none" onClick={toggleInfo} type="button">
          <Arrow />
        </button>
      </div>
      {isOpen && (
        <div className="absolute bg-white z-10 w-full">
          <div className="flex flex-col items-center">
            <Inputs type="text" status="main" className="profile-inputs" placeholder="שם" />
            <Inputs type="text" status="main" className="profile-inputs" placeholder="טלפון" />
            <Inputs type="text" status="main" className="profile-inputs" placeholder="מייל" />
            <Inputs type="text" status="main" className="profile-inputs" placeholder="עיר מגורים" />
            <Inputs type="text" status="main" className="profile-inputs" placeholder="שפת אם" />
            <div className="flex items-center justify-between w-[365px]">
              <Inputs type="text" status="main" placeholder="גיל" className="profile-inputs-age" />
              <RadioMaleFemale />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
