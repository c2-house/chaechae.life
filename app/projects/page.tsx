import { allProjects } from 'contentlayer/generated';
import ProjectListItem from '@/components/Projects/ProjectListItem';
import { WebsiteIcon } from '@/public/icons';

const Page = () => {
  const projects = allProjects.sort((a, b) => a.order - b.order);

  return (
    <main className="container-lg">
      <ul className="grid grid-cols-1 gap-5 py-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectListItem key={project.slug} project={project} />
        ))}

        <li className="flex aspect-square max-w-[470px] flex-col items-center justify-center rounded-xl border-2 border-gray-100">
          <WebsiteIcon className="mb-5 h-36 w-36 lg:mb-7 lg:h-44 lg:w-44" />
          <p className="text-xl text-slate-500 lg:text-2xl">
            <span className="mr-1">오늘도 개발 중</span>
            {Array.from('...').map((letter, index) => (
              <span
                key={index}
                className="inline-flex animate-bounce tracking-wide"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </p>
        </li>
      </ul>
    </main>
  );
};

export default Page;
