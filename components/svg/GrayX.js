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
          d="M8.5.708a7.792 7.792 0 110 15.584A7.792 7.792 0 018.5.708zm0 1.417a6.375 6.375 0 100 12.75 6.375 6.375 0 000-12.75zm1.624 3.75a.708.708 0 111.002 1L9.5 8.5l1.625 1.625a.709.709 0 01.075.914l-.075.088a.708.708 0 01-1.002 0L8.5 9.5l-1.623 1.625a.709.709 0 01-.914.075l-.088-.075a.708.708 0 010-1.002L7.497 8.5 5.874 6.876a.709.709 0 01-.075-.914l.075-.088a.708.708 0 011.002 0l1.623 1.623z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-520 -3689)">
          <g transform="translate(520 3689)">
            <mask id="mask-2" fill="#fff">
              <use xlinkHref="#path-1" />
            </mask>
            <use fill="#000" fillRule="nonzero" xlinkHref="#path-1" />
            <g fill="#FFF" mask="url(#mask-2)">
              <path d="M0 0H17V17H0z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default GrayX;
