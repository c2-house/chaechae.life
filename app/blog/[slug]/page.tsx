import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import Post from '@/components/Blog/Post';
import { ChevronRightIcon } from '@/public/icons';

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post.slug }));
};

const PostPage = ({ params: { slug } }: Props) => {
  const i = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .findIndex((post) => post.slug === slug);

  const post = allPosts[i];

  if (!post) notFound();

  return (
    <main className="container-lg">
      <Post post={post} />
      <nav className="mx-auto flex max-w-[730px] flex-wrap items-center justify-between gap-x-4 gap-y-6 border-t border-gray-200 pt-8">
        {i < allPosts.length - 1 && (
          <Link href={`/blog/${allPosts[i + 1].slug}`} className="group flex flex-col">
            <span className="ml-7 text-xs text-slate-500">이전 글</span>
            <div className="mt-1 flex items-center font-semibold">
              <ChevronRightIcon className="mr-1 h-6 w-6 flex-shrink-0 rotate-180 fill-slate-500" />
              <span className="line-clamp-1 transition-colors group-hover:text-indigo-600">
                {allPosts[i + 1].title}
              </span>
            </div>
          </Link>
        )}
        {i > 0 && (
          <Link href={`/blog/${allPosts[i - 1].slug}`} className="group ml-auto flex flex-col">
            <span className="ml-auto mr-7 text-xs text-slate-500">다음 글</span>
            <div className="mt-1 flex items-center font-semibold">
              <span className="line-clamp-1 transition-colors group-hover:text-indigo-600">
                {allPosts[i - 1].title}
              </span>
              <ChevronRightIcon className="ml-1 h-6 w-6 flex-shrink-0 fill-slate-500" />
            </div>
          </Link>
        )}
      </nav>
    </main>
  );
};

export default PostPage;
