import React from 'react';

const CheckboxGroup = ({ checks, onChange, checkType, name = 'check' }) => (
  <div className="button-group flex text-[16px] text-[#6C6C6C] h-[40px] py-[4px] px-1 bg-[#EAEAEA] min-w-[315px]">
    {checks?.map((check) => (
      <div
        className="button-sec flex-grow text-center h-full rounded-[4px] transition-all"
        key={check.id}
      >
        <input
          checked={checkType.id === check.id}
          type="radio"
          id={check.id}
          value={check.id}
          name={name}
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
