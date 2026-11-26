'use client';

import Form from 'next/form';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';

const SearchForm = () => {
  const pathname = usePathname();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    const query = new FormData(event.currentTarget).get('query');
    if (typeof query !== 'string' || !query.trim()) event.preventDefault();
  };

  return (
    <Form key={pathname} action="/blog/search" onSubmit={handleSearch}>
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          name="query"
          placeholder="검색"
          className="flex h-8 w-full rounded-md border border-slate-200 bg-white px-3 py-1 pl-8 text-sm text-slate-700 shadow-none outline-none transition-colors focus:border-indigo-600"
        />
        <Search
          size={16}
          className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 select-none opacity-50"
        />
      </div>
    </Form>
  );
};

export default SearchForm;
