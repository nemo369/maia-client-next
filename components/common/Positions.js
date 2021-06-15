import React from 'react';

export default function Positions({
  className,
  company,
  percentage,
  jobTitle,
  description,
  isButton,
}) {
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
    case 80 <= percentage:
      colorOne += '#4cc790';
      colorTwo += '#E5F6EA';
      break;
    default:
      break;
  }
  return (
    <div className={className}>
      <div
        className="bg-white rounded-[10px] border-[1px] border-[rgba(151,151,151,0.13)]
      px-[18px] py-[12px]"
      >
        <div className="h-[42px] w-full">
          <div className="single-chart">
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
              <text x="18" y="20.35" className="percentage">
                {percentage}%
              </text>
            </svg>
          </div>
        </div>

        <div className="company text-gray-active text-[18px]">{company}</div>
        <div className="job-title font-bold text-[18px] text-[#333333]">{jobTitle}</div>
        <div className="dash border-b-[1px] border-dashed border-[#979797] opacity-20 w-full h-1" />
        <div className="description text-[#333333] opacity-70 text-[16px] mt-[10px]">
          {description}
        </div>
        <div className="footer w-full flex flex-row-reverse">
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
