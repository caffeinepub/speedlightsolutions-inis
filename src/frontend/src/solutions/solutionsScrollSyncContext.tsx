import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouterState } from '@tanstack/react-router';

interface SolutionsScrollSyncContextValue {
  activeCategoryId: string | null;
  setActiveCategoryId: (id: string | null) => void;
}

const SolutionsScrollSyncContext = createContext<SolutionsScrollSyncContextValue | undefined>(undefined);

export function SolutionsScrollSyncProvider({ children }: { children: ReactNode }) {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Reset active category when leaving /solutions
  useEffect(() => {
    if (currentPath !== '/solutions') {
      setActiveCategoryId(null);
    }
  }, [currentPath]);

  return (
    <SolutionsScrollSyncContext.Provider value={{ activeCategoryId, setActiveCategoryId }}>
      {children}
    </SolutionsScrollSyncContext.Provider>
  );
}

export function useSolutionsScrollSync() {
  const context = useContext(SolutionsScrollSyncContext);
  if (context === undefined) {
    throw new Error('useSolutionsScrollSync must be used within SolutionsScrollSyncProvider');
  }
  return context;
}
