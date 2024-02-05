import { MetadataRoute } from 'next';
import { allPosts, allProjects } from 'contentlayer/generated';
import { authors, navLinks, tags } from '@/constants/pages';
import { slugify } from '@/components/Blog/utils';

const sitemap = (): MetadataRoute.Sitemap => {
  const navbarPages = navLinks.map((navLink) => ({
    url: `https://chaechae.life${navLink.path}`,
    lastModified: new Date(),
  }));

  const projects = allProjects.map((project) => ({
    url: `https://chaechae.life/projects/${project.slug}`,
    lastModified: new Date(),
  }));

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
    ...navbarPages,
    ...projects,
    ...posts,
    ...tagPages,
    ...authorPages,
  ];
};

export default sitemap;
