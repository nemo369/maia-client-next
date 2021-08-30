function BigChecked() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="61"
      height="61"
    >
      <defs>
        <filter
          id="b"
          width="109.8%"
          height="109.8%"
          x="-4.9%"
          y="-4.9%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology in="SourceAlpha" radius="3" result="shadowSpreadInner1" />
          <feOffset dy="-3" in="shadowSpreadInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0.185976439 0 0 0 0 0.690865337 0 0 0 0 0.449262061 0 0 0 1 0"
          />
        </filter>
        <filter id="c">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <circle id="a" cx="30.492" cy="30.492" r="30.492" />
        <path
          id="d"
          d="M3.646 12.686a1.969 1.969 0 00-2.812 0 2.036 2.036 0 000 2.852l9.94 10.08a1.969 1.969 0 002.812 0L35.454 3.442a2.036 2.036 0 000-2.852 1.969 1.969 0 00-2.812 0L12.18 21.34l-8.534-8.654z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#39DC8E" xlinkHref="#a" />
        <use fill="#000" filter="url(#b)" xlinkHref="#a" />
        <circle
          cx="30.492"
          cy="30.492"
          r="28.98"
          stroke="#2C3E50"
          strokeLinejoin="square"
          strokeWidth="3.024"
        />
        <g filter="url(#c)">
          <g transform="translate(13.356 18.144)">
            <mask id="e" fill="#fff">
              <use xlinkHref="#d" />
            </mask>
            <use fill="#000" fillRule="nonzero" xlinkHref="#d" />
            <g fill="#000" mask="url(#e)">
              <path d="M-5.796-3.528h47.88v47.88h-47.88z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default BigChecked;
