import Image from 'next/image';
import { allPosts } from '@/lib/content';
import { authors } from '@/constants/pages';
import { slugify } from '@/components/Blog/utils';
import PostList from '@/components/Blog/PostList';
import CollectionHeading from '@/components/Layout/CollectionHeading';
import styles from '@/components/Layout/CollectionPage.module.css';

interface Props {
  params: Promise<{ authorName: string }>;
  searchParams: Promise<{ page?: string }>;
}

// export const generateStaticParams = async () => {
//   return authors.map((author) => ({ authorName: slugify(author) }));
// };

const AuthorPage = async ({ params, searchParams }: Props) => {
  const { authorName } = await params;
  const { page } = await searchParams;
  const posts = allPosts
    .filter((post) => slugify(post.author) === authorName)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const currentAuthor = authors.find((author) => slugify(author) === authorName);

  return (
    <main className={styles.page}>
      <div className={styles.authorHeader}>
        <Image
          src={`/images/avatar/${authorName}-1.png`}
          alt="프로필 사진"
          width={100}
          height={100}
          className="rounded-full"
          unoptimized
        />
        <CollectionHeading
          label="TECH"
          title={`${currentAuthor || authorName}의 기술 노트`}
          description="개발하며 배우고, 정리한 것을 나눕니다."
        />
      </div>
      <section>
        <PostList posts={posts} page={page} countLabel="글 목록" />
      </section>
    </main>
  );
};

export default AuthorPage;
