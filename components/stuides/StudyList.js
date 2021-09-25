import CategoryWithHeart from '../common/CategoryWithHeart';
import NoStudyEmpty from '../profile/NoStudyEmpty';

function StudyList({ studies }) {
  if (!studies || !studies.length) {
    return <NoStudyEmpty />;
  }
  const noDuplicets = studies?.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
  const byGroups = noDuplicets.reduce((accumulator, currentValue) => {
    if (!currentValue.title) return accumulator;
    const mikName = currentValue.group ? currentValue.group : ' ';
    if (accumulator[mikName]) {
      accumulator[mikName].push(currentValue);
      accumulator[mikName].sort((a, b) => a.title.localeCompare(b.title));
    } else {
      accumulator[mikName] = [currentValue];
    }
    return accumulator;
  }, {});
  return (
    <>
      {Object.entries(byGroups).map(([key, value]) => (
        <div key={key} className="mb-10">
          <h2 className="font-bold text-[22px] mb-5">{key}</h2>
          <ul className="grid grid-cols-3 gap-2">
            {value?.map((study) => (
              <li key={study.id} className="h-full">
                <CategoryWithHeart
                  value={study.title}
                  isButton
                  description={study.description}
                  company={study.institute}
                  id={study.id}
                  type="studies"
                  className="h-full"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default StudyList;
