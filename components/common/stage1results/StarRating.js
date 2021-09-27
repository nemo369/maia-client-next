import React from 'react'; // for create-react-app, etc
// import React, { useState } from 'react'; // for create-react-app, etc

// const { useState } = React; // for codepen, jsbin, jsfiddle etc.

function Rating({ count, value, inactiveColor = '#ddd', activeColor = '#FB9773' }) {
  // short trick
  const stars = Array.from({ length: count }, () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));
  return (
    <div className="flex items-center gap-x-1">
      <h3 className="text-xl leading-[22px] text-gray-active inline-block ">{value}</h3>
      <div className="flex flex-row-reverse">
        {stars.map((s, index) => {
          let style = inactiveColor;
          if (index < value) {
            style = activeColor;
          }
          return (
            <span className="stage-star text-2xl" key={index} style={{ color: style }}>
              {s}
            </span>
          );
        })}
      </div>
    </div>
  );
}
const StarRating = ({ rating }) => (
  // const [rating, setRating] = useState(3);
  // const rating = 3;
  <div>
    <Rating
      count={5}
      size={40}
      value={(rating * 100) / 20}
      activeColor="#FB9773"
      inactiveColor="#ddd"
    />
  </div>
);
export default StarRating;
