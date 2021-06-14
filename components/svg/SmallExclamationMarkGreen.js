function SmallExclamationMarkGreen() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
      <defs>
        <filter id="filter-1">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.247059 0 0 0 0 0.686275 0 0 0 0 0.713725 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g filter="url(#filter-1)" transform="translate(-454 -3805)">
          <g fill="#000" fillRule="nonzero" transform="translate(454 3805.6)">
            <path d="M7.04 0L0 3.84 7.04 7.68 14.08 3.84z" />
            <path d="M11.52 6.272L7.04 8.96 2.56 6.272 2.56 9.088 7.04 11.52 11.52 9.088z" />
            <path d="M12.8 3.84H14.08V8.96H12.8z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SmallExclamationMarkGreen;
