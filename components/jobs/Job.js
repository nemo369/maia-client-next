import React from 'react';
import { useTranslation } from 'next-i18next';
import CategoryPercentage from '../profile/CategoryPercentage';
import JustHeart from '../common/JustHeart';

function Job({ job }) {
  const { t } = useTranslation('common');
  const [isOpen, setisOpen] = useState(false);

  const sendJob = () => {
    console.log(job);
  };
  return (
    <li className={`job ${isOpen ? 'active bg-white' : ''}`}>
      <div className="flex job__top px-4 pt-2 items-center">
        <CategoryPercentage percentage={job?.percentage} />
        <h4 className="mr-3 ml-6">
          <div className="text-2xl font-bold text-black">{job.title}</div>
          <div className="text-lg">{job.field}</div>
        </h4>
        <h3>{job.name}</h3>
        <div className="flex mr-auto">
          <div className="flex">
            <JustHeart id={job.id} type="jobs" />
            <button type="button" onClick={sendJob}>
              {t('הגש מעומדות')}
            </button>
            <button type="button" onClick={() => setisOpen(!isOpen)}>
              {isOpen ? '<' : '>'}
            </button>
          </div>
        </div>
      </div>
      <div className="job__inner pt-10 px-6">asf</div>
    </li>
  );
}

export default Job;
