import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Select from 'react-select';
import useForm from '../../src/hooks/useForm';
import { addOrRemove } from '../../src/utils/util';
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

const jobScopes = [
  { name: 'מלאה', id: 'fulltime' },
  { name: 'חלקית', id: 'senpartialior' },
  { name: 'פרילנס', id: 'freelance' },
  { name: 'משמרות', id: 'shifts' },
];
const jobTypes = [
  { name: 'זמנית', id: 'temporarily' },
  { name: 'בכירים', id: 'senior' },
  { name: 'ממשלתית', id: 'governmental' },
  { name: 'עבודת לילה', id: 'nights' },
];
function JobsForm() {
  const { t } = useTranslation('common');

  const [loader, setLoader] = useState(false);
  const { inputs, handleChange } = useForm({
    profession: null,
    field: null,
    filterBy: 'ALL',
    locationType: 'CHOOSE_CITY', //WORK_FROM_HOME
    range: 5000,
    jobScopes: ['fulltime'],
    jobTypes: [],
  });
  const onCheckboxGroupChange = (value) => {
    handleChange({ target: { value, name: 'filterBy', type: 'filterBy' } });
  };
  const checkBoxChange = ({ id, name }) => {
    const value = addOrRemove(inputs[name], id);
    handleChange({ target: { value, name, type: 'array' } });
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
          <JobsLocation inputs={inputs} handleChange={handleChange} />
          <BottomForm inputs={inputs} checkBoxChange={checkBoxChange} />
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

const BottomForm = ({ inputs, checkBoxChange }) => (
  <div className="flex justify-around flex-grow mx-4">
    <div className="flex">
      <legend className="text-xl font-bold ml-6">היקף משרה</legend>
      <fieldset className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-5">
        {jobScopes.map((job) => (
          <label key={job.id} className="check flex items-center">
            <input
              checked={inputs.jobScopes?.includes(job.id)}
              type="checkbox"
              id={job.id}
              value={job.id}
              name={job.name}
              className="bg-white border border-gray-300 rounded-sm h-5 ml-3"
              onChange={(e) => checkBoxChange({ ...e.target, ...job, name: 'jobScopes' })}
            />
            <span>{job.name}</span>
          </label>
        ))}
      </fieldset>
    </div>
    <div className="flex">
      <legend className="text-xl font-bold ml-6">סוג משרה</legend>
      <fieldset className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-5">
        {jobTypes.map((job) => (
          <label key={job.id} className="check flex items-center">
            <input
              checked={inputs.jobTypes?.includes(job.id)}
              type="checkbox"
              id={job.id}
              value={job.id}
              name={job.name}
              className="bg-white border border-gray-300 rounded-sm h-5 ml-3"
              onChange={(e) => checkBoxChange({ ...e.target, ...job, name: 'jobTypes' })}
            />
            <span>{job.name}</span>
          </label>
        ))}
      </fieldset>
    </div>
  </div>
);
export default JobsForm;
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
const TopForm = ({ inputs, handleSelectCahnge, onCheckboxGroupChange }) => (
  <div className="flex gap-x-7 justify-between">
    <Select
      aria-label="מקצוע"
      label="מקצוע"
      className="flex-grow "
      placeholder="מקצוע"
      name="profession"
      defaultValue={inputs.profession}
      onChange={(e) => handleSelectCahnge({ ...e.target, name: 'profession' })}
      options={professionOptions}
      styles={customStyles}
    />

    <Select
      aria-label="תחום"
      label="תחום"
      className="flex-grow "
      placeholder="תחום"
      name="field"
      defaultValue={inputs.field}
      onChange={(e) => handleSelectCahnge({ ...e.target, name: 'field' })}
      options={fieldnOptions}
      styles={customStyles}
    />
    <CheckboxGroup
      checks={filterByOptions}
      onChange={onCheckboxGroupChange}
      checkType={{ id: inputs.filterBy }}
      name="filterBy"
    />
  </div>
);
