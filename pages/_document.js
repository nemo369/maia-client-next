import Document, { Html, Head, Main, NextScript } from 'next/document';
import Favicon from '../components/common/Favicon';
import AccessibilityScriptTag from '../components/layout/AccessibilityScriptTag';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html dir="rtl" lang="he">
        <Head>
          <Favicon />
        </Head>
        <body>
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
