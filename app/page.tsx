import { allPosts } from 'contentlayer/generated';
import { getLifePosts, type BlogPost } from '@/lib/lifePosts';

import Hero from '@/components/Home/Hero';
import AboutUs from '@/components/Home/AboutUs';
import RecentPosts from '@/components/Home/RecentPosts';
import BlogHighlights from '@/components/Home/BlogHighlights';
import FeaturedLinks from '@/components/Home/FeaturedLinks';
import HomeAd from '@/components/Home/HomeAd';
import styles from '@/components/Home/Home.module.css';

const Home = async () => {
  const techPosts = [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const lifePosts = await getLifePosts();
  const latestPosts: BlogPost[] = [techPosts[0], lifePosts[0]].filter((post): post is BlogPost =>
    Boolean(post),
  );

  return (
    <main className={styles.home}>
      <Hero />
      <div className={styles.sections}>
        <FeaturedLinks />
        <BlogHighlights techPost={techPosts[0]} lifePost={lifePosts[0]} />
        <RecentPosts posts={latestPosts} />
        <HomeAd />
        <AboutUs />
      </div>
    </main>
  );
};

export default Home;
