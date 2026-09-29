'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navLinks } from '@/constants/pages';
import { MenuIcon } from '@/public/icons';
import Brand from './Brand';
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
          <Brand />

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
