import React from 'react';

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
        <label className="button-label-gray" htmlFor={check.id}>
          {check.name}
        </label>
      </div>
    ))}
  </div>
);

export default CheckboxGroupGray;
