const WhereIWantToGo = ({ changeType, goActive }) => (
  <button
    value="where-to-go"
    type="button"
    onClick={changeType}
    className={`text-right transition-all  border-l-4 ${
      goActive ? 'font-bold text-[#00A4AE] border-blue' : 'border-transparent'
    }`}
  >
    לאן אני רוצה הגיע
  </button>
);
export default WhereIWantToGo;
