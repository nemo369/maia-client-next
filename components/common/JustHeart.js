/* eslint-disable react/jsx-one-expression-per-line */
import { useContext, useState } from 'react';
import UserAPI from '../../src/services/user.service';
import HeartEmpty from '../svg/HeartEmpty';
import HeartFull from '../svg/HeartFull';
import { AppContext } from '../../src/context/state';

export default function JustHeart({ className, value, type, id }) {
  const { user } = useContext(AppContext);
  const token = user.token ? user.token : '';
  const [favorites, setFavorites] = useState(false);
  const toglleFavorites = async () => {
    setFavorites(!favorites);
    await UserAPI.toglleFavorites({ id, type, value, token });
  };

  const handleDragStart = (e) => e.preventDefault();

  return (
    <div onDragStart={handleDragStart} tabIndex="0" className={className} role="tab">
      <div className="bg-white heart  rounded border-[1px] border-[rgba(151,151,151,0.13)]">
        <div className="w-full">
          {favorites ? (
            <HeartFull toglleFavorites={toglleFavorites} />
          ) : (
            <HeartEmpty toglleFavorites={toglleFavorites} />
          )}
        </div>
      </div>
    </div>
  );
}
