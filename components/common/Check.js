import React from 'react';

export default function Check({ id, value, isChecked, disabled, onChange, className }) {
  return (
    <div className="check">
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}
