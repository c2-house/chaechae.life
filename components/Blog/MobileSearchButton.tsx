'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import SearchForm from './SearchForm';

const MobileSearchButton = () => {
  const searchParams = useSearchParams();
  return <SearchToggle key={searchParams.toString()} />;
};

const SearchToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) return <SearchForm />;

  return (
    <button
      className="flex items-center gap-1 rounded-full border border-slate-500 p-1 px-2 py-0.5 text-sm text-slate-500 lg:hidden"
      onClick={() => setIsOpen(true)}
    >
      <Search size={16} />
      <span>검색</span>
    </button>
  );
};

export default MobileSearchButton;
