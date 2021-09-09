import React, { useState } from 'react';
import PopUp from '../common/PopUp';
import MailHeart from '../svg/MailHeart';
import Chat from '../svg/Chat';
import WalkMeStepTwo from '../svg/WalkMeStepTwo';
import FlyingWoman from '../svg/FlyingWoman';
import ForMoreInfo from './ForMoreInfo';

const HelpInfo = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [showMail, setShowMail] = useState(false);

  const togglePhone = () => {
    setShowPhone(!showPhone);
  };

  const mailPopUP = () => {
    setShowMail(true);
  };

  return (
    <>
      <PopUp
        trigger={
          <button
            onClick={() => setShowMail(false)}
            type="button"
            className="max-w-[273px] cursor-pointer relative top-[-50px] left-[-360px] w-full z-10"
          >
            <FlyingWoman />
            <span className="leading-6 text-white font-bold text-lg absolute z-20 text-center w-[121px] px-6 pt-6 top-0 left-0">
              זקוק/ה
              <br />
              להכוונה
              <br />
              אישית?
            </span>
          </button>
        }
      >
        <div className="flex flex-col items-center justify-center px-10">
          <h2 className="text-center text-[30px] font-bold text-gray-mid">
            נשארתם עם שאלה לא פתורה?
          </h2>
          <h2 className="text-center text-[25px] leading-3 font-medium text-gray-mid">
            מקדמי התעסוקה והלימודים ישמחו לסייע לכם.
          </h2>
          <div className="text-[18px] text-[#999999] text-center leading-6 mt-6">
            תהליך ליווי אישי עם מקדמי תעסוקה ו/או לימודים יכול לעשות לכם סדר בדברים,
            <br />
            לסייע לכם למקד את השאלות ולהגיע למסקנות ממוקדות ומעשיות
            <br />
            בבחירת מסלול לימודים ו/או מקצוע לחיים
          </div>
          <div className="text-gray-mid text-center text-[20px] font-bold my-[20px]">
            לפרטים נוספים צור קשר עם היועץ:
          </div>
          <div className="flex">
            <button
              onClick={mailPopUP}
              type="button"
              className="ml-[40px] cursor-pointer
           w-[200px] h-[180px] border border-[rgba(0,0,0,0.14)] rounded-[8px] shadow-input"
            >
              <MailHeart className="center-icon" />
              <div className="font-bold text-[20px] mt-[15px]">במייל</div>
            </button>
            <button
              onClick={togglePhone}
              type="button"
              className="w-[200px] h-[180px] cursor-pointer border border-[rgba(0,0,0,0.14)] rounded-[8px] shadow-input"
            >
              <Chat className="center-icon" />
              {showPhone ? (
                <div className="font-bold text-[20px]">02-9876543</div>
              ) : (
                <div className="font-bold text-[20px]">בטלפון</div>
              )}
            </button>
          </div>
        </div>
        <div className="absolute left-[550px] top-3">
          <WalkMeStepTwo />
        </div>
      </PopUp>
      {showMail && <ForMoreInfo />}
    </>
  );
};

export default HelpInfo;
