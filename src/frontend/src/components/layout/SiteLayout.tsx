import { Outlet } from '@tanstack/react-router';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { SolutionsScrollSyncProvider } from '../../solutions/solutionsScrollSyncContext';

export default function SiteLayout() {
  return (
    <SolutionsScrollSyncProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </SolutionsScrollSyncProvider>
  );
}
