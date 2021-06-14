function PrinterGreySmall() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <defs>
        <path
          id="path-1"
          d="M17 0a1 1 0 011 1v6h1a3 3 0 012.995 2.824L22 10v5a3 3 0 01-3 3h-1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3H3a3 3 0 01-2.995-2.824L0 15v-5a3 3 0 013-3h1V1a1 1 0 01.883-.993L5 0zm-1 14H6v6h10v-6zm3-5H3a1 1 0 00-1 1v5a1 1 0 001 1h1v-3a1 1 0 011-1h12a1 1 0 011 1v3h1a1 1 0 00.993-.883L20 15v-5a1 1 0 00-1-1zm-3-7H6v5h10V2z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1" opacity="0.2">
        <g transform="translate(-1385 -3651)">
          <g transform="translate(1385 3651)">
            <mask id="mask-2" fill="#fff">
              <use xlinkHref="#path-1" />
            </mask>
            <use fill="#000" fillRule="nonzero" xlinkHref="#path-1" />
            <g fill="#000" mask="url(#mask-2)">
              <path d="M0 0H24V24H0z" transform="translate(-1 -1)" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default PrinterGreySmall;
