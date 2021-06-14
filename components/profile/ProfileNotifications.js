import React from 'react';

const news = [
  {
    title: 'נמצאו 12 משרות חדשות עבורך',
    date: '12.12.12',
    type: 'job',
  },
  {
    title: 'נמצאו 12 מסלולי לימוד חדשים עבורך',
    date: '12.12.12',
    type: 'school',
  },
];

export default function ProfileNotifications() {
  //   let icon = '';
  //   switch (type) {
  //     case 'job':
  //       icon += ;
  //       break;
  //     case 'school':
  //       icon +=
  //       break;
  //     case 'school':
  //       icon +=
  //       break;
  //     default:
  //       break;
  //   }

  return (
    <div className="pofile-notifications w-[300px] rounded-[15px] p-[20px]">
      <div className="pofile-notifications-header dash border-b-[1px] border-dashed border-[#ffffff2f] flex justify-between text-gray-200 items-center">
        <div className="text-[24px] text-white font-black">ההתראות שלי</div>
        <div className="text-white text-[12px] opacity-70 cursor-pointer">נקה הכל</div>
      </div>
      <div className="profile-body">
        <div className="profile-body-news dash border-b-[1px] border-dashed border-[#ffffff2f]">
          <div className="text-white text-[10px] font-black p-[5px]">חדשות</div>
          <div>
            {news.map((content) => (
              <div className="flex px-[3px] space-x-4">
                <div className="bg-white rounded-full w-[22px] h-[22px] ml-[10px] mt-[10px]" />
                <div className="text-white mb-[3px]">
                  <div className="text-[16px]">{content.title}</div>
                  <div className="text-[14px] opacity-70">{content.date}</div>
                </div>
                <div className="w-[10px]">
                  <button type="button">X</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="profile-body-sooner">
          <div className="text-white text-[10px] py-[5px]">מוקדם יותר</div>
          <div>
            {news.map((content) => (
              <div className="flex px-[3px] space-x-4">
                <div className="bg-white rounded-full w-[22px] h-[22px] ml-[10px] mt-[10px]" />
                <div className="text-white mb-[3px]">
                  <div className="text-[16px]">{content.title}</div>
                  <div className="text-[14px] opacity-70">{content.date}</div>
                </div>
                <div className="w-[10px]">
                  <button type="button">X</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
