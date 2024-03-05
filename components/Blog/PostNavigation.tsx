import Link from 'next/link';
import type { Post } from 'contentlayer/generated';
import { ChevronRightIcon } from '@/public/icons';

interface Props {
  allPosts: Post[];
  currentIndex: number;
}

const PostNavigation = ({ allPosts, currentIndex }: Props) => {
  return (
    <nav className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-6 border-y border-gray-200 py-8">
      {currentIndex < allPosts.length - 1 && (
        <Link href={`/blog/${allPosts[currentIndex + 1].slug}`} className="group flex flex-col">
          <span className="ml-7 text-xs text-slate-500">이전 글</span>
          <div className="mt-1 flex items-center font-semibold">
            <ChevronRightIcon className="mr-1 h-6 w-6 flex-shrink-0 rotate-180 fill-slate-500" />
            <span className="line-clamp-1 transition-colors group-hover:text-indigo-600">
              {allPosts[currentIndex + 1].title}
            </span>
          </div>
        </Link>
      )}
      {currentIndex > 0 && (
        <Link
          href={`/blog/${allPosts[currentIndex - 1].slug}`}
          className="group ml-auto flex flex-col"
        >
          <span className="ml-auto mr-7 text-xs text-slate-500">다음 글</span>
          <div className="mt-1 flex items-center font-semibold">
            <span className="line-clamp-1 transition-colors group-hover:text-indigo-600">
              {allPosts[currentIndex - 1].title}
            </span>
            <ChevronRightIcon className="ml-1 h-6 w-6 flex-shrink-0 fill-slate-500" />
          </div>
        </Link>
      )}
    </nav>
  );
};

export default PostNavigation;
