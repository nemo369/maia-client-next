import React from 'react';

export default function Inputs({
  placeholder,
  type,
  className,
  status,
  onChange,
  value,
  required,
  disabled,
}) {
  let classes = '';
  switch (status) {
    case 'main':
      classes += 'bg-gray-disabled focus:ring-blue-active';
      break;
    case 'secondary':
      classes += 'bg-white focus:ring-blue-active';
      break;
    case 'error':
      classes += 'bg-red-error focus:ring-red-active';
      break;
    default:
      break;
  }
  return (
    <div>
      <label htmlFor={placeholder} className="sr-only">
        {placeholder}
      </label>
      <input
        id={placeholder}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
        className={`rounded outline-none text-lg p-5 focus:ring-2 
        ${classes} ${className}`}
      />
    </div>
  );
}
