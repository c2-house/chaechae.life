const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [
      'remark-frontmatter',
      'remark-gfm',
      require.resolve('./lib/content/remark-korean-emphasis.mjs'),
      ['remark-toc', { heading: '목차', maxDepth: 3, skip: '참고자료' }],
    ],
    rehypePlugins: [
      'rehype-slug',
      'rehype-autolink-headings',
      ['rehype-pretty-code', { theme: 'one-dark-pro' }],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog/grok-bot-supabase-used-cars',
        destination: '/blog/grok-bot-guide',
        permanent: true,
      },
    ];
  },
  images: {
    minimumCacheTTL: 2678400, // 31 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fvssostzwuuesmetxwtw.supabase.co',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withMDX(nextConfig);
