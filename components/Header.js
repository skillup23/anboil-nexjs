import styles from '../styles/Header.module.scss'
import Link from 'next/link';
import HeaderFeedbackForm from './HeaderFeedbackForm';
import Navbar from "./Navbar";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={`${styles.top_content} container`}>

          <div className={styles.branding}>
            <Link href="/" rel="home" >
              <a className={styles.logo_url}>
                <img src="/logo.svg" alt='Главная' />
                <span className={`${styles.sitename} font__base`}>Ангелинская Нефтебаза</span>
              </a>
            </Link>
          </div>

          <HeaderFeedbackForm />

          <div className={styles.phone}>
            <Link href="tel:+78007772487"><a className={`${styles.phone_link} font__extra`}>+7 (800) 777-24-87</a></Link>
            <span className={`${styles.phone_sign} font__light`}>Звонок по России бесплатный</span>
          </div>

        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`${styles.bottom_content} container`}>
          <Navbar />
          <img src="/search-header.svg" alt='Поиск' className={styles.search_icon} />
          <Link href="/"><a className={`${styles.account} font__base`}>Личный кабинет</a></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;