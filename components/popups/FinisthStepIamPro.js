import { useTranslation } from 'next-i18next';
import React from 'react';
import Button from '../common/Button';
import PopUp from '../common/PopUp';
import BigChecked from '../svg/BigChecked';
import StagesPopSide from '../common/StagesPopSide';
import StageResults from '../common/stage1results/StageResults';

const FinisthStepIamPro = (props) => (
  <div>
    <PopUp defaultOpen>
      <PopupContent {...props} />
    </PopUp>
  </div>
);
export default FinisthStepIamPro;

const PopupContent = ({ close }) => {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col items-center justify-center py-4 px-16 text-center">
      <BigChecked />
      <h2 className="text-center text-3xl font-bold mt-4">
        סיימת את השלב
        <br />
        ״מה מעניין אותי״
      </h2>
      <div className="my-6">
        שלב זה משקלל את הנתונים משני
        <br />
        השלבים שסיימת: ״מה עשיתי עד כה״
        <br />
        ו-״מה מעניין אותי״
      </div>
      <StagesPopSide
        trigger={
          <Button
            className="h-[50px] w-[240px]"
            status="secondary"
            name="לתוצאות השלב"
            // onClick={() => close(false)}
          />
        }
      >
        <StageResults testType="IAmpro" />
      </StagesPopSide>
      <button
        className="h-[50px] w-[240px]"
        type="button"
        id="close-modal-hack"
        onClick={() => close(false)}
      >
        {t('סגור')}
      </button>
    </div>
  );
};
