import Link from 'next/link';
import Image from 'next/image';
import { Project } from 'contentlayer/generated';
import styles from './Projects.module.css';

const ProjectListItem = ({ project }: { project: Project }) => {
  return (
    <li className={`group ${styles.card}`}>
      <Link href={`/projects/${project.name}`} className="block h-full">
        <article className="flex h-full flex-col p-5 lg:p-8">
          <header>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardDescription}>{project.description}</p>
            <hr className="my-3 lg:my-4" />
          </header>
          {project.mockupType === 'mobile' && (
            <Image
              src={`/images/projects/${project.name}/mockup.png`}
              alt={project.title}
              width={200}
              height={405}
              className="mx-auto w-[47%] max-w-[260px] origin-top transition-transform duration-300 group-hover:scale-[0.8]"
            />
          )}
          {project.mockupType === 'desktop' && (
            <Image
              src={`/images/projects/${project.name}/mockup.png`}
              alt={project.title}
              width={400}
              height={228}
              className="my-auto w-full flex-1 flex-grow-0 origin-bottom transition-transform duration-300 group-hover:scale-[0.9]"
            />
          )}
        </article>
      </Link>
    </li>
  );
};

export default ProjectListItem;
