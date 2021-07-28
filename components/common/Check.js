import React from 'react';

export default function Check({
  value,
  isChecked,
  disabled,
  onChange,
  className,
  content,
  dirname,
  name,
  checkWrapper,
}) {
  console.log(isChecked);
  return (
    <label className={checkWrapper + ' check flex float-right'}>
      <input
        type="checkbox"
        dirname={dirname}
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={onChange}
        className={className}
      />
      <div className="check-text">{content}</div>
    </label>
  );
}
