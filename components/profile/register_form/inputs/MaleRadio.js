const MaleRadio = (props) => {
  const { handleChange } = props;
  return (
    <label
      htmlFor="input-gender-male"
      className="text-regiterPageDarkBottomText leading-regiterPageDarkBottomText text-regiterPageDarkBottomTextcolor flex"
    >
      <input
        required
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
