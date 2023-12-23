import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from 'contentlayer/generated';
import Tags from './Tags';

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <li>
      <article className="flex">
        <Link
          href={`/blog/${post.slug}`}
          className="h-[100px] w-[100px] overflow-hidden md:h-[160px] md:w-[160px]"
        >
          <Image
            src={post.image}
            alt={post.title}
            width={160}
            height={160}
            className="h-full w-full rounded-lg object-cover"
          />
        </Link>
        <div className="ml-4 flex-1">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="line-clamp-2 font-bold sm:text-lg md:text-xl lg:text-2xl">
              {post.title}
            </h2>
            <p className="mt-3 hidden text-gray-700 md:line-clamp-2">{post.description}</p>
          </Link>
          <div className="my-2 text-xs text-gray-500 sm:my-3 sm:text-sm">
            <span>{post.author}</span>
            <time
              className="before:px-1.5 before:content-['·']"
              dateTime={dayjs(post.date).format('YYYY-MM-DD')}
            >
              {dayjs(post.date).format('MMM D, YYYY')}
            </time>
          </div>
          <Tags tags={post.tags} />
        </div>
      </article>
    </li>
  );
};

export default PostListItem;
