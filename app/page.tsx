import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

import PostList from '@/components/Blog/PostList';
import Hero from '@/components/Home/Hero';
import AboutUs from '@/components/Home/AboutUs';
import BlogInfeedAds from '@/components/AdSense/BlogInfeedAds';
import { ChevronRightIcon } from '@/public/icons';

const Home = () => {
  const posts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <main>
      <Hero />
      <AboutUs />

      <section className="container-lg pt-10">
        <div className="mb-5 flex items-center justify-between md:mb-7">
          <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">Recent Posts</h2>
          <Link href="/blog" className="flex items-center text-sm text-indigo-600 hover:underline">
            전체보기
            <ChevronRightIcon className="h-5 w-5 fill-current" />
          </Link>
        </div>
        <PostList posts={posts} />
        <BlogInfeedAds />
      </section>
    </main>
  );
};

export default Home;
