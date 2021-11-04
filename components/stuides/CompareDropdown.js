/* eslint-disable operator-linebreak */
import { useState } from 'react';
import useFormStudy from '../../src/hooks/useFormStudy';
import { areaData, studyData } from '../../src/utils/studyFilterData';
import Button from '../common/Button';
import Check from '../common/Check';
import PopSide from '../common/PopSide';
import Group4 from '../svg/Group4';
import Refresh from '../svg/Refresh';
import CompareSidePop from './CompareSidePop';

const CompareDropdown = ({ professionIds, fetchCaegorysWithParams, studies }) => {
  const [open, setOpen] = useState(false);

  const [loading, setloading] = useState(false);
  const filteredCategories = async (dataToSend) => {
    setloading(true);
    fetchCaegorysWithParams(dataToSend);
    setloading(false);
    setOpen(false);
  };
  const { inputs, handleChange } = useFormStudy({
    professionIds,
    drishot: [],
    teuda: [],
    meshech: [],
    miuhad: [],
    area: ['1'],
  });
  const [group4fill, setGroup4fill] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    filteredCategories(inputs);
  };

  const handelClick = () => {
    setOpen(!open);
    setGroup4fill(!group4fill);
  };

  return (
    <div className="max-h-28 grid">
      <div className="flex gap-x-3">
        <button
          type="button"
          tabIndex={0}
          value="222"
          aria-label=""
          onClick={handelClick}
          onKeyDown={handelClick}
          className="relative h-10 flex justify-center items-center rounded px-2 border-none text-white bg-green-500 transform rotate-90"
        >
          <Group4 />
        </button>
        <PopSide
          trigger={
            <button
              type="button"
              className="mr-2 font-bold text-base leading-4 text-black flex items-center gap-x-1"
            >
              <Refresh />
              <span>השוואת מסלולים</span>
            </button>
          }
        >
          <CompareSidePop
            loading={loading}
            comparedCategorys={inputs}
            open={open}
            setOpen={setOpen}
            studies={studies}
          />
        </PopSide>
      </div>

      {open && (
        <form
          onSubmit={handleSubmit}
          className={`
          transition
          ${loading ? 'text-opacity-10 bg-gray-100' : ''}
          bg-white study-form p-5 absolute text-black shadow-2xl grid min-h-[252px] max-h-[75vh] top-12 z-40 rounded-lg w-full gap-5 right-0 overflow-auto `}
        >
          <div className="triangle" />
          <div className="flex gap-4 justify-evenly">
            {studyData.map((column) => (
              <div key={column.text} className="w-full wrapper-border max-w-[340px]">
                <h3 className="font-bold text-xl leading-5">{column.text}</h3>

                <div className="grid  checkdropdown mt-5 gap-y-5">
                  {column.options.map((study) => (
                    <Check
                      name={column.name}
                      key={study.id}
                      id={study.id}
                      value={study.id}
                      className="p-1 w-4 h-4"
                      content={study.text}
                      textClass=""
                      onChange={handleChange}
                      wraperClass="pl-4 "
                      isChecked={inputs[column.name].includes(study.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-between items-end pb-6">
            <div className="checkdropdown1">
              <h3 className="text-xl leading-5 font-bold mb-3">אזור</h3>
              {areaData.map((area) => (
                <Check
                  key={area.id}
                  className="p-1 mr-3 cheche"
                  onChange={handleChange}
                  value={area.id}
                  name={area.name}
                  content={area.title}
                  textClass="text-base mr-3 relative"
                  wraperClass="pl-4"
                  id={area.id}
                  isChecked={inputs.area.includes(area.id)}
                />
              ))}
            </div>
            <Button
              disabled={
                !(
                  inputs.drishot.length ||
                  inputs.teuda.length ||
                  inputs.meshech.length ||
                  inputs.miuhad.length ||
                  inputs.area.length
                )
              }
              className="w-24"
              type="submit"
              status="main"
              name="חיפוש"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default CompareDropdown;
