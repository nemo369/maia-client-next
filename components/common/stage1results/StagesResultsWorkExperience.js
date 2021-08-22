import Image from 'next/image';
import { useState } from 'react';
// import LittleStar from '../LittleStar';
import StarRating from './StarRating';
import medalStar from '../../../public/images/medalStar.png';

const StagesResultsWorkExperience = (props) => {
  const { stageData, medal } = props;
  const medal1 = true;
  console.log(stageData);
  const [dummy, setDummy] = useState(true);
  return (
    <div className="bg-[#F5F5F5] grid py-[30px] px-5 gap-y-7 max-h-[427px] overflow-scroll">
      <div className="flex border-b-2 pb-4 gap-y-[30px]">
        {medal1 ? <Image src={medalStar} alt="מדליה" width={100} height={100} /> : null}
        <div className="grid">
          <div className="flex justify-between">
            <p className="text-xl text-[#474747]">{stageData ? stageData[0] : 'hello'}</p>
            <div className="stars-wrapper flex">
              <StarRating />
            </div>
          </div>

          <p className="block text-xl text-[#474747] font-bold w-[93%]">
            {stageData ? stageData[1] : 'hello'}
          </p>
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
      </div>
    </div>
  );
};

export default StagesResultsWorkExperience;
