/* eslint-disable operator-linebreak */
import { useTranslation } from 'next-i18next';
import Tooltip from '../common/Tooltip';

export default function StudiesHeader({ num }) {
  const { t } = useTranslation('common');
  const tooltipSendedJobs =
    '<span>מסלולי הלימוד שיכולים להתאים לך בהתבסס לנתונים שהוזנו עד כה</span>';
  return (
    <div>
      <div className="flex">
        <h1 className="text-black text-3xl font-black">{t('מאגר לימודים')}</h1>
        {num ? (
          <div className="flex items-center self-center bg-orange rounded-[8px] py-[6px] px-[13px] h-[36px] text-white text-[22px] leading-6 mr-9">
            <p>{t(`נמצאו לך ${num} מסלולים שיתאימו לך`)}</p>
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
      <h2 className="max-w-4xl mb-5 mt-1">
        כאן תוכלו לקרוא על מסלולי לימוד שיכולים להתאים לכם או שמעניין אתכם לקרוא עליהם. מאיה מציגה
        בפניכם את מסלולי הלימוד המתאימים ביותר. השתמשו במסננים לקריאה על מסלולים נוספים.
      </h2>
    </div>
  );
}
