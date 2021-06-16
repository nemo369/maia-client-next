import React from 'react';

export default function UploadedFiles() {
  return (
    <>
      <div className="files my-[22px] w-[435px] bg-white h-[130px] rounded-[20px] py-[20px] px-[21px]">
        <div className="flex justify-between items-center">
          <div className="text-black text-[28px] font-bold">הקבצים שהעלאתי</div>
          <button
            type="button"
            className="text-[16px] outline-none	 text-gray-active underline cursor-pointer"
          >
            העלאת קובץ חדש+
          </button>
        </div>
        <div>XXX</div>
      </div>
    </>
  );
}
