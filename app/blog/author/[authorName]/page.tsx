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

const TagPage = ({ params: { authorName } }: Props) => {
  const posts = allPosts.filter((post) => post.author.toLowerCase() === authorName);

  return (
    <main>
      <section className="container-lg p-0 lg:px-8">
        <div className="relative flex h-[30vh] items-center justify-center bg-black/60">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              src={`/images/cover/main.jpg`}
              alt={authorName}
              width={1280}
              height={853}
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="px-6 text-center text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            {authorName.toUpperCase()}
          </h1>
        </div>
      </section>

      <section className="container-lg py-10">
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default TagPage;
