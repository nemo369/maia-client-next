/* eslint-disable react/jsx-one-expression-per-line */
import { useTranslation } from 'next-i18next';
import { useContext, useState } from 'react';
import { AppContext } from '../../../src/context/state';
import { FRONT_URL } from '../../../src/utils/consts';
import Button from '../../common/Button';
import SomethingIsMissingPopup from '../../popups/SomethingIsMissingPopup';
import Arrow from '../../svg/Arrow';

function NoInfoAtAll() {
  const { t } = useTranslation('common');
  const [defaultOpen] = useState(true);
  const { profile } = useContext(AppContext);
  const onClick = (e) => {
    e.preventDefault();
    window.location.href = `${profile.vendor_token}&redirect=${encodeURIComponent(
      `${FRONT_URL.replace('/api', '')}?refetchuser=true&testDone=autoBiography`
    )}`;
  };

  return (
    <article className="h-full flex flex-col justify-center items-center text-center">
      {defaultOpen && <SomethingIsMissingPopup />}
      <h3 className="text-orange text-4xl font-bold">רגע, משהו חסר</h3>
      <p className="w-2/3 text-lg mt-8 mb-10">
        מאיה זיהתה שעדיין אין לה מספיק מידע אודותיך ולכן היא לא יכולה לזהות את הפרופיל התעסוקתי שלך
        ולהמליץ לך על מקצועות ומסלולי לימוד אידיאלים עבורך.
        <br />
        <strong>{t('אבל לא לדאוג, מספיק שתשלים את השלבים הבאים ואתה מסודר')} :)</strong>
      </p>
      <a onClick={onClick} href={profile?.vendor_token} className="mb-12">
        <Button
          className="flex justify-between px-3 text-white items-center"
          type="button"
          status="main"
        >
          <span className="mx-auto px-4">{t('השלם נתונים')}</span>
          <span className="transform rotate-90">
            <Arrow />
          </span>
        </Button>
      </a>
    </article>
  );
}

export default NoInfoAtAll;
