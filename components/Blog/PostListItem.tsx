import Link from 'next/link';
import Image from 'next/image';
import { Post } from 'contentlayer/generated';
import Tags from './Tags';
import Author from './Author';

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
          <div className="my-2 text-xs sm:my-3 sm:text-sm">
            <Author author={post.author} date={post.date} />
          </div>
          <Tags tags={post.tags} />
        </div>
      </article>
    </li>
  );
};

export default PostListItem;
