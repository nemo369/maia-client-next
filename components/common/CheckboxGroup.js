/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const CheckboxGroup = ({ checks, onChange, checkType }) => (
  <div className="button-group">
    {checks.map((check) => (
      <div className="button-sec" key={check.id}>
        <input
          // {checkType.id === check.id ? 'checked' : ''}
          type="radio"
          id={check.id}
          value={check.id}
          name="check"
          className="cursor-pointer"
          onChange={() => onChange(check.id)}
        />
        <label className="button-label cursor-pointer" htmlFor={check.id}>
          {check.name}
        </label>
      </div>
    ))}
  </div>
);

export default CheckboxGroup;
