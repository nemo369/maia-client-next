import Briefcase from '../svg/Briefcase';
import Job from './Job';

function JobsList({ jobs }) {
  if (!Array.isArray(jobs) || !jobs.length) {
    return (
      <section className="nojobs flex justify-center items-center min-h-[500px]">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center mb-3">
            <Briefcase />
          </div>
          <h3 className="text-3xl text-black/20 text-center font-bold">
            לא נמצאו משרות
            <br />
            שתואמות את החיפוש שהוזן
          </h3>
        </div>
      </section>
    );
  }
  return (
    <ul className="jobs-list flex flex-col gap-y-4 mt-4">
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default JobsList;
