/* eslint-disable operator-linebreak */
import { useTranslation } from 'next-i18next';
import { useContext, useState } from 'react';
import useFormStudy from '../../src/hooks/useFormStudy';
import Group4 from '../svg/Group4';
import Button from '../common/Button';
import Check from '../common/Check';
import PopSide from '../common/PopSide';
import { studyData, areaData } from '../../src/utils/studyFilterData';
import CompareSidePop from './CompareSidePop';
import VendorAPI from '../../src/services/vendor.service';
import { AppContext } from '../../src/context/state';

const CompareDropdown = ({ professionIds }) => {
  const { t } = useTranslation('common');
  const { user } = useContext(AppContext);

  const [studies, setStudies] = useState([]);
  const filteredCategories = async (dataToSend) => {
    const { data } = await VendorAPI.getCategorys(user.token, 'studies', dataToSend);
    setStudies(data);
  };
  const { inputs, handleChange } = useFormStudy({
    professionIds,
    drishot: [],
    teuda: [],
    meshech: [],
    miuhad: [],
    area: ['1'],
  });
  const [open, setOpen] = useState(false);
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
      <button
        type="button"
        tabIndex={0}
        value="222"
        aria-label=""
        onClick={handelClick}
        onKeyDown={handelClick}
        className="relative h-10 w-full rounded pr-4 border-none text-gray-text dropit"
      >
        <Group4
          container={group4fill ? 'fill-current text-green-500 opacity-100' : ''}
          content={group4fill ? 'fill-current text-white' : ''}
        />
        <span className="mr-2 font-bold text-base leading-4 text-black">{t('השוואת מסלולים')}</span>
      </button>
      {open && (
        <form
          onSubmit={handleSubmit}
          className="bg-white study-form p-5 absolute text-black shadow-2xl grid min-h-[252px] top-12 z-40 rounded-lg w-full gap-5 right-0"
        >
          <div className="triangle" />
          <div className="flex gap-4 justify-evenly">
            {studyData.map((column) => (
              <div key={column.text} className="w-full wrapper-border max-w-[340px]">
                <h3 className="font-bold text-xl leading-5">{t(column.text)}</h3>

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
          <div className="flex flex-wrap justify-between items-end">
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
            <PopSide
              trigger={
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
                  onClick={handleSubmit}
                  className="w-24"
                  type="button"
                  status="main"
                  name="חיפוש"
                />
              }
            >
              <CompareSidePop
                comparedCategorys={inputs}
                open={open}
                setOpen={setOpen}
                studies={studies}
              />
            </PopSide>
          </div>
        </form>
      )}
    </div>
  );
};

export default CompareDropdown;
