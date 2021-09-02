import { useContext } from 'react';
import { AppContext } from '../../../src/context/state';
import VeretasTop from './VeretasTop';
import VeretasEmploymentProfile from './VeretasEmploymentProfile';

const Veretas = () => {
  const { profile } = useContext(AppContext);
  const iamproData = profile?.vendor_profile_i_am_pro;
  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
  };

  return (
    <div className="stage1-wrapper grid">
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
        <div className="grid pt-[30px] gap-y-8">
          {/* <Stage2longTextArr iamproData={iamproData} /> */}
        </div>
      </div>
    </div>
  );
};

export default Veretas;
