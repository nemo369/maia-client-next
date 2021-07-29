import CategoryWithHeart from '../common/CategoryWithHeart';
import GrayHat from '../svg/GrayHat';

function ProfessionList({ professions }) {
  if (!professions || !professions.length) {
    return <NoProfessions />;
  }
  return (
    <ul className="grid grid-cols-3 gap-2">
      {professions.map((profession) => (
        <li key={profession.id}>
          <CategoryWithHeart
            value={profession.title}
            isButton
            description={profession.description}
            id={profession.id}
            type="professions"
            classNam
            e="px-0 "
          />
        </li>
      ))}
    </ul>
  );
}

export default ProfessionList;

const NoProfessions = () => (
  <div className="flex flex-col justify-center min-h-[30vh]">
    <div className="flex justify-center mb-3">
      <GrayHat />
    </div>
    <h3 className="text-3xl text-black/20 text-center font-bold">
      לא נמצאו מקצועות
      <br />
    </h3>
  </div>
);
