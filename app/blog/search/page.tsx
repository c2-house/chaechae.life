import { allPosts } from 'contentlayer/generated';
import Sidebar from '@/components/Layout/Sidebar';
import PostList from '@/components/Blog/PostList';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';

interface Props {
  searchParams: {
    query: string;
    page?: string;
  };
}

const SearchResultPage = async ({ searchParams: { query, page } }: Props) => {
  const posts = allPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container-lg block lg:flex lg:gap-6">
      <Sidebar currentTab="" />
      <main className="min-h-screen flex-1">
        <section className="py-5">
          <PostList posts={posts} page={page} countLabel={`"${query}" 검색 결과`} />
        </section>
        <ResponsiveAds />
      </main>
    </div>
  );
};

export default SearchResultPage;
