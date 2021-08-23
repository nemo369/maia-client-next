import React from 'react';
import Button from '../common/Button';

export default function ProfileConclusion({ stage }) {
  let stageLabel = '';
  let stageContent = '';
  switch (stage) {
    case '1':
      stageLabel += 'מה עשיתי עד כה';
      stageContent += 'מסתמן כי הפרופיל התעסוקתי שלך הוא *יזמי-מנהלי-חברתי: אוב לך להשפיע';
      break;
    case '2':
      stageLabel += 'היכולות שלי + מה מתאים לי';
      stageContent += 'מסתמן כי הפרופיל התעסוקתי שלך הוא *יזמי-מנהלי-חברתי: את חשוב לך להשפיע';
      break;
    case '3':
      stageLabel += 'במה אני טוב + מה מתאים לי';
      stageContent += 'מסתמן כי הפרופיל התעסוקתי שלך הוא *יזמי-מנהלי-חברתיחשוב לך להשפיע';
      break;
    default:
  }
  return (
    <div className="w-[850px] max-h-[400px] bg-white rounded-[20px] py-[25px] px-[21px]">
      <div className="flex justify-between">
        <div>
          <h2 className="text-black opacity-50 text-[26px]">סיכום תוצאות שלב </h2>
          <h3 className="text-gray text-[29px] font-black mt-[-12px]">{stageLabel}</h3>
        </div>
        <div className="flex">
          {'3' !== stage && (
            <Button
              className="next-step-btn"
              type="button"
              status="secondary"
              name="לתוצאות השלב"
            />
          )}
          <Button
            className="conclusion-btn"
            type="button"
            status="main"
            name={'3' === stage ? 'הצג דוח מסכם' : 'לשלב הבא'}
          />
        </div>
      </div>
      <div className="mt-[25px]">
        <div className="text-black text-[18px] font-bold">תחומי העניין העיקריים שלי</div>
        <div className="text-black opacity-70 text-[18px]">{stageContent}</div>
      </div>
    </div>
  );
}
