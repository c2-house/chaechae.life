'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/blog/search?query=${query}`);
  };

  useEffect(() => {
    if (pathname !== '/blog/search') {
      setQuery('');
    }
  }, [pathname]);

  return (
    <form onSubmit={handleSearch}>
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          placeholder="검색"
          className="flex h-8 w-full rounded-md border border-slate-200 bg-white px-3 py-1 pl-8 text-sm text-slate-700 shadow-none outline-none transition-colors focus:border-indigo-600"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Search
          size={16}
          className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 select-none opacity-50"
        />
      </div>
    </form>
  );
};

export default SearchForm;
