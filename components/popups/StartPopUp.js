import React from 'react';
import Button from '../common/Button';
import PopUp from '../common/PopUp';
import Logo from '../svg/Logo';

const StartPopUp = ({ nextStep }) => (
  <div>
    <PopUp defaultOpen>
      <PopupContent nextStep={nextStep} />
    </PopUp>
  </div>
);
export default StartPopUp;

const PopupContent = ({ nextStep }) => (
  <div className="flex flex-col items-center justify-center px-16 text-center">
    <div className="mb-4">
      <Logo />
    </div>
    <h3 className="text-orange font-bold text-4xl">היי, כיף שבאתם!</h3>
    <p className="mt-2 mb-8 max-w-[550px] leading-5">
      אתם עומדים להתחיל תהליך אבחון שיעזור לכם בקבלת
      <br />
      ההחלטות הגדולות של הקריירה - כמו למשל מה ללמוד, במה
      <br />
      לעבוד ואיך להגיע לשם.
      <br />
      <br />
      ככל שתתקדמו בתהליך ותעברו יותר שלבים, מאיה - היועצת
      <br />
      הדיגיטלית שלכם - תכיר אתכם טוב יותר ותציג בפניכם
      <br />
      תוצאות מדוייקות ומותאמות יותר עבורכם.
      <br />
      <strong className="font-bold">והכי חשוב, אתם מתקדמים בקצב שלכם!!</strong>
    </p>
    <Button
      onClick={nextStep}
      className="h-[45px] w-[210px]"
      status="gradient"
      name={t('אהבתי, בואו נתחיל')}
    />
  </div>
);
