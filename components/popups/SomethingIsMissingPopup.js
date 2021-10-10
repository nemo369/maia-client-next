import { useTranslation } from 'next-i18next';
import React, { useContext } from 'react';
import { AppContext } from '../../src/context/state';
import { FRONT_URL } from '../../src/utils/consts';
import Button from '../common/Button';
import PopUp from '../common/PopUp';
import Logo from '../svg/Logo';

const SomethingIsMissingPopup = () => (
  // const [isDone, setIsDone] = useState(false);

  <div>
    <PopUp defaultOpen>
      <PopupContent />
    </PopUp>
  </div>
);
export default SomethingIsMissingPopup;

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
      <h3 className="text-orange font-bold text-4xl">רגע, משהו חסר</h3>
      <p className="mt-2 mb-8 max-w-[530px]">
        מאיה זיהתה שעדיין אין לה מספיק מידע אודותיך
        <br />
        ולכן היא לא יכולה לזהות את הפרופיל התעסוקתי שלך
        <br />
        ולהמליץ לך על משרות ועבודות אידאליות עבורך.
        <br />
        <br />
        <strong className="font-bold">
          {t('אבל לא לדאוג, מספיק שתשלים את השלבים')}
          <br />
          {t('הבאים ואתה מסודר')}
          :)
        </strong>
      </p>
      <a onClick={onClick} href={profile?.vendor_token} className="">
        <Button className="h-[50px] w-[240px]" status="gradient" name={t('קדימה')} />
      </a>
    </div>
  );
};
