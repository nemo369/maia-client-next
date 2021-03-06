import { forwardRef } from 'react';

const Button = forwardRef(({ name, onClick, type, disabled, className, status, children }, ref) => {
  let classes = '';
  switch (status) {
    case 'main':
      classes += `h-[50px]  ${
        disabled
          ? 'bg-gray-disabled text-gray-text font-bold cursor-not-allowed'
          : 'bg-orange text-white active:bg-orange-active hover:bg-orange-active font-bold'
      }`;
      break;
    case 'secondary':
      classes += `h-[50px]  ${
        disabled && 'opacity-40 cursor-not-allowed'
      } bg-none text-black border border-black font-bold active:bg-white-active hover:bg-white-active`;
      break;
    case 'gradient':
      classes += `h-16 px-10 ${
        disabled
          ? 'bg-gray-disabled text-gray-text font-thin cursor-not-allowed'
          : 'bg-gradient-to-r from-gradient-1 to-gradient-2 text-white hover:from-blue hover:to-blue font-bold'
      }`;
      break;
    default:
      break;
  }
  return (
    <button
      ref={ref}
      className={`rounded-xl text-lg focus:outline-none
        ${classes} ${className}`}
      type={'submit' === type ? 'submit' : 'button'}
      onClick={onClick}
      disabled={!!disabled}
    >
      {name}
      {children}
    </button>
  );
});

export default Button;
