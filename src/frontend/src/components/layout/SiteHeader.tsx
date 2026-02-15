import { useState, useRef, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { navigationConfig, type NavigationItem } from '../../site/navigation';
import { useSolutionsScrollSync } from '../../solutions/solutionsScrollSyncContext';
import { useDropdownHoverRegion } from '../../hooks/useDropdownHoverRegion';
import BrandLogo from '../brand/BrandLogo';
import BrandButton from '../brand/BrandButton';
import SolutionsMegaMenu from './SolutionsMegaMenu';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { activeCategoryId } = useSolutionsScrollSync();

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const handleMouseEnterItem = (itemId: string) => {
    setOpenDropdownId(itemId);
  };

  const NavLink = ({ item }: { item: NavigationItem }) => {
    const active = isActive(item.path);
    const isOpen = openDropdownId === item.id;
    const triggerRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    
    // Special handling for "Our Solutions" dropdown with hover-based service preview
    if (item.id === 'solutions' && item.children && item.children.length > 0) {
      return (
        <div
          onMouseEnter={() => handleMouseEnterItem(item.id)}
        >
          <DropdownMenu open={isOpen} onOpenChange={(open) => {
            if (!open) {
              setOpenDropdownId(null);
            }
          }}>
            <DropdownMenuTrigger asChild>
              <button
                ref={triggerRef}
                className={`text-sm font-medium transition-colors hover:text-link-hover flex items-center gap-1 ${
                  active ? 'text-link' : 'text-foreground/80'
                }`}
              >
                {item.label}
                <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              ref={panelRef}
              align="start" 
              className="w-[600px] p-4"
            >
              <SolutionsMegaMenu
                categories={item.children}
                currentPath={currentPath}
                activeCategoryId={activeCategoryId}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    }
    
    // If item has children (but not solutions), render dropdown menu
    if (item.children && item.children.length > 0) {
      return (
        <div
          onMouseEnter={() => handleMouseEnterItem(item.id)}
        >
          <DropdownMenu open={isOpen} onOpenChange={(open) => {
            if (!open) {
              setOpenDropdownId(null);
            }
          }}>
            <DropdownMenuTrigger asChild>
              <button
                ref={triggerRef}
                className={`text-sm font-medium transition-colors hover:text-link-hover flex items-center gap-1 ${
                  active ? 'text-link' : 'text-foreground/80'
                }`}
              >
                {item.label}
                <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              ref={panelRef}
              align="start" 
              className="w-64"
            >
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
        </div>
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

  // Global pointer tracking for hover region detection
  useEffect(() => {
    let rafId: number | null = null;
    let lastX = -1;
    let lastY = -1;

    const checkHoverRegion = () => {
      if (!openDropdownId || lastX === -1 || lastY === -1) {
        rafId = requestAnimationFrame(checkHoverRegion);
        return;
      }

      // Find all dropdown trigger and content elements
      const triggers = document.querySelectorAll('[data-dropdown-trigger]');
      const contents = document.querySelectorAll('[data-radix-popper-content-wrapper]');

      let inRegion = false;

      // Check if pointer is over any trigger
      triggers.forEach((trigger) => {
        const rect = trigger.getBoundingClientRect();
        if (
          lastX >= rect.left &&
          lastX <= rect.right &&
          lastY >= rect.top &&
          lastY <= rect.bottom
        ) {
          inRegion = true;
        }
      });

      // Check if pointer is over any dropdown content
      if (!inRegion) {
        contents.forEach((content) => {
          const rect = content.getBoundingClientRect();
          if (
            lastX >= rect.left &&
            lastX <= rect.right &&
            lastY >= rect.top &&
            lastY <= rect.bottom
          ) {
            inRegion = true;
          }
        });
      }

      // Close dropdown if pointer is outside both regions
      if (!inRegion) {
        setOpenDropdownId(null);
      }

      rafId = requestAnimationFrame(checkHoverRegion);
    };

    const handlePointerMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    rafId = requestAnimationFrame(checkHoverRegion);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [openDropdownId]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BrandLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navigationConfig.map((item) => (
            <div key={item.id} data-dropdown-trigger={item.children ? 'true' : undefined}>
              <NavLink item={item} />
            </div>
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
