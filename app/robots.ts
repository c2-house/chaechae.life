import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://chaechae.life/sitemap.xml',
    host: 'https://chaechae.life',
  };
};

export default robots;
