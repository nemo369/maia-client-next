import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Button from '../../common/Button';
import NextStepPopUpAutoBiography from '../../popups/NextStepPopUpAutoBiography';
import Arrow from '../../svg/Arrow';

function NoInfo() {
  const { t } = useTranslation('common');
  const [defaultOpen, setDefaultOpen] = useState(false);

  return (
    <article className="h-full flex flex-col justify-center items-center text-center">
      {defaultOpen && <NextStepPopUpAutoBiography />}
      <h3 className="text-orange text-4xl font-bold">רגע, משהו חסר</h3>
      <p className="w-2/3 text-lg mt-8 mb-10">
        מאיה זיהתה שעדיין אין לה מספיק מידע אודותיך ולכן היא לא יכולה לזהות את הפרופיל התעסוקתי שלך
        ולהמליץ לך על מקצועות ומסלולי לימוד אידיאלים עבורך.
        <br />
        <strong>{t('אבל לא לדאוג, מספיק שתשלים את השלבים הבאים ואתה מסודר')}</strong>
      </p>
      <Button
        onClick={() => setDefaultOpen(true)}
        className="flex justify-between px-3 text-white items-center"
        type="button"
        status="main"
      >
        <span className="mx-auto px-4">{t('השלם נתונים')}</span>
        <span className="transform rotate-90">
          <Arrow />
        </span>
      </Button>
    </article>
  );
}

export default NoInfo;
