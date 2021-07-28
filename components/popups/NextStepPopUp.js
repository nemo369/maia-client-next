import { useTranslation } from 'next-i18next';
import React from 'react';
import PopUp from '../common/PopUp';
import PagePen from '../svg/PagePen';
import Button from '../common/Button';

const NextStepPopUp = () => (
  // const [isDone, setIsDone] = useState(false);

  <div>
    <PopUp defaultOpen>
      <PopupContent />
    </PopUp>
  </div>
);
export default NextStepPopUp;

const PopupContent = () => {
  const { t } = useTranslation('common');
  return (
    <div className="flex flex-col items-center justify-center py-16 px-16">
      <PagePen />
      <h2 className="text-center text-3xl font-bold ">
        מעבר אל השלב
        <br />
        ״מה מעניין אותי״
      </h2>
      <div>
        {t('בשלב זה תועבר אל שאלון הקריירה')}
        <br />
        שיסייע לך לזהות את תחומי העניין
        <br />
        התעסוקתיים שלך
      </div>
      <Button className="h-[50px] w-[240px]" status="secondary" name="התחל" />
      <Button className="h-[50px] w-[240px]" status="secondary" name="סגור" />
    </div>
  );
};
