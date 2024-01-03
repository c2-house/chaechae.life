import { allPosts } from 'contentlayer/generated';
import { tags } from '@/constants/pages';
import { TagNavbar } from '@/components/Blog/Tags';
import PostList from '@/components/Blog/PostList';

interface Props {
  params: {
    tagName: string;
  };
}

export const generateStaticParams = async () => {
  return tags.map((tag) => ({ tagName: tag.toLowerCase() }));
};

const TagPage = ({ params: { tagName } }: Props) => {
  const posts = allPosts.filter((post) => post.tags.find((tag) => tag.toLowerCase() === tagName));

  return (
    <main className="container-lg">
      <TagNavbar currentTab={tagName} />
      <section className="pt-5">
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default TagPage;
