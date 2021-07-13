import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import CategoryPercentage from '../profile/CategoryPercentage';
import JustHeart from '../common/JustHeart';
import Arrow from '../svg/Arrow';

function Job({ job }) {
  const { t } = useTranslation('common');
  const [isOpen, setisOpen] = useState(false);

  const sendJob = () => {
    console.log(job);
  };
  return (
    <li
      className={`job  transition-all rounded-2xl shadow ${
        isOpen ? 'active  overflow-y-auto' : 'overflow-hidden bg-white'
      }`}
    >
      <div className="flex job__top px-4 pt-2 items-center">
        <CategoryPercentage percentage={job?.percentage} />
        <h4 className="mr-3 ml-6">
          <div className="text-2xl font-bold text-black">{job.group}</div>
          <div className="text-lg">{job.jobTitle}</div>
        </h4>
        <h3 className="max-w-[50%] text-xl h-15 flex my-auto line-clamp-2">{job.title}</h3>
        <div className="flex mr-auto">
          <div className="flex items-center">
            <JustHeart id={job.id} type="jobs" />
            <button
              type="button"
              onClick={sendJob}
              className="mx-6 px-6 h-10 leading-10 border border-black rounded-xl hover:bg-gray-100 transition"
            >
              {t('הגש מעומדות')}
            </button>
            <button
              type="button"
              onClick={() => setisOpen(!isOpen)}
              className={`${
                isOpen ? 'rotate-180' : ''
              } flex items-center justify-center w-6 h-6  rounded-full hover:opacity-80 transition focus:outline-none focus:ring-1`}
            >
              <Arrow />
            </button>
          </div>
        </div>
      </div>
      <JobInner job={job} />
    </li>
  );
}

export default Job;
const JobInner = ({ job }) => (
  <div className="job__inner pt-10 px-6 flex justify-between">
    <div>dsf</div>
    <div>
      <strong className="font-bold block mb2">תיאור המשרה</strong>
      <div>{job.description}</div>
    </div>
    <div>
      <strong className="font-bold block mb2">דרישות</strong>
      <div>{job.requirements}</div>
    </div>
  </div>
);
