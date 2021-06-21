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
      className="regiserPageInput justify-self-center h-12 bwc w-full bg-gray-disabled rounded-md"
    />
  );
};

export default AgeInput;
