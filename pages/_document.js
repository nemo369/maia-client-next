import Document, { Html, Head, Main, NextScript } from 'next/document';
import Favicon from '../components/common/Favicon';
import NotOnMobile from '../components/common/veritasStage/NotOnMobile';
import AccessibilityScriptTag from '../components/layout/AccessibilityScriptTag';
import Gtag from '../components/layout/Gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html dir="rtl" lang="he">
        <Head>
          <Gtag />
          <Favicon />
        </Head>
        <body>
          <NotOnMobile />

          <Main />
          <NextScript />
          <AccessibilityScriptTag />
          <a
            href="https://naamanfrenkel.dev/"
            className="hidden"
            style={{ display: 'none', fontSize: '0px', color: 'transparent', visibility: 'hidden' }}
          >
            Made By Naaman Frenkel; מתכנת נעמן פרנקל
          </a>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
