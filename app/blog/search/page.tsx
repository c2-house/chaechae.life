import { allPosts } from 'contentlayer/generated';
import Sidebar from '@/components/Layout/Sidebar';
import PostList from '@/components/Blog/PostList';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';
import CollectionHeading from '@/components/Layout/CollectionHeading';
import styles from '@/components/Layout/CollectionPage.module.css';

interface Props {
  searchParams: {
    query?: string;
    page?: string;
  };
}

const SearchResultPage = async ({ searchParams: { query = '', page } }: Props) => {
  const posts = allPosts
    .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className={styles.page}>
      <CollectionHeading
        label="TECH"
        title="기술 노트"
        description="개발하며 배우고, 정리한 것을 나눕니다."
      />
      <div className={styles.blogLayout}>
        <Sidebar currentTab="" />
        <section className={styles.posts}>
          <PostList
            posts={posts}
            page={page}
            countLabel={query ? `“${query}” 검색 결과` : '전체글'}
          />
          <ResponsiveAds />
        </section>
      </div>
    </main>
  );
};

export default SearchResultPage;
