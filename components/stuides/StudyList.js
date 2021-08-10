import CategoryWithHeart from '../common/CategoryWithHeart';
import NoStudyEmpty from '../profile/NoStudyEmpty';

function StudyList({ studies }) {
  if (!studies || !studies.length) {
    return <NoStudyEmpty />;
  }
  return (
    <ul className="grid grid-cols-3 gap-2">
      {studies.map((study) => (
        <li key={study.id} className="h-full">
          <CategoryWithHeart
            value={study.title}
            isButton
            description={study.description}
            id={profession.id}
            type="study"
            className="h-full"
          />
        </li>
      ))}
    </ul>
  );
}

export default StudyList;
