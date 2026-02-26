import { TagNavbar } from '@/components/Blog/Tags';
import SearchForm from '@/components/Blog/SearchForm';

const Sidebar = ({ currentTab }: { currentTab: string }) => {
  return (
    <aside className="bg-sidebar border-sidebar-border no-scrollbar top-[calc(72px+1rem)] hidden h-fit w-[240px] shrink-0 overflow-y-auto rounded-xl border p-4 lg:sticky lg:block">
      <div className="mb-4">
        <SearchForm />
      </div>
      <TagNavbar currentTab={currentTab} />
    </aside>
  );
};

export default Sidebar;
