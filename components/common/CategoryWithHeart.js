/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import UserAPI from '../../src/services/user.service';
import HeartEmpty from '../svg/HeartEmpty';
import HeartFull from '../svg/HeartFull';

export default function CategoryWithHeart({
  className,
  company,
  title,
  description,
  isButton,
  category,
  id,
}) {
  const [favorites, setFavorites] = useState(false);
  const addToFavorites = async () => {
    setFavorites(!favorites);
    await UserAPI.addToFavorites({ id, category });
  };

  const handleDragStart = (e) => e.preventDefault();

  return (
    <div onDragStart={handleDragStart} tabIndex="0" className={className} role="tab">
      <div
        className="bg-white rounded border-[1px] border-[rgba(151,151,151,0.13)]
      px-[18px] py-[12px]"
      >
        <div className="h-[42px] w-full">
          <div className="single-chart">
            {favorites ? (
              <HeartFull addToFavorites={addToFavorites} />
            ) : (
              <HeartEmpty addToFavorites={addToFavorites} />
            )}
          </div>
        </div>

        <div className="company text-gray-active text-[18px]">{company}</div>
        <div
          className="job-title font-bold text-[18px] text-[#333333] text-right "
          //   className={`job-title font-bold text-[18px] text-[#333333] text-right ${
          //     60 > title.length ? 'overflow-ellipsis overflow-hidden' : ''
          //   }`}
        >
          {title}
        </div>
        <div className="dash border-b-[1px] border-dashed border-[#979797] opacity-20 w-full h-1" />
        <p className="description  text-[#333333] opacity-70 text-[16px] mt-[10px] text-right">
          {description}
        </p>
        <div className="footer w-full flex my-[10px]">
          {isButton && (
            <button
              className="border-black border-2 text-black rounded-[5px] py-[2px] px-[20px] active:bg-gray-lighter focus:outline-none"
              type="button"
            >
              קרא עוד
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
