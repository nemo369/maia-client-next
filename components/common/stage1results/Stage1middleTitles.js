import CurrentEducation from './CurrentEducation';
import JobExperienceBtn from './JobExperienceBtn';
import WhereIWantToGo from './WhereIWantToGo';

const Stage1middleTitles = ({ changeType, jobActive, eductionActive, goActive }) => (
  <div className="flex flex-col gap-y-9  mt-9 bg-white  pr-2 text-[22px] text-gray-text  w-[20%]">
    <JobExperienceBtn jobActive={jobActive} changeType={changeType} />
    <CurrentEducation eductionActive={eductionActive} changeType={changeType} />
    <WhereIWantToGo goActive={goActive} changeType={changeType} />
  </div>
);

export default Stage1middleTitles;
