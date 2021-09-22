import Pop from '../Pop';

const ConditionsCheckbox = (props) => {
  const { handleChange, termsText, checked, isError } = props;
  return (
    <div className={`${isError ? 'text-red-error' : ''}`}>
      <label
        onChange={handleChange}
        htmlFor="terms_and_conditions"
        name="terms_and_conditions"
        className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor"
      >
        <input
          onChange={handleChange}
          className={`checkbox ml-4 ${
            isError ? 'border border-red-error shake checkbox--error' : ''
          }`}
          id="terms_and_conditions"
          name="terms_and_conditions"
          type="checkbox"
          checked={checked}
          value="terms_and_conditions"
        />
        <p className={`inline-block ${isError ? 'text-red-error' : ''}`}>
          אני מאשר/ת כי קראתי בעיון ואישרתי את כל
        </p>
        <span className="mr-1">
          <Pop termsText={termsText} />
        </span>
        <span> ואני מסכים/ה </span>
        <span>לתהליך המוצע ובתנאים הרשומים </span>
      </label>
    </div>
  );
};

export default ConditionsCheckbox;
