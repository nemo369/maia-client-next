import { useTranslation } from 'next-i18next';
import Button from '../../common/Button';
import StageResults from '../../common/stage1results/StageResults';
import StagesPopSide from '../../common/StagesPopSide';

function AutobiographyTestResults() {
  const { t } = useTranslation('common');

  return (
    <section className="h-full">
      <h2>סיכום תוצאת שלב</h2>
      <h3>מה עשיתי עד כה</h3>
      <h4>המאפיינים היעקריים שלך</h4>
      <p className="flex">sdg</p>
      <p>sdgsd</p>

      <div className="flex gap-x-1 mt-6">
        <StagesPopSide
          trigger={
            <Button type="button" status="secondary" name="תוצאות השלב" className="h-12 w-full" />
          }
        >
          <StageResults />
        </StagesPopSide>

        <Button type="secondary" status="main" name={t('לשלב הבא')} className="h-12 w-full" />
      </div>
    </section>
  );
}

export default AutobiographyTestResults;
