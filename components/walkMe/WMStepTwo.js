import { useTranslation } from 'next-i18next';
import Button from '../common/Button';
import CategoryCahnger from '../dashboard/cateorgy/CategoryCahnger';
import ArrowOrange from '../svg/ArrowOrange';
import WalkMeStepTwo from '../svg/WalkMeStepTwo';
import CategoryList from '../dashboard/cateorgy/CategoryList';

const catList = [
  {
    full_data: {},
    title: 'מגייסת פקיד/ה טכני/ת לאתר ביטחוני באילת!',
    id: 1,
    percentage: 82,
    description: 'פקיד/ה טכני/ת לאתר ביטחוני באילת! התפקיד כולל: קבלת קריאות לקוח...',
  },
  {
    full_data: {},
    title: 'אנליסט BI',
    id: 2,
    percentage: 85,
    description:
      'אלקטרה מחפשת BI ANALYST מנוסים לתפקיד הכולל ניהול והובלה של פרויקטי BI מקצה לקצה. החל משלב איתור צרכי הלקוח מול הנהלה בכירה ומקבלי החלטות, אפיון עסקי והגדרת תפקיד.',
  },
  {
    full_data: {},
    title: 'דרוש Senior Data analyst',
    id: 3,
    percentage: 82,
    description:
      'לאגף ארגון ושיטות בהראל, האחראי על תהליכים אסטרטגים חוצי ארגון, דרוש.ה אנליסט.ית BI. ביומיום שלך בתפקיד: פיתוח, ניתוח ותפעול שוטף של בקרות ומסדי נתונים תפעוליים באמצעות כלים מתקדמים',
  },
  {
    full_data: {},
    title: 'הנדסאי אדריכלות ועיצוב פנים',
    id: 4,
    percentage: 74,
    description:
      'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק …',
  },
  {
    full_data: {},
    title: 'קבוצת יעל מגייסת אנליסט/ית שיווקי',
    id: 5,
    percentage: 70,
    description:
      'חברתנו המתמחה במתן שירותים אנליטיים למגזר הפיננסי דרוש/ה Marketing data analyst התפקיד כולל: שליפת נתוני שאילתות מידע מורכבות מבסיסי נתונים שונים ותחקורם',
  },
  {
    full_data: {},
    title: 'הנדסאי אדריכלות ועיצוב פנים',
    id: 6,
    percentage: 62,
    description: 'דרוש הנדסאי לטובת חברת אדריכלות ועיצוב פנים במרכז הארץ...',
  },
];
function WMStepTwo({ nextStep, closeModal }) {
  const { t } = useTranslation('common');
  return (
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
          <Button name="הבא" type="button" status="main" className="next-btn" onClick={nextStep} />
          <Button name={t('דלג')} type="button" className="skip-btn" onClick={closeModal} />
        </div>
        <WalkMeStepTwo />
      </div>
      <div className="max-w-[1200px]">
        <div className="flex justify-between mt-[180px]">
          <div className="flex items-center text-white">
            <div className="text-[28px] font-bold ml-[10px]">מקצועות שיכולים להתאים לי </div>
            <div className="text-[22px] opacity-70">(נמצאו 12 מקצועות חדשים עבורך)</div>
            <div className="ml-[100px] relative smallpop w-4 h-4 border-solid border-white border-[1px] rounded-full font-small  text-white text-xs mr-4 hover:bg-[#3C91A0] hover:opacity-100 hover:text-white inline-block text-center">
              ?
            </div>
          </div>
          <CategoryCahnger onChangeCategoryList={() => {}} isLabel={false} />
        </div>
        <div>
          <CategoryList disabled="true" categories={catList} type="type" />
        </div>
      </div>
    </div>
  );
}
export default WMStepTwo;
