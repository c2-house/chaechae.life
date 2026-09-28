import ResponsiveAds from '@/components/AdSense/ResponsiveAds';
import styles from './HomeAd.module.css';

const HomeAd = () => (
  <aside className={styles.ad} aria-labelledby="home-ad-label">
    <p id="home-ad-label" className={styles.label}>
      광고
    </p>
    <div className={styles.slot}>
      <ResponsiveAds format="horizontal" fullWidthResponsive={false} />
    </div>
  </aside>
);

export default HomeAd;
