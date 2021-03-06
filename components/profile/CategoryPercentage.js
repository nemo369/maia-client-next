/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const CategoryPercentage = ({ className, percentage }) => {
  if (!percentage) return null;
  let colorOne = '';
  let colorTwo = '';
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
    <div className={`${className} flex h-[42px]`}>
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
        <text x="18" y="22" className="percentage" fill={colorOne}>
          {percentage}%
        </text>
      </svg>
    </div>
  );
};
export default CategoryPercentage;
