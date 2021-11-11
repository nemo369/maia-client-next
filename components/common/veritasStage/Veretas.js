/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-one-expression-per-line */
import { useContext } from 'react';
import { AppContext } from '../../../src/context/state';
import VeretasTop from './VeretasTop';
import VeretasEmploymentProfile from './VeretasEmploymentProfile';
import Stage2longTextArr from '../CompletionIAmprosStage/Stage2longTextArr';
import { ALL_IA_PRO_LOGOS } from '../../../src/utils/iamproLogos';

const dummyData = "מאפיין אנשים המוכוונים לפעול בסביבה מוגדרת ומובנית ושואפים לסדר, יציבות וכללים ברורים. לרוב, אנשים אלה משתלבים היטב במסגרות מובנות, המושתתות על חלוקת תפקידים ברורה והיררכיה ארגונית. הם מייחסים חשיבות רבה לעשייה איכותית ויסודית, ושומרים על סדר, ארגון ושיטתיות בעשייתם. הם מוכוונים להגיע בעבודתם לתוצרים ברורים ומדידים ולזכות במשובים אובייקטיביים על עשייתם.";
const Veretas = () => {
  const { profile } = useContext(AppContext);
  const iamproData = profile?.vendor_profile_i_am_pro;
  const veritasPersonaityData = profile?.vendor_profile?.userProfileResultsVeritas;

  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
  };

  const getImg = (imgCode) => {
    if (ALL_IA_PRO_LOGOS.includes(imgCode.toUpperCase())) {
      return <img src={`/iamprologos/${imgCode}.svg`} alt="logo" className="h-14 w-14" loading="lazy" />;
    }

    return <h4 className="text-3xl font-black text-gray-400">תמונה</h4>;
  };

  return (
    <div className="stage1-wrapper veritasWraper grid">
      <VeretasTop veretasData={iamproData} close={close} />

      <hr className="dashed-stages my-5 h-[2px]" />
      <p className="text-xl font-bold leading-[22px] text-center px-[100px]">
        בהתחשב בכל מה ששיתפת אותנו עד כה ועלה מתוך האתגרים שעברת, הנה סיכום המאפיינים הבולטים שלך
        שמהווים את ארגז הכלים איתו אתה יכול לצאת לדרך:
      </p>
      <div className=" bg-[#F5F5F5] py-8 px-8 grid gap-y-4 mx-10 mt-[22px]">
        <VeretasEmploymentProfile />
      </div>

      <div className="stage1-middle-wrapper flex justify-around gap-x-[104px]">
        <div className="grid pt-[30px] gap-y-8 pl-24">
          <Stage2longTextArr iamproData={iamproData} />
        </div>
      </div>
      <p className="text-xl font-bold justify-self-center ">המאפיינים העיקריים שלי</p>
      <div className="w-7 h-[3px] bg-green-500 justify-self-center mt-2 rounded" />
      <div className="flex flex-wrap pt-6 px-[10px] gap-y-[10px] gap-x-2 w-full">
        {veritasPersonaityData.map((personality, index) => (
          <a href={`#${index}`}>
            <span className="bg-[#F5F5F5] px-12 py-3 flex-shrink-0  text-xl rounded-md">
              {personality.name}
            </span>
          </a>
        ))}
      </div>
      {veritasPersonaityData.map((personality, index) => (
        <div className="py-8 px-8 7">
          <div className="pt-9 flex gap-x-7">
            {getImg(personality.code)}
            <div id={index}>

              <span className="text-[22px] font-bold text-green-500">{personality.name}:</span>
              <span>{" "}</span>
              <p className="text-[22px] inline">{dummyData}</p>
            </div>
            {/* <p className="text-[22px] inline">{personality.summary}</p> */}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Veretas;
