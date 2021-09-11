const CheckboxGroupGray = ({ checks, onChange, checkType, name = 'check' }) => (
  <div className="button-group-gray">
    {checks?.map((check) => (
      <div className="button-sec-gray flex-grow" key={check.id}>
        <input
          checked={checkType.id === check.id}
          type="radio"
          id={check.id}
          value={check.id}
          name={name}
          onChange={() => onChange(check.id)}
        />
        <label
          className="cursor-pointer w-full h-full block transition hover:opacity-100 opacity-50"
          htmlFor={check.id}
        >
          {check.name}
        </label>
      </div>
    ))}
  </div>
);

export default CheckboxGroupGray;
