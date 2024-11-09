import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import { authors } from '@/constants/pages';
import { slugify } from '@/components/Blog/utils';
import PostList from '@/components/Blog/PostList';

interface Props {
  params: {
    authorName: string;
  };
  searchParams: {
    page: string;
  };
}

// export const generateStaticParams = async () => {
//   return authors.map((author) => ({ authorName: slugify(author) }));
// };

const AuthorPage = ({ params: { authorName }, searchParams: { page } }: Props) => {
  const posts = allPosts
    .filter((post) => slugify(post.author) === authorName)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const currentAuthor = authors.find((author) => slugify(author) === authorName);

  return (
    <main>
      <div className="lg:container-lg">
        <div className="bg-gradient-light flex flex-col items-center py-5 md:py-8 lg:py-10">
          <Image
            src={`/images/avatar/${authorName}-1.png`}
            alt="프로필 사진"
            width={100}
            height={100}
            className="animate-bounce rounded-full"
          />
          <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">{currentAuthor}</h1>
        </div>
      </div>
      <section className="container-lg pt-6 md:pt-8">
        <PostList posts={posts} page={page} countLabel="글 목록" />
      </section>
    </main>
  );
};

export default AuthorPage;
