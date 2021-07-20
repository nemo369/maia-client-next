/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import { AppContext } from '../../src/context/state';
import SmallHatGreen from '../svg/SmallHatGreen';
import SmallExclamationMarkGreen from '../svg/SmallExclamationMarkGreen';
import SmallBreifcaseGreen from '../svg/SmallBreifcaseGreen';
import { SET_NOTIFICATIONS } from '../../src/context/appReducer';

export default function ProfileNotifications() {
  const { notifications, dispatch } = useContext(AppContext);
  const clearNotifications = () => {
    dispatch({ type: SET_NOTIFICATIONS, notifications: [] });
  };

  return (
    <div className="pofile-notifications max-h-[400px] w-[300px] rounded-[15px] p-[20px]">
      <div className="pofile-notifications-header dash border-b-[1px] border-dashed border-[#ffffff2f] flex justify-between text-gray-200 items-center">
        <div className="text-[24px] text-white font-black">ההתראות שלי</div>
        <button
          type="button"
          className="text-white text-[12px] opacity-70 cursor-pointer focus:outline-none active:text-gray-200"
          onClick={clearNotifications}
        >
          נקה הכל
        </button>
      </div>
      <div className="profile-body">
        <div className="profile-body-news dash border-b-[1px] border-dashed border-[#ffffff2f]">
          <div className="text-white text-[10px] font-bold p-[5px]">חדשות</div>
          <div>
            <div className="scroller">
              {notifications?.map((content) => (
                <div id={content.id} key={content.id} className="flex justify-between space-x-4">
                  <div className="w-[20px] h-[20px] ml-[12px] mt-[10px]">
                    {'school' === content.type ? (
                      <SmallHatGreen />
                    ) : 'job' === content.type ? (
                      <SmallBreifcaseGreen />
                    ) : (
                      <SmallExclamationMarkGreen />
                    )}
                  </div>
                  <div className="text-white mb-[3px]">
                    <div className="text-[14px]">{content.title}</div>
                    <div className="text-[12px] opacity-70">{content.date}</div>
                  </div>
                  <div>
                    <button
                      className="relative opacity-50 mr-[20px] w-[12px] h-[12px] border-solid border-white border-[1px] rounded-full text-white text-[10px] text-center cursor-pointer leading-none focus:outline-none active:border-gray-200 active:text-gray-200"
                      type="button"
                      aria-label="סגירה"
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="profile-body-sooner">
          <div className="text-white text-[10px] py-[5px]">מוקדם יותר</div>
          <div className="scroller">
            {notifications?.map((content) => (
              <div key={content.title} className="flex justify-between  space-x-4">
                <div className="w-[20px] h-[20px] ml-[12px] mt-[10px]">
                  {'school' === content.type ? (
                    <SmallHatGreen />
                  ) : 'job' === content.type ? (
                    <SmallBreifcaseGreen />
                  ) : (
                    <SmallExclamationMarkGreen />
                  )}
                </div>
                <div className="text-white mb-[3px]">
                  <div className="text-[14px]">{content.title}</div>
                  <div className="text-[12px] opacity-70">{content.date}</div>
                </div>
                <div>
                  <button
                    className="relative opacity-50 mr-[20px] w-[12px] h-[12px] border-solid border-white border-[1px] rounded-full text-white text-[10px] text-center cursor-pointer leading-none focus:outline-none active:border-gray-200 active:text-gray-200"
                    type="button"
                    aria-label="סגירה"
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
