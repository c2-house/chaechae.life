import { Post } from 'contentlayer/generated';
import PostListItem from './PostListItem';
import BlogInfeedAds from '../AdSense/BlogInfeedAds';

interface Props {
  posts: Post[];
  countLabel?: string;
}

const PostList = ({ posts, countLabel }: Props) => {
  if (posts.length === 0)
    return (
      <div className="flex h-[50dvh] items-center justify-center text-slate-500">
        글이 없습니다.
      </div>
    );

  return (
    <>
      {countLabel && (
        <div className="mb-5 font-semibold md:mb-7 md:text-xl">
          {countLabel} ({posts.length})
        </div>
      )}
      <ul>
        {posts.map((post, index) => (
          <>
            {index % 4 === 0 && index !== 0 && index !== posts.length - 1 && (
              <div>
                <hr className="my-6 md:my-8" />
                <BlogInfeedAds />
              </div>
            )}
            <li>
              {index !== 0 && <hr className="my-6 md:my-8" />}
              <PostListItem key={post.slug} post={post} />
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default PostList;
