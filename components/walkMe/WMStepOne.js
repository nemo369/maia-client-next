import Button from '../common/Button';
import WalkMeStepOne from '../svg/WalkMeStepOne';
import ArrowOrange from '../svg/ArrowOrange';
import BarStepper from '../svg/BarStepper';
import WalkMeStepper from './WalkMeStepper';

const WMStepOne = () => (
  <>
    <div className="mr-[130px]">
      <BarStepper />
      <div>
        <div className="relative bottom-[150px] right-[70px]">
          <div className="flex">
            <div className="text-[30px] text-orange ml-2 font-bold">בוקר טוב,</div>
            <div className="text-[30px] text-white">ישראל ישראלי</div>
          </div>
          <div className="flex items-center">
            <div className="text-[25px] text-white">את/ה בשלב 2 במסע ההתקדמות שלך</div>
            <div className="relative smallpop w-4 h-4 border-solid border-white border-[1px] rounded-full font-small  text-white text-xs mr-4 hover:bg-[#3C91A0] hover:opacity-100 hover:text-white inline-block text-center">
              ?
            </div>
          </div>
        </div>
      </div>
      <WalkMeStepper step="two" />
    </div>
    <div className="flex justify-center relative bottom-[100px]">
      <div className="ml-[30px]">
        <ArrowOrange />
      </div>
      <div className="text-[#FFFFFF] text-center">
        <div className="w-[80px] mx-auto border-[1px] border-white rounded-[13.5px] py-[1px] px-[12px]">
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
        <div>
          <Button name="הבא" type="button" status="main" className="next-btn" />
        </div>
        <div>
          <Button name="דלג" type="button" className="skip-btn" />
        </div>
      </div>
      <WalkMeStepOne />
    </div>
  </>
);

export default WMStepOne;
