const EmailInput = (props) => {
  const { value, handleChange } = props;
  return (
    <div>
      <input
        // onInput={InvalidMsg}
        required
        type="email"
        name="email"
        placeholder="מייל *"
        value={value}
        onChange={handleChange}
        className="regiserPageInput bwc emailini justify-self-center h-registerPageInputHeight w-full bg-grey-disabled  my-4 rounded-md"
      />
    </div>
  );
};

export default EmailInput;
