'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { navLinks } from '@/constants/pages';
import { LogoIcon, MenuIcon } from '@/public/icons';
import Drawer from './Drawer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const currentPath = `/${usePathname().split('/')[1]}`;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={clsx(
          'inset-x-0 top-0 z-10 w-full transition-colors duration-300',
          currentPath === '/' ? 'fixed' : 'sticky',
          scrollY <= 0 ? 'bg-transparent' : 'border-b border-gray-100 bg-white/70 backdrop-blur-lg',
        )}
      >
        <div className="container-lg py-3 md:py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <LogoIcon className="h-6 w-6" />
              <span className="text-lg font-semibold lg:text-xl">chaechae.life</span>
            </Link>

            <nav className="hidden md:block">
              <ul className="flex items-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className={clsx(
                        'block px-4 py-1 font-semibold transition-colors',
                        currentPath === link.path ? 'text-indigo-600' : 'hover:text-slate-500',
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://life.chaechae.life"
                    className="block px-4 py-1 font-semibold transition-colors hover:text-slate-500"
                  >
                    Life
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center md:hidden">
              <button
                aria-label="open sidebar"
                className="p-1"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon className="fill-current" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Drawer currentPath={currentPath} isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Header;
