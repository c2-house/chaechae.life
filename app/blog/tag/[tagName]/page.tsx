import { allPosts } from 'contentlayer/generated';
import { tags } from '@/constants/pages';
import { TagNavbar } from '@/components/Blog/Tags';
import { slugify } from '@/components/Blog/utils';
import PostList from '@/components/Blog/PostList';

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
    <main className="container-lg">
      <TagNavbar currentTab={tagName} />
      <section className="pt-2 md:pt-5">
        <PostList posts={posts} page={page} countLabel={currentTag} />
      </section>
    </main>
  );
};

export default TagPage;
