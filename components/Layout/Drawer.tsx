import clsx from 'clsx';
import Link from 'next/link';
import { navLinks } from '@/constants/pages';
import { CloseIcon } from '@/public/icons';

interface Props {
  currentPath: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ currentPath, isOpen, setIsOpen }: Props) => {
  return (
    <div>
      <div
        className={clsx('fixed inset-0 cursor-default transition-all duration-300', {
          'pointer-events-auto z-30 bg-slate-900/80 backdrop-blur': isOpen,
          'pointer-events-none -z-10 bg-transparent': !isOpen,
        })}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={clsx(
            'fixed right-0 top-0 z-40 flex h-full w-64 transform flex-col bg-slate-100 p-4 text-slate-700 shadow-lg transition-transform duration-300',
            { 'translate-x-0': isOpen, 'translate-x-full': !isOpen },
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
            <ul className="flex flex-col items-center">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <Link
                    href={link.path}
                    className={clsx(
                      'inline-block w-full p-2 text-center font-semibold transition-colors',
                      {
                        'text-indigo-500': currentPath === link.path,
                        'hover:text-slate-500': currentPath !== link.path,
                      },
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
