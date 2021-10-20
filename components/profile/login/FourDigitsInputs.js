import { useState } from 'react';

const classes = 'bg-gray-100 focus:ring-2 focus:ring-orange text-orange';
const errorClass = `bg-[#FFDBDB] focus:ring-0 
focus:ring-red border-2 border-red text-red`;
const successClass = `bg-green-success focus:ring-0 
focus:ring-green-successBorder border-2 border-green-successBorder text-green-successBorder`;
function FourDigitsInputs({ error, loader, setError, setInput }) {
  const [inputs, setInputs] = useState(['', '', '', '']);
  const keyUp = (e, index) => {
    setError(false);

    const el = e.currentTarget;
    if ('ArrowLeft' === e.code && el.nextElementSibling && 0 !== index) {
      el.nextElementSibling?.focus();
      return;
    }
    if ('ArrowRight' === e.code && el.previousElementSibling) {
      el.previousElementSibling?.focus();
      return;
    }

    if ('Backspace' === e.code && el.nextElementSibling) {
      el.nextElementSibling?.focus();
      return;
    }
    if (0 !== index && '' !== e.target.value) {
      el.previousElementSibling?.focus();
      return;
    }
    if (4 === inputs.length && !loader) {
      setInput([...inputs].reverse().join(''));
    }
  };
  return (
    <div className="flex h-16 gap-x-7">
      {[0, 1, 2, 3].map((index, key) => (
        <input
          type="text"
          key={key}
          onChange={(e) => {
            const newInputs = [...inputs];
            newInputs[index] = e.target.value;
            setInputs(newInputs);
          }}
          value={inputs[index]}
          onKeyUp={(e) => keyUp(e, index)}
          maxLength="1"
          className={`${!error && !loader ? classes : ''} ${error ? errorClass : ''} ${
            loader ? successClass : ''
          } num-input max-w-[65px] text-[42px] leading-[49px] text-center  focus:outline-none rounded-md`}
        />
      ))}
    </div>
  );
}

export default FourDigitsInputs;
