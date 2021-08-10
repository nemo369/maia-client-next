import { useTranslation } from 'next-i18next';

function ProfessionsHeader({ myProfessions }) {
  const { t } = useTranslation('common');

  return (
    <div>
      <div className="flex">
        <h1 className="text-black text-3xl font-black">{t('זירת המקצוענות')}</h1>
        {myProfessions?.length ? (
          <div className="flex self-center bg-orange rounded-lg py-2 px-8 h-9 text-white text-[22px] font-bold leading-6 mr-9">
            <p>{t(`נמצאו לך ${myProfessions.length} מקצועות שיתאימו לך`)}</p>
            <div className="relative smallpop w-4 h-4 border-solid border-white-active border-2 rounded-full font-small  text-white text-xs mr-4 hover:bg-gradient-2 inline-block text-center">
              ?
            </div>
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
