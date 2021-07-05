/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const CheckboxGroup = ({ checks, onChange, checkType, name = 'check' }) => (
  <div className="button-group flex text-lg h-10 py-[6px] px-1 border border-gray-200 bg-white min-w-[315px]">
    {checks?.map((check) => (
      <div
        className="button-sec flex-grow text-center h-full rounded-md w-1/3 transition-all"
        key={check.id}
      >
        <input
          checked={checkType.id === check.id}
          type="radio"
          id={check.id}
          value={check.id}
          name={name}
          className=""
          onChange={() => onChange(check.id)}
        />
        <label
          className="button-label cursor-pointer w-full h-full block transition-all hover:opacity-100"
          htmlFor={check.id}
        >
          {check.name}
        </label>
      </div>
    ))}
  </div>
);

export default CheckboxGroup;
