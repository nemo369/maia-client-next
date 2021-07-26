import React, { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'next-i18next';
import ProfileFavoriteEmpty from './ProfileFavoriteEmpty';
import ProfileFavoriteData from './ProfileFavoriteData';
import CheckboxGroupGray from '../common/CheckboxGroupGray';

export default function ProfileFavorite() {
  const { t } = useTranslation('common');

  const categoryGroups = [
    { name: t('משרות'), id: 'jobs' },
    { name: t('לימודים'), id: 'studies' },
    { name: t('מקצועות'), id: 'professions' },
  ];

  const professionOptions = [
    { value: 'sent', label: 'נשלחו' },
    { value: 'favorite', label: 'אהבתי' },
  ];
  const customStyles = {
    menuList: () => ({
      backgroundColor: '#FFFFFF',
      color: '#898080',
      borderWidth: '2px',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#E1E1E1',
      border: 0,
      borderRadius: '5px',
      width: '200px',
      height: 32,
      minHeight: 32,
      boxShadow: 'none',
    }),
    indicatorsContainer: () => ({
      backgroundColor: '#E1E1E1',
      height: 18,
      marginBottom: 18,
    }),
  };

  const [categoryType, setcategoryType] = useState(categoryGroups[0]);

  const onChange = (id) => {
    const newCategory = categoryGroups.find((c) => c.id === id);
    setcategoryType(newCategory);
  };

  const isData = true;
  return (
    <div className="my-[18px] h-[420px] bg-white rounded-[20px] py-[25px] px-[21px]">
      <div className="flex justify-between items-center">
        <div className="text-black text-[28px] font-bold">המועדפים שלי</div>
        <div className="flex">
          <div className="ml-[6px]">
            <Select
              className="focus:outline-none"
              placeholder="סינון"
              name="profession"
              onChange={(e) => handleSelectCahnge({ value: e.target, name: 'profession' })}
              options={professionOptions}
              styles={customStyles}
            />
          </div>
          <div>
            <CheckboxGroupGray
              checks={categoryGroups}
              onChange={onChange}
              checkType={categoryType}
            />
          </div>
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
