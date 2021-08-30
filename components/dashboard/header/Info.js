import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Button from '../../common/Button';

function Info() {
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
      <span className="rounded-full border border-gray-200 text-gray-200 w-5 inline-block leading-5 text-center text-sm mr-2 hover:text-[#01AAB2] hover:bg-white hover:border-[#01AAB2]">
        ?
      </span>
      {isOpen && (
        <div className="bubble bubble-right text-sm rounded shadow-sm w-[230px] right-[125%] z-10 text-right top-0 bottom-0 my-auto">
          <strong className="text-black font-bold">{t('הנתונים אינם סופיים.')}</strong>
          <p className="text-black/70 mb-2">
            {t('ככל שתתקדם בסולם ההתקדמות שלך,')}
            <br />
            {t('תוצאות מסלולי הלימוד והמקצועות שמוצגים בפניך יהיו יותר מדוייקים')}
          </p>
          <Button type="button" status="main" name="לשלב הבא" className="h-6 text-sm w-full" />
        </div>
      )}
    </button>
  );
}

export default Info;
