const FemaleRadio = (props) => {
  const { handleChange } = props;
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor">
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
