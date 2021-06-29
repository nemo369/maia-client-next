/* eslint-disable no-nested-ternary */
import React from 'react';
import GrayX from '../svg/GrayX';
import SmallHatGreen from '../svg/SmallHatGreen';
import SmallExclamationMarkGreen from '../svg/SmallExclamationMarkGreen';
import SmallBreifcaseGreen from '../svg/SmallBreifcaseGreen';

const news = [
  {
    id: 1,
    title: 'נמצאו 12 משרות חדשות עבורך',
    date: '12.12.12',
    type: 'job',
  },
  {
    id: 2,
    title: 'נמצאו 12 מסלולי לימוד חדשים עבורך',
    date: '12.12.12',
    type: 'school',
  },
  {
    id: 3,
    title: 'נמצאו 12 מסלולי לימוד חדשים עבורך',
    date: '12.12.12',
    type: 'alert',
  },
];

export default function ProfileNotifications() {
  return (
    <div className="pofile-notifications max-h-[400px] w-[300px] rounded-[15px] p-[20px]">
      <div className="pofile-notifications-header dash border-b-[1px] border-dashed border-[#ffffff2f] flex justify-between text-gray-200 items-center">
        <div className="text-[24px] text-white font-black">ההתראות שלי</div>
        <button
          type="button"
          className="text-white text-[12px] opacity-70 cursor-pointer focus:outline-none"
        >
          נקה הכל
        </button>
      </div>
      <div className="profile-body">
        <div className="profile-body-news dash border-b-[1px] border-dashed border-[#ffffff2f]">
          <div className="text-white text-[10px] font-black p-[5px]">חדשות</div>
          <div>
            <div className="scroller">
              {news.map((content) => (
                <div id={content.id} key={content.id} className="flex px-[3px] space-x-4">
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
                  <div className="w-[10px]">
                    <button type="button" aria-label="סגירה">
                      <GrayX />
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
            {news.map((content) => (
              <div key={content.title} className="flex px-[3px] space-x-4">
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
                <div className="w-[10px]">
                  <button type="button" aria-label="סגירה">
                    <GrayX />
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
