import Link from 'next/link';
import { Post } from 'contentlayer/generated';

const Tags = ({ tags }: { tags: Post['tags'] }) => {
  return (
    <div className="flex space-x-2 text-xs text-gray-700 sm:text-sm">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog/tag/${tag.toLowerCase()}`}
          className="not-prose rounded-full bg-gray-100 px-2 py-[2px] sm:px-3"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default Tags;
