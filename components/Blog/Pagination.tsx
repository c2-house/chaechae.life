import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon, ChevronLeftIcon } from '@/public/icons';

interface Props {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: Props) => {
  return (
    <>
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4">
          <Link
            href={`?page=${currentPage - 1}`}
            aria-disabled={currentPage === 1}
            className={clsx(
              'group flex items-center gap-1 rounded-md px-2 py-1 transition-colors hover:bg-slate-100',
              currentPage === 1 && 'pointer-events-none opacity-50',
            )}
          >
            <ChevronLeftIcon className="h-6 w-6 fill-current" />
            <Image
              src="/images/avatar/eko-1.png"
              alt="left"
              width={30}
              height={30}
              className="group-hover:animate-bounce-fast"
            />
          </Link>
          <span>
            {currentPage} / {totalPages}
          </span>
          <Link
            href={`?page=${currentPage + 1}`}
            aria-disabled={currentPage === totalPages}
            className={clsx(
              'group flex items-center gap-1 rounded-md px-2 py-1 transition-colors hover:bg-slate-100',
              currentPage === totalPages && 'pointer-events-none opacity-50',
            )}
          >
            <Image
              src="/images/avatar/mingke-1.png"
              alt="right"
              width={30}
              height={30}
              className="group-hover:animate-bounce-fast"
            />
            <ChevronRightIcon className="h-6 w-6 fill-current" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Pagination;
