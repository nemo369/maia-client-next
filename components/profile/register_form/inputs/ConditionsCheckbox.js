import Pop from '../Pop';

const ConditionsCheckbox = (props) => {
  const { handleChange, termsText } = props;
  return (
    // <div>
    <div className="my-4 ">
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
        <p className="inline-block">אני מאשר/ת כי קראתי בעיון ואישרתי את כל</p>
        <span> </span>

        <Pop termsText={termsText} />

        <p className="inline-block pr-9"> ואני מסכים/ה </p>
        <span> </span>
        {/* <br /> */}
        <p className="inline-block ">לתהילך המוצע ובתנאים הרשומים </p>
      </label>
    </div>
    // </div>
  );
};

export default ConditionsCheckbox;
