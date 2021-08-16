import CategoryWithHeart from '../common/CategoryWithHeart';
import NoProfession from './NoProfession';

function ProfessionList({ professions }) {
  if (!professions || !professions.length) {
    return <NoProfession />;
  }
  return (
    <ul className="grid grid-cols-3 gap-2 pb-6">
      {professions.map((profession) => (
        <li key={profession.id} className="h-full">
          <CategoryWithHeart
            value={profession.title}
            isButton
            description={profession.description}
            id={profession.id}
            type="professions"
            className="h-full"
          />
        </li>
      ))}
    </ul>
  );
}

export default ProfessionList;
