import React from 'react';

export default function Inputs({ placeholder, type, className }) {
  let classes = '';
  switch (type) {
    case 'main':
      classes += 'bg-grey-disabled focus:ring-blue-active';
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
      <label htmlFor={placeholder}>
        <div className="sr-only">{placeholder}</div>
        <input
          id={placeholder}
          placeholder={placeholder}
          className={`rounded outline-none text-lg p-5 focus:ring-2 
        ${classes} ${className}`}
        />
      </label>
    </div>
  );
}
