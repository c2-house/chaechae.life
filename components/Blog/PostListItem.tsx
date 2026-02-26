import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import type { BlogPost } from '@/lib/lifePosts';
import { Tags } from './Tags';

interface PostLinkProps extends React.PropsWithChildren {
  post: BlogPost;
  className?: string;
}

const PostLink = ({ post, className, children }: PostLinkProps) => {
  return post.type === 'Post' ? (
    <Link href={`/blog/${post.slug}`} className={className}>
      {children}
    </Link>
  ) : (
    <a href={`https://life.chaechae.life/${post.slug}`} className={className}>
      {children}
    </a>
  );
};

const PostListItem = ({ post }: { post: BlogPost }) => {
  return (
    <article className="flex items-center">
      <PostLink
        post={post}
        className="h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-lg sm:h-[100px] sm:w-[100px] md:h-[160px] md:w-[160px]"
      >
        <Image
          src={post.image || '/og-image.jpg'}
          alt={post.title}
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
      </PostLink>
      <div className="ml-4 flex-1 md:ml-6">
        <PostLink post={post} className="my-1 block">
          <h2 className="line-clamp-2 font-bold sm:text-lg md:text-xl">{post.title}</h2>
          <p className="mt-2 hidden text-slate-700 md:line-clamp-2">{post.description}</p>
        </PostLink>
        <time
          className="mb-2 mt-1 block text-sm text-slate-500 md:mt-2"
          dateTime={dayjs(post.date).format('YYYY-MM-DD')}
        >
          {dayjs(post.date).format('YYYY년 M월 D일')}
        </time>
        <Tags tags={post.tags} addLink={post.type === 'Post'} />
      </div>
    </article>
  );
};

export default PostListItem;
