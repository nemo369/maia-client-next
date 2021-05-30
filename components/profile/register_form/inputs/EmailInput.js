const EmailInput = (props) => {
  const { value, handleChange } = props;

  return (
    <input
      // onInput={InvalidMsg}
      required
      type="email"
      name="email"
      placeholder="מייל *"
      value={value}
      onChange={handleChange}
      className="regiserPageInput justify-self-center h-registerPageInputHeight w-full bg-registerPageInputGrey my-4 rounded-md"
    />
  );
};

export default EmailInput;
