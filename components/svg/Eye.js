import React from 'react';

function Eye() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="18"
      viewBox="0 0 24 18"
    >
      <defs>
        <path
          id="path-1"
          d="M12 0c3.38 0 6.339 1.632 8.855 4.316a20.492 20.492 0 012.25 2.891c.385.596.649 1.065.79 1.346a1 1 0 010 .894c-.141.281-.405.75-.79 1.346a20.492 20.492 0 01-2.25 2.89C18.339 16.369 15.38 18 12 18c-3.38 0-6.339-1.632-8.855-4.316a20.492 20.492 0 01-2.25-2.891 15.188 15.188 0 01-.79-1.346 1 1 0 010-.894c.141-.281.405-.75.79-1.346a20.492 20.492 0 012.25-2.89C5.661 1.631 8.62 0 12 0zm0 2C9.255 2 6.776 3.368 4.605 5.684A18.513 18.513 0 002.14 9a18.513 18.513 0 002.464 3.316C6.776 14.632 9.255 16 12 16c2.745 0 5.224-1.368 7.395-3.684A18.513 18.513 0 0021.86 9a18.513 18.513 0 00-2.464-3.316C17.224 3.368 14.745 2 12 2zm0 3a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-1500 -3702)">
          <g transform="translate(1500 3702)">
            <mask id="mask-2" fill="#fff">
              <use xlinkHref="#path-1" />
            </mask>
            <use fill="#000" fillRule="nonzero" xlinkHref="#path-1" />
            <g fill="#000" mask="url(#mask-2)">
              <path d="M0 0H24V24H0z" transform="translate(0 -3)" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Eye;
