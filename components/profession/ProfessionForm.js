/* eslint-disable react/jsx-one-expression-per-line */
import { useTranslation } from 'next-i18next';
import React from 'react';
import Select from 'react-select';
import useForm from '../../src/hooks/useForm';

export default function ProfessionForm() {
  const { handleChange } = useForm({
    field: null,
    profession: null,
    path: null,
  });
  const { t } = useTranslation('common');
  const handleSelectCahnge = ({ value, name }) => {
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
      boxShadow: 'none',
    }),
    indicatorsContainer: () => ({
      backgroundColor: '#E1E1E1',
    }),
  };
  return (
    <>
      <Select
        aria-label=">מקצוע"
        label="מקצוע"
        className="flex-grow "
        placeholder={t('מקצוע')}
        name="profession"
        onChange={(e) => handleSelectCahnge({ value: e.target, name: 'profession' })}
        options={professionOptions}
        styles={customStyles}
      />
      <Select
        aria-label=">מסלול"
        label="מסלול"
        className="flex-grow "
        placeholder={t('מסלול')}
        name="path"
        onChange={(e) => handleSelectCahnge({ value: e.target, name: 'path' })}
        options={professionOptions}
        styles={customStyles}
      />
    </>
  );
}
