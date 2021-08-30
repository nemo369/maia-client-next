import Image from 'next/image';
import StarRating from './StarRating';
import medalStar from '../../../public/images/medalStar.png';

const StagesResultsWorkExperience = (props) => {
  const { stageData, medal, autobiographyData, profileData } = props;
  console.log(medal);
  console.log(profileData);
  const warriorText =    'חשוב שתדע שמסלול השירות שלך מקנה לך כישורים ומיומנויות חשובים לקראת השילוב בלימודים ובתעסוקה.';
  const medal1 = false;
  const workExp = profileData?.vendor_profile_test.map((x, index) => (
    <div className="flex border-b-2 pb-4 gap-y-[30px]">
      {medal1 && 0 === index && <Image src={medalStar} alt="מדליה" width={100} height={100} />}
      <div className={medal1 && 0 === index ? 'grid' : 'w-full'}>
        <div className="flex justify-between">
          <p className="text-xl text-[#474747] max-w-[425px]">
            {x.categoryName}
{' '}
|<span> 
{' '}
{''}
{' '}
 </span>
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
      {/* <div className="flex border-b-2 pb-4 gap-y-[30px]">
        {medal1 ? <Image src={medalStar} alt="מדליה" width={100} height={100} /> : null}
        <div className="grid">
          <div className="flex justify-between">
            <p className="text-xl text-[#474747]">{stageData ? stageData[0] : 'hello'}</p>
            <div className="stars-wrapper flex">
              <StarRating />
            </div>
          </div>
          {medal1 && (
            <p className="block text-xl text-[#474747] font-bold w-[93%]">
              {stageData ? stageData[1] : 'hello'}
            </p>
          )}
        </div>
      </div>
      <div className="flex border-b-2 justify-between pb-4 text-xl text-[#474747]">
        <p>{stageData ? stageData[2] : 'hello'}</p>
        <div className="stars-wrapper flex">
          <StarRating />
        </div>
      </div>
      <div className="border-b-2  text-xl text-[#474747] pb-4">
        <p>{stageData ? stageData[3] : 'hello'}</p>
      </div>
      <div className=" text-xl text-[#474747]">
        <p>{stageData ? stageData[4] : 'hello'}</p>
      </div> */}
    </div>
  );
};

export default StagesResultsWorkExperience;
