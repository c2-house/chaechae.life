import clsx from 'clsx';
import { allProjects } from 'contentlayer/generated';
import ProjectListItem from '@/components/Projects/ProjectListItem';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';
import { WebsiteIcon } from '@/public/icons';
import CollectionHeading from '@/components/Layout/CollectionHeading';
import styles from '@/components/Layout/CollectionPage.module.css';

const Page = () => {
  const projects = [...allProjects].sort((a, b) => b.id - a.id);

  return (
    <main className={styles.page}>
      <CollectionHeading
        label="PROJECTS"
        title="일상을 조금 더 편리하게"
        description="작지만 유용한 서비스로 오늘도 더 나은 일상을 만들어요."
      />
      <ul className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectListItem key={project.id} project={project} />
        ))}
        <li
          className={clsx(
            'mx-auto flex aspect-square w-full flex-col items-center justify-center rounded-xl border-2 border-gray-100',
            projects.length % 2 === 0 &&
              'md:col-span-2 md:aspect-[2/1] md:max-h-[470px] md:max-w-none',
          )}
        >
          <WebsiteIcon className="mb-5 h-36 w-36 lg:mb-7 lg:h-44 lg:w-44" />
          <p className={styles.comingSoon}>
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
