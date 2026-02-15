import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import { getServicesForCategory } from '../../content/solutionServices';
import type { NavigationItem } from '../../site/navigation';

interface SolutionsMegaMenuProps {
  categories: NavigationItem[];
  currentPath: string;
  activeCategoryId: string | null;
  onOpenChange?: (open: boolean) => void;
}

export default function SolutionsMegaMenu({
  categories,
  currentPath,
  activeCategoryId,
}: SolutionsMegaMenuProps) {
  const isOnSolutionsPage = currentPath === '/solutions';
  
  // Initialize preview to active category if on /solutions page
  const [previewCategoryId, setPreviewCategoryId] = useState<string | null>(
    isOnSolutionsPage && activeCategoryId ? activeCategoryId : categories[0]?.id || null
  );

  // Update preview when activeCategoryId changes (scroll-sync on /solutions)
  useEffect(() => {
    if (isOnSolutionsPage && activeCategoryId) {
      setPreviewCategoryId(activeCategoryId);
    }
  }, [isOnSolutionsPage, activeCategoryId]);

  const previewServices = previewCategoryId ? getServicesForCategory(previewCategoryId) : [];

  return (
    <div className="flex gap-0 min-h-[400px]">
      {/* Left Column: Category List */}
      <div className="w-64 border-r border-border/40 pr-4">
        <div className="py-2 space-y-1">
          {categories.map((category) => {
            const isActive = isOnSolutionsPage && activeCategoryId === category.id;
            const isPreviewing = previewCategoryId === category.id;
            
            return (
              <Link
                key={category.id}
                to={category.path as any}
                className={`
                  group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-md transition-all
                  ${isActive ? 'bg-primary/10 text-primary' : ''}
                  ${isPreviewing && !isActive ? 'bg-muted/50 text-foreground' : ''}
                  ${!isActive && !isPreviewing ? 'text-foreground/80 hover:bg-muted/50 hover:text-foreground' : ''}
                `}
                onMouseEnter={() => setPreviewCategoryId(category.id)}
                onFocus={() => setPreviewCategoryId(category.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{category.label}</span>
                <ChevronRight className={`h-4 w-4 transition-opacity ${isPreviewing ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Right Column: Services Panel */}
      <div className="flex-1 pl-4">
        {previewCategoryId && (
          <div className="py-2">
            <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Services
            </h3>
            <div className="space-y-0.5 mt-1">
              {previewServices.map((service) => (
                <Link
                  key={service.pageId}
                  to={service.routePath as any}
                  className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                >
                  {service.title}
                </Link>
              ))}
              {previewServices.length === 0 && (
                <p className="px-3 py-2 text-sm text-muted-foreground italic">
                  No services available
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
