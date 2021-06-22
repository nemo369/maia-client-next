import React from 'react';
import BlueDoc from '../svg/BlueDoc';
import RedPd from '../svg/RedPd';
import YellowJpg from '../svg/YellowJpg';

export default function UploadedFiles() {
  return (
    <>
      <div className="files my-[22px] w-[435px] bg-white h-[130px] rounded-[20px] py-[20px] px-[21px]">
        <div className="flex justify-between items-center">
          <div className="text-black text-[28px] font-bold">הקבצים שהעליתי</div>
          <button
            type="button"
            className="text-[16px] outline-none	 text-gray-active underline cursor-pointer"
          >
            העלאת קובץ חדש+
          </button>
        </div>
        <div className="flex">
          <BlueDoc />
          <RedPd />
          <YellowJpg />
        </div>
      </div>
    </>
  );
}
