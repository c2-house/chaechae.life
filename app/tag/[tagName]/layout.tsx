import { Metadata, ResolvingMetadata } from 'next';
import { defaultMetadata } from '@/constants/metadata';

interface Props {
  params: {
    tagName: string;
  };
}

export const generateMetadata = async (
  { params: { tagName } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { title: defaultTitle, description } = defaultMetadata;
  const title = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  const ogTitle = `${title} | ${defaultTitle}`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url: `/tag/${tagName}`,
      siteName: defaultTitle,
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
