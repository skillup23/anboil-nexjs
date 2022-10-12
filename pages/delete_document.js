import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="./fonts/helveticaneuecyr-roman.woff2"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
          <link
            rel="preload"
            href="./fonts/helveticaneuecyr-medium.woff2"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
          <link
            rel="preload"
            href="./fonts/bebasneueregular.woff2"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
          <link
            rel="preload"
            href="./fonts/bebasneuebold.woff2"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument