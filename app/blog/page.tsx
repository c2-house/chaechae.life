import { allPosts } from 'contentlayer/generated';
import { TagNavbar } from '@/components/Blog/Tags';
import PostList from '@/components/Blog/PostList';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';

interface Props {
  searchParams: {
    page: string;
  };
}

const BlogPage = ({ searchParams: { page } }: Props) => {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="container-lg">
      <TagNavbar currentTab="all" />
      <section className="py-5">
        <PostList posts={posts} page={page} countLabel="전체글" />
      </section>
      <ResponsiveAds />
    </main>
  );
};

export default BlogPage;
