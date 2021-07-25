import { useTranslation } from 'next-i18next';
import Button from '../Button';
import Xcircle from '../../svg/Xcircle';
import CategoryWithHeart from '../CategoryWithHeart';
import Check from '../Check';

const CompareStepOne = ({ setOpen, open, additionalStudies, handleChange, handleCompare }) => {
  const { t } = useTranslation('common');
  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
    setOpen(!open);
  };

  const List = additionalStudies.map((study) => (
    <CategoryWithHeart
      key={study.id}
      value={study.title}
      description={study.description}
      id={study.id}
      type="studies"
      company="מכללת עזריאלי"
      className="px-0 max-w-[666px] max-h-40"
    />
  ));

  return (
    <div className="grid copmare-SidePop">
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
          />
        </div>
        <div className="grid study-sidePop-wrapper gap-y-8 pr-6 pt-5">
          {List.map((x) => (
            <Check
              key={x.props.id}
              content={x}
              onChange={handleChange}
              value={x.props.id}
              name="categories"
              id={x.props.id}
              checkWrapper="content-center "
              className="self-center"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CompareStepOne;
