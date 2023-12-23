import { Post } from 'contentlayer/generated';
import PostListItem from './PostListItem';

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <ul>
      {[...posts, ...posts, ...posts].map((post, index) => (
        <>
          {index !== 0 && <hr className="my-6 md:my-8" />}
          <PostListItem key={post.slug} post={post} />
        </>
      ))}
    </ul>
  );
};

export default PostList;
