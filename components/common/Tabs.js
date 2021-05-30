import React from 'react';

export default function Tabs({ type, firstTab, secondTab, onClickFunction, className }) {
  // eslint-disable-next-line no-unneeded-ternary
  const active = 'one' === type ? true : false;
  return (
    <div>
      <button
        hidden={active}
        className={`text-lg focus:outline-none 
        bg-grey active:bg-grey-active focus:bg-grey-active 
        text-white py-3.5 px-36 ml-2 font-bold rounded-tr-lg ${className}`}
        type="button"
        onClick={onClickFunction}
      >
        {firstTab}
      </button>
      <button
        hidden={active}
        className={`text-lg focus:outline-none bg-orange 
        active:bg-orange-active focus:bg-orange-active 
        text-white py-3.5 px-20 font-bold rounded-tl-lg ${className}`}
        type="button"
        onClick={onClickFunction}
      >
        {secondTab}
      </button>
      <button
        hidden={!active}
        className={`text-lg focus:outline-none 
        bg-grey active:bg-grey-active
        text-white py-3.5 w-610 ml-2 font-bold rounded-tr-lg rounded-tl-lg ${className}`}
        type="button"
        onClick={onClickFunction}
      >
        {firstTab}
      </button>
      <div>*********</div>
    </div>
  );
}
