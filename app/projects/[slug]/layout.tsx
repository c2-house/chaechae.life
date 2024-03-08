import { Metadata } from 'next';
import { allProjects } from 'contentlayer/generated';
import { openGraph, title as baseTitle } from '@/app/shared-metadata';

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({ params: { slug } }: Props): Promise<Metadata> => {
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) return {};

  const { title: projectTitle, description } = project;
  const title = `${projectTitle} - ${baseTitle}`;

  return {
    title,
    description,
    openGraph: {
      ...openGraph,
      title,
      description,
      url: `/projects/${slug}`,
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
