import { Suspense } from 'react';
import { allPosts } from 'contentlayer/generated';
import { getLifePosts } from '@/lib/lifePosts';

import Hero from '@/components/Home/Hero';
import AboutUs from '@/components/Home/AboutUs';
import RecentPosts from '@/components/Home/RecentPosts';

const Home = async () => {
  const techPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const lifePosts = await getLifePosts();

  return (
    <main>
      <Hero />
      <AboutUs />
      <RecentPosts posts={techPosts} />
      <Suspense fallback={null}>
        <RecentPosts posts={lifePosts} />
      </Suspense>
    </main>
  );
};

export default Home;
