'use client';

import { useEffect } from 'react';

interface Error {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: Error) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-xl flex h-[80dvh] flex-col items-center justify-center">
      <h2>Something went wrong!</h2>
      <button
        onClick={reset}
        className="mt-6 flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
