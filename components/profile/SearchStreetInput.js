import Select from 'react-select';
import { useState } from 'react';

const SearchStreetInput = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theStreets, cityData, setTheStreet, theStreet, inputValue, setInputValue } = props;

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
    setTheStreet(value1.label);
    setInputValue(value1.label);
  };
  return (
    <div className="relative">
      <Dropdown
        isOpen={isOpen}
        onClose={toggleOpen}
        className="absolute"
        target={
          <button
            disabled={!cityData}
            name="street"
            type="button"
            className="bwc text-grey-active"
            onClick={toggleOpen}
            isselected={isOpen.toString()}
          >
            {inputValue ? `  ${inputValue}` : 'בחר רחוב  *'}
          </button>
        }
      >
        <Select
          autoFocus
          backspaceRemovesValue={false}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          className="absolute w-full"
          onChange={onSelectChange}
          options={optiosn1()}
          placeholder="Search..."
          tabSelectsValue={false}
          value={theStreet?.name}
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
