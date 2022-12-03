import Layout from '../components/Layout'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  );
}

export default MyApp
