import React from 'react';
import GrayHat from '../svg/GrayHat';

export default function NoStudyEmpty() {
  return (
    <div className=" h-[283px] flex justify-center items-center">
      <div className="grid gap-y-8">
        <div className="gray-hat">
          <GrayHat />
        </div>
        <div className="text-black opacity-20 text-[28px] font-bold w-[69%] text-center justify-self-center">
          לצורך הצגת נתונים יש לבחור תחום
        </div>
      </div>
    </div>
  );
}
