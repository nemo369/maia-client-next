import { useState } from 'react';
import Select from 'react-select';

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

const ProfessionDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [vale, setVale] = useState(undefined);
  const { setCityId, setCityData, cities, value, setInputValue } = props;
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    const professionSelector = document.querySelector('.job');
    professionSelector.style.backgroundColor = 'rgba(255, 255, 255, 0.81)';
    professionSelector.style.border = 'solid 2px #41c2c4';
    if (isOpen && professionSelector) {
      professionSelector.style.backgroundColor = 'rgba(231, 231, 231)';
      professionSelector.style.border = 'none';
    }
  };

  const optiosn1 = () => {
    if (!cities || !Array.isArray(cities)) {
      return [];
    }
    return cities?.map((city) => ({ ...city, value: city.name, label: city.name, id: city.id }));
  };

  const onSelectChange = (value1) => {
    setCityId(value1.id);
    setCityData(value1);
    toggleOpen();
    setVale(value1);
    setInputValue(null);
  };
  return (
    <div className="relative ">
      <Dropdown
        isOpen={isOpen}
        onClose={toggleOpen}
        className="absolute vvf h-10"
        required
        target={
          <button
            type="button"
            required
            className={`regiserPageInput job professionBwc  emailini  hover: bg-red-900 ${
              vale ? '' : 'text-gray-active'
            }`}
            onClick={toggleOpen}
            isselected={isOpen.toString()}
          >
            {vale ? `  ${vale.label}` : 'מקצוע'}
          </button>
        }
      >
        <Select
          required
          autoFocus
          backspaceRemovesValue={false}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          className="absolute w-full max-h-52 border-gray-500 "
          onChange={onSelectChange}
          options={optiosn1()}
          placeholder="Search..."
          tabSelectsValue={false}
          value={value}
          styles={customStyles}
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
export default ProfessionDropdown;

const Menu = (props) => <div className="vvf absolute top-full w-full z-20" {...props} />;
const Dropdown = ({ children, isOpen, target }) => (
  <div className="boomp " css={{ position: 'absolute', color: 'red' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
  </div>
);
