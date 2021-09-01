import { useTranslation } from 'next-i18next';
import Button from '../common/Button';
import PrinterGreySmall from '../svg/PrinterGreySmall';
import MailGreySmall from '../svg/MailGreySmall';
import Xcircle from '../svg/Xcircle';
import JustHeart from '../common/JustHeart';
import { ALL_LOGOS } from '../../src/utils/allLogos';

const CompareStudiesResult = ({ setOpen, setCompare, studies }) => {
  const { t } = useTranslation('common');
  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
    setOpen(false);
  };
  const handleAddTrack = () => {
    setCompare(false);
  };
  const getImg = (data) => {
    const types = ['jpg', 'png', 'jpeg'];
    let type = null;
    types.forEach((imgType) => {
      if (ALL_LOGOS.includes(`${data.mosnum}.${imgType}`)) {
        type = imgType;
      }
    });

    if (type) {
      return <img src={`/logos/${data.mosnum}.${type}`} alt="logo" height="54" loading="lazy" />;
    }
    return <h4 className="text-5xl font-black text-[#F4F4F4]">לוגו</h4>;
  };
  return (
    <div className="grid step-two-wrapper">
      <button className="justify-self-start" type="button" onClick={close}>
        <Xcircle />
      </button>
      <div className="grid w-full pr-9 gap-y-9">
        <div className="grid grid-cols-2">
          <div className="inline-block w-[116%]">
            <p className="text-2xl leading-6 font-light ">{t('רשימת מסלולי לימוד להשוואה')}</p>
            <h1 className="text-[32px] text-green-500 leading-8 font-black">
              {t(studies[0]?.title)}
            </h1>
          </div>
          <div className="flex justify-self-end compare-c">
            <MailGreySmall />
            <PrinterGreySmall />
            <Button
              className="place-self-end px-5"
              type="button"
              status="main"
              name={t('הוסף מסלול')}
              onClick={handleAddTrack}
            />
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] align-baseline compare-wrapper ">
          {studies.map(({ full_data: data }) => (
            <div key={data.iD_Num} className="grid gap-y-16 pt-4 mt-5 compare-wrapper-map px-4">
              <div className="flex justify-between">
                <h1 className="study-logo">
                  {getImg(data)}
                  <div className="sr-only">לוגו</div>
                </h1>
                <JustHeart id={data.iD_Num} type="studies" />
              </div>
              <div className="grid gap-y-16 pt-4 mt-5  max-w-[250px]">
                <div>
                  <h2 className="text-lg leading-5 text-gray ">מוסד לימודי</h2>
                  <h3 className=" font-bold text-lg leading-5">{data.mosname}</h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">משך הלימודים</h2>
                  <h3 className=" font-bold text-lg leading-5">{data.meshech}</h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">דרישות מוקדמות</h2>
                  <h3 className=" font-bold text-lg leading-5">{data.drishot}</h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">תעודות בסיום</h2>
                  <h3 className=" font-bold text-lg leading-5">{data.teudA_TEUR}</h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">הערות (למסלולי ההכשרה)</h2>
                  <h3 className=" font-bold text-lg leading-5">{data.hearot}</h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">מועד תחילת הלימודים </h2>
                  <h3 className=" font-bold text-lg leading-5"> </h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">מועד אחרון לפסיכומטרי </h2>
                  <h3 className=" font-bold text-lg leading-5"> </h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">גובה שכר לימוד </h2>
                  <h3 className=" font-bold text-lg leading-5"> </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CompareStudiesResult;
