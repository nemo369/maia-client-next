import ClearMark from '../../svg/ClearMark';
import { ALL_IA_PRO_LOGOS } from '../../../src/utils/iamproLogos';

const Stage2longTextArr = (props) => {
  const getImg = (imgSrc) => {
    const imgPaths = imgSrc.split('/');
    const imgCode = imgPaths.reverse()[0].replace('.png', '');
    if (ALL_IA_PRO_LOGOS.includes(imgCode)) {
      return <img src={`/iamprologos/${imgCode}.svg`} alt="logo" height="54" loading="lazy" />;
    }
    return '';
  };
  const { iamproData } = props;

  const data = iamproData?.longTextArr.map((x) => (
    <div className="grid" key={x.img_src}>
      <div className="flex gap-x-12">
        <div className="flex-grow">{getImg(x.img_src)}</div>
        <div className="grid gap-y-12">
          <div className="grid">
            <h3 className="font-bold text-[22px] text-[#00A4AE] pb-4">{x.labelText}</h3>
            <p className="text-xl text-[#393939]">{x.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-y-4 gap-x-1">
            <div className="stage2-marks">
              <ClearMark />
              <div className="grid gap-y-2">
                <p className="text-xl font-black leading-5">קישורים אופיינים</p>
                <p className="text-lg">{x.integrate}</p>
              </div>
            </div>
            <div className="stage2-marks">
              <ClearMark />
              <div className="grid gap-y-2">
                <p className="text-xl font-black leading-5">קישורים אופיינים</p>
                <p className="text-lg">{x.personality_traits}</p>
              </div>
            </div>
            <div className="stage2-marks">
              <ClearMark />
              <div className="grid gap-y-2">
                <p className="text-xl font-black leading-5">קישורים אופיינים</p>
                <p className="text-lg">{x.professions}</p>
              </div>
            </div>
            <div className="stage2-marks">
              <ClearMark />
              <div className="grid gap-y-2">
                <p className="text-xl font-black leading-5">קישורים אופיינים</p>
                <p className="text-lg">{x.skills}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="full-divider my-5 h-[2px] " />
    </div>
  ));

  // return data;
  return <>{data}</>;
};
export default Stage2longTextArr;
