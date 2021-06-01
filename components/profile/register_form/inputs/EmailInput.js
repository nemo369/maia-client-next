const EmailInput = (props) => {
  const { value, handleChange } = props;
  const pop = () => {
    console.log('shack');
  };

  return (
    <input
      // onInput={InvalidMsg}
      required
      type="email"
      name="email"
      placeholder="מייל *"
      value={value}
      onChange={handleChange}
      onFocus={pop}
      className="regiserPageInput emailini justify-self-center h-registerPageInputHeight w-full bg-grey-disabled my-4 rounded-md"
    />
  );
};

export default EmailInput;
