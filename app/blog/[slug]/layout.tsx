import { Metadata } from 'next';
import { allPosts } from 'contentlayer/generated';
import { title as baseTitle } from '@/app/shared-metadata';

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return {};

  const { title, description, slug, date, author, tags, image } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/blog/${slug}`,
      siteName: baseTitle,
      locale: 'ko_KR',
      type: 'article',
      publishedTime: date,
      authors: author,
      tags,
      images: image,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
};

const Layout = ({ children }: { children: React.ReactNode }) => children;

export default Layout;
