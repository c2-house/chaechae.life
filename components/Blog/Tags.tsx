import clsx from 'clsx';
import Link from 'next/link';
import { tags } from '@/constants/pages';
import { slugify } from './utils';

export const Tags = ({ tags, addLink = true }: { tags: string[] | null; addLink?: boolean }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-slate-700 sm:text-sm">
      {tags.map((tag) =>
        addLink ? (
          <Link
            key={tag}
            href={`/blog/tag/${slugify(tag)}`}
            className="not-prose rounded-full bg-slate-200/60 px-2 py-0.5"
          >
            {tag}
          </Link>
        ) : (
          <span key={tag} className="not-prose rounded-full bg-slate-200/60 px-2 py-0.5 sm:px-3">
            {tag}
          </span>
        ),
      )}
    </div>
  );
};

export const TagNavbar = ({ currentTab }: { currentTab: string }) => {
  const defaultTag = '전체글';
  const allTags = [defaultTag, ...tags];

  return (
    <nav>
      <ul className="not-prose flex flex-wrap justify-center gap-x-2 gap-y-3 text-sm text-slate-700">
        {allTags.map((tag) => (
          <li key={tag}>
            <Link
              href={tag === defaultTag ? `/blog` : `/blog/tag/${slugify(tag)}`}
              className={clsx(
                'inline-flex rounded-full border px-2 py-0.5 transition-colors',
                decodeURIComponent(currentTab) === slugify(tag)
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