import Button from '../common/Button';
import CategoryCahnger from '../dashboard/cateorgy/CategoryCahnger';
import ArrowOrange from '../svg/ArrowOrange';
import WalkMeStepTwo from '../svg/WalkMeStepTwo';

const onChangeCategoryList = () => {
  console.log('works');
};

const WMStepTwo = () => (
  <>
    <div className="flex">
      <div className="flex flex-col">
        <div className="relative right-[450px] top-[50px] transform rotate-[210deg] w-[110px]">
          <ArrowOrange />
        </div>
        <div className="text-[#FFFFFF] text-center">
          <div className="w-[80px] mx-auto border-[1px] border-white rounded-[13.5px] py-[1px] px-[12px]">
            2 מתוך 3
          </div>
          <div className="text-[24px]">היכרות עם מערכת מאיה</div>
          <div className="text-[28px] font-bold leading-[20px]">
            מקצועות ומסלולי לימודים
            <br />
            מותאמים עבורך
          </div>
          <div className="text-[18px] mt-[20px]">
            בסיום כל שלב, מאיה תשקלל את כל הנתונים שלך ותציג בפנייך
            <br />
            מקצועות ומסלולי לימוד שיכולים להתאים לך
          </div>
          <div>
            <Button name="הבא" type="button" status="main" className="next-btn" />
          </div>
          <div>
            <Button name="דלג" type="button" className="skip-btn" />
          </div>
        </div>
        <WalkMeStepTwo />
      </div>
      <div>
        <div className="flex justify-between mt-[180px] mx-[50px]">
          <div className="flex items-center text-white">
            <div className="text-[28px] font-bold ml-[10px]">מקצועות שיכולים להתאים לי </div>
            <div className="text-[22px] opacity-70">(נמצאו 12 משרות חדשות עבורך)</div>
            <div className="ml-[100px] relative smallpop w-4 h-4 border-solid border-white border-[1px] rounded-full font-small  text-white text-xs mr-4 hover:bg-[#3C91A0] hover:opacity-100 hover:text-white inline-block text-center">
              ?
            </div>
          </div>
          <CategoryCahnger onChangeCategoryList={onChangeCategoryList} isLabel={false} />
        </div>
        {/* <ul className="grid xl:grid-cols-3 grid-cols-2 gap-x-3 gap-y-4  min-h-[430px] mt-10">
          {categories.slice(0, 6).map((cat) => (
            <CategoryLi key={cat.id} cat={cat} type={type} />
          ))}
        </ul> */}
      </div>
    </div>
  </>
);

export default WMStepTwo;
