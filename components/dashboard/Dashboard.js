import { useState } from 'react';
import CheckboxGroup from '../common/CheckboxGroup';

function Dashboard() {
  const checkGroups = [
    { name: 'מקצועות', id: 'jobs' },
    { name: 'משרות', id: 'professions' },
    { name: 'לימודים', id: 'studies' },
  ];
  const [checkType, setcheckType] = useState(checkGroups[0]);
  const onChange = (id) => {
    const newCheck = checkGroups.find((c) => c.id === id);
    setcheckType(newCheck);
  };
  return (
    <section>
      <div className="flex">
        <div className="flex">
          <h2 className="text-3xl text-black font-bold ml-2">
            {checkType.name}
            &nbsp;שיכולות להתאים לך
          </h2>
          <h3 className="text-[22px] text-black/50">
            (נמצאו&nbsp;
            {checkGroups.length}
            &nbsp;
            {checkType.name}
            &nbsp;חדשות עבורך)
          </h3>
        </div>
        <CheckboxGroup checks={checkGroups} onChange={onChange} checkType={checkType} />
      </div>
    </section>
  );
}

export default Dashboard;
