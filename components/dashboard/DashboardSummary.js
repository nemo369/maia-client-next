import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../src/context/state';
import Loader from '../common/Loader';
import { Case, Switch } from '../common/Switch';
import AutobiographyTestResults from './steps/AutobiographyTestResults';
import IamProTestResults from './steps/IamProTestResults';
// import IamProTest from './steps/IamProTest';
import NoInfo from './steps/NoInfo';
import NoInfoAtAll from './steps/NoInfoAtAll';
import VeritasTestResults from './steps/VeritasTestResults';
import MessageMedal from '../profile/register_form/MessageMedal';
// diretion in dasboard is vertical and in profiel page is horizontal
function DashboardSummary({ direction = 'vertical' }) {
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
      setstep('completionIAmpro');
      return;
    }
    // TODO: when this should appear
    setstep('dataIsMissing');
    if (vendor.completionAutobiography && vendor.completionIAmpro && vendor.completionVeritas) {
      setstep('completionVeritas');
    }
  }, [profile]);
  return (
    <div
      className={`dashboard__summary relative bg-white rounded-lg py-5 px-4 flex flex-col max-h-[722px] min-w-[500px] overflow-auto dashboard__summary--${direction}`}
    >
      <div className="absolute left-5 top-3 w-10 h-10">
        <MessageMedal />
      </div>
      <Switch test={step}>
        <Case value="loading">
          <div className="bg-white rounded-lg py-5 px-4 flex items-center justify-center h-full">
            <Loader loading />
          </div>
        </Case>
        <Case value="noTestYet">
          <NoInfoAtAll direction={direction} />
        </Case>
        <Case value="completionAutobiography">
          <AutobiographyTestResults testType="Autobiography" direction={direction} />
        </Case>
        <Case value="completionIAmpro">
          <IamProTestResults testType="IAmpro" direction={direction} />
        </Case>
        <Case value="completionVeritas">
          <VeritasTestResults testType="Veretas" direction={direction} />
        </Case>
        <Case value="dataIsMissing" direction={direction}>
          <NoInfo />
        </Case>
      </Switch>
    </div>
  );
}

export default DashboardSummary;
