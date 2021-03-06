import Image from 'next/image';
import StarRating from './StarRating';
import worrior from '../../../public/images/worrior.png';

const StagesResultsWorkExperience = ({ medal, autobiographyData }) => (
  <div className="bg-[#F5F5F5] grid py-[30px] px-5 gap-y-7 max-h-[427px] overflow-auto">
    {autobiographyData.map((info, index) => (
      <WorkExp key={info.jobName} info={info} medal={medal} index={index} />
    ))}
  </div>
);

export default StagesResultsWorkExperience;

const WorkExp = ({ info, medal, index }) => {
  const warriorText = `חשוב שתדע שמסלול השירות שלך מקנה לך כישורים ומיומנויות חשובים 
  לקראת השילוב בלימודים ובתעסוקה.`;
  return (
    <div className="flex border-b-2 pb-4 gap-y-[30px] gap-x-2">
      <div className="warrior-wrapper">
        {medal && 0 === index && <Image className="worrior-img" src={worrior} alt="מדליה" />}
      </div>
      <div className={medal && 0 === index ? 'grid gap-y-2' : 'w-full'}>
        <div className="flex justify-between">
          <p className="text-xl text-[#474747] max-w-[425px]">
            {info.categoryName}
            <span className="mx-1">|</span>
            {info.jobName}
          </p>
          <div className="stars-wrapper flex">
            <StarRating rating={info.starsValue} />
          </div>
        </div>

        {medal && 0 === index && (
          <p className="block text-xl text-[#474747] font-bold w-[93%]">{warriorText}</p>
        )}
      </div>
    </div>
  );
};
