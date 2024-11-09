import { allPosts } from 'contentlayer/generated';
import { TagNavbar } from '@/components/Blog/Tags';
import PostList from '@/components/Blog/PostList';

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
      <section className="pt-2 md:pt-5">
        <PostList posts={posts} page={page} countLabel="전체 글" />
      </section>
    </main>
  );
};

export default BlogPage;
