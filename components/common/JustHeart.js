/* eslint-disable react/jsx-one-expression-per-line */
import { useContext, useEffect, useState } from 'react';

// import fs from 'fs';
// import path from 'path';
import { useRouter } from 'next/router';
import UserAPI from '../../src/services/user.service';
import HeartEmpty from '../svg/HeartEmpty';
import HeartFull from '../svg/HeartFull';
import { AppContext } from '../../src/context/state';
import ProfileAPI from '../../src/services/profile.service';

export default function JustHeart({ id, type }) {
  const { user } = useContext(AppContext);
  const token = user.token ? user.token : '';
  const [userProfile, setUserProfile] = useState('');
  console.log(userProfile);
  const router = useRouter();
  // console.log(userProfile.data.professions[0]);
  const currentUrl = router.asPath.includes('professions');
  console.log(currentUrl);
  const [favorites, setFavorites] = useState(false);
  // const [fav, setFav] = useState(false);
  const toglleFavorites = async () => {
    setFavorites(!favorites);
    await UserAPI.toglleFavorites({ id, type, value, token });
  };
  // if (currentUrl && userProfile) {
  //   console.log('bunny2');
  //   userProfile?.data.professions.forEach((profession) => {
  //     // console.log(profession.id);
  //     // console.log(parcedId);
  //     console.log('bunny3');
  //     if (profession.id === id) {
  //       setFav(true);
  //       console.log('bunny4');
  //     }
  //   });
  // }
  useEffect(() => {
    const func = async () => {
      const profile = await ProfileAPI.profile(token);
      setUserProfile(profile.data);
    };
    func();
  }, []);
  const handleDragStart = (e) => e.preventDefault();

  return (
    <div onDragStart={handleDragStart} tabIndex="0" role="tab">
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
