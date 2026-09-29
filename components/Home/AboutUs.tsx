'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './AboutUs.module.css';

const profiles = [
  {
    name: 'EKO',
    role: 'Frontend',
    image: '/images/avatar/eko-1.png',
    className: styles.eko,
    shortDescription: ['예쁜 화면과', '좋은 경험을 만들어요.'],
    descriptions: [
      'Next.js와 TypeScript를 사용하여 빠르고 안정적인 웹사이트를 개발합니다.',
      '편리하고 직관적인 UI/UX를 설계하기 위해 사용자 관점에서 고민하고, 모든 기기에서 원활하게 작동하는 반응형 웹사이트를 개발합니다.',
      '개발뿐만 아니라 기획, 디자인, SEO 등 서비스 출시에 필요한 모든 과정을 직접 수행할 수 있습니다.',
    ],
  },
  {
    name: 'mingke',
    role: 'Backend',
    image: '/images/avatar/mingke-1.png',
    className: styles.mingke,
    shortDescription: ['안정적인 서비스로', '든든한 기반을 만들어요.'],
    descriptions: [
      'FastAPI 또는 Django를 사용하여 안정적인 서버를 구축하는 Python 개발자입니다.',
      '컨테이너 기술과 AWS를 사용하여 서버를 배포하고, CI/CD를 구축하여 개발 생산성을 높일 수 있습니다.',
      '새로운 기술을 배우고 지식을 공유하는 것을 좋아합니다.',
    ],
  },
];

const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about-us" className={styles.section} aria-labelledby="about-us-title">
      <div className={styles.band}>
        <div className={styles.introduction}>
          <h2 id="about-us-title">함께 만드는 두 사람</h2>
          <p>코드도, 아이디어도, 일상도 언제나 함께해요.</p>
        </div>
        {profiles.map((profile) => (
          <div key={profile.name} className={`${styles.profile} ${profile.className}`}>
            <Image src={profile.image} alt="" width={120} height={120} className={styles.avatar} />
            <div className={styles.profileText}>
              <h3>{profile.name}</h3>
              <p className={styles.role}>{profile.role}</p>
              <p className={styles.shortDescription}>
                {profile.shortDescription[0]}
                <br />
                {profile.shortDescription[1]}
              </p>
            </div>
          </div>
        ))}
        <button
          className={styles.aboutButton}
          type="button"
          aria-expanded={expanded}
          aria-controls="about-us-details"
          onClick={() => setExpanded((previous) => !previous)}
        >
          {expanded ? '소개 접기' : '소개 보기'}
          {expanded ? (
            <ChevronUp size={18} aria-hidden="true" />
          ) : (
            <ChevronDown size={18} aria-hidden="true" />
          )}
        </button>
      </div>
      <div id="about-us-details" className={styles.details} hidden={!expanded}>
        {profiles.map((profile) => (
          <div key={profile.name} className={styles.biography}>
            <h3>
              {profile.name} <span>{profile.role} Developer</span>
            </h3>
            <ul>
              {profile.descriptions.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
