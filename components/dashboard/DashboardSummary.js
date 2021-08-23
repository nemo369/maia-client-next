import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../src/context/state';
import Loader from '../common/Loader';
import { Case, Switch } from '../common/Switch';
import AutobiographyTestResults from './steps/AutobiographyTestResults';
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
    if (!profile.vendor_profile || !profile.vendor_profile.completionAutobiography) {
      setstep('noTestYet');
      return;
    }
    const { vendor_profile: vendor } = profile;
    if (vendor.completionAutobiography && !vendor.completionIAmpro) {
      setstep('completionAutobiography');
      return;
    }

    if (vendor.completionAutobiography && vendor.completionIAmpro && !vendor.completionVeritas) {
      setstep('completionVeritas');
      return;
    }
    if (vendor.completionAutobiography && vendor.completionIAmpro && vendor.completionVeritas) {
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
        <Case value="noTestYet">
          <NoInfo href={profile?.vendor_token} />
        </Case>
        <Case value="completionAutobiography">
          <AutobiographyTestResults />
        </Case>
        <Case value="completionIAmpro">
          <IamProTest />
        </Case>
      </Switch>
    </div>
  );
}

export default DashboardSummary;
