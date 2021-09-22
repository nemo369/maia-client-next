const LastName = (props) => {
  const { value, handleChange, isError } = props;
  return (
    <>
      <input
        type="text"
        name="lastName"
        placeholder="שם משפחה *"
        value={value}
        onChange={handleChange}
        className={`regiserPageInput justify-self-center h-12 bwc w-full bg-gray-disabled  rounded-md
      ${isError ? 'is-error' : ''}
      `}
      />
      {isError ? <span className="text-xs text-red-error">יש להזין שם משפחה*</span> : null}
    </>
  );
};

export default LastName;
