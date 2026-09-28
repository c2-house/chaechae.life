import { allPosts } from 'contentlayer/generated';
import { getLifePosts } from '@/lib/lifePosts';

import Hero from '@/components/Home/Hero';
import AboutUs from '@/components/Home/AboutUs';
import BlogHighlights from '@/components/Home/BlogHighlights';
import FeaturedLinks from '@/components/Home/FeaturedLinks';
import HomeAd from '@/components/Home/HomeAd';
import styles from '@/components/Home/Home.module.css';

const Home = async () => {
  const techPosts = [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const lifePosts = (await getLifePosts()).slice(0, 3);

  return (
    <main className={styles.home}>
      <Hero />
      <div className={styles.sections}>
        <FeaturedLinks />
        <BlogHighlights techPosts={techPosts} lifePosts={lifePosts} />
        <HomeAd />
        <AboutUs />
      </div>
    </main>
  );
};

export default Home;
