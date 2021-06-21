const MaleRadio = (props) => {
  const { handleChange } = props;
  return (
    <label
      htmlFor="input-gender-male"
      className="cursor-pointer text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor flex"
    >
      <input
        required
        defaultChecked
        onChange={handleChange}
        className="inline-block male mx-4"
        id="input-gender-male"
        name="gender"
        type="radio"
        value="m"
        placeholder="זכר"
      />
      זכר
    </label>
  );
};

export default MaleRadio;
