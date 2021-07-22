import { useTranslation } from 'next-i18next';
import useFormStudy from '../../../src/hooks/useFormStudy';
import Button from '../Button';
import CategoryWithHeart from '../CategoryWithHeart';
import Check from '../Check';

const CompareSidePop = ({ open, setOpen, comparedCategorys, additionalStudies }) => {
  const { t } = useTranslation('common');
  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
    setOpen(!open);
  };
  const { inputs, handleChange } = useFormStudy({
    categories: '',
  });
  console.log(comparedCategorys);
  console.log(additionalStudies);
  console.log(inputs);
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
  console.log(List);

  return (
    <div className="grid copmare-SidePop">
      <button className="justify-self-start" type="button" onClick={close}>
        x
      </button>
      <div className="grid w-full pr-9">
        <div className="grid grid-cols-2">
          <div className="inline-block w-[116%]">
            <h1 className="text-[32px] leading-8 font-black">{t('השוואת מסלולי לימוד')}</h1>
            <p className="text-2xl leading-6 font-light ">
              {t(
                'מוסדות הלימוד המוצגים הם בהתאם לתוצאות סולם ההתקדמות שלך. ניתן לבחור עד 4 מסלולילימוד'
              )}
            </p>
          </div>
          <Button
            className="place-self-end px-5"
            type="button"
            status="main"
            name="השוואת מסלולים"
          />
        </div>
        <div className="grid study-sidePop-wrapper gap-y-8 pr-6 pt-5">
          {List.map((x) => (
            <Check
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
export default CompareSidePop;
