import React from 'react';

function Group4({ content, container }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="78"
      height="32"
      viewBox="0 0 78 32"
      className="inline-block"
    >
      <defs>
        <filter id="Group4-filter-1" colorInterpolationFilters="auto">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.418139 0 0 0 0 0.418139 0 0 0 0 0.418139 0 0 0 1.000000 0"
          />
        </filter>
        <path
          id="path-2"
          d="M12.833 7.583c.245 0 .455.151.541.365l.003.007c.027.069.04.14.04.213v3.499a.583.583 0 01-1.167 0V9.515l-1.71 1.607A5.833 5.833 0 01.913 8.945a.583.583 0 111.1-.39 4.667 4.667 0 007.713 1.73l1.634-1.535H9.333a.583.583 0 010-1.167h3.5zM8.291.143a5.833 5.833 0 014.211 3.744.583.583 0 11-1.1.39 4.667 4.667 0 00-7.713-1.73L2.056 4.082h2.027a.583.583 0 010 1.167h-3.5a.584.584 0 01-.54-.365l-.004-.007A.584.584 0 010 4.664V1.165a.583.583 0 011.167 0v2.152l1.71-1.607A5.833 5.833 0 018.291.144z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-1286 -3606)">
          <g transform="translate(1286 3606)">
            <rect
              className={container}
              width="44"
              height="32"
              x="34"
              y="0"
              fill="#333"
              opacity="0.1"
              rx="5"
            />
            <g transform="translate(44 6)">
              <g className={content} fill="#000000" fillRule="nonzero">
                <path d="M.75 4.75h6.68a3.006 3.006 0 002.903 2.259 3.006 3.006 0 002.903-2.259H23.25a.75.75 0 000-1.5H13.236A3.006 3.006 0 0010.333.991 3.006 3.006 0 007.43 3.25H.75a.75.75 0 000 1.5zm9.583-2.259A1.51 1.51 0 0111.842 4a1.51 1.51 0 01-1.509 1.509A1.51 1.51 0 018.824 4a1.51 1.51 0 011.509-1.509zM23.25 9.25h-1.606a3.006 3.006 0 00-2.903-2.259A3.006 3.006 0 0015.84 9.25H.75a.75.75 0 000 1.5h15.089a3.006 3.006 0 002.902 2.259 3.006 3.006 0 002.903-2.259h1.606a.75.75 0 000-1.5zm-4.509 2.259A1.51 1.51 0 0117.232 10a1.51 1.51 0 011.51-1.509A1.51 1.51 0 0120.25 10a1.51 1.51 0 01-1.509 1.509zM23.25 15.25H8.718a3.005 3.005 0 00-2.902-2.259 3.006 3.006 0 00-2.902 2.259H.75a.75.75 0 000 1.5h2.164a3.006 3.006 0 002.902 2.259 3.005 3.005 0 002.902-2.259H23.25a.75.75 0 000-1.5zM5.816 17.509A1.51 1.51 0 014.308 16a1.51 1.51 0 011.508-1.509A1.51 1.51 0 017.324 16a1.51 1.51 0 01-1.508 1.509z" />
              </g>
            </g>
            <g transform="translate(0 9)">
              <g transform="translate(0 .583)">
                <mask id="mask-3" fill="#fff">
                  <use xlinkHref="#path-2" />
                </mask>
                <use fill="#000" xlinkHref="#path-2" />
                <g mask="url(#mask-3)">
                  <g transform="translate(0 -.583)">
                    <path fill="#000" d="M0 0H14V14H0z" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Group4;
