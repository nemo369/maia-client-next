// import { Component } from 'react';
import Select from 'react-select';
import { useState } from 'react';

// const selectStyles = {
//   control: (provided) => ({ ...provided, minWidth: 240, margin: 8 }),
//   // menu: () => ({
//   //   boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
//   //   position: 'absolute',
//   //   width: '100%',
//   //   backgroundColor: 'white',
//   // }),
// };
const SearchStreetInput = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(undefined);
  const { theStreets, cityData, setTheStreet, theStreet } = props;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const optiosn1 = () => {
    if (!theStreets || !Array.isArray(theStreets)) return [];
    return theStreets?.map((street) => {
      const { name, id } = street;
      return {
        name,
        label: name,
        id,
      };
    });
  };
  const onSelectChange = (value1) => {
    toggleOpen();
    setTheStreet(value1);
  };
  return (
    <div className="relative">
      <Dropdown
        isOpen={isOpen}
        onClose={toggleOpen}
        className="absolute"
        target={
          <button
            // {cityData ? disabled : required }
            name="street"
            type="button"
            className="bwc text-grey-active"
            onClick={toggleOpen}
            isselected={isOpen.toString()}
          >
            {theStreet ? `  ${theStreet.label}` : 'בחר רחוב  *'}
          </button>
        }
      >
        <Select
          autoFocus
          backspaceRemovesValue={false}
          //   components={{ DropdownIndicator, IndicatorSeparator: null }}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          className="absolute w-full"
          onChange={onSelectChange}
          options={optiosn1()}
          placeholder="Search..."
          // styles={selectStyles}
          tabSelectsValue={false}
          value={value}
        />
      </Dropdown>
    </div>
  );
};
export default SearchStreetInput;
const Blanket = (props) => (
  <div
    css={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'absolute',
      zIndex: 1,
    }}
    {...props}
  />
);
const Dropdown = ({ children, isOpen, target, onClose }) => (
  <div css={{ position: 'absolute' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);
const Menu = (props) => (
  // const shadow = 'hsla(218, 50%, 10%, 0.1)';
  <div
    className="vvf"
    // css={{
    //   backgroundColor: 'red',
    //   borderRadius: 4,
    //   boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
    //   marginTop: 8,
    //   position: 'absolute',
    //   color: 'red',
    //   zIndex: 2,
    // }}
    {...props}
  />
);
