import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="container-lg flex h-[80dvh] flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="mb-6 mt-4">Could not find requested resource</p>
      <Link
        href="/"
        className="flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
