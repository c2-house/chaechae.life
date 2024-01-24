import { GithubIcon } from '@/public/icons';

const Footer = () => {
  return (
    <footer className="container-lg pb-safe mt-8 lg:mt-10">
      <div className="flex flex-col items-center gap-3 border-t py-10 text-center text-sm text-slate-500">
        <a
          href="https://github.com/c2-house"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub"
        >
          <GithubIcon
            className="h-6 w-6 fill-current transition-colors hover:fill-black"
            aria-hidden
          />
        </a>
        <a href="mailto:chaechae.couple@gmail.com" className="hover:underline">
          chaechae.couple@gmail.com
        </a>
        <p>&copy; {new Date().getFullYear()} ChaeChae. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
