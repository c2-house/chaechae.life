import clsx from 'clsx';
import type { BlogPost } from '@/lib/lifePosts';
import PostListItem from './PostListItem';
import BlogInfeedAds from '../AdSense/BlogInfeedAds';
import Pagination from './Pagination';
import TagModalButton from './TagModalButton';
import MobileSearchButton from './MobileSearchButton';

interface Props {
  posts: BlogPost[];
  page?: string;
  countLabel?: string;
  currentTab?: string;
  showHeader?: boolean;
  showAds?: boolean;
}

const PostList = ({
  posts,
  page,
  countLabel,
  currentTab,
  showHeader = true,
  showAds = true,
}: Props) => {
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
      {showHeader && (
        <div className="mb-5 flex h-8 items-center justify-between gap-3 md:mb-7 md:text-xl">
          <div className="flex shrink-0 items-center gap-2 font-semibold">
            {countLabel}
            <span className="text-sm font-medium text-gray-500">({posts.length})</span>
          </div>
          <div className="flex items-center gap-2">
            <MobileSearchButton />
            <TagModalButton currentTab={currentTab} />
          </div>
        </div>
      )}
      <ul>
        {currentPosts.map((post, index) => (
          <li key={post.slug}>
            {showAds && index % 3 === 0 && index !== 0 && index !== 9 && (
              <div className="mb-6 border-b pb-6 md:mb-8 md:pb-8">
                <BlogInfeedAds />
              </div>
            )}
            <div
              className={clsx(
                'mb-6 pb-6 md:mb-8 md:pb-8',
                index !== currentPosts.length - 1 && 'border-b',
              )}
            >
              <PostListItem post={post} />
            </div>
          </li>
        ))}
      </ul>
      {posts.length > postsPerPage && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </>
  );
};

export default PostList;
