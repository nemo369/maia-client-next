import React from 'react';

export default function Button({ name, onClickFunction, type, disabled, className }) {
  let classes = '';
  switch (type) {
    case 'main':
      classes += `${
        disabled
          ? 'bg-grey-disabled text-grey-text font-bold'
          : 'bg-orange text-white active:bg-orange-active font-bold'
      }`;
      break;
    case 'secondary':
      classes += `${disabled && 'opacity-40'} bg-none text-black border border-black font-bold`;
      break;
    case 'gradient':
      classes += `${
        disabled
          ? 'bg-grey-disabled text-grey-text font-thin'
          : 'bg-gradient-to-r from-gradient-1 to-gradient-2 text-white hover:from-blue hover:to-blue font-bold'
      }`;
      break;
    default:
      break;
  }
  return (
    <div>
      <button
        className={`rounded-xl text-lg focus:outline-none
        ${classes} ${className}`}
        type="button"
        onClick={onClickFunction}
      >
        {name}
      </button>
    </div>
  );
}
