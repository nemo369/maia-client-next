import { useTranslation } from 'next-i18next';
import { useState } from 'react';

function CategoryTooltip({ name }) {
  const [isOpen, setisOpen] = useState(false);
  const { t } = useTranslation('common');
  return (
    <button
      type="button"
      className="relative focus:outline-none"
      onClick={() => setisOpen(!isOpen)}
      onMouseEnter={() => setisOpen(true)}
      onMouseLeave={() => setisOpen(false)}
    >
      <div className="mr-[8px] mb-[5px] font-normal rounded-full border border-black/50 w-[19px] h-[19px] flex justify-center items-center text-sm text-black/50 hover:bg-[#3EA8B1] hover:text-white hover:border-none">
        ?
      </div>
      {isOpen && (
        <div className="bubble bubble-right text-sm rounded shadow-sm w-[150px] right-[125%] z-20 text-right top-0 bottom-0 my-auto">
          <p className="text-black/70">
            {t(`${name} שיכולים`)}
            <br />
            {t('להתאים לך בהתבסס')}
            <br />
            {t('לנתונים שהוזנו עד כה')}
          </p>
        </div>
      )}
    </button>
  );
}

export default CategoryTooltip;
