import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Select from 'react-select';
import useForm from '../../src/hooks/useForm';
import Button from '../common/Button';
import CheckboxGroup from '../common/CheckboxGroup';
import JobsLocation from './JobsLocation';

const professionOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const fieldnOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const filterByOptions = [
  { name: 'הכל', id: 'ALL' },
  { name: 'הכי מתאים', id: 'MOST_SUITABLE' },
  { name: 'הכי חדש', id: 'MOST_NEW' },
];

function JobsForm() {
  const { t } = useTranslation('common');
  const [loader, setLoader] = useState(false);
  const { inputs, handleChange } = useForm({
    profession: null,
    field: null,
    filterBy: 'ALL',
  });
  const onCheckboxGroupChange = (value) => {
    handleChange({ target: { value, name: 'filterBy', type: 'filterBy' } });
  };
  const handleSelectCahnge = ({ value, name }) => {
    handleChange({ target: { value, name, type: 'select' } });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    console.log(inputs);

    // const { data, status } = await UserAPI.register(dataToSend);

    setLoader(false);
  };

  return (
    <section className="jobs-form">
      <form action="" onSubmit={handleSubmit}>
        <TopForm
          inputs={inputs}
          handleSelectCahnge={handleSelectCahnge}
          onCheckboxGroupChange={onCheckboxGroupChange}
        />
        <hr className="border border-dashed my-6" />
        <div className="bg-white rounded-lg flex py-8 px-4 shadow-md justify-between">
          <JobsLocation />
          <div>
            <legend>היקף משרה</legend>
          </div>
          <Button
            type="submit"
            status="main"
            name={t('חיפוש')}
            className="px-6"
            disabled={loader}
          />
        </div>
      </form>
    </section>
  );
}

export default JobsForm;
const customStyles = {
  menuList: (provided) => ({
    ...provided,
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: 'gray',
  }),
};
const TopForm = ({ inputs, handleSelectCahnge, onCheckboxGroupChange }) => (
  <div className="flex gap-x-7 justify-between">
    <Select
      className="flex-grow bg-gray-400"
      placeholder="מקצוע"
      name="profession"
      defaultValue={inputs.profession}
      onChange={(e) => handleSelectCahnge({ ...e, name: 'profession' })}
      options={professionOptions}
      styles={customStyles}
      // theme={(theme) => ({
      //   ...theme,
      //   borderRadius: '4px',
      //   colors: {
      //     ...theme.colors,
      //     primary: '#CCCCCC',
      //   },
      // })}
    />
    <Select
      className="flex-grow bg-gray-400"
      placeholder="תחום"
      name="field"
      defaultValue={inputs.field}
      onChange={(e) => handleSelectCahnge({ ...e, name: 'field' })}
      options={fieldnOptions}
    />
    <CheckboxGroup
      checks={filterByOptions}
      onChange={onCheckboxGroupChange}
      checkType={{ id: inputs.filterBy }}
      name="filterBy"
    />
  </div>
);
