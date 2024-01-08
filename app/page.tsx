import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import PostList from '@/components/Blog/PostList';
import { ChevronRightIcon } from '@/public/icons';

const Home = () => {
  const posts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <main>
      <section className="bg-gradient-light bg-gradient-to-b">
        <div className="flex h-screen items-center justify-center md:h-screen">
          <div className="px-6 text-center">
            <h1 className="mb-5 text-5xl font-semibold md:mb-8 md:text-7xl lg:mb-12 lg:text-8xl">
              <span className="animate-fade-in animation-delay-100">개발자 부부</span>
              <br />
              <span className="animate-fade-in animation-delay-300 bg-gradient-text mt-4 inline-block md:mt-5 lg:mt-6">
                채채
              </span>
            </h1>
            <p className="animate-fade-in animation-delay-500 text-lg text-slate-700 md:text-xl md:!leading-relaxed lg:text-2xl">
              세상에 필요한 서비스를 만듭니다.
              <br />
              사용하기 쉽고 편리한 서비스를 개발합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="container-lg pt-10">
        <div className="mb-5 flex items-center justify-between md:mb-7">
          <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">최근 작성한 글</h2>
          <Link href="/blog" className="flex items-center text-sm text-indigo-600 hover:underline">
            전체보기
            <ChevronRightIcon className="h-5 w-5 fill-current" />
          </Link>
        </div>
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default Home;
