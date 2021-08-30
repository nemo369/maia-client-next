/* eslint-disable react/jsx-one-expression-per-line */
import { useTranslation } from 'next-i18next';
import { AppContext, useAppContext } from '../../src/context/state';
import ProfileDoughnut from '../charts/ProfileDoughnut';

function ProfileSummary() {
  const { profile } = useAppContext(AppContext);
  // const { t } = useTranslation('common');

  return (
    <div className="min-h-[300px]">
      {/* {profile.vendor_profile_i_am_pro && ( */}
      <>
        <div className="flex">
          <p>
            מסתמן כי הפרופיל התעסוקתי שלך הוא
            <br />*{profile.vendor_profile_i_am_pro?.shortProfileText}
          </p>
          <ProfileDoughnut />
        </div>
        <p className="mb-4" />
        <p>{profile.vendor_profile_i_am_pro?.shortEnviormentText}</p>
      </>
      {/* )} */}
    </div>
  );
}

export default ProfileSummary;
