import { useTranslation } from 'next-i18next';
import React from 'react';
import Button from '../common/Button';
import PopUp from '../common/PopUp';
import BigChecked from '../svg/BigChecked';
import StagesPopSide from '../common/StagesPopSide';
import StageResults from '../common/stage1results/StageResults';

const FinisthStepVeritas = () => (
  // const [isDone, setIsDone] = useState(false);

  <div>
    <PopUp defaultOpen>
      <PopupContent />
    </PopUp>
  </div>
);
export default FinisthStepVeritas;

const PopupContent = () => {
  const { t } = useTranslation('common');
  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 px-16 text-center">
      <BigChecked />
      <h2 className="text-center text-3xl font-bold mt-4">
        סיימת את השלב האחרון
        <br />
        ״היכולות שלי״ + ״מה מתאים לי״
      </h2>
      <div className="my-6">
        במסך הראשי מאיה תציג לך משרות
        <br />
        שמתאימות לך מסודרות לפי אחוזי התאמה.
        <br />
        זה הזמן להגיש מועמדות למשרות שמעניינות אותך
      </div>
      <StagesPopSide
        trigger={<Button className="h-[50px] w-[240px]" status="secondary" name="לתוצאות השלב" />}
      >
        <StageResults />
      </StagesPopSide>
      <button className="h-[50px] w-[240px]" type="button" onClick={close}>
        {t('סגור')}
      </button>
    </div>
  );
};
