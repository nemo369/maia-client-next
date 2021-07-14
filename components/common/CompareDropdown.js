import React, { forwardRef } from 'react';
import Group4 from '../svg/Group4';
import WithClickOutside from './WithClickOutside';
// import CategoryCahnger from '../dashboard/cateorgy/CategoryCahnger';

const CompareDropdown = forwardRef(({ open1, setOpen1 }, ref) => {
  //   const { title, content } = props;
  const handelClick = () => {
    console.log('focus-out');
  };

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
        className="relative h-10 w-full   rounded pr-4 border-none   text-gray-text focus:bg-white focus:border-solid focus-within:border-green-500 focus:border-green-500 focus:border-2  dropit"
      >
        <Group4 />
      </div>
      {open1 && (
        <div className="bg-white absolute text-gray-text top-11 z-40 rounded-lg w-full">yoyo</div>
      )}
    </div>
    // </section>
  );
});

export default WithClickOutside(CompareDropdown);
