import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../utils/gtag'

class GemachDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const stylesheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            stylesheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {stylesheet.getStyleElement()}
          </React.Fragment>
        ),
      }
    } finally {
      stylesheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" type="text/css" href="/fonts/fonts.css" />
          <meta property="og:title" content="Gemach DAO" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Gemach DAO is a community-driven initiative that aims to organize, educate and empower people in the use of decentralized finance."
          />
          <meta property="og:url" content="https://gemach.io/" />
          <meta
            property="og:image"
            content="https://gemach.io/images/gemach-banner3.jpg"
          />
          <meta name="twitter:card" content="summary_large_image"></meta>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <noscript>Oops, you need Javascript to run this site.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default GemachDocument
