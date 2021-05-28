const CellphoneInput = (props) => {
  const { value, handleChange } = props;
  return (
    <input
      type="text"
      name="cellphone"
      placeholder="נייד"
      value={value}
      onChange={handleChange}
      className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
    />
  );
};

export default CellphoneInput;
