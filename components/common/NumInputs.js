import React from 'react';

export default function NumInputs({ status, className }) {
  let classes = '';
  switch (status) {
    case 'main':
      classes += 'bg-white focus:ring-orange text-orange';
      break;
    case 'success':
      classes += 'bg-green-success border-2 border-green-successBorder text-green-successBorder';
      break;
    case 'error':
      classes += 'bg-red-error border-2 border-red-active text-red-active';
      break;
    default:
      break;
  }
  return (
    <div>
      <input
        type="number"
        maxLength="1"
        className={`rounded-lg h-65 w-66 outline-none text-5xl py-2 px-5 focus:ring-2 text-align: center;
        ${classes} ${className}`}
      />
    </div>
  );
}
