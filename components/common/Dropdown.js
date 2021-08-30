import React, { forwardRef } from 'react';
import WithClickOutside from './WithClickOutside';
// import CategoryCahnger from '../dashboard/cateorgy/CategoryCahnger';

const Dropdown = forwardRef(({ open1, setOpen1, props }, ref) => {
  const { title, content } = props;
  const handelClick = () => {};

  return (
    <div ref={ref} className="max-h-28 grid relative  ">
      <div
        role="button"
        tabIndex={0}
        value="222"
        aria-label="log out"
        onClick={() => setOpen1(!open1)}
        onKeyDown={handelClick}
        onMouseDown={handelClick}
        className="relative h-10 w-full   rounded pr-4 border-none bg-gray-disabled flex justify-between text-gray-text focus:bg-white focus:border-solid focus-within:border-green-500 focus:border-green-500 focus:border-2  dropit"
      >
        <label className="self-center top-3 text-lg">{title || 'tit'}</label>
        <span className="transform rotate-90 px-[10px] py-[10px] pr-3 self-center">{'<'}</span>
      </div>
      {open1 && (
        <div className="bg-white absolute text-gray-text top-11 z-40 rounded-lg w-full">
          <div className="  px-4 py-4  max-w-[97%] max-h-52 overflow-auto">
            {content.map((x) => (
              <div className="pr-4  hover:text-green-500" role="button">
                {x}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    // </section>
  );
});

export default WithClickOutside(Dropdown);
