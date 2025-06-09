import { Post } from 'contentlayer/generated';
import PostListItem from './PostListItem';
import BlogInfeedAds from '../AdSense/BlogInfeedAds';
import Pagination from './Pagination';

interface Props {
  posts: Post[];
  page?: string;
  countLabel?: string;
}

const PostList = ({ posts, page, countLabel }: Props) => {
  const currentPage = Number(page) || 1;
  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  if (posts.length === 0)
    return (
      <div className="flex h-[50dvh] items-center justify-center text-slate-500">
        글이 없습니다.
      </div>
    );

  return (
    <>
      {countLabel && (
        <div className="mb-5 flex items-center gap-2 font-semibold md:mb-7 md:text-xl">
          {countLabel}
          <span className="text-sm font-medium text-gray-500">({posts.length})</span>
        </div>
      )}
      <ul>
        {currentPosts.map((post, index) => (
          <li key={post.slug}>
            {index % 3 === 0 && index !== 0 && (
              <div className="mb-6 border-b pb-6 md:mb-8 md:pb-8">
                <BlogInfeedAds />
              </div>
            )}
            <div className="mb-6 border-b pb-6 md:mb-8 md:pb-8">
              <PostListItem post={post} />
            </div>
          </li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
};

export default PostList;
