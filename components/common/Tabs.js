import React from 'react';

export default function Tabs({ type, firstTab, secondTab, onClick, className }) {
  // eslint-disable-next-line no-unneeded-ternary
  const active = 'one' === type ? true : false;
  return (
    <div>
      <button
        hidden={active}
        className={`text-lg focus:outline-none 
        bg-gray active:bg-gray-active focus:bg-gray-active 
        text-white py-3.5 px-36 ml-2 font-bold rounded-tr-lg ${className}`}
        type="button"
        onClick={onClick}
      >
        {firstTab}
      </button>
      <button
        hidden={active}
        className={`text-lg focus:outline-none bg-orange 
        active:bg-orange-active focus:bg-orange-active 
        text-white py-3.5 px-20 font-bold rounded-tl-lg ${className}`}
        type="button"
        onClick={onClick}
      >
        {secondTab}
      </button>
      <button
        hidden={!active}
        className={`text-lg focus:outline-none 
        bg-gray active:bg-gray-active
        text-white py-3.5 w-610 ml-2 font-bold rounded-tr-lg rounded-tl-lg ${className}`}
        type="button"
        onClick={onClick}
      >
        {firstTab}
      </button>
      <div>*********</div>
    </div>
  );
}
