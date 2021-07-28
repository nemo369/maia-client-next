/* eslint-disable prettier/prettier */
// import { useTranslation } from 'next-i18next';
import React from 'react';
import PopUp from '../common/PopUp';
import Button from '../common/Button';
import Inputs from '../common/Inputs';
import Check from '../common/Check';
import Tooltip from '../common/Tooltip';

const ForMoreInfo = () => (
  <div>
    <PopUp defaultOpen>
      <PopupContent />
    </PopUp>
  </div>
);

export default ForMoreInfo;

const PopupContent = () => {
  const tooltipSendedJobs = '<span>סגירת מצב ״מחפש עבודה״ תציג אותך במצב לא פעיל אצל<br /> המעסקים שאליהם שלחת בקשה והם לא יכולו לראות את <br /> פרטיך האישיים.</span>';
  // const { t } = useTranslation('common');
  return (
    <div className="flex flex-col items-center justify-center py-4 px-10">
      <h2 className="text-center text-3xl font-bold text-gray-mid">נשארתם עם שאלה לא פתורה?</h2>
      <h2 className="text-center text-3xl font-medium text-gray-mid">מקדמי התעסוקה והלימודים ישמחו לסייע לכם.</h2>
      <div className="text-[22px] text-[#999999] text-center leading-6 mt-6">
        תהליך ליווי אישי עם מקדמי תעסוקה ו/או לימודים יכול לעשות
        <br />
        לכם סדר בדברים, לסייע לכם למקד את השאלות ולהגיע
        <br />
        למסקנות ממוקדות ומעשיות בבחירת מסלול לימודים ו/או
        <br />
        מקצוע לחיים
      </div>
      <div>
        <div className="text-gray-mid text-center text-[25px] font-bold my-[25px]">לפרטים נוספים צור קשר עם היועץ:</div>
        <div className="flex">
          <Inputs status="main" placeholder="שם מלא *" className="w-[200px] h-[50px]" />
          <Inputs status="main" placeholder="מייל *" className="w-[200px] h-[50px] mr-[6px]" />
          <Button className="h-[50px] w-[190px] mr-[7px]" status="main" name="שלח" />
        </div>

        <div className="flex mt-[15px] mr-[6px]">
          <Check content="אני מאשר/ת ליועץ לצפות בפרטים שלי" />
          <Tooltip
            trigger={
              <div className="relative smallpop w-4 h-4 border-solid border-[#666666] border-[1px] rounded-full font-small opacity-50  text-[#666666] text-xs mr-4 hover:bg-[#3C91A0] hover:opacity-100 hover:text-white inline-block text-center">
                ?
              </div>
            }
          >
            <div dangerouslySetInnerHTML={{ __html: tooltipSendedJobs }} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
