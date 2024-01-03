import { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';
import { authors, tags } from '@/constants/pages';
import { slugify } from '@/components/Blog/utils';

const sitemap = (): MetadataRoute.Sitemap => {
  const posts = allPosts.map((post) => ({
    url: `https://chaechae.life/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const tagPages = tags.map((tag) => ({
    url: `https://chaechae.life/blog/tag/${slugify(tag)}`,
    lastModified: new Date(),
  }));

  const authorPages = authors.map((author) => ({
    url: `https://chaechae.life/blog/author/${slugify(author)}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'https://chaechae.life',
      lastModified: new Date(),
    },
    {
      url: 'https://chaechae.life/blog',
      lastModified: new Date(),
    },
    ...posts,
    ...tagPages,
    ...authorPages,
  ];
};

export default sitemap;
