import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import Post from '@/components/Blog/Post';
import PostNavigation from '@/components/Blog/PostNavigation';
import Comments from '@/components/Blog/Comments';
import SideStickyAds from '@/components/AdSense/SideStickyAds';

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post.slug }));
};

const PostPage = ({ params: { slug } }: Props) => {
  const currentIndex = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .findIndex((post) => post.slug === slug);

  const post = allPosts[currentIndex];

  if (!post) notFound();

  return (
    <main className="container-lg lg:flex">
      <div className="mx-auto max-w-[650px] lg:ml-0 lg:max-w-[730px]">
        <Post post={post} />
        <PostNavigation allPosts={allPosts} currentIndex={currentIndex} />
        <Comments />
      </div>
      <div className="hidden h-[600px] w-[160px] pt-10 lg:sticky lg:top-16 lg:block">
        <SideStickyAds />
      </div>
    </main>
  );
};

export default PostPage;
