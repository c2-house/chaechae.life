import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import Mdx from '@/components/Mdx';

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
    <article className="prose prose-slate mx-auto max-w-[730px] py-6 lg:prose-lg md:py-10">
      <header>
        <h1 className="!mb-0">{project.title}</h1>
        <p className="lead !my-5 md:!my-6">{project.description}</p>
      </header>
      <hr className="!my-0" />
      <section>
        <Mdx code={project.body.code} />
      </section>
    </article>
  );
};

export default Page;
