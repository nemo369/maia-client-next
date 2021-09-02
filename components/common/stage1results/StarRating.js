import React from 'react'; // for create-react-app, etc
// import React, { useState } from 'react'; // for create-react-app, etc

// const { useState } = React; // for codepen, jsbin, jsfiddle etc.

function Rating({ count, value, inactiveColor = '#ddd', activeColor = '#FB9773' }) {
  // short trick
  const stars = Array.from({ length: count }, () => '🟊');
  return (
    <div className="left-to-right flex">
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span className="stage-star text-2xl w-6 h-6" key={index} style={{ color: style }}>
            {s}
          </span>
        );
      })}
      <h3 className="text-xl leading-[22px] text-gray-active inline-block pl-2 pb-2 self-center">
        {value}
      </h3>
    </div>
  );
}
const StarRating = (props) => {
  const { rating } = props;
  // const [rating, setRating] = useState(3);
  // const rating = 3;
  return (
    <div>
      <Rating count={5} size={40} value={rating} activeColor="#FB9773" inactiveColor="#ddd" />
    </div>
  );
};

export default StarRating;
