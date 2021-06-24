import React from 'react';

function Favicon() {
  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="//static/faviconapple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="//static/faviconfavicon-16x16.png" />
      {/* <link rel="manifest" href="/static/favicon/site.webmanifest" /> */}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}

export default Favicon;
