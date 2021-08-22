const CurrentEducation = ({ changeType, eductionActive }) => (
  <button
    value="current-education"
    type="button"
    onClick={changeType}
    className={eductionActive ? 'font-bold text-[#00A4AE]' : ' '}
  >
    השכלה נוכחתי
  </button>
);
export default CurrentEducation;
