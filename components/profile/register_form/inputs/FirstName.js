const FirstName = (props) => {
  const { value, handleChange } = props;
  return (
    <input
      type="text"
      name="firstName"
      required
      placeholder="שם פרטי *"
      value={value}
      onChange={handleChange}
      className="regiserPageInput justify-self-center h-12 bwc w-full bg-gray-disabled  rounded-md"
    />
  );
};

export default FirstName;
