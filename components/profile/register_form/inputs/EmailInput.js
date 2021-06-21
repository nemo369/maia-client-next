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
        className="regiserPageInput bwc emailini justify-self-center h-12 w-full bg-gray-disabled  rounded-md"
      />
    </div>
  );
};

export default EmailInput;
