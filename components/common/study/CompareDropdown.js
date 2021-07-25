import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import useFormStudy from '../../../src/hooks/useFormStudy';
import Group4 from '../../svg/Group4';
import Button from '../Button';
import Check from '../Check';
import PopSide from '../PopSide';
import { StudyData } from '../StudyData';
import CompareSidePop from './CompareSidePop';

const CompareDropdown = (props) => {
  const { filteredCategories, comparedCategorys, additionalStudies } = props;
  const { t } = useTranslation('common');

  const { inputs, handleChange } = useFormStudy({
    drishot: '',
    teuda: '',
    meshech: '',
    miuhad: '',
    area: '',
  });
  const [open, setOpen] = useState(false);
  const { studyData, areaData } = StudyData();
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
          className="bg-white study-form p-5 absolute text-black shadow-2xl grid min-h-[252px] top-12 z-40 rounded-lg w-full gap-5"
        >
          <div className="triangle" />
          <div className="flex justify-around gap-4">
            {studyData.map((x) => (
              <div className="w-full wrapper-border">
                <h3 className="font-bold text-xl leading-5">{t(x.text)}</h3>

                <div className="grid grid-cols-2   checkdropdown mt-5 gap-y-5">
                  {x.options.map((y) => (
                    <Check
                      name={x.name}
                      id={y.id}
                      value={y.id}
                      onChange={handleChange}
                      className="pll p-1  w-4 h-4"
                      content={t(y.text)}
                      textClass="text-sm mr-3 relative"
                      wraperClass="pl-4"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-between items-end">
            <div className="checkdropdown1">
              <h3 className="text-xl leading-5 font-bold mb-3">אזור</h3>
              {areaData.map((x) => (
                <Check
                  className="p-1 mr-3 cheche"
                  onChange={handleChange}
                  value={x.id}
                  name={x.name}
                  content={t(x.title)}
                  textClass="text-base mr-3 relative"
                  wraperClass="pl-4"
                  id={x.id}
                />
              ))}
            </div>
            <PopSide
              trigger={
                <Button
                  onClick={handleSubmit}
                  className="w-24"
                  type="button"
                  status="main"
                  name="חיפוש"
                />
              }
            >
              <CompareSidePop
                comparedCategorys={comparedCategorys}
                open={open}
                setOpen={setOpen}
                //לבנתיים//
                additionalStudies={additionalStudies}
              />
            </PopSide>
          </div>
        </form>
      )}
    </div>
  );
};

export default CompareDropdown;
