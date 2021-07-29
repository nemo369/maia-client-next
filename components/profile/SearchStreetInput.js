import Select from 'react-select';
import { useState } from 'react';

const SearchStreetInput = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theStreets, cityData, setTheStreet, theStreet, inputValue, setInputValue } = props;
  console.log(theStreets);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const optiosn1 = () => {
    if (!theStreets || !Array.isArray(theStreets)) return [];
    return theStreets?.map((street) => {
      const { name, id } = street;
      return {
        ...street,
        name,
        label: name,
        id,
      };
    });
  };
  const onSelectChange = (value1) => {
    toggleOpen();
    setTheStreet(value1);
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
            className={`bwc ${inputValue ? '' : 'text-gray-active'}`}
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
const Menu = (props) => <div className="vvf absolute top-full w-full z-20" {...props} />;

const Dropdown = ({ children, isOpen, target, onClose }) => (
  <div css={{ position: 'absolute' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);
