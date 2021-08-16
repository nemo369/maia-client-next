import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import { AppContext } from '../../src/context/state';
import Button from '../common/Button';
import Loader from '../common/Loader';
import PopSide from '../common/PopSide';
import PopUp from '../common/PopUp';
import { Case, Switch } from '../common/Switch';
import NoInfo from './steps/NoInfo';

function ReportSidePop() {
  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
  };
  return (
    <div>
      <button type="button" onClick={close}>
        x
      </button>
      <h4 className="text-black font-bold text-2xl mt-10">דוח תוצאות</h4>
      <h4 className="text-black text-2xl mt-10">״מה עשיתי עד כה״</h4>
    </div>
  );
}
function NextStagePopUp() {
  const { t } = useTranslation('common');
  const close = () => {
    if ('undefined' === typeof window) return;

    const el = document.querySelector('#close-modal-hack');
    el?.click();
  };
  return (
    <div className="flex">
      <div>
        <span>NOTE SVG</span>
        <h2>מעבר אל השלב ״היכולות שלי + מה מתאים לי״</h2>
        <p>בשלב זה תבחן על דברים שיעזרו לך לזהות את הכישורים והמיומניות שלך</p>
        <a href="http://#" target="_blank" rel="noopener noreferrer">
          {t('התחל')}
        </a>
        <button type="button" onClick={close}>
          {t('סגור')}
        </button>
      </div>
      <div>
        <h4>לפני שתתחיל כדאי לדעת מספר דברים:</h4>
        <ul>
          <li>המבחנים המותאמת למאפיינים האישיים שלך</li>
          <li>כל מבחן אורך כ- 15 עד 30 דקות</li>
          <li>המבחנים מוקצבים בזמן</li>
          <li>בין כל מבחן יש הפסקה להתרעננות</li>
          <li>רצוי מאוד שהסביבה תהיה מבודדת, שקטה, ומוארת היטב.</li>
          <li>לפני תחילת הבחינה קראו היטב את ההוראות</li>
          <li>גלה מהם התפקידים שיכולים להתאים לך, באמצעות סדרת מבחני מיומנויות וכשרים</li>
        </ul>
        <p>
          <a href="tel:03-6450072">לכל תקלה טכנית – צרו קשר 03-6450072</a>
        </p>
      </div>
    </div>
  );
}

function DashboardSummary({ step }) {
  const { profile } = useContext(AppContext);
  const { t } = useTranslation('common');
  if (!profile) {
    return (
      <div className="bg-white rounded-lg py-5 px-4 flex items-center justify-center h-full">
        <Loader loading />
      </div>
    );
  }
  const { vendor_profile } = profile;

  return (
    <div className="dashboard__summary bg-white rounded-lg py-5 px-4 flex flex-col max-h-[722px] overflow-auto">
      <NoInfo />
      <Switch test={vendor_profile}>
        <Case value="null" />
      </Switch>

      {/* <div className="flex gap-x-1 mt-6">
        <PopSide
          trigger={
            <Button
              type="button"
              status="secondary"
              name={t('תוצאות השלב')}
              className="h-12 w-full"
            />
          }
        >
          <ReportSidePop />
        </PopSide>
        <PopUp
          trigger={
            <Button type="secondary" status="main" name={t('לשלב הבא')} className="h-12 w-full" />
          }
        >
          <NextStagePopUp />
        </PopUp>
      </div> */}
    </div>
  );
}

export default DashboardSummary;
