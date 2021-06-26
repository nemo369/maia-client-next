import React from 'react';

function HeartFull(props) {
  const { addToFavorites } = props;
  return (
    <svg
      onClick={addToFavorites}
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="21"
      viewBox="0 0 23 21"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#FF726B" fillRule="nonzero" transform="translate(-857 -3491)">
          <path d="M868.804 3492.905a6.5 6.5 0 0111.1 4.597 6.5 6.5 0 01-1.906 4.597l-8.84 8.84a1 1 0 01-1.414 0l-8.84-8.84a6.501 6.501 0 119.194-9.194l.353.353.353-.353z" />
        </g>
      </g>
    </svg>
  );
}

export default HeartFull;
