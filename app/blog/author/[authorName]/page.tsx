import Image from 'next/image';
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
    <main>
      <div className="lg:container-lg">
        <div className="flex flex-col items-center bg-gradient-to-r from-blue-50 to-rose-50 py-5 md:py-8 lg:py-10">
          <Image
            src={`/images/avatar/${authorName}.png`}
            alt="프로필 사진"
            width={100}
            height={100}
            className="rounded-full border border-slate-200"
          />
          <h1 className="mt-4 text-xl font-bold md:text-2xl lg:text-3xl">{authorName}</h1>
        </div>
      </div>
      <section className="container-lg pt-8">
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default AuthorPage;
