import { Metadata, ResolvingMetadata } from 'next';
import { defaultMetadata } from '@/constants/metadata';

interface Props {
  params: {
    authorName: string;
  };
}

export const generateMetadata = async (
  { params: { authorName } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { title: siteName, description } = defaultMetadata;
  const ogTitle = `${authorName}의 글 - ${siteName}`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${authorName}의 글`,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url: `/blog/author/${authorName}`,
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
