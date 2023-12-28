'use client';

import Link from 'next/link';
import { useState } from 'react';

import { navLinks } from '@/constants/pages';
import { MenuIcon } from '@/public/icons';
import Drawer from './Drawer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container-lg py-3 md:py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold md:text-2xl">
              CHAECHAE LIFE
            </Link>

            <nav className="hidden md:block">
              <ul className="flex items-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="px-4 py-2 font-semibold uppercase transition-colors hover:text-slate-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
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

      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Header;
