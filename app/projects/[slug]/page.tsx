import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import ProjectDescription from '@/components/Projects/ProjectDescription';
import SideStickyAds from '@/components/AdSense/SideStickyAds';

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  return allProjects.map((project) => ({ slug: project.slug }));
};

const Page = ({ params: { slug } }: Props) => {
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) return notFound();

  return (
    <main className="container-lg lg:flex">
      <div className="mx-auto max-w-[650px] lg:ml-0 lg:max-w-[730px]">
        <ProjectDescription project={project} slug={slug} />
      </div>
      <div className="hidden h-[600px] w-[160px] pt-10 lg:sticky lg:top-16 lg:block">
        <SideStickyAds />
      </div>
    </main>
  );
};

export default Page;
