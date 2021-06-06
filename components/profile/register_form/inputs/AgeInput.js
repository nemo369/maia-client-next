const AgeInput = (props) => {
  const { value, handleChange } = props;
  return (
    <input
      type="number"
      required
      name="age"
      placeholder="גיל"
      value={value}
      onChange={handleChange}
      className="regiserPageInput justify-self-center h-registerPageInputHeight bwc w-full bg-grey-disabled my-4 rounded-md"
    />
  );
};

export default AgeInput;
