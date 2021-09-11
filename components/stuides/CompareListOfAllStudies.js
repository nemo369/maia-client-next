import { useTranslation } from 'next-i18next';
import Button from '../common/Button';
import Xcircle from '../svg/Xcircle';
import Check from '../common/Check';

const CompareListOfAllStudies = ({ setOpen, studies, handleChange, handleCompare, inputs }) => {
  const { t } = useTranslation('common');
  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
    setOpen(true);
  };

  return (
    <div className="grid ">
      <button className="justify-self-start" type="button" onClick={close}>
        <Xcircle />
      </button>
      <div className="grid w-full pr-9">
        <div className="grid grid-cols-2">
          <div className="inline-block w-[116%]">
            <h1 className="text-[32px] text-green-500 leading-8 font-black">
              {t('השוואת מסלולי לימוד')}
            </h1>
            <p className="text-2xl leading-6 font-light ">
              {t(
                'מוסדות הלימוד המוצגים הם בהתאם לתוצאות סולם ההתקדמות שלך. ניתן לבחור עד 4 מסלולי לימוד'
              )}
            </p>
          </div>
          <Button
            className="place-self-end px-5"
            type="button"
            status="main"
            name="השוואת מסלולים"
            onClick={handleCompare}
            disabled={0 >= inputs.categories.length || 4 < inputs.categories.length}
          />
        </div>
        <div className="grid  gap-y-8 pt-5">
          {studies.map((study) => (
            <div className="flex items-center">
              <Check
                name="categories"
                key={study.id}
                className="big-check"
                value={study.id}
                content=""
                textClass="text-lg"
                checkWrapper="ml-4 big-check"
                onChange={handleChange}
                isChecked={inputs.categories.includes(study.id)}
              />
              <div
                className={`bg-white  rounded-2xl border border-[rgba(151,151,151,0.13)]
      px-4 py-5 flex flex-col justify-between shadow-md w-full`}
              >
                <h5 className=" text-gray-active text-[18px] text-right">{study.company}</h5>
                <div className="flex justify-between">
                  <h4 className=" font-bold text-[18px] text-[#333333] text-right max-w-[465px]">
                    {study.title}
                  </h4>
                </div>
                <div className="dash border-b-[1px] border-dashed border-[#979797] opacity-20 w-full h-1" />
                <p
                  className="description  text-black tracking-normal font-normal opacity-70 leading-[18px] text-lg mt-[10px] text-right max-w-[465px]"
                  dangerouslySetInnerHTML={{ __html: study.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CompareListOfAllStudies;
