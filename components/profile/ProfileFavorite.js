import React from 'react';
import CheckboxGroup from '../common/CheckboxGroup';
import ProfileFavoriteEmpty from './ProfileFavoriteEmpty';
import ProfileFavoriteData from './ProfileFavoriteData';

export default function ProfileFavorite() {
  const isData = true;
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
      {isData ? (
        <>
          <ProfileFavoriteData
            percentage="92"
            isButton
            company="אלקטרה בע׳׳מ"
            jobTitle="מגייסת אנליסט BI"
            description="אלקטרה מחפשת BI ANALYST מנוסים לתפקיד הכולל ניהול והובלה של פרויקטי BI מקצה לקצה; החל משלב איתור צרכי הלקוח מול הנהלה בכירה ומקבלי החלטות, אפיון עסקי והגדרת"
          />
          <ProfileFavoriteData
            percentage="82"
            isButton
            company="הראל ביטוח"
            jobTitle="דרוש Senior Data analyst"
            description="לאגף ארגון ושיטות בהראל, האחראי על תהליכים אסטרטגים חוצי ארגון, דרוש.ה אנליסט.ית BI. ביומיום שלך בתפקיד: פיתוח, ניתוח ותפעול שוטף של בקרות ומסדי נתונים תפעוליים באמצעות כלים מתקדמים"
          />
          <ProfileFavoriteData
            percentage="79"
            isButton
            company="קבוצת יעל"
            jobTitle="קבוצת יעל מגייס אנליסט/ית
            שיווקי"
            description="חברתנו המתמחה במתן שירותים אנליטיים למגזר הפיננסי דרוש/ה Marketing data analyst התפקיד כולל: שליפת נתוני שאילתות מידע מורכבות מבסיסי נתונים שונים ותחקורם"
          />
        </>
      ) : (
        <ProfileFavoriteEmpty />
      )}
    </div>
  );
}
