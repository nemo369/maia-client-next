import React from 'react';
import BreadCrumbs from '../components/common/BreadCrumbs';
import Button from '../components/common/Button';

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

export default function Profile() {
  return (
    <div className="profile">
      <BreadCrumbs breadCrumbs={[{ title: 'משתמש', href: '/profile' }]} />
      <div className="pofile-header text-gray-mid text-[38px] font-black">אזור אישי</div>
      <div className="profile-container">
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
        <div className="conclusion w-[850px] bg-white rounded-[20px] py-[25px] px-[21px]">
          <div className="conclusion-header flex justify-between">
            <div>
              <div className="text-black opacity-50 text-[26px]">סיכום תוצאות שלב </div>
              <div className="text-gray text-[29px] font-black mt-[-12px]">
                היכולות שלי + מה מתאים לי
              </div>
            </div>
            <div>
              <Button type="button" status="main" name="הצג דוח מסכם" />
            </div>
          </div>
          <div className="conclusion-body mt-[25px]">
            <div className="conclusion-body-title text-black text-[18px] font-bold">
              תחומי העניין העיקריים שלי
            </div>
            <div className="conclusion-body-content text-black opacity-70 text-[18px]">
              מסתמן כי הפרופיל התעסוקתי שלך הוא *יזמי-מנהלי-חברתי: אתה בעל כושר מנהיגות, חשוב לך
              להשפיע, להימנות עם מקבלי ההחלטות ולקדם נושאים שתחת אחריותך , נמשך לעבודה עם נתונים,
              שואף לסדר ומכוון לפעול בסביבה מוגדרת ומובנית ו בעל עניין רב בזולת, שואב סיפוק מיכולתך
              להיות קשוב לצרכיהם של אנשים אחרים ולסייע להם להשיג את מטרותיהם.
            </div>
          </div>
        </div>
        <div className="info  w-[430px] bg-white rounded-[20px]">
          כל הכבוד! השלמת את סולם ההתקדמות שלך
        </div>
      </div>
      <div className="fav my-[22px] w-[1175px] bg-white rounded-[20px] py-[25px] px-[21px]">
        המועדפים שלי
      </div>
    </div>
  );
}
