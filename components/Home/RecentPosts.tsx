import Link from 'next/link';
import dayjs from 'dayjs';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/lifePosts';
import styles from './RecentPosts.module.css';

const RecentPosts = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className={styles.section} aria-labelledby="recent-posts-title">
      <div className={styles.header}>
        <h2 id="recent-posts-title" className={styles.title}>
          새로 쓴 글
        </h2>
        <p className={styles.description}>최근에 작성한 글을 만나보세요.</p>
        <Link href="/blog" className={styles.allPosts}>
          모든 글 보기 <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => {
            const content = (
              <>
                <span
                  className={`${styles.category} ${
                    post.type === 'Post' ? styles.tech : styles.life
                  }`}
                >
                  {post.type === 'Post' ? 'TECH' : 'LIFE'}
                </span>
                <span className={styles.postTitle}>{post.title}</span>
                <time className={styles.date} dateTime={dayjs(post.date).format('YYYY-MM-DD')}>
                  {dayjs(post.date).format('YYYY. MM. DD')}
                </time>
                <ArrowRight
                  className={styles.arrow}
                  size={21}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </>
            );

            return (
              <li key={`${post.type}-${post.slug}`}>
                {post.type === 'Post' ? (
                  <Link href={`/blog/${post.slug}`} className={styles.post}>
                    {content}
                  </Link>
                ) : (
                  <a href={`https://life.chaechae.life/${post.slug}`} className={styles.post}>
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.empty}>새로운 이야기를 준비하고 있어요.</p>
      )}
    </section>
  );
};

export default RecentPosts;
