const CurrentEducation = ({ changeType, eductionActive }) => (
  <button
    value="current-education"
    type="button"
    onClick={changeType}
    className={`text-right ${
      eductionActive ? 'font-bold text-[#00A4AE] border-l-4 border-blue' : ' '
    }`}
  >
    השכלה נוכחית
  </button>
);
export default CurrentEducation;
