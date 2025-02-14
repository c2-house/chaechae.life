import type { Project } from 'contentlayer/generated';
import Mdx from '@/components/Mdx';
import InarticleAds from '@/components/AdSense/InarticleAds';
import EvCharge from '@/components/Projects/EvCharge';
import MessageBot from '@/components/Projects/MessageBot';
import WeddingCard from '@/components/Projects/WeddingCard';

interface Props {
  project: Project;
  name: string;
}

const getContent = (name: string) => {
  return {
    'wedding-card': <WeddingCard />,
    'ev-charge': <EvCharge />,
    messagebot: <MessageBot />,
  }[name];
};

const ProjectDescription = ({ project, name }: Props) => {
  const onGoing = project.name === 'wedding-card';

  return (
    <article className="prose prose-slate py-6 lg:prose-lg md:py-10">
      <header>
        <div className="flex items-center">
          <h1 className="!mb-0">{project.title}</h1>
          <span className="ml-3 rounded-full bg-slate-200/60 px-2 py-0.5 text-sm md:ml-4 md:px-3 md:py-1">
            {onGoing && 'Since '}
            {project.year}
          </span>
        </div>
        <p className="lead">{project.description}</p>
      </header>
      <hr className="!my-6" />
      <InarticleAds />
      <section>
        <Mdx code={project.body.code} />
        {getContent(name)}
      </section>
      <InarticleAds />
    </article>
  );
};

export default ProjectDescription;
