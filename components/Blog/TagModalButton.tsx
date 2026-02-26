'use client';

import { useState, useEffect } from 'react';
import { TagNavbar } from './Tags';
import { X } from 'lucide-react';

const TagModalButton = ({ currentTab }: { currentTab?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="shrink-0 rounded-full border border-indigo-600 px-2 py-0.5 text-sm text-indigo-600 lg:hidden"
      >
        태그 목록
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur lg:hidden"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-lg font-semibold text-slate-700">태그 목록</div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-slate-500 transition-colors hover:bg-slate-100"
                aria-label="모달 닫기"
              >
                <X size={20} />
              </button>
            </div>
            <div
              className="no-scrollbar max-h-[60vh] overflow-y-auto py-2"
              onClick={() => setIsOpen(false)}
            >
              <TagNavbar currentTab={currentTab || ''} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TagModalButton;
