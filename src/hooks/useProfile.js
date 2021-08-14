import { useContext, useEffect } from 'react';
import { SET_PROFILE } from '../context/appReducer';
import { AppContext } from '../context/state';
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
      if ([403, 401].includes(status)) {
        window.location.href = '/';
      }
    };

    if (!profile) {
      fetchUser();
    }

    if (profile) {
      const allowedCityIds = [11];
      const city = profile.city ? JSON.parse(profile.city) : null;
      if (!city || !allowedCityIds.includes(city.id_area)) {
        // window.location.href = '/user/not-valid';
      }
    }
    if (profile && 18 > +profile.age) {
      // window.location.href = '/user/not-valid?error="to young"';
    }
  }, [profile, dispatch, user?.token]);
}
