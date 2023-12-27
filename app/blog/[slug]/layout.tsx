import { Metadata, ResolvingMetadata } from 'next';
import { allPosts } from 'contentlayer/generated';

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return {};

  const { title, description, slug, date, image } = post;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/blog/${slug}`,
      siteName: '채채라이프',
      type: 'article',
      publishedTime: date,
      tags: post.tags,
      authors: post.author,
      images: [image, ...previousImages],
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
