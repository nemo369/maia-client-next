/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Select from 'react-select';
import useForm from '../../../src/hooks/useForm';

export default function StudyForm() {
  const { inputs, handleChange } = useForm({
    field: null,
    profession: null,
    path: null,
  });
  console.log(inputs.scope);
  const handleSelectCahnge = ({ value, name }) => {
    console.log(value);
    console.log(name);
    handleChange({ target: { value, name, type: 'select' } });
  };

  const professionOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
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
        aria-label=">תחום"
        label="תחום"
        className="flex-grow "
        placeholder="תחום"
        name="field"
        // defaultValue={inputs.scope}
        onChange={(e) => handleSelectCahnge({ value: e.target, name: 'field' })}
        options={professionOptions}
        styles={customStyles}
      />
      <Select
        aria-label=">מצקוע"
        label="מצקוע"
        className="flex-grow "
        placeholder="מצקוע"
        name="profession"
        // defaultValue={inputs.scope}
        onChange={(e) => handleSelectCahnge({ value: e.target, name: 'profession' })}
        options={professionOptions}
        styles={customStyles}
      />
      <Select
        aria-label=">מסלול"
        label="מסלול"
        className="flex-grow "
        placeholder="מסלול"
        name="path"
        // defaultValue={inputs.scope}
        onChange={(e) => handleSelectCahnge({ value: e.target, name: 'path' })}
        options={professionOptions}
        styles={customStyles}
      />
    </>
  );
}
