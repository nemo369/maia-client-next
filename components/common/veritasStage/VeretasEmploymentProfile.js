/* eslint-disable prettier/prettier */
/* eslint-disable no-multi-spaces */
const VeretasEmploymentProfile = () => {

  const boldEmploymentProfileDummyData = 'הפרופיל התעסוקיתי שלך הוא יזמי-מנהלי-חברתי:';
  const employmentProfileDummyData = 'אתה בעל כושר מנהיגות, חשוב לך להשפיע, להימנות עם מקבלי ההחלטות ולקדם נושאים שנמצאים תחת אחריותך. אתה נמשך לעבודה עם נתונים, שואף לסדר ומכוון לפעול בסביבה מוגדרת ומובנית . אתה בעל עניין רב בזולת, שואב סיפוק מיכולתך להיות קשוב לצרכיהם של אנשים אחרים ולסייע להם להשיג את מטרותיהם.';
  return (
    <div className="text-center">
      <p className="inline-block font-bold text-xl leading-6">{boldEmploymentProfileDummyData}</p>
      <span> </span>
      <p className="inline text-xl leading-6">{employmentProfileDummyData}</p>
    </div>
  );
};
export default VeretasEmploymentProfile;
