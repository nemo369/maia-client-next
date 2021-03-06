import { useTranslation } from 'next-i18next';
import Button from '../common/Button';
import ArrowOrange from '../svg/ArrowOrange';
import WalkMeStepOne from '../svg/WalkMeStepOne';
import DashboardSummary from '../dashboard/DashboardSummary';

const WMStepThree = ({ closeModal }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className="flex">
        <div className="relative ml-[100px] mt-[10vh] w-[558px] h-[722px]">
          <DashboardSummary />
        </div>
        <div className="flex flex-col">
          <div className="relative scale-x-[-1] scale-y-[1] top-[60px] transform rotate-[150deg] w-[110px]">
            <ArrowOrange />
          </div>
          <div className="text-[#FFFFFF] text-center mt-[100px]">
            <div className="text-[24px]">היכרות עם מערכת מאיה</div>
            <div className="text-[28px] font-bold leading-[20px]">
              צפייה בסיכום תוצאות האבחון מכל שלב
            </div>
            <div className="text-[18px] mt-[20px]">
              {t('בכל שלב שתעבור מאיה תציג את סיכום תוצאות הביניים')}
              .
              <br />
              {t('בשלב האחרון תגיע אל דף סיכום והמלצות אישיות שירכז את')}
              <br />
              כל התובנות וההתאמות בהתבסס על שיקלול כל הממצאים.
            </div>
            <div>
              <Button
                name="סגור"
                type="button"
                status="main"
                className="next-btn"
                onClick={closeModal}
              />
            </div>
          </div>
          <WalkMeStepOne />
        </div>
      </div>
    </>
  );
};

export default WMStepThree;
