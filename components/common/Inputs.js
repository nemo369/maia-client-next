import React from 'react';

export default function Inputs(props) {
  const { status, className, placeholder } = props;
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
    <div className="w-full">
      <label htmlFor={placeholder} className="sr-only">
        {placeholder}
      </label>
      <input
        {...props}
        id={placeholder}
        placeholder={placeholder}
        className={`rounded outline-none text-lg p-5 focus:ring-2 
        ${classes} ${className}`}
      />
    </div>
  );
}
