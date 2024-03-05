import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import Mdx from '@/components/Mdx';
import EvCharge from '@/components/Projects/EvCharge';
import MessageBot from '@/components/Projects/MessageBot';
import WeddingCard from '@/components/Projects/WeddingCard';
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
        <article className="prose prose-slate py-6 lg:prose-lg md:py-10">
          <header>
            <div className="flex items-center">
              <h1 className="!mb-0">{project.title}</h1>
              <span className="ml-3 rounded-full bg-slate-200/60 px-2 py-0.5 text-sm md:ml-4 md:px-3 md:py-1">
                {project.year}
              </span>
            </div>
            <p className="lead !my-5 md:!my-6">{project.description}</p>
          </header>
          <hr className="!my-0" />
          <section>
            <Mdx code={project.body.code} />
            {slug === 'wedding-card' && <WeddingCard />}
            {slug === 'ev-charge' && <EvCharge />}
            {slug === 'messagebot' && <MessageBot />}
          </section>
        </article>
      </div>

      <div className="hidden h-[600px] w-[160px] pt-10 lg:sticky lg:top-16 lg:block">
        <SideStickyAds />
      </div>
    </main>
  );
};

export default Page;
