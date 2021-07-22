import React from 'react';
import BlueDoc from '../svg/BlueDoc';
import RedPd from '../svg/RedPd';
import YellowJpg from '../svg/YellowJpg';

export default function UploadedFiles() {
  return (
    <>
      <div className="py-[20px] px-[21px]">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="text-[#666666] text-[18px]">הקבצים שהעליתי | </div>
            <button type="button" className="font-medium mr-1">
              הכל
            </button>
          </div>
          <button
            type="button"
            className="text-[16px] outline-none	 text-[#FB9773] underline cursor-pointer"
          >
            העלאת קובץ חדש+
          </button>
        </div>
        <div className="flex mt-[18px]">
          <BlueDoc />
          <RedPd />
          <YellowJpg />
        </div>
      </div>
    </>
  );
}
