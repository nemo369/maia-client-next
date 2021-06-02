import React from 'react';

export default function NumInputs({ status, className }) {
  let classes = '';
  switch (status) {
    case 'main':
      classes += 'bg-white focus:ring-2 focus:ring-orange text-orange';
      break;
    case 'success':
      classes += `bg-green-success 
      focus:ring-0 focus:ring-green-successBorder border-2 border-green-successBorder text-green-successBorder`;
      break;
    case 'error':
      classes += `bg-red-error focus:ring-0 focus:ring-red-active 
      border-2 border-red-active text-red-active`;
      break;
    default:
      break;
  }
  return (
    <div>
      <input
        type="number"
        maxLength="1"
        className={`rounded-lg h-[65px] w-[66px] outline-none text-5xl py-2 px-5 text-align: center;
        ${classes} ${className}`}
      />
    </div>
  );
}
