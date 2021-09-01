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
  textClass,
}) {
  return (
    <label className={checkWrapper + ' check flex float-right cursor-pointer'}>
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
      <div className={'check-text' + textClass}>{content}</div>
    </label>
  );
}
