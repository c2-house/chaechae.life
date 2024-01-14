import clsx from 'clsx';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import { tags } from '@/constants/pages';
import { slugify } from './utils';

export const Tags = ({ tags }: { tags: Post['tags'] }) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-slate-700 sm:text-sm">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog/tag/${slugify(tag)}`}
          className="not-prose rounded-full bg-slate-200/60 px-2 py-0.5 sm:px-3"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export const TagNavbar = ({ currentTab }: { currentTab: string }) => {
  const allTags = ['All', ...tags];

  return (
    <nav>
      <ul className="not-prose my-5 flex flex-wrap justify-center gap-2 text-sm text-slate-700 md:gap-3 md:text-base">
        {allTags.map((tag) => (
          <li key={tag}>
            <Link
              href={tag === 'All' ? `/blog` : `/blog/tag/${slugify(tag)}`}
              className={clsx(
                'inline-flex rounded-full border px-3 py-1 transition-colors sm:px-4',
                currentTab === slugify(tag)
                  ? 'border-indigo-600 bg-indigo-600 text-white'
                  : 'border-slate-200 hover:border-indigo-600',
              )}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
