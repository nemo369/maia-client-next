import { useTranslation } from 'next-i18next';

function IamProTest() {
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

export default IamProTest;
