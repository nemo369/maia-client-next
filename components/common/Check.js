import React from 'react';

export default function Check({ id, value, isChecked, disabled, onChange, className, content }) {
  return (
    <div className="check flex float-right">
      <input
        type="checkbox"
        id={id}
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
