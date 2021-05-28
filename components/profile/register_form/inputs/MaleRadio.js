const MaleRadio = (props) => {
  const { handleChange } = props;
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor">
      <input
        className="inline-block male mx-4"
        id="input-gender-male"
        name="gender"
        type="radio"
        value="m"
        defaultChecked
        onChange={handleChange}
        placeholder="זכר"
      />
      זכר
    </label>
  );
};

export default MaleRadio;
