/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-curly-brace-presence */
import Image from 'next/image';
import StarRating from './StarRating';
import medalStar from '../../../public/images/medalStar.png';

const StagesResultsWorkExperience = (props) => {
  const { stageData, medal, autobiographyData, profileData } = props;
  console.log(stageData);
  console.log(medal);
  console.log(autobiographyData);

  // eslint-disable-next-line operator-linebreak
  const warriorText =
    'חשוב שתדע שמסלול השירות שלך מקנה לך כישורים ומיומנויות חשובים לקראת השילוב בלימודים ובתעסוקה.';
  const medal1 = false;
  const workExp = profileData?.vendor_profile_test.map((x, index) => (
    <div className="flex border-b-2 pb-4 gap-y-[30px]">
      {medal1 && 0 === index && <Image src={medalStar} alt="מדליה" width={100} height={100} />}
      <div className={medal1 && 0 === index ? 'grid' : 'w-full'}>
        <div className="flex justify-between">
          <p className="text-xl text-[#474747] max-w-[425px]">
            {x.categoryName}
             |
            <span> {''} </span>
            {x.jobName}
          </p>
          <div className="stars-wrapper flex">
            <StarRating rating={x.starsValue} />
          </div>
        </div>

        {medal1 && 0 === index && (
          <p className="block text-xl text-[#474747] font-bold w-[93%]">{warriorText}</p>
        )}
      </div>
    </div>
  ));
  return (
    <div className="bg-[#F5F5F5] grid py-[30px] px-5 gap-y-7 max-h-[427px] overflow-scroll">
      {workExp}
    </div>
  );
};

export default StagesResultsWorkExperience;
