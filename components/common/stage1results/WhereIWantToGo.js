const WhereIWantToGo = ({ changeType, goActive }) => (
  <button
    value="where-to-go"
    type="button"
    onClick={changeType}
    className={goActive ? 'font-bold text-[#00A4AE]' : ' '}
  >
    לאן אני רוצה הגיע
  </button>
);
export default WhereIWantToGo;
