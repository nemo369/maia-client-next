/* eslint-disable react/jsx-one-expression-per-line */
import { AppContext, useAppContext } from '../../src/context/state';
import ProfileDoughnut from '../charts/ProfileDoughnut';

function ProfileSummary({ direction }) {
  // vertical  --- horizontal

  const { profile } = useAppContext(AppContext);

  return (
    <div className="min-h-[300px] ProfileSummary">
      {/* {profile.vendor_profile_i_am_pro && ( */}
      <>
        <div className="flex">
          <p>
            מסתמן כי הפרופיל התעסוקתי שלך הוא
            <br />
            {profile?.vendor_profile_i_am_pro?.shortProfileText}
          </p>
          {'vertical' === direction && <ProfileDoughnut />}
        </div>
        <p className="mb-4" />
        <p>{profile?.vendor_profile_i_am_pro?.shortEnviormentText}</p>
      </>
      {/* )} */}
    </div>
  );
}

export default ProfileSummary;
