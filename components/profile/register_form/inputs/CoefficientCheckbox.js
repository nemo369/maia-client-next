/* eslint-disable jsx-a11y/label-has-associated-control */
const CoefficientCheckbox = (props) => {
  const { handleChange } = props;
  return (
    <div className="my-4">
      <input
        className="checkbox ml-4"
        id="employment_coefficient"
        name="employment_coefficient"
        type="checkbox"
        value="employment_coefficient"
        onChange={handleChange}
      />
      <label
        htmlFor="employment_coefficient"
        name="employment_coefficient"
        className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor"
      >
        אני מאשר/ת למקדם/ת תעסוקה לצפות בפרטים שלי
      </label>
    </div>
  );
};

export default CoefficientCheckbox;
