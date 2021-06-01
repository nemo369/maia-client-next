import Pop from '../Pop';

const ConditionsCheckbox = (props) => {
  const { handleChange } = props;
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
        אני מאשר/ת כי קראתי בעיון ואישרתי את כל
        <span> </span>
        <Pop />
        <span> </span>
        ואני מסכים/ה
        <br />
        <p className="pr-9">לתהילך המוצע ובתנאים הרשומים</p>
      </label>
    </div>
    // </div>
  );
};

export default ConditionsCheckbox;
