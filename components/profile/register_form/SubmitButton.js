/* eslint-disable jsx-a11y/label-has-associated-control */
const SubmitButton = (props) => {
  const { open } = props;

  return (
    <button
      type="submit"
      // type="submit"
      placeholder="שנתחיל?"
      // disabled
      className="bg-gray-disabled relative text-gray-active text-xl font-medium mt-4 mb-4 mr-44 rounded-md  hover:bg-mainOrange hover:text-mainWhite"
    >
      {open ? (
        <svg className="animate-spin absolute -ml-1 mr-3 h-5 w-5 text-blue-700" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : null}
      שנתחיל?
    </button>
  );
};

export default SubmitButton;
