const JobExperienceBtn = ({ changeType, jobActive }) => (
  <button
    value="work-exprerience"
    type="button"
    onClick={changeType}
    className={jobActive ? 'font-bold text-[#00A4AE]' : ' '}
  >
    ניסיון תעסוקתי
  </button>
);
export default JobExperienceBtn;
