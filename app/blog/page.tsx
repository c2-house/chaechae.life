import { allPosts } from 'contentlayer/generated';
import PostList from '@/components/Blog/PostList';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';
import Sidebar from '@/components/Layout/Sidebar';

interface Props {
  searchParams: {
    page: string;
  };
}

const BlogPage = ({ searchParams: { page } }: Props) => {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const defaultTag = '전체글';

  return (
    <div className="container-lg block lg:flex lg:gap-6">
      <Sidebar currentTab={defaultTag} />
      <main className="min-h-screen flex-1">
        <section className="py-5">
          <PostList posts={posts} page={page} countLabel={defaultTag} currentTab={defaultTag} />
        </section>
        <ResponsiveAds />
      </main>
    </div>
  );
};

export default BlogPage;
