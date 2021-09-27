import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import assistant from '../../public/images/assistant_dashboard.svg';
import { AppContext, useAppContext } from '../../src/context/state';
import { getGreeting } from '../../src/utils/util';
import WalkMeStepper from '../walkMe/WalkMeStepper';
import Info from './header/Info';

function DashboardHeader() {
  const { t } = useTranslation('common');
  const { profile } = useAppContext(AppContext);
  const [step, setstep] = useState(1);
  useEffect(() => {
    if (!profile || !profile.vendor_profile) {
      return;
    }
    const { vendor_profile: vendor } = profile;
    if (vendor.completionAutobiography && !vendor.completionIAmpro) {
      setstep(2);
      return;
    }

    if (vendor.completionAutobiography && vendor.completionIAmpro && !vendor.completionVeritas) {
      setstep(3);
      return;
    }
    if (vendor.completionAutobiography && vendor.completionIAmpro && vendor.completionVeritas) {
      setstep(4);
    }
  }, [profile]);
  if (4 === step) {
    return (
      <header className="w-full h-32 mb-4 lg:px-7 px-1 lg:mt-9 mt-2 flex items-center stepper-one rounded-lg">
        <div className="m-auto text-center text-white">
          <h1 className="font-bold text-3xl">
            <strong className="text-orange">כל הכבוד!</strong>
            &nbsp; השלמת את סולם ההתקדמות שלך
          </h1>
          <h2 className="text-xl">כל המקצועות ומסלולי הלימודים מותאמים בצורה אידיאלית עבורך :)</h2>
        </div>
        <Image src={assistant} alt="העוזרת של מאיה" width={242} height={197} />
      </header>
    );
  }
  return (
    <header className="w-full h-32 mb-4 lg:px-7 px-1 lg:mt-9 mt-2 flex items-center stepper-one rounded-lg">
      <div className="ml-auto">
        <h1 className="text-4xl max-w-xs truncate text-white">
          <strong className="text-orange font-bold">
            {getGreeting()}
            <span>,</span>
          </strong>
          <span>
            &nbsp;
            {profile?.first_name}
          </span>
        </h1>
        <h2 className="text-white text-2xl">
          <span>{t('אתה')}</span>
          &nbsp;
          {t('בשלב')}
          &nbsp;
          {step}
          {3 === step ? ' ואחרון' : ''}
          &nbsp;
          {t('במסע ההתקדמות שלך')}
          <Info />
        </h2>
      </div>
      <WalkMeStepper step={step} />
      <Image src={assistant} alt="העוזרת של מאיה" width={242} height={197} />
    </header>
  );
}

export default DashboardHeader;
