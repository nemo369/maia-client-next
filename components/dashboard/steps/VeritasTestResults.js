import { useState } from 'react';
import Bars from '../../charts/Bars';
import Button from '../../common/Button';
import StageResults from '../../common/stage1results/StageResults';
import StagesPopSide from '../../common/StagesPopSide';
import NextStepPopUp from '../../popups/NextStepPopUp';
import ProfileSummary from '../ProfileSummary';

function VeritasTestResults({ direction }) {
  const [defaultOpen, setDefaultOpen] = useState(false);

  return (
    <section className="h-full">
      <h2 className="text-[22px] text-gray">סיכום תוצאת שלב</h2>
      <h3 className="text-3xl font-bold text-[#6C6C6C] mb-6 leading-none">
        היכולות שלי
        <br />
        ומה מתאים לי
      </h3>
      <h4 className="mb-4 text-xl font-bold">המאפיינים העיקריים שלך:</h4>
      <ProfileSummary direction={direction} />
      <Bars height={150} width={100} />
      <div className="flex gap-x-1 mt-6">
        <StagesPopSide
          trigger={
            <Button type="button" status="main" name="הצג דוח מסכם" className="h-12 w-full" />
          }
        >
          <StageResults testType="Veretas" />
        </StagesPopSide>
        {defaultOpen && <NextStepPopUp closePopup={setDefaultOpen} />}
      </div>
    </section>
  );
}

export default VeritasTestResults;
