import { Metadata, ResolvingMetadata } from 'next';
import { openGraph, title as baseTitle } from '@/app/shared-metadata';

interface Props {
  params: Promise<{ authorName: string }>;
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { authorName } = await params;
  const title = `${authorName} - ${baseTitle}`;
  const description = (await parent).description || '';

  return {
    title,
    description,
    openGraph: {
      ...openGraph,
      title,
      description,
      url: `/blog/author/${authorName}`,
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
