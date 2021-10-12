const CoefficientCheckbox = ({ handleChange, checked }) => (
  // console.log(handleChange, checked);
  <div className="signup-frist-checkbox-wrapper flex items-center">
    <label
      htmlFor="employment_coefficient"
      name="employment_coefficient"
      className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor"
    >
      <input
        className="checkbox ml-4"
        id="employment_coefficient"
        name="employment_coefficient"
        value="employment_coefficient"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      אני מאשר/ת למקדם/ת תעסוקה לצפות בפרטים שלי
    </label>
    <div className="relative smallpop w-4 h-4 border-solid rounded-full font-small bg-white border-gray border text-gray text-xs mr-4 hover:bg-gradient-2 hover:border-gradient-2 inline-block text-center hover:text-white">
      ?
      <div className="top-4 left-0 text-right text-black coeffitiontPop absolute w-96 bg-white  mr-96 rounded-lg text-[14px] px-6 py-4 overflow-auto z-40">
        <p>
          מקדם התעסוקה ילווה אותך בתהליכי קבלת ההחלטות לבניית מסלול אישי לקרייה שלך ללא עלות. אך אל
          דאגה! לא תהיה לנו גישה אל הפרטים שלכם ללא אישור מפורט ממכם!
        </p>
        <p className="text-green-500 mt-2">מה כן יראה מקדם התעסוקה?</p>
        <p>
          1. את פרטי ההרשמה שלך (דרכם הוא גם יצור קשר איתך) 2. את הדוחות המסכמים שעלו מתוך האבחון
          שתעבור 3. את אחוז ההתאמה שלך למשרות. 4. את המשרות אליהן הגשת קורות חיים. 5. את השלב שבו
          אתה נמצא בתוך המערכת
        </p>
      </div>
    </div>
  </div>
);
export default CoefficientCheckbox;
