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
  const [step, setstep] = useState(2);
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
      setstep(2);
      return;
    }
    if (vendor.completionAutobiography && vendor.completionIAmpro && vendor.completionVeritas) {
      setstep(3);
    }
  }, [profile]);
  return (
    <header className="sw-full h-32 mb-4 p-7 flex items-center stepper-one">
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
