import CurrentEducation from './CurrentEducation';
import JobExperienceBtn from './JobExperienceBtn';
import WhereIWantToGo from './WhereIWantToGo';

const Stage1middleTitles = ({ changeType, jobActive, eductionActive, goActive }) => (
  <div className="grid bg-white pt-8 pr-8 text-[22px] text-gray-text gap-y-9 w-[20%]">
    <JobExperienceBtn jobActive={jobActive} changeType={changeType} />
    <CurrentEducation eductionActive={eductionActive} changeType={changeType} />
    <WhereIWantToGo goActive={goActive} changeType={changeType} />
  </div>
);

export default Stage1middleTitles;
