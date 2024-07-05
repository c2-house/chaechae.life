import Link from 'next/link';
import Image from 'next/image';
import { Project } from 'contentlayer/generated';

const ProjectListItem = ({ project }: { project: Project }) => {
  return (
    <li>
      <Link href={`/projects/${project.name}`}>
        <article className="group mx-auto flex aspect-square max-w-[470px] flex-col overflow-hidden rounded-xl bg-gray-100 p-5 lg:p-8">
          <header>
            <h2 className="text-2xl font-semibold lg:text-3xl">{project.title}</h2>
            <p className="my-1 text-slate-500 lg:my-2 lg:text-lg">{project.description}</p>
            <hr className="my-3 lg:my-4" />
          </header>
          {project.mockupType === 'mobile' && (
            <Image
              src={`/images/projects/${project.name}/mockup.png`}
              alt={project.title}
              width={200}
              height={405}
              className="mx-auto origin-top transition-transform duration-300 group-hover:scale-[0.8]"
            />
          )}
          {project.mockupType === 'desktop' && (
            <Image
              src={`/images/projects/${project.name}/mockup.png`}
              alt={project.title}
              width={400}
              height={228}
              className="my-auto w-full flex-1 origin-bottom transition-transform duration-300 group-hover:scale-[0.9]"
            />
          )}
        </article>
      </Link>
    </li>
  );
};

export default ProjectListItem;
