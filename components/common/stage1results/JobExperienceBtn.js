const JobExperienceBtn = ({ changeType, jobActive }) => (
  <button
    value="work-exprerience"
    type="button"
    onClick={changeType}
    className={`text-right ${jobActive ? 'font-bold text-[#00A4AE] border-l-4 border-blue' : ' '}`}
  >
    ניסיון תעסוקתי
  </button>
);
export default JobExperienceBtn;
