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

  const previousImages = (await parent).openGraph?.images || [];

  if (!post) return {};

  const { title, description, slug, date, image } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/${slug}`,
      siteName: title,
      type: 'article',
      publishedTime: date,
      tags: post.category,
      authors: 'My Name',
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
