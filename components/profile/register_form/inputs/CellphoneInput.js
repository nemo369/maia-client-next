const CellphoneInput = (props) => {
  const { value, handleChange } = props;
  return (
    <input
      type="text"
      required
      name="cellphone"
      placeholder="נייד *"
      value={value}
      onChange={handleChange}
      className="regiserPageInput justify-self-center h-12 w-full bwc bg-gray-disabled  rounded-md"
    />
  );
};

export default CellphoneInput;
