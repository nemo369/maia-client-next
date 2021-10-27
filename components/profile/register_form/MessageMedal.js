import { useState } from 'react';
import Popup from 'reactjs-popup';
import Image from 'next/image';
import Xcircle from '../../svg/Xcircle';
import Button from '../../common/Button';
import worrior from '../../../public/images/worrior.png';

const MessageMedal = () => {
  const [open, setOpen] = useState(true);

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
            <Image className="w-10 h-10 z-20" src={worrior} alt="מדליה" />
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
            <Image src={worrior} alt="מדליה" width={100} height={100} />
            <h1 className="text-[32px] font-black">לוחם? כבוד!</h1>
            <p className="text-2xl px-5">
              חשוב שתדע שמסלול השירות שלך מקנה לך כישורים ומיומנויות חשובים לקראת השילוב בלימודים
              ובתעסוקה. מאיה לוקחת אותם בחשבון בהערכת ההתאמה שלך למסלולים השונים.
            </p>
            <Button
              className="w-32"
              type="button"
              status="secondary"
              name="סגור"
              onClick={() => {
                close();
              }}
            />
          </div>
        </div>
      )}
    </Popup>
  );
};
export default MessageMedal;
