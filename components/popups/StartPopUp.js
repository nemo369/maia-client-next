import { useTranslation } from 'next-i18next';
import React, { useContext } from 'react';
import { AppContext } from '../../src/context/state';
import { FRONT_URL } from '../../src/utils/consts';
import Button from '../common/Button';
import PopUp from '../common/PopUp';
import Logo from '../svg/Logo';

const StartPopUp = () => (
  <div>
    <PopUp defaultOpen>
      <PopupContent />
    </PopUp>
  </div>
);
export default StartPopUp;

const PopupContent = () => {
  const { t } = useTranslation('common');
  const { profile } = useContext(AppContext);
  const onClick = (e) => {
    e.preventDefault();
    window.location.href = `${profile.vendor_token}&redirect=${encodeURIComponent(
      `${FRONT_URL.replace('/api', '')}?refetchuser=true&testDone=autoBiography`
    )}`;
  };

  return (
    <div className="flex flex-col items-center justify-center px-16 text-center">
      <div className="mb-4">
        <Logo />
      </div>
      <h3 className="text-orange font-bold text-4xl">היי, כיף שבאתם!</h3>
      <p className="mt-2 mb-8 max-w-[530px]">
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
        <strong className="font-bold">{t('והכי חשוב, אתם מתקדמים בקצב שלכם!!')}</strong>
      </p>
      <a onClick={onClick} href={profile?.vendor_token}>
        <Button className="h-[50px] w-[240px]" status="gradient" name={t('אהבתי, בואו נתחיל')} />
      </a>
    </div>
  );
};
