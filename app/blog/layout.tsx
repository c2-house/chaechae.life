import { Metadata, ResolvingMetadata } from 'next';
import { defaultMetadata } from '@/constants/metadata';

export const generateMetadata = async (parent: ResolvingMetadata): Promise<Metadata> => {
  const { title: siteName, description } = defaultMetadata;
  const ogTitle = `블로그 - ${siteName}`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: '블로그',
    description,
    openGraph: {
      title: ogTitle,
      description,
      url: '/blog',
      siteName,
      type: 'website',
      images: previousImages,
    },
    twitter: {
      title: ogTitle,
      description,
      card: 'summary_large_image',
    },
  };
};

const Layout = ({ children }: { children: React.ReactNode }) => children;

export default Layout;
