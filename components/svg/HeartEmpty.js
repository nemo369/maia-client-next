import React from 'react';

function HeartEmpty({ toglleFavorites, disabled }) {
  return (
    <button
      onClick={toglleFavorites}
      type="button"
      disabled={disabled}
      className="w-full h-full focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="23"
        height="21"
        viewBox="0 0 23 21"
      >
        <defs>
          <filter id="filter-1-heart">
            <feColorMatrix
              in="SourceGraphic"
              values="0 0 0 0 0.200000 0 0 0 0 0.200000 0 0 0 0 0.200000 0 0 0 1.000000 0"
            />
          </filter>
          <path
            id="path-2-heart"
            d="M11.804 1.905a6.5 6.5 0 0111.1 4.597 6.5 6.5 0 01-1.906 4.597l-8.84 8.84a1 1 0 01-1.414 0l-8.84-8.84a6.501 6.501 0 019.194-9.194l.353.353.353-.353zm-.353 15.913l7.073-7.073 1.06-1.06A4.5 4.5 0 0016.401 2a4.5 4.5 0 00-3.183 1.319l-1.06 1.06a1 1 0 01-1.414 0l-1.06-1.06a4.501 4.501 0 00-6.366 6.366l8.133 8.133z"
          />
        </defs>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g filter="url(#filter-1-heart)" transform="translate(-811 -3491)">
            <g transform="translate(811 3491)">
              <mask id="mask-3-heart" fill="#fff">
                <use xlinkHref="#path-2-heart" />
              </mask>
              <use fill="#000" fillRule="nonzero" xlinkHref="#path-2-heart" />
              <g fill="#FFF" mask="url(#mask-3-heart)">
                <path d="M0 0H24V24H0z" transform="translate(-1 -2)" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
}

export default HeartEmpty;
