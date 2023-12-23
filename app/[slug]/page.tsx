import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import Post from '@/components/Blog/Post';

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post.slug }));
};

const PostPage = ({ params }: Props) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <main className="container-xl">
      <Post post={post} />
    </main>
  );
};

export default PostPage;
