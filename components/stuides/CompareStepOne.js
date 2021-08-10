import { useTranslation } from 'next-i18next';
import Button from '../common/Button';
import Xcircle from '../svg/Xcircle';
import CategoryWithHeart from '../common/CategoryWithHeart';

const CompareStepOne = ({
  setOpen,
  open,
  additionalStudies,
  handleChange,
  handleCompare,
  inputs,
}) => {
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
      company={study.company}
      className="px-0 max-w-[666px] max-h-40"
    />
  ));
  // const handleChange11 = (id) => {
  //   const che = inputs.categories.includes(id.toString());
  //   handleChange();
  //   if (che) {
  //     return true;
  //   }
  // };

  // console.log(inputs);

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
            disabled={0 >= inputs.categories.length}
          />
        </div>
        <div className="grid study-sidePop-wrapper gap-y-8 pr-6 pt-5">
          {List.map((x, index) => (
            <label key={index} className="content-center check flex float-right">
              <input
                type="checkbox"
                value={x.props.id}
                name="categories"
                onChange={handleChange}
                className="self-center"
                defaultChecked={inputs.categories.includes(x.props.id.toString()) ? true : null}
              />
              <div className="check-text">{x}</div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CompareStepOne;
