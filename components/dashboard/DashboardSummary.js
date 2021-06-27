import { useContext } from 'react';
import { AppContext } from '../../src/context/state';
import Button from '../common/Button';

function DashboardSummary({ step }) {
  const { profile } = useContext(AppContext);

  return (
    <div className="dashboard__summary bg-white rounded-lg py-5 px-4 flex flex-col">
      <div>
        <h3 className="text-xl text-gray-700">סיכום תוצאות שלב</h3>
        <h3 className="text-gray font-bold text-3xl mb-6">{step?.name}</h3>
      </div>
      <article className="flex-grow">{JSON.stringify(profile)}</article>
      <div className="flex gap-x-1 mt-6">
        <Button type="button" status="secondary" name="תוצאות השלב" className="h-12 w-full" />
        <Button type="secondary" status="main" name="לשלב הבא" className="h-12 w-full" />
      </div>
    </div>
  );
}

export default DashboardSummary;
