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
        <span className="h-0 block shake text-xs text-red-error">
          יש טעות בכתובת שהקלדת, שננסה שוב?*
        </span>
      ) : null}
    </div>
  );
};

export default EmailInput;
