/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

const AgeInputSimple = ({ handleChange, value }) => {
  const [vale, setVale] = useState('');
  useEffect(() => {
    if (value) {
      setVale(value);
    }
  }, [value]);
  const handleTempChange = (e) => {
    setVale(+e.target.value);
    handleChange({ target: {
      value: +e.target.value,
      name: 'birth_year',
      type: 'number'
    } });
  };

  const currentYear = new Date().getFullYear();
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  const years = range(currentYear - 17, currentYear - 40, -1);

  return (
    <select value={vale} id="birth_year" onChange={handleTempChange} name="birth_year" className="max-w-[112px] flex  items-center justify-between pl-2 bwc   ">
      <option value="">שנת לידה</option>
      {years.map((year) => (<option key={year} value={year}>{year}</option>))}
    </select>
  );
};

export default AgeInputSimple;
