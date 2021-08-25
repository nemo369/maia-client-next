const ProfessionCheckbox = ({ profession }) => (
  <label className="flex gap-x-2 mb-3">
    <input type="checkbox" name={profession.title} value={profession.full_data.miK_NUM} />
    <span>{profession.title}</span>
  </label>
);

export default ProfessionCheckbox;
