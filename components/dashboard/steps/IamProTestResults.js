import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Bars from '../../charts/Bars';
import ProfileDoughnut from '../../charts/ProfileDoughnut';
import Button from '../../common/Button';
import StageResults from '../../common/stage1results/StageResults';
import StagesPopSide from '../../common/StagesPopSide';
import NextStepPopUpVeritas from '../../popups/NextStepPopUpVeritas';
import ProfileSummary from '../ProfileSummary';

function IamProTestResults({ direction, testType }) {
  const { t } = useTranslation('common');
  const [defaultOpen, setDefaultOpen] = useState(false);

  return (
    <section className="h-full">
      <div className={'horizontal' === direction ? 'flex justify-between' : ''}>
        <div>
          <h2 className="text-[22px] text-gray">סיכום תוצאת שלב</h2>
          <h3 className="text-3xl font-bold text-[#6C6C6C] mb-6">מה מעניין אותי</h3>
        </div>
        {'horizontal' === direction && (
          <StagesPopSide
            trigger={
              <Button type="button" status="main" name="הצג דוח מסכם" className="h-12 px-4 " />
            }
          >
            <StageResults testType={testType} />
          </StagesPopSide>
        )}
      </div>
      <h4 className="mb-4 text-xl font-medium">המאפיינים העיקריים שלך:</h4>
      <ProfileSummary direction={direction} />
      {'vertical' !== direction ? (
        <div className="flex gap-x-3">
          <div className="flex-grow w-full">
            <Bars height={150} width={100} />
          </div>
          <ProfileDoughnut />
        </div>
      ) : (
        <Bars height={150} width={100} />
      )}
      {'vertical' === direction && (
        <div className="flex gap-x-1 mt-6">
          <StagesPopSide
            trigger={
              <Button type="button" status="secondary" name="תוצאות השלב" className="h-12 w-full" />
            }
          >
            <StageResults testType={testType} />
          </StagesPopSide>

          <Button
            type="secondary"
            status="main"
            name={t('לשלב הבא')}
            className="h-12 w-full start-NextStepPopUp-js"
            onClick={() => setDefaultOpen(true)}
          />
          {defaultOpen && <NextStepPopUpVeritas closePopup={setDefaultOpen} />}
        </div>
      )}
    </section>
  );
}

export default IamProTestResults;
