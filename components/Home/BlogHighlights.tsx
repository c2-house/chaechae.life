import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code2, NotebookPen } from 'lucide-react';
import type { BlogPost } from '@/lib/lifePosts';
import styles from './BlogHighlights.module.css';

interface BlogHighlightsProps {
  techPost?: BlogPost;
  lifePost?: BlogPost;
}

const BlogHighlights = ({ techPost, lifePost }: BlogHighlightsProps) => {
  const cards = [
    {
      category: 'TECH',
      title: '기술 노트',
      description: '개발하며 배우고, 정리한 것을 나눕니다.',
      post: techPost,
      href: '/blog',
      emptyLabel: '기술 블로그 둘러보기',
      className: styles.tech,
    },
    {
      category: 'LIFE',
      title: '일상 기록',
      description: '일상의 순간도, 소중한 이야기니까요.',
      post: lifePost,
      href: 'https://life.chaechae.life',
      emptyLabel: '일상 블로그 둘러보기',
      className: styles.life,
    },
  ];

  return (
    <section className={styles.highlights} aria-label="기술과 일상 이야기">
      {cards.map((card) => {
        const href = card.post
          ? card.post.type === 'Post'
            ? `/blog/${card.post.slug}`
            : `https://life.chaechae.life/${card.post.slug}`
          : card.href;
        const content = (
          <>
            <span className={styles.thumbnail}>
              {card.category === 'TECH' ? (
                <Code2 size={40} strokeWidth={2.2} aria-hidden="true" />
              ) : card.post?.image ? (
                <Image src={card.post.image} alt="" width={90} height={66} />
              ) : (
                <NotebookPen size={32} strokeWidth={1.8} aria-hidden="true" />
              )}
            </span>
            <span className={styles.postTitle}>{card.post?.title || card.emptyLabel}</span>
            <ArrowRight className={styles.arrow} size={23} strokeWidth={1.8} aria-hidden="true" />
          </>
        );

        return (
          <article key={card.category} className={`${styles.card} ${card.className}`}>
            <p className={styles.category}>{card.category}</p>
            <h2 className={styles.title}>{card.title}</h2>
            <p className={styles.description}>{card.description}</p>
            {href.startsWith('/') ? (
              <Link href={href} className={styles.post}>
                {content}
              </Link>
            ) : (
              <a href={href} className={styles.post}>
                {content}
              </a>
            )}
          </article>
        );
      })}
    </section>
  );
};

export default BlogHighlights;
