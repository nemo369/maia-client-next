/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import Infoservice from '../../src/services/info.service';
import HeartEmpty from '../svg/HeartEmpty';
import HeartFull from '../svg/HeartFull';

export default function CategoryWithHeart({
  className,
  company,
  percentage,
  jobTitle,
  description,
  isButton,
  professionID,
}) {
  //   const { handleDragStart, addToFavorites } = props;
  const [favorites, setFavorites] = useState(false);
  const addToFavorites = async () => {
    setFavorites(!favorites);
    await Infoservice.addToFavorites(professionID);
  };

  const handleDragStart = (e) => e.preventDefault();
  let colorOne = '';
  let colorTwo = '';
  switch (true) {
    case 50 > percentage:
      colorOne += '#FB7067';
      colorTwo += '#F9DBD7';
      break;
    case 50 <= percentage && 80 > percentage:
      colorOne += '#FFC960';
      colorTwo += '#FFF1DC';
      break;
    case 80 < percentage:
      // eslint-disable-next-line no-unused-vars
      colorOne += '#4cc790';
      // eslint-disable-next-line no-unused-vars
      colorTwo += '#E5F6EA';
      break;
    default:
      break;
  }
  return (
    <div onDragStart={handleDragStart} tabIndex="0" className={className} role="tab">
      <div
        className="bg-white rounded border-[1px] border-[rgba(151,151,151,0.13)]
      px-[18px] py-[12px]"
      >
        <div className="h-[42px] w-full">
          <div className="single-chart">
            {favorites ? (
              <HeartEmpty addToFavorites={addToFavorites} />
            ) : (
              <HeartFull addToFavorites={addToFavorites} />
            )}
          </div>
        </div>

        <div className="company text-gray-active text-[18px]">{company}</div>
        <div
          className="job-title font-bold text-[18px] text-[#333333] text-right "
          //   className={`job-title font-bold text-[18px] text-[#333333] text-right ${
          //     60 > jobTitle.length ? 'overflow-ellipsis overflow-hidden' : ''
          //   }`}
        >
          {jobTitle}
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
