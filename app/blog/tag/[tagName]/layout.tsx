import { Metadata, ResolvingMetadata } from 'next';
import { openGraph, title as baseTitle } from '@/app/shared-metadata';
import { tags } from '@/constants/pages';
import { slugify } from '@/components/Blog/utils';

interface Props {
  params: {
    tagName: string;
  };
}

export const generateMetadata = async (
  { params: { tagName } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const tag = tags.find((tag) => slugify(tag) === tagName);
  const title = `${tag} - ${baseTitle}`;
  const description = (await parent).description || '';

  return {
    title,
    description,
    openGraph: {
      ...openGraph,
      title,
      description,
      url: `/blog/tag/${tagName}`,
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
