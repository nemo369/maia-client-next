import React from 'react';

export default function Check({
  id,
  value,
  isChecked,
  disabled,
  onChange,
  className,
  content,
  name,
}) {
  return (
    <div className="check flex float-right">
      <input
        type="checkbox"
        id={id}
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
