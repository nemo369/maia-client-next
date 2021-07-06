/* eslint-disable react/jsx-one-expression-per-line */
import { useContext, useState } from 'react';
import Link from 'next/link';
import UserAPI from '../../src/services/user.service';
import HeartEmpty from '../svg/HeartEmpty';
import HeartFull from '../svg/HeartFull';
import { AppContext } from '../../src/context/state';

export default function CategoryWithHeart({
  className,
  company,
  value,
  description,
  isButton,
  type,
  id,
}) {
  // console.log(id);
  // const { userFromContext } = useContext(AppContext);
  const { user } = useContext(AppContext);
  // const [user, setUser] = useState(userFromContext);
  // const [token, setToken] = useState(user.token ? user.token : '');
  const token = user.token ? user.token : '';

  // useEffect(()=>{
  // if(use)
  // },[])

  const [favorites, setFavorites] = useState(false);
  const toglleFavorites = async () => {
    setFavorites(!favorites);
    await UserAPI.toglleFavorites({ id, type, value, token });
  };
  const handleDragStart = (e) => e.preventDefault();

  return (
    <div onDragStart={handleDragStart} tabIndex="0" className={className} role="tab">
      <div
        className="bg-white heart professionInfoBoxShadow  rounded-2xl border-[1px] border-[rgba(151,151,151,0.13)]
      px-[18px] py-[19px]"
      >
        <div className="h-[42px] w-full inline">
          <div className="single-chart">
            {favorites ? (
              <HeartFull toglleFavorites={toglleFavorites} />
            ) : (
              <HeartEmpty toglleFavorites={toglleFavorites} />
            )}
          </div>
        </div>

        <div className="company text-gray-active text-[18px]">{company}</div>
        <div className="title-length font-bold text-[18px] text-[#333333] text-right ">{value}</div>
        <div className="dash border-b-[1px] border-dashed border-[#979797] opacity-20 w-full h-1" />
        <p className="description  text-black tracking-normal font-normal opacity-70 leading-[18px] text-lg mt-[10px] text-right">
          {description}
        </p>
        <div className="footer w-full flex my-[10px]">
          {isButton && (
            <Link href={`/professions/${id}`}>
              <a
                className="border-black border-2 font-bold text-base leading-4 text-black rounded-[5px] py-[2px] px-[20px] active:bg-gray-lighter focus:outline-none hover:bg-white-active"
                type="button"
              >
                קרא עוד
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
