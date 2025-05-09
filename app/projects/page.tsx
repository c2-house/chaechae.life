import clsx from 'clsx';
import { allProjects } from 'contentlayer/generated';
import ProjectListItem from '@/components/Projects/ProjectListItem';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';
import { WebsiteIcon } from '@/public/icons';

const Page = () => {
  const projects = allProjects.sort((a, b) => b.id - a.id);

  return (
    <main className="container-lg">
      <ul className="grid grid-cols-1 gap-5 py-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectListItem key={project.id} project={project} />
        ))}
        <li
          className={clsx(
            'mx-auto flex aspect-square w-full max-w-[470px] flex-col items-center justify-center rounded-xl border-2 border-gray-100',
            projects.length % 2 === 0 &&
              'md:col-span-2 md:aspect-[2/1] md:max-h-[470px] md:max-w-none',
          )}
        >
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
      <ResponsiveAds />
    </main>
  );
};

export default Page;
