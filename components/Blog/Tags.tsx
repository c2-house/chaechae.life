import clsx from 'clsx';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import { tags } from '@/constants/pages';

export const Tags = ({ tags }: { tags: Post['tags'] }) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-slate-700 sm:text-sm">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog/tag/${tag.toLowerCase()}`}
          className="not-prose rounded-full bg-slate-200/60 px-2 py-0.5 sm:px-3"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export const TagTabs = ({ currentTab }: { currentTab: string }) => {
  const allTags = ['All', ...tags];

  return (
    <ul className="not-prose my-5 flex flex-wrap gap-2 text-sm text-slate-700 md:gap-3 md:text-base">
      {allTags.map((tag) => (
        <li key={tag}>
          <Link
            href={tag === 'All' ? `/blog` : `/blog/tag/${tag.toLowerCase()}`}
            className={clsx('inline-flex rounded-full border border-slate-200 px-3 py-0.5', {
              'border-slate-800 bg-slate-800 text-white': currentTab === tag.toLowerCase(),
            })}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};
