/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Xcircle from '../../svg/Xcircle';
import Button from '../Button';
import envelope from '../../../public/images/envelope.png';
import smallprinter from '../../../public/images/smallprinter.png';

const VeretasTop = ({ veretasData, close }) => {
  console.log(veretasData);

  const dd = () => {
    const dummyData = [
      {
        title: 'מה כדי לי ללמוד:',
        titleText: 'תכנות',
        subTitle: 'במה עובדים:',
        subText: ['איש.אשת אלגוריטמיקה', 'ארכיטקט/ית'],
      },
      {
        title: 'מה כדי לי ללמוד:',
        titleText: 'אוטוטרוניקה',
        subTitle: 'במה עובדים:',
        subText: ['איש.אשת אלגוריטמיקה', 'ארכיטקט/ית'],
      },
    ];

    const ff = dummyData.map((x) => (
      <div className="flex pb-4 veritas-links-wrappers gap-x-12">
        <div className="flex gap-x-5">
          <img
            width="30"
            height="30"
            loading="lazy"
            src="/images/powerplant.svg"
            alt="powerplant"
          />
          <div className="grid text-right gap-y-[5px]">
            <p className="text-base text-[#333333] opacity-50 leading-4 font-bold">
              מה כדי לי ללמוד:
            </p>
            {/* <p className="text-base text-[#333333] opacity-50 leading-4 font-bold">{x.title}</p> */}
            <h3 className=" font-black text-[22px] leading-6">{x.titleText}</h3>
            <div className="h-1 bg-green-500 pt-1 rounded-lg w-8" />
          </div>
        </div>
        <div className="grid text-right">
          <p className="text-base text-[#333333] opacity-50 leading-4 font-bold">במה עובדים:</p>
          {/* <p className="text-base text-[#333333] opacity-50 leading-4 font-bold">{x.subTitle}</p> */}
          <div className="flex veritas-links gap-x-4">
            {x.subText.map((y) => (
              <a href="https://www.w3schools.com">{y}</a>
            ))}
          </div>
        </div>
      </div>
    ));

    return ff;
  };

  return (
    <>
      <div className="stage-top-wrapper flex justify-between">
        <button className="self-start btnwrapper-stage" type="button" onClick={close}>
          <Xcircle />
        </button>
        <div className="grid justify-center">
          <h1 className="text-3xl font-bold text-center text-[#d4cbcb]">דוח תוצאות</h1>
          <h2 className="text-3xl text-[#333333]">"היכולות שלי + מה מתאים לי"</h2>
        </div>
        <div className="flex gap-x-2">
          <Button
            className="w-24 flex justify-center items-center gap-x-[5px]"
            type="button"
            status="secondary"
            name="עריכה"
          >
            <Image src={envelope} alt="מעטפה" width={25} height={25} />
          </Button>
          <Button
            className="w-24 flex justify-center items-center gap-x-[5px]"
            type="button"
            status="secondary"
            name="עריכה"
          >
            <Image src={smallprinter} alt="מעטפה" width={25} height={25} />
          </Button>
        </div>
      </div>

      <div className="text-center py-8 mt-7 mx-8">
        <p className="text-xl text-[#393939] font-semibold">
          עכשיו כשמאיה קיבלה את כל הנתונים אפשר לסכם את התוצאות!
        </p>
        <p className="text-xl text-[#393939]">
          בהתבסס על השלבים שעברת וממצאי האבחון הכוללים את שלבים 'מה עשיתי עד כה', 'מה מעניין אותי'
          ו-"מה היכולות שלי", מאיה שמחה להציג בפניך את אפשרויות הלימוד המתאימות עבורך ואת התפקידים
          שנמצאו מתאימים עבורך
        </p>
      </div>

      <div className="text-center bg-[#F5F5F5] py-8 px-8 grid gap-y-4 mx-10">
        {dd()}
        {/* <p className="text-xl text-[#393939]">{veretasData?.stage1?.top.secondText}</p> */}
      </div>
    </>
  );
};
export default VeretasTop;
