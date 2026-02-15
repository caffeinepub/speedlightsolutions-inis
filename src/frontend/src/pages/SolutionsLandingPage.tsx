import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { navigationConfig } from '../site/navigation';
import { getServicesForCategory } from '../content/solutionServices';
import { useSolutionsScrollSync } from '../solutions/solutionsScrollSyncContext';
import { useSolutionsActiveCategoryInView } from '../hooks/useSolutionsActiveCategoryInView';
import { resolvePageBanner } from '../site/pageBannerResolver';

export default function SolutionsLandingPage() {
  const { setActiveCategoryId } = useSolutionsScrollSync();

  // Get the 6 solution categories from navigation
  const solutionsNav = navigationConfig.find(item => item.id === 'solutions');
  const categories = solutionsNav?.children || [];
  const categoryIds = categories.map(cat => cat.id);

  // Use the improved scroll-sync hook with most-visible detection and hysteresis
  const { setSectionRef } = useSolutionsActiveCategoryInView(
    categoryIds,
    setActiveCategoryId
  );

  const solutionsBanner = resolvePageBanner('solutions');

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[400px] bg-gradient-to-br from-primary/10 via-background to-accent/5 flex items-center justify-center overflow-hidden">
        {solutionsBanner && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${solutionsBanner.imagePath})` }}
          />
        )}
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Our Solutions
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive AV and technology solutions designed to transform your workspace
          </p>
        </div>
      </section>

      {/* Category Sections */}
      <div className="container py-16 space-y-24">
        {categories.map((category) => {
          const services = getServicesForCategory(category.id);
          
          return (
            <section
              key={category.id}
              id={category.id}
              data-category-id={category.id}
              ref={setSectionRef(category.id)}
              className="scroll-mt-20"
            >
              {/* Category Header */}
              <div className="mb-8">
                <Link
                  to={category.path as any}
                  className="inline-block group"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground group-hover:text-link transition-colors">
                    {category.label}
                  </h2>
                </Link>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Link
                    key={service.pageId}
                    to={service.routePath as any}
                    className="group p-6 rounded-lg border border-border bg-card hover:bg-accent/5 hover:border-primary/50 transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-link transition-colors">
                        {service.title}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* View Category Link */}
              <div className="mt-6">
                <Link
                  to={category.path as any}
                  className="inline-flex items-center gap-2 text-sm font-medium text-link hover:text-link-hover transition-colors"
                >
                  View all {category.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
