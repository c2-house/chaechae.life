import { allPosts } from 'contentlayer/generated';
import { tags } from '@/constants/pages';
import { slugify } from '@/components/Blog/utils';
import PostList from '@/components/Blog/PostList';
import Sidebar from '@/components/Layout/Sidebar';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';
import CollectionHeading from '@/components/Layout/CollectionHeading';
import styles from '@/components/Layout/CollectionPage.module.css';

interface Props {
  params: {
    tagName: string;
  };
  searchParams: {
    page: string;
  };
}

// export const generateStaticParams = async () => {
//   return tags.map((tag) => ({ tagName: slugify(tag) }));
// };

const TagPage = ({ params: { tagName }, searchParams: { page } }: Props) => {
  const posts = allPosts
    .filter((post) =>
      post.tags.find((tag) => slugify(tag) === slugify(decodeURIComponent(tagName))),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const currentTag = tags.find((tag) => slugify(tag) === slugify(decodeURIComponent(tagName)));

  return (
    <main className={styles.page}>
      <CollectionHeading
        label="TECH"
        title="기술 노트"
        description="개발하며 배우고, 정리한 것을 나눕니다."
      />
      <div className={styles.blogLayout}>
        <Sidebar currentTab={tagName} />
        <section className={styles.posts}>
          <PostList posts={posts} page={page} countLabel={currentTag} currentTab={tagName} />
          <ResponsiveAds />
        </section>
      </div>
    </main>
  );
};

export default TagPage;
