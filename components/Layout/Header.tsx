'use client';

import Link from 'next/link';
import { useState } from 'react';

import { categories } from '@/constants/category';
import { MenuIcon } from '@/public/icons';
import Drawer from './Drawer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container-xl py-3 md:py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold md:text-2xl">
              My Blog
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center">
                {categories.map((category) => (
                  <li key={category}>
                    <Link
                      href={`/category/${category}`}
                      className="px-4 py-2 font-semibold uppercase transition-colors hover:text-slate-500"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center lg:hidden">
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
