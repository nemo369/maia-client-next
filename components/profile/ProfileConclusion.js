import React from 'react';
import Button from '../common/Button';

export default function ProfileConclusion({ stage }) {
  let stageContent = '';
  switch (stage.id) {
    case '1':
      stageContent += '';
      break;
    case '2':
      stageContent += '';
    case '3':
      stageContent += '';
      break;
    default:
      break;
  }
  return (
    <div className="w-[850px] max-h-[400px] bg-white rounded-[20px] py-[25px] px-[21px]">
      <div className="flex justify-between">
        <div>
          <div className="text-black opacity-50 text-[26px]">סיכום תוצאות שלב </div>
          <div className="text-gray text-[29px] font-black mt-[-12px]">
            היכולות שלי + מה מתאים לי
          </div>
        </div>
        <div>
          <Button className="conclusion-btn" type="button" status="main" name="הצג דוח מסכם" />
        </div>
      </div>
      <div className="mt-[25px]">
        <div className="text-black text-[18px] font-bold">תחומי העניין העיקריים שלי</div>
        <div className="text-black opacity-70 text-[18px]">
          מסתמן כי הפרופיל התעסוקתי שלך הוא *יזמי-מנהלי-חברתי: אתה בעל כושר מנהיגות, חשוב לך להשפיע,
          להימנות עם מקבלי ההחלטות ולקדם נושאים שתחת אחריותך , נמשך לעבודה עם נתונים, שואף לסדר
          ומכוון לפעול בסביבה מוגדרת ומובנית ו בעל עניין רב בזולת, שואב סיפוק מיכולתך להיות קשוב
          לצרכיהם של אנשים אחרים ולסייע להם להשיג את מטרותיהם.
        </div>
      </div>
    </div>
  );
}
