import Pop from '../Pop';

const ConditionsCheckbox = (props) => {
  const { handleChange, termsText } = props;
  return (
    // <div>
    <div className="">
      <label
        onChange={handleChange}
        htmlFor="terms_and_conditions"
        name="terms_and_conditions"
        className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor"
      >
        <input
          onChange={handleChange}
          required
          className="checkbox ml-4"
          id="terms_and_conditions"
          name="terms_and_conditions"
          type="checkbox"
          value="terms_and_conditions"
        />
        <p className="inline-block"> אני מאשר/ת כי קראתי בעיון ואישרתי את כל </p>
        <span className="mr-1">
          <Pop termsText={termsText} />
        </span>
        <span> ואני מסכים/ה </span>
        <span>לתהליך המוצע ובתנאים הרשומים </span>
      </label>
    </div>
    // </div>
  );
};

export default ConditionsCheckbox;
