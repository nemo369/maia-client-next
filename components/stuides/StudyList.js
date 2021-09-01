import CategoryWithHeart from '../common/CategoryWithHeart';
import NoStudyEmpty from '../profile/NoStudyEmpty';

function StudyList({ studies, allStudies }) {
  console.log(studies);
  console.log(allStudies);
  if (!studies || !studies.length) {
    return <NoStudyEmpty />;
  }
  const noDuplicets = studies?.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
  const byGroups = noDuplicets.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.full_data.miK_NAME]) {
      accumulator[currentValue.full_data.miK_NAME].push(currentValue);
    } else {
      accumulator[currentValue.full_data.miK_NAME] = [currentValue];
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
