const CoefficientCheckbox = (props) => {
  const { handleChange } = props;

  return (
    <div className="my-4">
      <label
        htmlFor="employment_coefficient"
        name="employment_coefficient"
        className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor"
      >
        <input
          className="checkbox ml-4"
          id="employment_coefficient"
          name="employment_coefficient"
          type="checkbox"
          value="employment_coefficient"
          onChange={handleChange}
        />
        אני מאשר/ת למקדם/ת תעסוקה לצפות בפרטים שלי
      </label>
      <div className="smallpop w-4 h-4 border-solid rounded-full font-small bg-grey text-white text-xs mr-4 hover:bg-gradient-2 inline-block text-center">
        ?
      </div>
      <div className="coeffitiontPop absolute h-48 w-96 bg-white  mr-96 rounded-lg text-sm px-6 py-4 overflow-auto hidden z-40">
        <p>
          מקדם התעבוקה ילווה אותך בתהליכי קבלת ההחלטות לבניית מסלון אישי לקרייה שלך ללא עלות. אך אל
          דאגה! לא תהיה לנו גישה אל הפרטים שלכם ללא אישור מפורט ממכם!
        </p>
        <p className="text-green-500">מה כן יראה מקדם התעסוקה?</p>
        <p>
          1. את פרטי ההרשמה שלך (דרכם הוא כם ייתור קשר איתך )2. את הדוחות המסכמים שעלו מתוך האבחון
          שתעבור 3. את אחוז ההתאמה שלך למשרות. 4. את המשרות אליהן בגשת קורות חיים. 5. את השלב שבו
          אתה נמצא בתוך המערכת
        </p>
      </div>
    </div>
  );
};

export default CoefficientCheckbox;
