import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Gamepad2, Utensils } from 'lucide-react';
import FoodRoulette from './FoodRoulette';
import styles from './Home.module.css';

const blocks = [
  [2, 3, 'orange'],
  [3, 2, 'orange'],
  [3, 3, 'orange'],
  [4, 3, 'orange'],
  [4, 1, 'blue'],
  [5, 1, 'blue'],
  [6, 1, 'blue'],
  [5, 2, 'pink'],
  [6, 2, 'pink'],
  [6, 3, 'purple'],
  [5, 4, 'teal'],
  [6, 4, 'teal'],
] as const;

const FeaturedLinks = () => (
  <section className={styles.featured} aria-label="프로젝트와 게임">
    <article className={`${styles.featureCard} ${styles.projectCard}`}>
      <p className={styles.sectionLabel}>PROJECTS</p>
      <h2>일상을 조금 더 편리하게</h2>
      <p className={styles.featureDescription}>
        작지만 유용한 서비스로
        <br />
        오늘도 더 나은 일상을 만들어가요.
      </p>
      <div className={styles.projectService}>
        <div className={styles.serviceHeading}>
          <span className={`${styles.serviceIcon} ${styles.foodIcon}`}>
            <Utensils size={31} strokeWidth={2.4} aria-hidden="true" />
          </span>
          <div>
            <h3>고푸다</h3>
            <p>
              <span>오늘 뭐 먹지?</span> <span>고민될 땐 돌려보세요.</span>
            </p>
          </div>
        </div>
        <Link href="/projects/gofooda" className={styles.primaryButton}>
          만든 서비스 보기 <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <FoodRoulette />
    </article>
    <article className={`${styles.featureCard} ${styles.gameCard}`}>
      <p className={styles.sectionLabel}>GAMES</p>
      <h2>잠깐의 즐거움</h2>
      <p className={styles.featureDescription}>
        설치 없이 가볍게 즐기는
        <br />웹 게임으로 잠시 쉬어가요.
      </p>
      <div className={styles.gameService}>
        <div className={styles.serviceHeading}>
          <span className={`${styles.serviceIcon} ${styles.gameIcon}`}>
            <Gamepad2 size={32} strokeWidth={2.5} aria-hidden="true" />
          </span>
          <div>
            <h3>채채 게임</h3>
            <p>설치 없이 가볍게 즐기는 웹 게임.</p>
          </div>
        </div>
        <a href="https://games.chaechae.life" className={styles.primaryButton}>
          게임 하러 가기 <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <div className={styles.gameDecoration} aria-hidden="true">
        <p className={styles.gameNote}>
          잠깐만
          <br />
          놀고 갈까요? :)
        </p>
        <div className={styles.gameWindow}>
          <div className={styles.windowDots}>
            <i />
            <i />
            <i />
          </div>
          <div className={styles.blockBoard}>
            {blocks.map(([row, col, color]) => (
              <span
                key={`${row}-${col}`}
                className={`${styles.block} ${styles[color]}`}
                style={{ gridRow: row, gridColumn: col }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.gameRobots} aria-hidden="true">
        <Image src="/images/avatar/eko-1.png" alt="" width={180} height={180} sizes="180px" />
        <Image src="/images/avatar/mingke-1.png" alt="" width={180} height={180} sizes="180px" />
      </div>
    </article>
  </section>
);

export default FeaturedLinks;
