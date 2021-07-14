import Briefcase from '../svg/Briefcase';

function JobsList() {
  const jobs = [];

  if (!jobs.length) {
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
  return <div>JobsList</div>;
}

export default JobsList;
