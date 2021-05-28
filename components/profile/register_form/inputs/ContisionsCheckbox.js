/* eslint-disable jsx-a11y/label-has-associated-control */
const ConditionsCheckbox = (props) => {
  const { handleChange } = props;
  return (
    <div>
      <div className="my-4">
        <input
          className="checkbox ml-4"
          id="terms_and_conditions"
          name="terms_and_conditions"
          type="checkbox"
          value="terms_and_conditions"
          onChange={handleChange}
        />
        <label
          htmlFor="terms_and_conditions"
          name="terms_and_conditions"
          className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor"
        >
          אני מאשר/ת כי קראתי בעיון ואישרתי את כל
          <u> תנאי התקנון </u>
          ואני מסכים/ה
          <br />
          לתהילך המוצע ובתנאים הרשומים
        </label>
      </div>
    </div>
  );
};

export default ConditionsCheckbox;
