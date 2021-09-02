import { useTranslation } from 'next-i18next';
import Tooltip from '../common/Tooltip';

function ProfessionsHeader({ myProfessions }) {
  const { t } = useTranslation('common');
  const tooltipSendedJobs = '<span>המקצועות שיכולים להתאים לך בהתבסס לנתונים שהוזנו עד כה</span>';
  return (
    <div>
      <div className="flex">
        <h1 className="text-black text-3xl font-black">{t('זירת המקצועות')}</h1>
        {myProfessions?.length ? (
          <div className="flex items-center self-center bg-orange rounded-[8px] py-[6px] px-[13px] h-[36px] text-white text-[22px] leading-6 mr-9">
            <p>{t(`נמצאו לך ${myProfessions.length} מקצועות שיתאימו לך`)}</p>

            <Tooltip
              trigger={
                <div className="relative smallpop w-4 h-4 border-solid border-white-active border rounded-full font-small  text-white text-xs mr-4 hover:bg-gradient-2 inline-block text-center">
                  ?
                </div>
              }
            >
              <div dangerouslySetInnerHTML={{ __html: tooltipSendedJobs }} />
            </Tooltip>
          </div>
        ) : null}
      </div>
      <h2 className="max-w-4xl my-5">
        {t(
          'כאן תוכלו לקרוא על מקצועות ותפקידים שיכולים להתאים לכם או שמעניינים אתכם לקרוא עליהם. מאיה מציגה בפניכם את המקצועות המתאימים ביותר. השתמשו במסננים לקריאה על מקצועות נוספים.'
        )}
      </h2>
    </div>
  );
}

export default ProfessionsHeader;
