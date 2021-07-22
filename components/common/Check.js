import React from 'react';

export default function Check({
  id,
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
  return (
    <div className={checkWrapper + ' check flex float-right'}>
      <input
        type="checkbox"
        id={id}
        dirname={dirname}
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={onChange}
        className={className}
      />
      <div className="check-text">{content}</div>
    </div>
  );
}
