import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { AppContext, useAppContext } from '../../src/context/state';
import Stepper from '../common/Stepper';
import assistant from '../../public/images/assistant_dashboard.png';
import Info from './header/Info';

function DashboardHeader() {
  const { t } = useTranslation('common');
  const { user } = useAppContext(AppContext);
  const dis = `dis_${user.step}`; // dis_second
  return (
    <header className={`sw-full h-32 mb-16 p-7  flex items-center stepper-one stepper${dis}`}>
      <div className="ml-auto">
        <h1 className="text-4xl max-w-xs truncate text-white">
          <strong className="text-orange font-bold">
            {t('בוקר טוב')}
            <span>,</span>
          </strong>
          <span>
            &nbsp;
            {user.displayName}
          </span>
        </h1>
        <h2 className="text-white text-2xl">
          <span>{t('אתה')}</span>
          &nbsp;
          {t('בשלב')}
          &nbsp;
          {user.step}
          {t('במסע ההתקדמות שלך')}
          <Info />
        </h2>
      </div>
      <Stepper step={user.step || 'one'} />
      <Image src={assistant} alt="העוזרת של מאיה" width={242} height={216} />
    </header>
  );
}

export default DashboardHeader;
