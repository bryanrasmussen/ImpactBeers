import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  return = (): JSX.Element => (
    <Html lang="en-US">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Impact Beers Code Example" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/main.css" />
        <meta name="theme-color" content="#fef9f3" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default CustomDocument;
