import { Post } from 'contentlayer/generated';
import PostListItem from './PostListItem';

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
      {posts.map((post, index) => (
        <PostListItem key={index} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
