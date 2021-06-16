import React from 'react';
import Link from 'next/link';
import CheckboxGroup from '../common/CheckboxGroup';
import SchoolHat from '../svg/SchoolHat';

export default function ProfileFavorite() {
  return (
    <div className="fav my-[22px] h-[415px] bg-white rounded-[20px] py-[25px] px-[21px]">
      <div className="flex justify-between items-center">
        <div className="text-black text-[28px] font-bold">המועדפים שלי</div>
        <div className="flex">
          <div id="fav-selector" className="ml-3">
            <div id="select-box">
              <input type="checkbox" id="options-view-button" />
              <div id="select-button" className="selector">
                <div id="selected-value">
                  <span>סינון</span>
                </div>
              </div>
              <div id="options">
                <div className="option">
                  <a className="label" href="#">
                    אהבתי
                  </a>
                </div>
                <div className="option">
                  <a className="label" href="#">
                    נשלחו
                  </a>
                </div>
              </div>
            </div>
          </div>
          <CheckboxGroup checkOne="מקצועות" checkTwo="משרות" checkThree="לימודים" />
        </div>
      </div>
      <div className="fav-content w-[100%] h-[283px] flex justify-center items-center">
        <div className="fav-content-empty-state">
          <div className="gray-hat">
            <SchoolHat />
          </div>
          <div className="text-black opacity-20 text-[28px] font-bold">
            עדיין לא נבחרו מסלולי לימוד שאהבת
          </div>
          <Link href="/jobs">
            <a className="text-[#3D9CA8] text-[20px] font-bold underline flex justify-center">
              לעמוד המשרות
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
