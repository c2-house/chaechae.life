import { allPosts } from 'contentlayer/generated';
import { authors } from '@/constants/pages';
import PostList from '@/components/Blog/PostList';

interface Props {
  params: {
    authorName: string;
  };
}

export const generateStaticParams = async () => {
  return authors.map((author) => ({ authorName: author.toLowerCase() }));
};

const AuthorPage = ({ params: { authorName } }: Props) => {
  const posts = allPosts.filter((post) => post.author.toLowerCase() === authorName);

  return (
    <main className="container-lg">
      <h1 className="my-5 text-center text-2xl font-bold md:my-8 md:text-3xl lg:my-10 lg:text-4xl">
        {authorName}의 글
      </h1>
      <section className="pt-5">
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default AuthorPage;
