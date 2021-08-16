import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../src/context/state';
import Loader from '../common/Loader';
import { Case, Switch } from '../common/Switch';
import IamProTest from './steps/IamProTest';
import NoInfo from './steps/NoInfo';

function DashboardSummary() {
  const { profile } = useContext(AppContext);
  const [step, setstep] = useState('loading');
  useEffect(() => {
    if (!profile) {
      setstep('loading');
      return;
    }
    if (!profile.completionAutobiography) {
      setstep('completionAutobiography');
      return;
    }
    if (profile.completionAutobiography && !profile.completionIAmpro) {
      setstep('completionIAmpro');
      return;
    }
    if (profile.completionAutobiography && profile.completionIAmpro && !profile.completionVeritas) {
      setstep('completionVeritas');
      return;
    }
    if (profile.completionAutobiography && profile.completionIAmpro && profile.completionVeritas) {
      setstep('completed');
    }
  }, [profile]);
  return (
    <div className="dashboard__summary bg-white rounded-lg py-5 px-4 flex flex-col max-h-[722px] overflow-auto">
      <Switch test={step}>
        <Case value="loading">
          <div className="bg-white rounded-lg py-5 px-4 flex items-center justify-center h-full">
            <Loader loading />
          </div>
        </Case>
        <Case value="completionAutobiography">
          <NoInfo href={profile?.vendor_token} />
        </Case>
        <Case value="completionIAmpro">
          <IamProTest />
        </Case>
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
