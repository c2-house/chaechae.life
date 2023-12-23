import { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';
import { categories } from '@/constants/category';

const sitemap = (): MetadataRoute.Sitemap => {
  const posts = allPosts.map((post) => ({
    url: `https://example.com/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const categoryPages = categories.map((category) => ({
    url: `https://example.com/category/${category}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
    },
    ...posts,
    ...categoryPages,
  ];
};

export default sitemap;
