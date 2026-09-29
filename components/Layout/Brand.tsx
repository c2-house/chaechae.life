import Link from 'next/link';
import { LogoIcon } from '@/public/icons';
import styles from './SiteChrome.module.css';

const Brand = () => (
  <Link href="/" className={styles.brand} aria-label="채채라이프 홈">
    <LogoIcon className={styles.brandMark} aria-hidden="true" focusable="false" />
    <span className={styles.brandText}>
      <span className={styles.brandName}>채채라이프</span>
      <span className={styles.brandDomain}>chaechae.life</span>
    </span>
  </Link>
);

export default Brand;
