import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CarFront, Gamepad2, Zap } from 'lucide-react';
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
            <h3>채채 게임즈</h3>
            <p>설치 없이 가볍게 즐기는 웹 게임</p>
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
        <Image src="/images/avatar/eko-1.png" alt="" width={200} height={200} />
        <Image src="/images/avatar/mingke-1.png" alt="" width={200} height={200} />
      </div>
    </article>
    <article className={`${styles.featureCard} ${styles.projectCard}`}>
      <p className={styles.sectionLabel}>PROJECTS</p>
      <h2>일상을 조금 더 편리하게</h2>
      <p className={styles.featureDescription}>
        내 주변 충전소를 쉽고 빠르게.
        <br />
        충전 현황까지 한눈에 확인해요.
      </p>
      <div className={styles.projectService}>
        <div className={styles.serviceHeading}>
          <span className={`${styles.serviceIcon} ${styles.evIcon}`}>
            <CarFront size={32} strokeWidth={2.3} aria-hidden="true" />
          </span>
          <div>
            <h3>전기차G</h3>
            <p>전기차 충전소 찾기 서비스</p>
          </div>
        </div>
        <Link href="/projects/ev-charge" className={styles.primaryButton}>
          서비스 둘러보기 <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <div className={styles.evPreview}>
        <div className={styles.evBadge} aria-hidden="true">
          <Zap size={16} fill="currentColor" />
          가까운 충전소 찾기
        </div>
        <Image
          src="/images/projects/ev-charge/mockup.png"
          alt="지도에서 주변 전기차 충전소와 가까운 충전소 목록을 보여주는 전기차G 화면"
          width={512}
          height={1038}
          sizes="(max-width: 360px) 150px, (max-width: 480px) 108px, (max-width: 760px) 130px, (max-width: 860px) 86px, (max-width: 1000px) 10vw, (max-width: 1070px) 100px, (max-width: 1199px) 9.35vw, (max-width: 1214px) 11.2vw, 136px"
        />
      </div>
    </article>
  </section>
);

export default FeaturedLinks;
