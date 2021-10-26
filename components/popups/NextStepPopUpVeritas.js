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
    setveritasStatus(data.veritasStatus);
    // Not Started
    if (data && 'Done' !== data.veritasStatus) {
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
          <li>
            זה ייקח כ 45 דקות, בבקשה לעשות מאמץ לבצע את כל האתגרים ברצף, אבל אם קשה – אפשר לעשות
            הפסקות בין האתגרים.
          </li>
          <li>
            חשוב לנו לתת לך את האפשרויות המתאימות ביותר, אז בבקשה לשים לב להנחיות ולפתור את האתגרים
            ברצינות.
          </li>
          <li>לתשומת ליבך - לא ניתן לבצע את האתגרים פעם נוספת.</li>
        </ul>
        <p> מוכנים? בואו נתחיל. כל ההסברים בפנים...</p>
        <p className="mt-2 text-opacity-50 text-black/50">
          <a href="tel:03-6450072"> לתמיכה / התאמת נגישות – דברו איתנו: 03-6450072</a>
        </p>
      </div>
    </div>
  );
};
