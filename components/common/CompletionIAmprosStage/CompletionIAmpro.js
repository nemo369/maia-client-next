import { useContext } from 'react';
import { AppContext } from '../../../src/context/state';
import Stage2Top from './stage2Top';
import Stage2longTextArr from './Stage2longTextArr';

const CompletionIAmpro = () => {
  const { profile } = useContext(AppContext);
  const iamproData = profile?.vendor_profile_i_am_pro;
  const close = () => {
    if ('undefined' === typeof window) return;
    const el = document.querySelector('#close-modal-hack');
    el?.click();
  };
  return (
    <div className="stage1-wrapper grid">
      <Stage2Top close={close} iamproData={iamproData} />

      <hr className="dashed-stages my-5 h-[2px]" />

      <div className="stage1-middle-wrapper flex justify-around gap-x-[104px]">
        <div className="grid pt-[30px] gap-y-8 pl-24">
          <Stage2longTextArr iamproData={iamproData} />
        </div>
      </div>
    </div>
  );
};

export default CompletionIAmpro;
