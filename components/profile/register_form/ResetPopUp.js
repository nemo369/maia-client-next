import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Button from '../../common/Button';
import Xcircle from '../../svg/Xcircle';
import Loader from '../../common/Loader';
import warning from '../../../public/images/warning.png';

function ResetPopUp({ isOpen, loading, startTest, setIsOpen }) {
  const { t } = useTranslation('common');

  return (
    <div
      className={`${
        isOpen ? '' : 'hidden'
      } fixed w-full h-screen z-50 bg-gray-400/50 flex items-center justify-center inset-0`}
    >
      <div className="relative w-[500px] h-[500px] bg-white text-xl leading-5 text-gray-active overflow-hidden rounded-lg ">
        <div className="w-[500px] h-[500px] bg-white grid px-1 pt-1 pb-5 rounded-md justify-items-center text-center gap-y-4">
          <button
            className="justify-self-start pr-2 pt-2"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <Xcircle />
          </button>
          <Image src={warning} alt="שימו לב" width={100} height={100} />
          <h1 className="text-[32px] text-black font-black">
            ביצוע שאלון חוזר &quot;מה מעניין אותי&quot;
          </h1>
          <p className="text-2xl px-5">{t('האם אתה בטוח שברצונך לאפס את התוצאות שהתקבלו?')}</p>
          <a onClick={startTest} href="#" className="relative " target="_blank" rel="noreferrer">
            {loading ? (
              <div className=" inset-auto w-full h-full flex justify-center items-center bg-white/70">
                <Loader loading={loading} />
              </div>
            ) : (
              <Button
                className="h-[50px] w-[240px]"
                status="secondary"
                name={t('אפס תוצאות והתחל מחדש')}
              />
            )}
          </a>
          <button type="button" className="text-gray-active" onClick={() => setIsOpen(false)}>
            ביטול
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPopUp;
