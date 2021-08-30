import { useTranslation } from 'next-i18next';
import { AppContext, useAppContext } from '../../src/context/state';
// import { getProfileDesc } from '../../src/utils/util';

function ProfileSummary() {
  const { profile } = useAppContext(AppContext);
  const { t } = useTranslation('common');

  return (
    <div className="min-h-[300px]">
      {profile.vendor_profile_i_am_pro && (
        <>
          <p>מסתמן כי הפרופיל התעסוקתי שלך הוא &nbsp;</p>
          <p className="mb-4">
            {t('אתה')}
            &nbsp;
            {profile.vendor_profile_i_am_pro.shortProfileText}
          </p>
          <p>{profile.vendor_profile_i_am_pro.shortEnviormentText}</p>
        </>
      )}
    </div>
  );
}

export default ProfileSummary;
