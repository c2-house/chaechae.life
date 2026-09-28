import { allPosts } from 'contentlayer/generated';
import PostList from '@/components/Blog/PostList';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';
import Sidebar from '@/components/Layout/Sidebar';
import CollectionHeading from '@/components/Layout/CollectionHeading';
import styles from '@/components/Layout/CollectionPage.module.css';

interface Props {
  searchParams: {
    page: string;
  };
}

const BlogPage = ({ searchParams: { page } }: Props) => {
  const posts = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const defaultTag = '전체글';

  return (
    <main className={styles.page}>
      <CollectionHeading
        label="TECH"
        title="기술 노트"
        description="개발하며 배우고, 정리한 것을 나눕니다."
      />
      <div className={styles.blogLayout}>
        <Sidebar currentTab={defaultTag} />
        <section className={styles.posts}>
          <PostList posts={posts} page={page} countLabel={defaultTag} currentTab={defaultTag} />
          <ResponsiveAds />
        </section>
      </div>
    </main>
  );
};

export default BlogPage;
