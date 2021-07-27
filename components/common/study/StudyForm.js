/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Select from 'react-select';

export default function StudyForm(props) {
  const { handleChange } = props;

  const handleSelectCahnge = ({ value, name }) => {
    handleChange({ target: { value, name, type: 'select' } });
  };

  const professionOptions = [
    { value: 'chocolate', label: 'Chocolate', id: 1 },
    { value: 'strawberry', label: 'Strawberry', id: 2 },
    { value: 'vanilla', label: 'Vanilla', id: 3 },
  ];
  const customStyles = {
    menuList: () => ({
      backgroundColor: '#E1E1E1',
      color: 'black',
      border: 0,
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#E1E1E1',
      border: 0,
      borderRadius: '8px',
    }),
    indicatorsContainer: () => ({
      backgroundColor: '#E1E1E1',
    }),
  };
  return (
    <>
      <Select
        instanceId="1"
        aria-label=">תחום"
        label="תחום"
        className="flex-grow "
        placeholder="תחום"
        name="field"
        value="field"
        onChange={(e) => handleSelectCahnge({ value: e.value, name: 'field' })}
        options={professionOptions}
        styles={customStyles}
      />
      <Select
        instanceId="2"
        aria-label=">מצקוע"
        label="מצקוע"
        className="flex-grow "
        placeholder="מצקוע"
        name="profession"
        value="profession"
        onChange={(e) => handleSelectCahnge({ value: e.value, name: 'profession' })}
        options={professionOptions}
        styles={customStyles}
      />
      <Select
        instanceId="3"
        aria-label=">מסלול"
        label="מסלול"
        className="flex-grow "
        placeholder="מסלול"
        name="path"
        value="path"
        onChange={(e) => handleSelectCahnge({ value: e.value, name: 'path' })}
        options={professionOptions}
        styles={customStyles}
      />
    </>
  );
}
