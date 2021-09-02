import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Bars from '../../charts/Bars';
import Button from '../../common/Button';
import StageResults from '../../common/stage1results/StageResults';
import StagesPopSide from '../../common/StagesPopSide';
import NextStepPopUp from '../../popups/NextStepPopUp';
import ProfileSummary from '../ProfileSummary';

function AutobiographyTestResults() {
  const { t } = useTranslation('common');
  const [defaultOpen, setDefaultOpen] = useState(false);

  return (
    <section className="h-full">
      <h2 className="text-[22px] text-gray">סיכום תוצאת שלב</h2>
      <h3 className="text-3xl font-bold text-[#6C6C6C] mb-6">מה עשיתי עד כה</h3>
      <h4 className="mb-4 text-xl font-bold">המאפיינים העיקריים שלך</h4>
      <ProfileSummary />
      <Bars />
      <div className="flex gap-x-1 mt-6">
        <StagesPopSide
          trigger={
            <Button type="button" status="secondary" name="תוצאות השלב" className="h-12 w-full" />
          }
        >
          <StageResults />
        </StagesPopSide>

        <Button
          type="secondary"
          status="main"
          name={t('לשלב הבא')}
          className="h-12 w-full"
          onClick={() => setDefaultOpen(true)}
        />
        {defaultOpen && <NextStepPopUp />}
      </div>
    </section>
  );
}

export default AutobiographyTestResults;
