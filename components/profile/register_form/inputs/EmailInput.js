const EmailInput = (props) => {
  const { value, handleChange, isError } = props;
  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="מייל *"
        value={value}
        onChange={handleChange}
        className={`regiserPageInput justify-self-center h-12 bwc w-full bg-gray-disabled  rounded-md
        ${isError ? 'is-error' : ''}
        `}
      />
      {isError ? (
        <span className="text-xs text-red-error">יש להזין כתובת דואר אלקטרוני תקינה*</span>
      ) : null}
    </div>
  );
};

export default EmailInput;
