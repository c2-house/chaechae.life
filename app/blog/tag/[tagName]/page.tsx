import { allPosts } from 'contentlayer/generated';
import { tags } from '@/constants/pages';
import { TagNavbar } from '@/components/Blog/Tags';
import { slugify } from '@/components/Blog/utils';
import PostList from '@/components/Blog/PostList';

interface Props {
  params: {
    tagName: string;
  };
}

export const generateStaticParams = async () => {
  return tags.map((tag) => ({ tagName: slugify(tag) }));
};

const TagPage = ({ params: { tagName } }: Props) => {
  const posts = allPosts.filter((post) => post.tags.find((tag) => slugify(tag) === tagName));
  const tag = tags.find((tag) => slugify(tag) === tagName);

  return (
    <main className="container-lg">
      <TagNavbar currentTab={tagName} />
      <section className="pt-2 md:pt-5">
        <PostList posts={posts} countLabel={`${tag} 관련 글`} />
      </section>
    </main>
  );
};

export default TagPage;
