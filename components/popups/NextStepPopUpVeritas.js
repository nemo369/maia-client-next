import { useTranslation } from 'next-i18next';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import PopUp from '../common/PopUp';
import PagePen from '../svg/PagePen';
import Button from '../common/Button';
import { AppContext } from '../../src/context/state';

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
  const router = useRouter();

  const { profile } = useContext(AppContext);
  const onClick = (e) => {
    e.preventDefault();
    console.log(profile);

    const windowOpen = window.open(profile.veritas_test_url);
    // router.push({ pathname: '/', query: { refetchuser: 'true', testDone: 'iampro' } });
  };
  return (
    <div className="flex">
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
        <a onClick={onClick} href={profile?.veritas_test_url}>
          <Button
            className="h-[50px] w-[240px]"
            status="secondary"
            name={t('התחל')}
            onClick={() => closePopup(false)}
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
