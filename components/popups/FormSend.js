import React, { useState } from 'react';
import PopUp from '../common/PopUp';
import BigChecked from '../svg/BigChecked';
import Button from '../common/Button';

const FormSend = () => {
  const [isPopUp, setisPopUp] = useState(true);

  const closeModal = () => {
    setisPopUp(false);
  };

  return (
    <>
      {isPopUp && (
        <div>
          <PopUp position="center" defaultOpen>
            <div className="flex flex-col items-center justify-center px-[65px]">
              <BigChecked />
              <h2 className="text-center text-3xl mt-[11px] font-bold">
                ההודעה נשלחה
                <br />
                בהצלחה!
              </h2>
              <div className="text-center text-[20px] mt-[20px] leading-5">
                מקדמי התעסוקה
                <br />
                והלימודים יהיו אתכם
                <br />
                בקשר בהקדם האפשרי
              </div>
              <Button
                className="h-[50px] w-[240px] mt-[60px] opacity-50 border border-black text-black font-bold bg-none hover:bg-none"
                name="סגור"
                onClick={closeModal}
              />
            </div>
          </PopUp>
        </div>
      )}
    </>
  );
};

export default FormSend;
