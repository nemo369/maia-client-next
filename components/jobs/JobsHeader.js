import { useTranslation } from 'next-i18next';
import { useState } from 'react';

function JobsHeader({ count = 21 }) {
  const [isOpen, setisOpen] = useState(false);

  const { t } = useTranslation('common');
  return (
    <header>
      <div className="flex items-center">
        <h1 className="text-4xl text-black ml-9 font-bold">{t('משרות פנויות')}</h1>
        <h2 className="py-1 px-4 rounded-lg text-white font-bold h-full text-xl bg-orange flex justify-center items-center">
          <span>נמצאו</span>
          <span className="mx-1">{count}</span>
          <span>משרות שיתיאימו לך</span>
          <button
            type="button"
            className="relative focus:outline-none flex justify-center items-center  mr-2 "
            onClick={() => setisOpen(!isOpen)}
            onMouseEnter={() => setisOpen(true)}
            onMouseLeave={() => setisOpen(false)}
          >
            <span className="font-normal rounded-full border border-white w-5 h-5 flex justify-center items-center text-sm ">
              ?
            </span>

            {isOpen && (
              <div className="bubble bubble-right text-sm rounded shadow-sm w-max right-[125%] z-10 text-right top-0 bottom-0 my-auto text-black">
                text
              </div>
            )}
          </button>
        </h2>
      </div>
      <p className="max-w-4xl text-xl my-5 leading-5">
        כאן תוכלו לקרוא על מקצועות ותפקידים שיכולים להתאים לכם או שמעניינים אתכם לקרוא עליהם. מאיה
        מציגה בפניכם את המקצועות המתאימים ביותר. השתמשו במסננים לקריאה על מקצועות נוספים.
      </p>
    </header>
  );
}

export default JobsHeader;
