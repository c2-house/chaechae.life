import { Metadata } from 'next';
import { allPosts } from '@/lib/content';
import { title as baseTitle } from '@/app/shared-metadata';

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) return {};

  const { title, description, date, author, tags, image } = post;

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
