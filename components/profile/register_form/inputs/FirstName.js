const FirstName = (props) => {
  const { value, handleChange, isError } = props;
  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="שם פרטי *"
        value={value}
        onChange={handleChange}
        className={`regiserPageInput justify-self-center h-12 bwc w-full bg-gray-disabled  rounded-md
      ${isError ? 'is-error' : ''}
      `}
      />
      {isError ? <span className="text-xs text-red-error">יש להזין שם פרטי*</span> : null}
    </div>
  );
};

export default FirstName;
