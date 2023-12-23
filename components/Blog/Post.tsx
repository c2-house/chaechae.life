import dayjs from 'dayjs';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import Mdx from '../Mdx';

const Post = ({ post }: { post: Post }) => {
  return (
    <article className="prose mx-auto py-10 lg:prose-lg prose-figcaption:text-sm">
      <header>
        <div className="mb-4">
          <Link
            href={`/tag/${post.tags}`}
            className="font-semibold uppercase text-gray-500 no-underline"
          >
            {post.tags}
          </Link>
        </div>
        <h1 className="!mb-6">{post.title}</h1>
        <div className="text-sm text-gray-500 lg:text-base">
          <span>{post.author}</span>
          <time
            className="before:px-1.5 before:content-['·']"
            dateTime={dayjs(post.date).format('YYYY-MM-DD')}
          >
            {dayjs(post.date).format('MMM D, YYYY')}
          </time>
        </div>
      </header>
      <hr className="not-prose my-8 lg:my-10" />
      <div>
        <Mdx code={post.body.code} />
      </div>
    </article>
  );
};

export default Post;
