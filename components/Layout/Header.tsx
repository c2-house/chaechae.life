'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navLinks } from '@/constants/pages';
import { LogoIcon, MenuIcon } from '@/public/icons';
import Drawer from './Drawer';
import styles from './SiteChrome.module.css';

const navigationLabels: Record<string, string> = {
  Projects: '프로젝트',
  Games: '게임',
  Tech: '기술',
  Life: '일상',
};

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const currentPath = `/${usePathname().split('/')[1]}`;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand} aria-label="채채라이프 홈">
            <LogoIcon className={styles.brandMark} aria-hidden="true" focusable="false" />
            <span className={styles.brandText}>
              <span className={styles.brandName}>채채라이프</span>
              <span className={styles.brandDomain}>chaechae.life</span>
            </span>
          </Link>

          <nav className={styles.desktopNav} aria-label="주 메뉴">
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  {link.path.startsWith('http') ? (
                    <a href={link.path} className={styles.navLink}>
                      {navigationLabels[link.name] ?? link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.path}
                      className={clsx(styles.navLink, currentPath === link.path && styles.active)}
                      aria-current={currentPath === link.path ? 'page' : undefined}
                    >
                      {navigationLabels[link.name] ?? link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/#about-us" className={styles.aboutLink}>
            우리 소개
          </Link>

          <button
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-navigation"
            className={styles.menuButton}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon aria-hidden="true" />
          </button>
        </div>
      </header>

      <Drawer currentPath={currentPath} isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Header;
