import { useTranslation } from 'next-i18next';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../src/context/state';
import ProfileAPI from '../../src/services/profile.service';
import { FRONT_URL } from '../../src/utils/consts';
import Button from '../common/Button';
import Loader from '../common/Loader';
import PopUp from '../common/PopUp';
import PagePen from '../svg/PagePen';

const NextStepPopUpVeritas = (props) => (
  // const [isDone, setIsDone] = useState(false);
  <div>
    <PopUp defaultOpen>
      <PopupContent {...props} />
    </PopUp>
  </div>
);
export default NextStepPopUpVeritas;

const PopupContent = ({ closePopup }) => {
  const { t } = useTranslation('common');
  const [loading, setloading] = useState(false);
  const [veritasStatus, setveritasStatus] = useState('');
  const { profile, user } = useContext(AppContext);
  const { token } = user;

  const fetchVertiasStatus = async () => {
    const { data, status } = await ProfileAPI.veritasTestStatus(token);
    if (200 !== status) {
      closePopup(false);
      setloading(false);
      return;
    }
    console.log(data);
    setveritasStatus(data.veritasStatus);
    // Not Started
    if (data && 'x' !== data.veritasStatus) {
      setTimeout(fetchVertiasStatus, 7000);
    } else {
      setloading(false);
      window.location.href = `${FRONT_URL.replace('/api', '')}?testDone=veritas&refetchuser=true`;
    }
  };
  const onClick = async () => {
    if (!profile.veritas_test_url) {
      return;
    }
    setloading(true);
    setTimeout(fetchVertiasStatus, 4000);
  };
  return (
    <div className="flex relative">
      {loading && (
        <div className="absolute inset-auto w-full h-full flex justify-center items-center bg-white/70">
          {veritasStatus}
          <Loader loading={loading} />
        </div>
      )}
      <div className="flex flex-col items-center justify-center py-4 px-16 text-center">
        <PagePen />
        <h2 className="text-center text-3xl font-bold ">
          מעבר אל השלב
          <br />
          ״היכולות שלי + מה מתאים לי״
        </h2>
        <div className="my-4">
          {t('בשלב זה תבחן על דברים')}
          <br />
          שיעזרו לך לזהות את הכישורים
          <br />
          והמיומניות שלך
        </div>
        <a onClick={onClick} href={profile?.veritas_test_url} target="_blank" rel="noreferrer">
          <Button
            className="h-[50px] w-[240px]"
            status="secondary"
            name={t('התחל')}
            onClick={onClick}
          />
        </a>
        <button
          className="h-[50px] w-[240px]"
          type="button"
          id="close-modal-hack"
          onClick={() => closePopup(false)}
        >
          {t('סגור')}
        </button>
      </div>
      <div className="max-w-xs">
        <h4 className="text-blue font-bold text-2xl mb-2">לפני שתתחיל כדאי לדעת מספר דברים:</h4>
        <ul className="list-disc list-inside">
          <li>המבחנים המותאמת למאפיינים האישיים שלך</li>
          <li>כל מבחן אורך כ- 15 עד 30 דקות</li>
          <li>המבחנים מוקצבים בזמן</li>
          <li>בין כל מבחן יש הפסקה להתרעננות</li>
          <li>רצוי מאוד שהסביבה תהיה מבודדת, שקטה, ומוארת היטב.</li>
          <li>לפני תחילת הבחינה קראו היטב את ההוראות</li>
          <li>גלה מהם התפקידים שיכולים להתאים לך, באמצעות סדרת מבחני מיומנויות וכשרים</li>
        </ul>
        <p className="mt-2 text-opacity-50 text-black/50">
          <a href="tel:03-6450072">לכל תקלה טכנית – צרו קשר 03-6450072</a>
        </p>
      </div>
    </div>
  );
};
