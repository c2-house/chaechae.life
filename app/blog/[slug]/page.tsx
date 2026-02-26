import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import Post from '@/components/Blog/Post';
import PostNavigation from '@/components/Blog/PostNavigation';
import Comments from '@/components/Blog/Comments';
import Sidebar from '@/components/Layout/Sidebar';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';

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
    <div className="container-lg block lg:flex lg:gap-6">
      <Sidebar currentTab="all" />
      <main className="min-h-screen flex-1">
        <section className="py-5">
          <Post post={post} />
          <PostNavigation allPosts={allPosts} currentIndex={currentIndex} />
          <Comments />
        </section>
        <ResponsiveAds />
      </main>
    </div>
  );
};

export default PostPage;
