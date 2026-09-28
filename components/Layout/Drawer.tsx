'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { navLinks } from '@/constants/pages';
import { CloseIcon, LogoIcon } from '@/public/icons';
import styles from './SiteChrome.module.css';

interface Props {
  currentPath: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const navigationLabels: Record<string, string> = {
  Projects: '프로젝트',
  Games: '게임',
  Tech: '기술',
  Life: '일상',
};

const Drawer = ({ currentPath, isOpen, setIsOpen }: Props) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
      }

      if (event.key !== 'Tab') return;

      const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const desktopQuery = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    desktopQuery.addEventListener('change', closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      desktopQuery.removeEventListener('change', closeOnDesktop);
      previousFocus?.focus();
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.drawerBackdrop}
      onClick={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navigation-title"
        className={styles.drawer}
      >
        <div className={styles.drawerHeading}>
          <span id="mobile-navigation-title" className={styles.drawerTitle}>
            <LogoIcon className={styles.drawerMark} aria-hidden="true" focusable="false" />
            채채라이프
          </span>
          <button
            ref={closeRef}
            type="button"
            aria-label="메뉴 닫기"
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="모바일 주 메뉴">
          <ul className={styles.drawerNav}>
            {navLinks.map((link) => (
              <li key={link.path}>
                {link.path.startsWith('http') ? (
                  <a href={link.path} onClick={() => setIsOpen(false)}>
                    {navigationLabels[link.name] ?? link.name}
                  </a>
                ) : (
                  <Link
                    href={link.path}
                    className={clsx(currentPath === link.path && styles.active)}
                    aria-current={currentPath === link.path ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {navigationLabels[link.name] ?? link.name}
                  </Link>
                )}
              </li>
            ))}
            <li className={styles.drawerAbout}>
              <Link href="/#about-us" onClick={() => setIsOpen(false)}>
                우리 소개
              </Link>
            </li>
          </ul>
        </nav>
        <p className={styles.drawerNote}>만들고, 놀고, 기록하는 채채라이프.</p>
      </div>
    </div>
  );
};

export default Drawer;
