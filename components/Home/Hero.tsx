import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Heart } from 'lucide-react';
import styles from './Home.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>EKO + mingke / 개발자 부부</p>
        <h1 id="home-title">
          <span>만들고, 놀고,</span>
          <span>기록하는 채채라이프.</span>
        </h1>
        <p className={styles.heroDescription}>우리의 작은 프로젝트와 유용한 기록을 한곳에.</p>
        <Link href="/projects" className={styles.primaryButton}>
          프로젝트 둘러보기 <ArrowUpRight size={21} aria-hidden="true" />
        </Link>
      </div>
      <div className={styles.heroArt} aria-label="분홍색 로봇 EKO와 민트색 로봇 mingke">
        <p className={styles.heroNote}>
          좋은 걸<br />
          같이 만들어가요! <Heart size={17} fill="currentColor" aria-hidden="true" />
        </p>
        <div className={styles.heroBubble}>
          코드도,
          <br />
          일상도,
          <br />
          언제나 함께!
        </div>
        <span className={`${styles.confetti} ${styles.pinkConfetti}`} aria-hidden="true" />
        <span className={`${styles.confetti} ${styles.tealConfetti}`} aria-hidden="true" />
        <Image
          src="/images/avatar/eko-1.png"
          alt=""
          width={512}
          height={512}
          sizes="(max-width: 760px) 60vw, 330px"
          className={styles.heroEko}
          priority
        />
        <Image
          src="/images/avatar/mingke-1.png"
          alt=""
          width={512}
          height={512}
          sizes="(max-width: 760px) 60vw, 330px"
          className={styles.heroMingke}
          priority
        />
        <p className={styles.ekoLabel}>
          <strong>EKO</strong>
          <span>Frontend</span>
        </p>
        <p className={styles.mingkeLabel}>
          <strong>mingke</strong>
          <span>Backend</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
