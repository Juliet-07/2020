/*
 * page: _document
 * author: Favour George
 * Date: April 9, 2020
 * Override default Next.js document behaviour
 */

import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, { Head, Main, NextScript } from "next/document";

export default class ElectoralRecall extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* <title>EmBED LMS</title> */}
          {/* Step 5: Output the styles in the head  */}
          {/*{this.props.styleTags}*/}
          <meta
            name={"viewport"}
            content={"initial-scale=1.0, width=device-width"}
            key={"viewport"}
            user-scalable={"no"}
          />
          <link rel="stylesheet" href="/toastr.css" />
          <link rel="icon" type="image/png" href="/electoral-recall-icon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;700&family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
