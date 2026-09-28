import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { ArrowRight, Code2, NotebookPen } from 'lucide-react';
import type { BlogPost } from '@/lib/lifePosts';
import styles from './BlogHighlights.module.css';

interface BlogHighlightsProps {
  techPosts: BlogPost[];
  lifePosts: BlogPost[];
}

const BlogHighlights = ({ techPosts, lifePosts }: BlogHighlightsProps) => {
  const cards = [
    {
      category: 'TECH',
      title: '기술 노트',
      description: '개발하며 배우고, 정리한 것을 나눕니다.',
      posts: techPosts,
      href: '/blog',
      className: styles.tech,
    },
    {
      category: 'LIFE',
      title: '일상 기록',
      description: '일상의 순간도, 소중한 이야기니까요.',
      posts: lifePosts,
      href: 'https://life.chaechae.life',
      className: styles.life,
    },
  ];

  return (
    <section className={styles.highlights} aria-label="기술과 일상 이야기">
      {cards.map((card) => (
        <article key={card.category} className={`${styles.card} ${card.className}`}>
          <div className={styles.cardHeader}>
            <p className={styles.category}>{card.category}</p>
            {card.href.startsWith('/') ? (
              <Link
                href={card.href}
                className={styles.allPosts}
                aria-label={`${card.title} 모든 글 보기`}
              >
                모든 글 보기 <ArrowRight size={15} aria-hidden="true" />
              </Link>
            ) : (
              <a
                href={card.href}
                className={styles.allPosts}
                aria-label={`${card.title} 모든 글 보기`}
              >
                모든 글 보기 <ArrowRight size={15} aria-hidden="true" />
              </a>
            )}
          </div>
          <h2 className={styles.title}>{card.title}</h2>
          <p className={styles.description}>{card.description}</p>
          {card.posts.length > 0 ? (
            <ul className={styles.posts}>
              {card.posts.map((post) => {
                const content = (
                  <>
                    <span className={styles.thumbnail}>
                      {card.category === 'TECH' ? (
                        <Code2 size={34} strokeWidth={2.2} aria-hidden="true" />
                      ) : post.image ? (
                        <Image
                          src={post.image}
                          alt=""
                          width={80}
                          height={64}
                          sizes="(max-width: 480px) 48px, 80px"
                        />
                      ) : (
                        <NotebookPen size={30} strokeWidth={1.8} aria-hidden="true" />
                      )}
                    </span>
                    <span className={styles.postText}>
                      <span className={styles.postTitle}>{post.title}</span>
                      <time
                        className={styles.date}
                        dateTime={dayjs(post.date).format('YYYY-MM-DD')}
                      >
                        {dayjs(post.date).format('YYYY. MM. DD')}
                      </time>
                    </span>
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
            <p className={styles.empty}>새로운 글을 준비하고 있어요.</p>
          )}
        </article>
      ))}
    </section>
  );
};

export default BlogHighlights;
