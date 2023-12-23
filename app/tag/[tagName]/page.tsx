import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import { tags } from '@/constants/pages';
import PostList from '@/components/Blog/PostList';

interface Props {
  params: {
    tagName: string;
  };
}

export const generateStaticParams = async () => {
  return tags.map((tagName) => ({ tagName }));
};

const TagPage = ({ params: { tagName } }: Props) => {
  const posts = allPosts.filter((post) => post.tags.includes(tagName));

  return (
    <main>
      <section className="container-xl p-0 lg:px-8">
        <div className="relative flex h-[30vh] items-center justify-center bg-black/60">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              src={`/images/cover/main.jpg`}
              alt={tagName}
              width={1280}
              height={853}
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="px-6 text-center text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            {tagName.toUpperCase()}
          </h1>
        </div>
      </section>

      <section className="container-xl py-10">
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default TagPage;
