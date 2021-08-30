import CategoryWithHeart from '../common/CategoryWithHeart';

function ProfessionListVirtual({ professions }) {
  const noDuplicets = professions.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
  const byGroups = noDuplicets.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.group]) {
      accumulator[currentValue.group].push(currentValue);
    } else {
      accumulator[currentValue.group] = [currentValue];
    }
    return accumulator;
  }, {});
  return (
    <>
      {Object.entries(byGroups).map(([key, value]) => (
        <div key={key}>
          <h2 className="font-bold text-[22px] mb-5">{key}</h2>
          <ul className="grid grid-cols-3 gap-2 pb-6">
            {value.map((profession) => (
              <li className="h-full" key={profession.id}>
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
        </div>
      ))}
    </>
  );
}

export default ProfessionListVirtual;
// {
//   /* <ul className="grid grid-cols-3 gap-2 pb-6 ListInner">
// {byGroups.map((profession) => (
//   <li className="h-full" key={profession.id}>
//     <CategoryWithHeart
//       value={profession.title}
//       isButton
//       description={profession.description}
//       id={profession.id}
//       type="professions"
//       className="h-full"
//     />
//   </li>
// ))}
// </ul> */
// }
