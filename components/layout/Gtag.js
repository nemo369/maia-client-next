const ID = 'UA-50437388-2';
function Gtag() {
  if ('production' !== process.env.NODE_ENV) {
    return null;
  }
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', ${ID}, { page_path: window.location.pathname });
   `,
        }}
      />
      <script />
    </>
  );
}

export default Gtag;
