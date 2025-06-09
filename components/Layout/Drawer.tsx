import clsx from 'clsx';
import Link from 'next/link';
import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { navLinks } from '@/constants/pages';
import { CloseIcon } from '@/public/icons';

interface Props {
  currentPath: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const handleClickOutside = (e: MouseEvent, setIsOpen: Dispatch<SetStateAction<boolean>>) => {
  if (e.target === e.currentTarget) {
    setIsOpen(false);
  }
};

const Drawer = ({ currentPath, isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={clsx(
        'fixed inset-0 cursor-default transition-all duration-300',
        isOpen
          ? 'pointer-events-auto z-50 bg-slate-900/80 backdrop-blur'
          : 'pointer-events-none z-[-1] bg-transparent',
      )}
      onClick={(e) => handleClickOutside(e, setIsOpen)}
    >
      <div
        className={clsx(
          'fixed right-0 top-0 z-[51] flex h-full w-64 transform flex-col bg-slate-100 p-4 text-slate-700 shadow-lg transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex justify-end">
          <button
            aria-label="close sidebar"
            className="cursor-pointer p-1"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon className="fill-current" />
          </button>
        </div>

        <nav>
          <ul className="flex flex-col items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <Link
                  href={link.path}
                  className={clsx(
                    'inline-block w-full p-2 text-center font-semibold transition-colors',
                    currentPath === link.path ? 'text-indigo-600' : 'hover:text-slate-500',
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://life.chaechae.life"
                className="inline-block w-full p-2 text-center font-semibold hover:text-slate-500"
              >
                Life
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
