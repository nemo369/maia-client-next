import { useTranslation } from 'next-i18next';
import Button from '../common/Button';
import PrinterGreySmall from '../svg/PrinterGreySmall';
import MailGreySmall from '../svg/MailGreySmall';
import Xcircle from '../svg/Xcircle';
import JustHeart from '../common/JustHeart';

const CompareStepTwo = ({ setOpen, open, setCompare, compare }) => {
  const { t } = useTranslation('common');
  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
    setOpen(!open);
  };
  const handleAddTrack = () => {
    setCompare(false);
    // clearForm();
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
              {t(compare[0]?.title)}
            </h1>
          </div>
          <div className="flex justify-self-end compare-c">
            <MailGreySmall />
            <PrinterGreySmall />
            <Button
              className="place-self-end px-5"
              type="button"
              status="main"
              name="הוסף מסלול "
              onClick={handleAddTrack}
            />
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] item3">
          {compare.map((x, index) => (
            <div key={index} className="grid gap-y-16 pt-4 mt-5 ">
              <div className="flex justify-between">
                <h1 className="study-logo">לוגו</h1>
                <JustHeart id={x.id} type="studies" />
              </div>
              <div className="grid gap-y-16 pt-4 mt-5 compare-wrapper">
                <div>
                  <h2 className="text-lg leading-5 text-gray">מוסדד לימודי</h2>
                  <h3 className=" font-bold text-lg leading-5">{t(x.institute)}</h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">{t(x.study_duration.title)}</h2>
                  <h3 className=" font-bold text-lg leading-5">{t(x.study_duration.text)}</h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">{t(x.prerquisites.title)}</h2>
                  <h3 className=" font-bold text-lg leading-5">{t(x.prerquisites.text)}</h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">
                    {t(x.certification_upon_complete.title)}
                  </h2>
                  <h3 className=" font-bold text-lg leading-5">
                    {t(x.certification_upon_complete.text)}
                  </h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">
                    {t(x.certification_upon_complete.title)}
                  </h2>
                  <h3 className=" font-bold text-lg leading-5">
                    {t(x.certification_upon_complete.text)}
                  </h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">הערות (למסלולי ההכשרה)</h2>
                  <h3 className=" font-bold text-lg leading-5">{t(x.prerquisites.text)}</h3>
                </div>
                <div>
                  <h2 className="text-lg leading-5 text-gray">
                    {t(x.candidate_start_registration.title)}
                  </h2>
                  <h3 className=" font-bold text-lg leading-5">
                    {t(x.candidate_start_registration.text)}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CompareStepTwo;
