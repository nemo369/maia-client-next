const FemaleRadio = (props) => {
  const { handleChange } = props;
  return (
    <label
      htmlFor="input-gender-female"
      className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor flex "
    >
      <input
        className="inline-block female mx-4"
        id="input-gender-female"
        name="gender"
        type="radio"
        value="f"
        onChange={handleChange}
        placeholder="נקבה"
      />
      נקבה
    </label>
  );
};

export default FemaleRadio;
