import Link from 'next/link';
import type { BlogPost } from '@/lib/lifePosts';
import PostList from '@/components/Blog/PostList';
import { ChevronRightIcon } from '@/public/icons';

interface BlogLinkProps extends React.PropsWithChildren {
  type: BlogPost['type'];
  className?: string;
}

const BlogLink = ({ type, className, children }: BlogLinkProps) => {
  return type === 'Post' ? (
    <Link href="/blog" className={className}>
      {children}
    </Link>
  ) : (
    <a href="https://life.chaechae.life" className={className}>
      {children}
    </a>
  );
};

const TITLE: Record<BlogPost['type'], { en: string; ko: string }> = {
  Post: {
    en: 'Tech',
    ko: '기술 블로그',
  },
  LifePost: {
    en: 'Life',
    ko: '일상 블로그',
  },
};

const RecentPosts = ({ posts }: { posts: BlogPost[] }) => {
  const postType = posts[0].type;

  return (
    <section className="container-lg py-20">
      <div className="mb-5 flex items-center justify-between md:mb-7">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          {TITLE[postType].en}
          <span className="left-pipe ml-2 pl-2 text-xl text-slate-500">{TITLE[postType].ko}</span>
        </h2>
        <BlogLink
          type={postType}
          className="flex items-center text-sm text-indigo-600 hover:underline"
        >
          전체보기
          <ChevronRightIcon className="h-5 w-5 fill-current" />
        </BlogLink>
      </div>
      <PostList posts={posts} showAds={false} />
      <div className="mt-8 flex justify-center">
        <BlogLink
          type={postType}
          className="bg-gradient-dark inline-flex items-center justify-center rounded-lg bg-opacity-100 px-4 py-3 font-semibold text-white hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
        >
          <span className="pl-2">{TITLE[postType].ko} 보기</span>
          <ChevronRightIcon className="h-6 w-6 fill-current" />
        </BlogLink>
      </div>
    </section>
  );
};

export default RecentPosts;
