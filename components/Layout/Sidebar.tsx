import { TagNavbar } from '@/components/Blog/Tags';

const Sidebar = ({ currentTab }: { currentTab: string }) => {
  return (
    <aside className="bg-sidebar border-sidebar-border no-scrollbar top-[calc(72px+1rem)] hidden h-fit w-[240px] shrink-0 overflow-y-auto rounded-xl border p-4 lg:sticky lg:block">
      <div className="mb-3 text-center text-sm text-slate-700">태그 목록</div>
      <TagNavbar currentTab={currentTab} />
    </aside>
  );
};

export default Sidebar;
