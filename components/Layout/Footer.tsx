import { GithubIcon } from '@/public/icons';

const Footer = () => {
  return (
    <footer className="pb-safe mt-10 bg-gray-100 md:mt-14">
      <div className="flex flex-col items-center gap-3 py-10 text-center text-sm text-gray-500">
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
