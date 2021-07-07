import { useEffect, useContext } from 'react';
import { AppContext } from '../context/state';
import { SET_PROFILE } from '../context/userReucder';
import ProfileAPI from '../services/profile.service';
// FETCHING THE FULL PROFILE OBJECT ONLY IF DIDNT FETCHED BEFORE
export default function useProfile() {
  const { profile, user, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, status } = await ProfileAPI.profile(user.token);
      if (200 === status && data) {
        dispatch({ type: SET_PROFILE, profile: data });
      }
    };

    if (!profile) {
      fetchUser();
    }
  }, [profile, dispatch, user?.token]);
  return {
    profile,
  };
}
