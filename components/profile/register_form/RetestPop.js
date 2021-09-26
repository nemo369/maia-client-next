/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Popup from 'reactjs-popup';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Xcircle from '../../svg/Xcircle';
import Button from '../../common/Button';
import warningsign from '../../../public/images/warningsign.png';

const RetestPop = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('common');
  return (
    <Popup
      modal
      onClose={() => {
        setOpen(!open);
      }}
      trigger={
        <button
          type="button"
          className=""
          onClick={() => {
            setOpen(!open);
          }}
        >
          <button
            type="button"
            className="text-3xl font-bold"
            onClick={() => {
              setOpen(!open);
            }}
          >
            ope pop
          </button>
        </button>
      }
      //   nested
    >
      {(close) => (
        <div className=" w-[500px] h-[500px] bg-white text-xl leading-5 text-gray-active overflow-hidden rounded-lg ">
          <div className="w-[500px] h-[500px] bg-white grid px-1 pt-1 pb-5 rounded-md justify-items-center text-center gap-y-4">
            <button
              className="justify-self-start pr-2 pt-2"
              type="button"
              onClick={() => {
                close();
              }}
            >
              <Xcircle />
            </button>
            <Image src={warningsign} alt="מדליה" width={100} height={100} />
            <h1 className="text-[32px] text-black font-black">ביצוע מבחן חוזר "מה מעניין אותי"</h1>
            <p className="text-2xl px-5">{t('האם אתה בטוח שברצונך לאפס את התוצאות שהתקבלו?')}</p>
            <Button
              className="w-auto px-3"
              type="button"
              status="secondary"
              name="אפס תוצאות והתחל מחדש"
            />
            <button type="button" className="text-gray-active" onClick={() => close()}>
              סגור
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
export default RetestPop;
