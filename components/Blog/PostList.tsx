import { Post } from 'contentlayer/generated';
import PostListItem from './PostListItem';

interface Props {
  posts: Post[];
  countLabel?: string;
}

const PostList = ({ posts, countLabel }: Props) => {
  return (
    <>
      {countLabel && (
        <div className="mb-5 font-semibold text-slate-700 md:mb-7 md:text-xl">
          {countLabel} ({posts.length})
        </div>
      )}
      <ul>
        {posts.map((post, index) => (
          <>
            {index !== 0 && <hr className="my-6 md:my-8" />}
            <PostListItem key={post.slug} post={post} />
          </>
        ))}
      </ul>
    </>
  );
};

export default PostList;
