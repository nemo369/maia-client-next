// import React, { Component, useState } from 'react';
// import Select from 'react-select';

// const buttonContainer = () => ({
//   color: '#434343',
//   fontSize: '18px',
//   letterSpacing: 0,
//   lineHeight: '18px',
//   textAlign: 'right',
//   paddingRight: '20px',
//   width: '100%',
// });
// const indicator = () => ({
//   color: 'hsl(0deg 24% 29%)',
//   backgroundColor: 'green',
//   position: 'absolute',
// });
// const container1 = () => ({
//   color: 'hsl(0deg 24% 29%)',
//   backgroundColor: 'green',
//   position: 'absolute',
// });

// const customStyles = {
//   input: (styles) => ({ ...styles, ...buttonContainer() }),
//   option: (provided, state) => ({
//     ...provided,
//     position: 'relative',
//     maxHeight: '200px',
//     color: '#3c91a0',
//     padding: 20,
//   }),
//   control: () => ({
//     width: '100%',
//     height: '50px',
//     backgroundColor: 'rgb(204 204 204)',
//     borderRadius: '5px',
//     display: 'flex',
//   }),
//   container: () => ({
//     alignSelf: 'center',
//     position: 'absolute',
//     width: '100%',
//     top: '55px',
//   }),
//   menu: () => ({
//     position: 'absolute',
//     width: '100%',
//     border: 'solid lightgrey',
//     overFlow: 'auto',
//     backgroundColor: 'white',
//   }),

//   IndicatorsContainer: (styles) => ({ ...styles, ...indicator() }),
// };
// const onClit = () => {};

// const options = [
//   { value: 'תל אביב', label: 'תל אביב' },
//   { value: 'ירושלים', label: 'ירושלים' },
//   { value: 'עכו', label: 'עכו' },
//   { value: 'חיפה', label: 'חיפה' },
//   { value: 'נהריה', label: 'נהריה' },
//   { value: 'בוסטון', label: 'בוסטון' },
//   { value: 'רמלה', label: 'רמלה' },
//   { value: 'לוד', label: 'לוד' },
// ];

// const SearchCountryInput = (props) => {
//   const { open, setOpen } = props;
//   const onChange = () => {
//     setOpen(!open);
//   };
//   const isClearable = true;
//   const isDisabled = false;
//   return (
//     <Select
//       placeholder=""
//       isDisabled={isDisabled}
//       onChange={onChange}
//       menuIsOpen={open}
//       clicky={onClit}
//       styles={customStyles}
//       options={options}
//     />
//   );
// };

// export default SearchCountryInput;

import { Component } from 'react';
// import { jsx } from '@emotion/react';
// import Button from '@atlaskit/button';

import Select from 'react-select';

// import { stateOptions } from '../data';

// const { colors } = defaultTheme;

const selectStyles = {
  control: (provided) => ({ ...provided, minWidth: 240, margin: 8 }),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
};
const options = [
  { value: 'תל אביב', label: 'תל אביב' },
  { value: 'ירושלים', label: 'ירושלים' },
  { value: 'עכו', label: 'עכו' },
  { value: 'חיפה', label: 'חיפה' },
  { value: 'נהריה', label: 'נהריה' },
  { value: 'בוסטון', label: 'בוסטון' },
  { value: 'רמלה', label: 'רמלה' },
  { value: 'לוד', label: 'לוד' },
];
// const State = { isOpen: boolean, value: Object };
export default class PopoutExample extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, value: undefined };
  }

  toggleOpen = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  onSelectChange = (value) => {
    this.toggleOpen();
    this.setState({ value });
  };

  render() {
    const { isOpen, value } = this.state;
    return (
      <Dropdown
        isOpen={isOpen}
        onClose={this.toggleOpen}
        target={
          <button
            type="button"
            iconAfter={<ChevronDown />}
            onClick={this.toggleOpen}
            isSelected={isOpen}
          >
            {value ? `State: ${value.label}` : 'Select a State'}
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
          onChange={this.onSelectChange}
          options={options}
          placeholder="Search..."
          styles={selectStyles}
          tabSelectsValue={false}
          value={value}
        />
      </Dropdown>
    );
  }
}

// styled components

const Menu = (props) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        zIndex: 2,
      }}
      {...props}
    />
  );
};
const Blanket = (props) => (
  <div
    css={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
    {...props}
  />
);
const Dropdown = ({ children, isOpen, target, onClose }) => (
  <div css={{ position: 'relative' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);
const Svg = (p) => (
  <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation" {...p} />
);
// const DropdownIndicator = () => (
//   <div css={{ color: colors.neutral20, height: 24, width: 32 }}>
//     <Svg>
//       <path
//         d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
//         fill="currentColor"
//         fillRule="evenodd"
//       />
//     </Svg>
//   </div>
// );
const ChevronDown = () => (
  <Svg style={{ marginRight: -6 }}>
    <path
      d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </Svg>
);
