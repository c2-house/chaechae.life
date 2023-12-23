import { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';
import { tags } from '@/constants/pages';

const sitemap = (): MetadataRoute.Sitemap => {
  const posts = allPosts.map((post) => ({
    url: `https://chaechae.life/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const tagPages = tags.map((tag) => ({
    url: `https://chaechae.life/tag/${tag}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'https://chaechae.life',
      lastModified: new Date(),
    },
    ...posts,
    ...tagPages,
  ];
};

export default sitemap;
