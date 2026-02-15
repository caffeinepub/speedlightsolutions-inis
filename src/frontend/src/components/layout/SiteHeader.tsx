import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { navigationConfig, type NavigationItem } from '../../site/navigation';
import { getServicesForCategory } from '../../content/solutionServices';
import { useSolutionsScrollSync } from '../../solutions/solutionsScrollSyncContext';
import BrandLogo from '../brand/BrandLogo';
import BrandButton from '../brand/BrandButton';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { activeCategoryId } = useSolutionsScrollSync();

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const NavLink = ({ item }: { item: NavigationItem }) => {
    const active = isActive(item.path);
    
    // Special handling for "Our Solutions" dropdown with scroll-sync
    if (item.id === 'solutions' && item.children && item.children.length > 0) {
      const isOnSolutionsPage = currentPath === '/solutions';
      const activeCategory = isOnSolutionsPage && activeCategoryId 
        ? item.children.find(child => child.id === activeCategoryId)
        : null;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`text-sm font-medium transition-colors hover:text-link-hover flex items-center gap-1 ${
                active ? 'text-link' : 'text-foreground/80'
              }`}
            >
              {item.label}
              <ChevronDown className="h-3 w-3" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-72">
            <ScrollArea className="max-h-[480px]">
              {isOnSolutionsPage && activeCategory ? (
                // Show active category and its services when on /solutions
                <>
                  <div className="px-2 py-2">
                    <Link
                      to={activeCategory.path as any}
                      className="block px-2 py-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      {activeCategory.label}
                    </Link>
                  </div>
                  <DropdownMenuSeparator />
                  {getServicesForCategory(activeCategory.id).map((service) => (
                    <DropdownMenuItem key={service.pageId} asChild>
                      <Link
                        to={service.routePath as any}
                        className="cursor-pointer text-sm pl-6"
                      >
                        {service.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <div className="px-2 py-1">
                    <p className="text-xs text-muted-foreground px-2">Other Categories:</p>
                  </div>
                  {item.children
                    .filter(child => child.id !== activeCategoryId)
                    .map((child) => (
                      <DropdownMenuItem key={child.id} asChild>
                        <Link
                          to={child.path as any}
                          className="cursor-pointer text-sm"
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                </>
              ) : (
                // Default view: show all categories
                item.children.map((child) => (
                  <DropdownMenuItem key={child.id} asChild>
                    <Link
                      to={child.path as any}
                      className="cursor-pointer"
                    >
                      {child.label}
                    </Link>
                  </DropdownMenuItem>
                ))
              )}
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    
    // If item has children (but not solutions), render dropdown menu
    if (item.children && item.children.length > 0) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`text-sm font-medium transition-colors hover:text-link-hover flex items-center gap-1 ${
                active ? 'text-link' : 'text-foreground/80'
              }`}
            >
              {item.label}
              <ChevronDown className="h-3 w-3" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            <ScrollArea className="max-h-[420px]">
              {item.children.map((child) => (
                <DropdownMenuItem key={child.id} asChild>
                  <Link
                    to={child.path as any}
                    className="cursor-pointer"
                  >
                    {child.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        to={item.path as any}
        className={`text-sm font-medium transition-colors hover:text-link-hover ${
          active ? 'text-link' : 'text-foreground/80'
        }`}
      >
        {item.label}
      </Link>
    );
  };

  const MobileNavLink = ({ item }: { item: NavigationItem }) => {
    const active = isActive(item.path);
    return (
      <Link
        to={item.path as any}
        onClick={() => setMobileMenuOpen(false)}
        className={`block px-3 py-2 text-base font-medium transition-colors hover:bg-primary/10 rounded-md ${
          active ? 'text-link bg-primary/5' : 'text-foreground/80'
        }`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BrandLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navigationConfig.map((item) => (
            <NavLink key={item.id} item={item} />
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <BrandButton asChild brandVariant="primary" size="sm">
            <Link to={"/contact" as any}>Get Started</Link>
          </BrandButton>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2 hover:bg-muted rounded-md transition-colors">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <ScrollArea className="h-full pb-8">
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <BrandLogo className="h-8 w-auto mb-6" />
                </Link>
                <nav className="flex flex-col space-y-2">
                  {navigationConfig.map((item) => (
                    <div key={item.id}>
                      <MobileNavLink item={item} />
                      {item.children && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <MobileNavLink key={child.id} item={child} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="pt-4">
                  <BrandButton asChild brandVariant="primary" className="w-full">
                    <Link to={"/contact" as any} onClick={() => setMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </BrandButton>
                </div>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
