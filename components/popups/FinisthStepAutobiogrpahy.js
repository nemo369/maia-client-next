import { useTranslation } from 'next-i18next';
import React from 'react';
import Button from '../common/Button';
import PopUp from '../common/PopUp';
import BigChecked from '../svg/BigChecked';
import StagesPopSide from '../common/StagesPopSide';
import StageResults from '../common/stage1results/StageResults';

const FinisthStepAutobiogrpahy = () => {
  // const [isDone, setIsDone] = useState(false);
  const { setFinisthVeritas } = props;
  return (
    <div>
      <PopUp defaultOpen>
        <PopupContent setFinisthVeritas={setFinisthVeritas} />
      </PopUp>
    </div>
  );
};
export default FinisthStepAutobiogrpahy;

const PopupContent = (props) => {
  const { setFinisthVeritas } = props;
  const { t } = useTranslation('common');
  const close = () => {
    setFinisthVeritas(false);
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 px-16 text-center">
      <BigChecked />
      <h2 className="text-center text-3xl font-bold mt-4">
        סיימת את השלב
        <br />
        ״מה עשיתי עד כה״
      </h2>
      <div className="my-6">שמסכם את המסלול חייך עד כה</div>
      <StagesPopSide
        trigger={<Button className="h-[50px] w-[240px]" status="secondary" name="לתוצאות השלב" />}
      >
        <StageResults />
      </StagesPopSide>
      <button className="h-[50px] w-[240px]" type="button" id="close-modal-hack" onClick={close}>
        {t('סגור')}
      </button>
    </div>
  );
};
