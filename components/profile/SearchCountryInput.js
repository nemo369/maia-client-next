import { useState } from 'react';
import Select from 'react-select';

const customStyles = {
  menuList: (provided, state) => ({
    ...provided,
    width: '98%',
    borderBottom: '1px dotted pink',

    padding: 20,

    '::-webkit-scrollbar-thumb': {
      background: '#00C5C6', // imported color string
      marginRight: '10px',
      height: '50px',
      borderRadios: '50%',
      width: '10px',
    },
    '::-webkit-scrollbar-track': {
      background: '#D6D9E2',
      marginRight: '10px',
      opacity: '0.55',
      borderRadios: '20px',
      width: '5px',
    },
    '::-webkit-scrollbar': {
      marginRight: '10px',
      width: '4px',
    },
  }),
  option: (provided, state) => ({
    ...provided,

    ':hover': {
      color: '#00C5C6',
      backgroundColor: 'white',
      fontWeight: '600',
    },
    ':activ': {
      // color: '#00C5C6',
    },
  }),
};

const SearchCountryInput = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [vale, setVale] = useState(undefined);

  const { setCityId, setCityData, cities, err, value, setInputValue } = props;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const optiosn1 = () => {
    if (!cities || !Array.isArray(cities)) {
      return [];
    }
    return cities?.map((x) => {
      const obj = {};
      obj.value = x.name;
      obj.label = x.name;
      obj.id = x.id;
      return obj;
    });
  };

  const onSelectChange = (value1) => {
    setInputValue('בחר רחוב *');
    setCityId(value1.id);
    setCityData(value1);
    toggleOpen();
    setVale(value1);
  };
  return (
    <div className="relative ">
      <Dropdown
        isOpen={isOpen}
        onClose={toggleOpen}
        className="absolute vvf "
        target={
          <button
            type="button"
            required
            className="bwc text-grey-active emailini  "
            onClick={toggleOpen}
            isselected={isOpen.toString()}
          >
            {vale ? `  ${vale.label}` : 'בחר יישוב *'}
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
          className="absolute w-full max-h-52 "
          onChange={onSelectChange}
          options={optiosn1()}
          placeholder="Search..."
          tabSelectsValue={false}
          value={value}
          styles={customStyles}
        />
      </Dropdown>
      {err ? <h3>must fill in feald bitch</h3> : ''}
    </div>
  );
};
export default SearchCountryInput;

const Menu = (props) => (
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
    {...props}
    // }}
  >
    {/* <div className="react-select__menu ">
      <div className="react-select__menu-list bbg ">
        <div className="react-select__option " {...props} />
      </div>
    </div> */}
  </div>
);
// const Blanket = (props) => (
//   <div
//     className=""
//     css={{
//       bottom: 0,
//       left: 0,
//       top: 0,
//       right: 0,
//       position: 'absolute',
//       zIndex: 1,
//     }}
//     {...props}
//   />
// );
{
  /* <div className="react-select__menu scrollbar-thin scrollbar-thumb-gradient-1"> */
}
const Dropdown = ({ children, isOpen, target }) => (
  <div className="boomp " css={{ position: 'absolute', color: 'red' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
  </div>
);
