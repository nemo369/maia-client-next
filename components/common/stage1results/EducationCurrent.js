/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-one-expression-per-line */
import StarRating from './StarRating';

const EducationCurrent = (props) => {
  const { autobiographyData } = props;

  // eslint-disable-next-line operator-linebreak
  // const workExp = autobiographyData?.vendor_profile_test.map((x, index) => (
  const workExp = autobiographyData.map((x, index) => (
    <div className="flex border-b-2 pb-4 gap-y-[30px]" index={index}>
      <div className="w-full">
        <div className="flex justify-between">
          <p className="text-xl text-[#474747] max-w-[425px]">
            {x.categoryName}
            <span> {' '} </span>
            |<span> {' '} </span>
            {x.jobName}
          </p>
          <div className="stars-wrapper flex">
            <StarRating rating={x.starsValue} />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="bg-[#F5F5F5] grid py-[30px] px-5 gap-y-7 max-h-[427px] overflow-scroll">
      {workExp}
    </div>
  );
};
export default EducationCurrent;
