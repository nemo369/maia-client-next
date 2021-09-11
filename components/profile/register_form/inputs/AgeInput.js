/* eslint-disable prettier/prettier */
import Select from 'react-select';
import { useEffect, useState } from 'react';
import ChevronLeft from '../../../svg/ChevronLeft';

const AgeInput = ({ value, handleChange, initValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [vale, setVale] = useState(undefined);
  useEffect(() => {
    if (initValue) {
      setVale({ value: initValue, label: initValue, id: initValue });
    }
  }, [initValue]);

  const currentYear = new Date().getFullYear();
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  const years = range(currentYear - 17, currentYear - 90, -1);
  const yearsMaped = years.map((year) => ({ value: year, label: year, id: year }));
  const fakeHandleChange = (e) => {
    console.log(e);
    handleChange({ target: {
      value: e.value,
      name: 'birth_year',
      type: 'number'
    } });
    setVale(e);
    setIsOpen(false);
  };
  return (
    <div className="relative min-w-[110px]">
      <Dropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="absolute vvf "
        required
        target={
          <button
            type="button"
            required
            className={`flex  items-center justify-between pl-2 bwc    hover: bg-red-900 ${
              vale ? '' : 'text-gray-active'
            }`}
            onClick={() => setIsOpen(true)}
            isselected={isOpen.toString()}
          >
            {vale ? `  ${vale.label}` : 'שנת לידה *'}
            <ChevronLeft className="transform -rotate-90" />

          </button>
        }
      >
        <Select
          required
          autoFocus
          // isSearchable={false}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          className="absolute w-full max-h-52 border-gray-500 "
          onChange={fakeHandleChange}
          options={yearsMaped}
          placeholder="חיפוש.."
          tabSelectsValue={false}
          value={value}
          theme={(theme) => ({
            ...theme,
            borderRadius: '4px',
            colors: {
              ...theme.colors,
              primary: '#CCCCCC',
            },
          })}
        />
      </Dropdown>
    </div>
  );
};

export default AgeInput;
const Menu = (props) => <div className="vvf absolute top-full w-full z-20" {...props} />;
const Dropdown = ({ children, isOpen, target }) => (
  <div className="boomp " css={{ position: 'absolute', color: 'red' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
  </div>
);
