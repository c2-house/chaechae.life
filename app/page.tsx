import { Suspense } from 'react';
import { allPosts } from 'contentlayer/generated';
import { getLifePosts } from '@/lib/lifePosts';

import Hero from '@/components/Home/Hero';
import AboutUs from '@/components/Home/AboutUs';
import RecentPosts from '@/components/Home/RecentPosts';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';

const Home = async () => {
  const techPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const lifePosts = await getLifePosts();

  return (
    <main>
      <Hero />
      <div className="container-lg">
        <AboutUs />
        <ResponsiveAds />
        <RecentPosts posts={techPosts} />
        <ResponsiveAds />
        <Suspense fallback={null}>
          <RecentPosts posts={lifePosts} />
        </Suspense>
        <ResponsiveAds />
      </div>
    </main>
  );
};

export default Home;
