import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <link
        rel="preload"
        href="/fonts/helveticaneuecyr-roman.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/helveticaneuecyr-medium.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/bebasneueregular.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/bebasneuebold.woff2"
        as="font"
        crossOrigin=""
      />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;