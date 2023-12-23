import { Metadata, ResolvingMetadata } from 'next';
import { defaultMetadata } from '@/constants/metadata';

interface Props {
  params: {
    categoryName: string;
  };
}

export const generateMetadata = async (
  { params: { categoryName } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { title: defaultTitle, description } = defaultMetadata;
  const title = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  const ogTitle = `${title} | ${defaultTitle}`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url: `/category/${categoryName}`,
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
