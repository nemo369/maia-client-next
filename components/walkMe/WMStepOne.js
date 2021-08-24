import Button from '../common/Button';
import DashboardHeader from '../dashboard/DashboardHeader';
import ArrowOrange from '../svg/ArrowOrange';
import WalkMeStepOne from '../svg/WalkMeStepOne';

const WMStepOne = ({ closeModal, nextStep }) => (
  <section className="w-[90%] ml-auto py-9 h-full mr-[180px]">
    <DashboardHeader />
    <div className="flex justify-center">
      <div className="ml-[30px]">
        <ArrowOrange />
      </div>
      <div className="text-[#FFFFFF] text-center">
        <div className="w-[80px] mx-auto border-[1px] border-white rounded-[14px] py-[1px] px-[12px]">
          1 מתוך 3
        </div>
        <div className="text-[24px]">היכרות עם מערכת מאיה</div>
        <div className="text-[28px] font-bold leading-[15px]">סולם התקדמות השלבים שלך</div>
        <div className="text-[18px] mt-[20px]">
          בראש המסך מופיע סרגל ההתקדמות שלך שיציג לך באיזה
          <br />
          שלב אתה נמצא ואלו שלבים עוד לפניך. ככל שתעברו יותר
          <br />
          שלבים, מאיה תציג בפניכם תוצאות מדויקות יותר
          <br />
          שמותאמות לכם
        </div>
        <Button name="הבא" type="button" status="main" className="next-btn" onClick={nextStep} />
        <Button name="דלג" type="button" className="skip-btn" onClick={closeModal} />
      </div>
      <WalkMeStepOne />
    </div>
  </section>
);

export default WMStepOne;
