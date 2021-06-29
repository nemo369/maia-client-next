/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import HeartEmpty from '../svg/HeartEmpty';
import HeartFull from '../svg/HeartFull';
import Eye from '../svg/Eye';

export default function ProfileFavoriteData({
  className,
  company,
  percentage,
  jobTitle,
  description,
}) {
  let colorOne = '';
  let colorTwo = '';
  const isFav = true;
  switch (true) {
    case 49 > percentage:
      colorOne += '#FB7067';
      colorTwo += '#F9DBD7';
      break;
    case 50 <= percentage && 74 > percentage:
      colorOne += '#FFC960';
      colorTwo += '#FFF1DC';
      break;
    case 75 <= percentage:
      colorOne += '#4cc790';
      colorTwo += '#E5F6EA';
      break;
    default:
      break;
  }
  return (
    <div className={className}>
      <div
        className="border-b-[1px] mt-[20px] border-[rgba(151,151,151,0.13)]
      py-2"
      >
        <div className="flex">
          <div className="flex">
            <div className="flex">
              <div className="h-[42px] ml-3">
                <svg viewBox="0 0 36 36" className="circular-chart orange">
                  <linearGradient id={`linearColors-${percentage}`} x1="1" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor={colorOne} />
                    <stop offset="100%" stopColor={colorTwo} />
                  </linearGradient>
                  <path
                    stroke={`url(#linearColors-${percentage})`}
                    className="circle"
                    strokeDasharray={`${percentage}, 100`}
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="22" className="percentage">
                    {percentage}%
                  </text>
                </svg>
              </div>
              <div className="profile-fav-company leading-6">
                <div className="company font-bold text-[#333300] text-[20px]">{company}</div>
                <div className="job-title font-bold text-[18px] text-[#333300]">{jobTitle}</div>
              </div>
            </div>
            <div className="description leading-5 w-[522px] mr-10 text-[#333300] opacity-70 text-[18px]">
              {description}
            </div>
          </div>
          <div className="mr-[100px] flex items-center">
            <button className="ml-[15px]  focus:outline-none" type="button">
              {isFav ? <HeartFull /> : <HeartEmpty />}
            </button>
            <button className="ml-[15px]  focus:outline-none" type="button">
              <Eye />
            </button>
            <button
              className="border-black border-2 text-black rounded-[10px] py-[2px] px-[20px] active:bg-gray-lighter focus:outline-none h-10"
              type="button"
            >
              הגשת מועמדות
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
