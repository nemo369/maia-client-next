import React from 'react';
import Inputs from '../common/Inputs';
import Toggle from '../common/Toggle';
import Check from '../common/Check';
import QuestionDisable from '../svg/QuestionDisable';

export default function ProfileInfo() {
  return (
    <div className="info h-[690px]  w-[430px] bg-white rounded-[20px]">
      <div>
        <div className="text-orange font-bold text-[19px] text-center">
          כל הכבוד!
          <br />
          השלמת את סולם ההתקדמות שלך
        </div>
        <div className="text-gray-mid text-[18px] opacity-70 text-center">
          כל המשרות ומסלולי הלימודים מותאמים
          <br />
          בצורה אידאלית עבורך :)
        </div>
        <div className="flex flex-col items-center">
          <Inputs type="text" status="main" className="profile-inputs" placeholder="שם" />
          <Inputs type="text" status="main" className="profile-inputs" placeholder="טלפון" />
          <Inputs type="text" status="main" className="profile-inputs" placeholder="מייל" />
        </div>
        <div className="flex justify-between mt-6 px-[34px] space-x-3">
          <div className="flex">
            <div className="text-gray-mid text-[18px]">מחפש עבודה?</div>
            <QuestionDisable />
          </div>
          <Toggle />
        </div>
        <div className="px-8">
          <div className="flex justify-between mb-2">
            <Check content="אני מאשר/ת ליועץ/ת לצפות בפרטים שלי" />
            <QuestionDisable />
          </div>
          <div className="flex justify-between mb-2">
            <Check content="אני מאשר/ת ליועץ לצפות במשרות ששלחתי" />
            <QuestionDisable />
          </div>
          <div className="flex justify-between mb-2">
            <Check content="אני מאשר/ת למעסיקים לפנות אלי עצמאית" />
            <QuestionDisable />
          </div>
        </div>
      </div>
    </div>
  );
}
