import { useTranslation } from 'next-i18next';
import Bars from '../../charts/Bars';
import Button from '../../common/Button';

function AutobiographyTestResults() {
  const { t } = useTranslation('common');

  return (
    <section className="h-full">
      <h2 className="text-[22px] text-gray">סיכום תוצאת שלב</h2>
      <h3 className="text-3xl font-bold text-[#6C6C6C] mb-6">מה עשיתי עד כה</h3>
      <h4 className="mb-4 text-xl font-bold">המאפיינים היעקריים שלך</h4>
      <div className="min-h-[300px]" />
      <Bars />
      <div className="flex gap-x-1 mt-6">
        <Button type="button" status="secondary" name={t('תוצאות השלב')} className="h-12 w-full" />
        <Button type="secondary" status="main" name={t('לשלב הבא')} className="h-12 w-full" />
      </div>
    </section>
  );
}

export default AutobiographyTestResults;
