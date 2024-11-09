import clsx from 'clsx';
import Link from 'next/link';
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
              'rounded-full border border-slate-200 p-1',
              currentPage === 1 && 'pointer-events-none opacity-50',
            )}
          >
            <ChevronLeftIcon className="h-5 w-5 fill-current md:h-7 md:w-7" />
          </Link>
          <span className="text-sm md:text-base">
            {currentPage} / {totalPages}
          </span>
          <Link
            href={`?page=${currentPage + 1}`}
            aria-disabled={currentPage === totalPages}
            className={clsx(
              'rounded-full border border-slate-200 p-1',
              currentPage === totalPages && 'pointer-events-none opacity-50',
            )}
          >
            <ChevronRightIcon className="h-5 w-5 fill-current md:h-7 md:w-7" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Pagination;
