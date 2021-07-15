/* eslint-disable react/jsx-one-expression-per-line */
import { useContext, useEffect, useState } from 'react';
import UserAPI from '../../src/services/user.service';
import HeartEmpty from '../svg/HeartEmpty';
import HeartFull from '../svg/HeartFull';
import { AppContext } from '../../src/context/state';
import { addOrRemove } from '../../src/utils/util';
import { SET_PROFILE } from '../../src/context/userReucder';

export default function JustHeart(props) {
  const { type } = props;
  // eslint-disable-next-line react/destructuring-assignment
  const id = `${props.id}`;
  const { user, profile, dispatch } = useContext(AppContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const toglleFavorites = async () => {
    setLoading(true);
    setFavorites(addOrRemove(favorites, id));
    const { token } = user;
    const { data, status } = await UserAPI.toglleFavorites({ id, type, token });
    if (200 === status) {
      dispatch({ type: SET_PROFILE, profile: { ...profile, [type]: data.category } });
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  // console.log(profile);
  useEffect(() => {
    const isLoading = !profile;
    setLoading(isLoading);
    if (profile && profile[type] && Array.isArray(profile[type])) {
      const categorys = profile[type].map((cat) => cat.id);
      setFavorites(categorys);
    }
  }, [profile]);

  const handleDragStart = (e) => e.preventDefault();

  return (
    <div onDragStart={handleDragStart} tabIndex="0" role="tab">
      <div className=" heart  rounded border-[1px] border-[rgba(151,151,151,0.13)]">
        <div
          className={`flex items-center justify-center p-2 transition w-full 
          hover:scale-110
          ${loading ? 'opacity-50' : ''}`}
        >
          {favorites.includes(`${id}`) ? (
            <HeartFull toglleFavorites={toglleFavorites} disabled={loading} />
          ) : (
            <HeartEmpty toglleFavorites={toglleFavorites} disabled={loading} />
          )}
        </div>
      </div>
    </div>
  );
}
