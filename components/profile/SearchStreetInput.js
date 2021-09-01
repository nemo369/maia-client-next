import Select from 'react-select';
import { useState } from 'react';
import ChevronLeft from '../svg/ChevronLeft';

const SearchStreetInput = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theStreets, cityData, setTheStreet, theStreet, inputValue, setInputValue } = props;
  const customStyles = {
    menuList: (provided) => ({
      ...provided,
      width: '98%',
      padding: 20,

      '::-webkit-scrollbar-thumb': {
        background: '#00C5C6',
        height: '50px',
        borderRadios: '50%',
        width: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: '#D6D9E2',
        opacity: '0.55',
        borderRadios: '20px',
        width: '5px',
      },
      '::-webkit-scrollbar': {
        width: '4px',
      },
    }),
    option: (provided) => ({
      ...provided,
      ':hover': {
        color: '#00C5C6',
        backgroundColor: 'white',
        fontWeight: '600',
        cursor: 'pointer',
      },
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: '0px',
      padding: '10px',
      color: 'gray',
      border: '1px solid #CCCCCC',
    }),
  };
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
            className={`bwc city flex items-center pl-3   emailini ${
              inputValue ? '' : 'text-gray-active'
            }`}
            onClick={toggleOpen}
            isselected={isOpen.toString()}
          >
            {inputValue ? `  ${inputValue}` : 'בחר רחוב  *'}
            {cityData && <ChevronLeft className="transform -rotate-90 mr-auto" />}
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
          placeholder="חיפוש..."
          tabSelectsValue={false}
          value={theStreet?.name}
          styles={customStyles}
        />
      </Dropdown>
    </div>
  );
};
export default SearchStreetInput;

const Menu = (props) => <div className="vvf absolute top-full w-full z-20" {...props} />;

const Dropdown = ({ children, isOpen, target }) => (
  <div css={{ position: 'absolute' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
  </div>
);
