import ResponsiveAds from '@/components/AdSense/ResponsiveAds';
import styles from './HomeAd.module.css';

const HomeAd = () => (
  <aside className={styles.ad} aria-label="광고">
    <div className={styles.slot}>
      <ResponsiveAds format="horizontal" fullWidthResponsive={false} />
    </div>
  </aside>
);

export default HomeAd;
