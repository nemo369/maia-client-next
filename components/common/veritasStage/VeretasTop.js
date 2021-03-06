/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Xcircle from '../../svg/Xcircle';
import Button from '../Button';
import envelope from '../../../public/images/envelope.png';
import smallprinter from '../../../public/images/smallprinter.png';
import { AppContext, useAppContext } from '../../../src/context/state';
// import { ALL_IA_PRO_LOGOS } from '../../../src/utils/iamproLogos';
import Infoservice from '../../../src/services/info.service';

const VeretasTop = ({ close }) => {
  const { profile, user } = useAppContext(AppContext);
  const iamproData = profile?.vendor_profile_i_am_pro;
  // const getImg = (imgCode) => {
  //   if (ALL_IA_PRO_LOGOS.includes(imgCode.toUpperCase())) {
  //     return (
  //       <img src={`/logos/${imgCode.toUpperCase()}.svg`} alt="logo" height="54" loading="lazy" />
  //     );
  //   }

  //   return <h4 className="text-5xl font-black text-[#F4F4F4]">תמונה</h4>;
  // };
  const printVeritas = () => {
    window.print();
  };
  const sendPdf = async () => {
    const documentWrapper = document.querySelector('.veritasWraper').innerHTML;
    await Infoservice.sendPdf(documentWrapper, user.token);
  };

  const dataiampro = iamproData.longTextArr.map((professionArr) => (
    <div className="flex pb-4 veritas-links-wrappers gap-x-12">
      <div className="flex gap-x-5">
        {/* {getImg(professionArr.img_src)} */}
        <img width="30" height="30" loading="lazy" src="/images/powerplant.svg" alt="powerplant" />
        <div className="grid text-right gap-y-[5px]">
          <p className="text-base text-[#333333] opacity-50 leading-4 font-bold">
            מה כדאי לי ללמוד:
          </p>
          <h3 className=" font-black text-[22px] leading-6">חסר</h3>
          <div className="h-1 bg-green-500 pt-1 rounded-lg w-8" />
        </div>
      </div>
      <div className="grid text-right">
        <p className="text-base text-[#333333] opacity-50 leading-4 font-bold">במה עובדים:</p>
        <div className="flex veritas-links gap-x-4">
          <a href="">{professionArr.professions}</a>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="stage-top-wrapper flex justify-between">
        <button className="self-start" type="button" onClick={close}>
          <Xcircle />
        </button>
        <div className="flex gap-x-2">
          <div className="grid justify-center">
            <h1 className="text-3xl font-bold text-center text-black"> דוח תוצאות מסכם</h1>
            <h2 className="text-3xl text-[#333333] justify-self-center">
              "היכולות שלי + מה מתאים לי"
            </h2>
            <div className="text-center grid gap-y-5 py-8 mx-8">
              <div className="mt-[]">
                <p className="text-xl text-[#393939] font-semibold">
                  עכשיו כשמאיה קיבלה את כל הנתונים אפשר לסכם את התוצאות!
                </p>
                <p className="text-xl text-[#393939]">
                  בהתבסס על השלבים שעברת וממצאי האבחון הכוללים את שלבים 'מה עשיתי עד כה', 'מה מעניין
                  אותי' ו-"מה היכולות שלי", מאיה שמחה להציג בפניך את אפשרויות הלימוד המתאימות עבורך
                  ואת התפקידים שנמצאו מתאימים עבורך
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-x-2">
            <Button
              className="px-2 flex min-w-[135px] flex-row-reverse justify-center items-center gap-x-[5px] rounded-md h-10"
              type="button"
              status="secondary"
              name="שליחה למייל"
              onClick={sendPdf}
            >
              <Image src={envelope} alt="מעטפה" width={25} height={25} />
            </Button>
            <Button
              className="px-2 flex flex-row-reverse justify-center items-center gap-x-[5px] rounded-md h-10"
              type="button"
              status="secondary"
              name="הדפסה"
              onClick={printVeritas}
            >
              <Image src={smallprinter} alt="מעטפה" width={25} height={25} />
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center bg-[#F5F5F5] py-8 px-8 grid gap-y-4 mx-10">{dataiampro}</div>
    </>
  );
};
export default VeretasTop;
