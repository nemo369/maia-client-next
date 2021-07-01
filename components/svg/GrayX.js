import React from 'react';

function GrayX() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="17"
      height="17"
      viewBox="0 0 17 17"
    >
      <defs>
        <path
          id="path-1"
          d="M7.792 0a7.792 7.792 0 110 15.583A7.792 7.792 0 017.792 0zm0 1.417a6.375 6.375 0 100 12.75 6.375 6.375 0 000-12.75zm1.624 3.749a.708.708 0 011.002 1.002L8.793 7.79l1.625 1.625a.709.709 0 01.074.914l-.074.088a.708.708 0 01-1.002 0L7.79 8.793l-1.623 1.625a.709.709 0 01-.914.074l-.088-.074a.708.708 0 010-1.002L6.789 7.79 5.166 6.168a.709.709 0 01-.075-.914l.075-.088a.708.708 0 011.002 0L7.79 6.789z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-520 -3689)">
          <g transform="translate(520.708 3689.708)">
            <mask id="mask-2" fill="#fff">
              <use xlinkHref="#path-1" />
            </mask>
            <use fill="#000" fillRule="nonzero" xlinkHref="#path-1" />
            <g mask="url(#mask-2)">
              <g transform="translate(-.708 -.708)">
                <path fill="#FFF" d="M0 0H17V17H0z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default GrayX;
