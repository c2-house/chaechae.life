import dayjs from 'dayjs';
import { Post } from 'contentlayer/generated';
import Mdx from '../Mdx';
import Tags from './Tags';

const Post = ({ post }: { post: Post }) => {
  return (
    <article className="prose mx-auto py-10 lg:prose-lg prose-figcaption:text-sm">
      <header>
        <h1 className="!mb-6">{post.title}</h1>
        <div className="mb-4 text-sm text-gray-500 lg:text-base">
          <span>{post.author}</span>
          <time
            className="before:px-1.5 before:content-['·']"
            dateTime={dayjs(post.date).format('YYYY-MM-DD')}
          >
            {dayjs(post.date).format('MMM D, YYYY')}
          </time>
        </div>
        <Tags tags={post.tags} />
      </header>
      <hr className="not-prose my-8 lg:my-10" />
      <div>
        <Mdx code={post.body.code} />
      </div>
    </article>
  );
};

export default Post;
