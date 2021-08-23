import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { AppContext, useAppContext } from '../../src/context/state';
import Stepper from '../common/Stepper';
import assistant from '../../public/images/assistant_dashboard.png';
import Info from './header/Info';
import { getGreeting } from '../../src/utils/util';

function DashboardHeader() {
  const { t } = useTranslation('common');
  const { profile } = useAppContext(AppContext);
  const [step, setstep] = useState(1);
  useEffect(() => {
    if (!profile) {
      return;
    }
    const { vendor_profile: vendor } = profile;
    if (vendor.completionAutobiography && !vendor.completionIAmpro) {
      setstep(1);
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

  if (!profile) return null;

  return (
    <header className="sw-full h-32 mb-16 p-7  flex items-center stepper-one">
      <div className="ml-auto">
        <h1 className="text-4xl max-w-xs truncate text-white">
          <strong className="text-orange font-bold">
            {getGreeting()}
            <span>,</span>
          </strong>
          <span>
            &nbsp;
            {profile.first_name}
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
      <Stepper step={step || 'one'} />
      <Image src={assistant} alt="העוזרת של מאיה" width={242} height={216} />
    </header>
  );
}

export default DashboardHeader;
