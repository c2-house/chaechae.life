import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from 'contentlayer/generated';

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <li>
      <article>
        <Link href={`/${post.slug}`} className="overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={374}
            height={196}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="h-full w-full rounded-lg object-cover"
          />
        </Link>
        <div className="mt-4">
          <Link href={`/${post.slug}`}>
            <div className="mb-2 text-sm font-semibold uppercase text-gray-500">
              {post.category}
            </div>
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="mt-3 line-clamp-3 text-gray-700">{post.description}</p>
          </Link>
          <div className="mt-3 text-sm text-gray-500">
            <time dateTime={dayjs(post.date).format('YYYY-MM-DD')}>
              {dayjs(post.date).format('MMM D, YYYY')}
            </time>
            <span className="before:px-1.5 before:content-['·']">{post.readTime} min read</span>
          </div>
        </div>
      </article>
    </li>
  );
};

export default PostListItem;
