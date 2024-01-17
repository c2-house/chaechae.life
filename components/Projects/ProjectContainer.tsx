interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ProjectContainer = ({ title, description, children }: Props) => {
  return (
    <li>
      <article className="mx-auto aspect-square max-w-[470px] overflow-hidden rounded-xl bg-gray-100 p-5 lg:p-8">
        <header>
          <h2 className="text-2xl font-semibold lg:text-3xl">{title}</h2>
          <p className="my-1 text-slate-500 lg:my-2 lg:text-lg">{description}</p>
        </header>
        <hr className="my-3 lg:my-4" />
        {children}
      </article>
    </li>
  );
};

export default ProjectContainer;
