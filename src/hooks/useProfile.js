import { useRouter } from 'next/dist/client/router';
import { useContext, useEffect, useState } from 'react';
import { SET_PROFILE } from '../context/appReducer';
import { AppContext } from '../context/state';
import ProfileAPI from '../services/profile.service';
// FETCHING THE FULL PROFILE OBJECT ONLY IF DIDNT FETCHED BEFORE
export default function useProfile() {
  const { profile, user, dispatch } = useContext(AppContext);
  const { pathname, push, query } = useRouter();
  const [fetching, setfetching] = useState(false);
  const cleanUrl = (newQuery) => {
    delete newQuery.refetchuser;
    push(
      {
        pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true }
    );
  };
  useEffect(() => {
    const fetchUser = async (queryUser) => {
      if (fetching) {
        return;
      }
      setfetching(true);
      const { data, status } = await ProfileAPI.profile(user.token, queryUser);
      setfetching(false);
      if (200 === status && data) {
        dispatch({ type: SET_PROFILE, profile: data });
      }
      if ([403, 401].includes(status)) {
        window.location.href = '/';
      }
    };

    if (!profile) {
      if (query.refetchuser) {
        fetchUser('?refetchuser=true');
        cleanUrl(query);
      } else {
        fetchUser();
      }
    }
    if (profile && query.refetchuser) {
      fetchUser('?refetchuser=true');
      cleanUrl(query);
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
  }, [profile, dispatch, user?.token, query]);
}
