import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import Post from '@/components/Blog/Post';
import PostNavigation from '@/components/Blog/PostNavigation';
import Comments from '@/components/Blog/Comments';

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
    <main className="container-lg">
      <div className="mx-auto max-w-[730px]">
        <Post post={post} />
        <PostNavigation allPosts={allPosts} currentIndex={currentIndex} />
        <Comments slug={slug} title={post.title} />
      </div>
    </main>
  );
};

export default PostPage;
