import React from 'react';
import GrayHat from '../svg/GrayHat';

export default function NoStudyEmpty() {
  return (
    <div className="absolute w-[100%] h-[283px] flex justify-center items-center">
      <div className="grid gap-y-8">
        <div className="gray-hat">
          <GrayHat />
        </div>
        <div className="text-black opacity-20 text-[28px] font-bold w-[69%] text-center justify-self-center">
          עדיין לא נבחרו מסלולי לימוד שתואמים את החיפוש שהוזן
        </div>
      </div>
    </div>
  );
}
