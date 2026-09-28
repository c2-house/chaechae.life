import Link from 'next/link';
import { Mail } from 'lucide-react';

import { navLinks } from '@/constants/pages';
import { GithubIcon } from '@/public/icons';
import styles from './SiteChrome.module.css';

const navigationLabels: Record<string, string> = {
  Projects: '프로젝트',
  Games: '게임',
  Tech: '기술',
  Life: '일상',
};

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <div className={styles.footerIdentity}>
        <Link href="/" className={styles.footerBrand}>
          chaechae.life
        </Link>
        <p>작은 호기심이 모여, 우리의 일상이 됩니다.</p>
      </div>

      <div className={styles.footerRight}>
        <div className={styles.footerLinks}>
          <nav aria-label="하단 메뉴">
            <ul className={styles.footerNav}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  {link.path.startsWith('http') ? (
                    <a href={link.path}>{navigationLabels[link.name] ?? link.name}</a>
                  ) : (
                    <Link href={link.path}>{navigationLabels[link.name] ?? link.name}</Link>
                  )}
                </li>
              ))}
              <li>
                <Link href="/#about-us">우리 소개</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.socialLinks}>
            <a href="https://github.com/c2-house" target="_blank" rel="noopener noreferrer">
              <GithubIcon aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a href="mailto:chaechae.couple@gmail.com">
              <Mail aria-hidden="true" />
              <span>이메일</span>
            </a>
          </div>
        </div>
        <p className={styles.copyright}>&copy; chaechae.life</p>
      </div>
    </div>
  </footer>
);

export default Footer;
