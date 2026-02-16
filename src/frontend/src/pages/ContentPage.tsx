import { useEffect, useState } from 'react';
import ContentRenderer from '../components/content/ContentRenderer';
import { pages } from '../content/pages';
import { solutionServicePages } from '../content/solutionServicePages';
import { usePageTitle } from '../hooks/usePageTitle';
import { getPageTheme } from '../site/pageThemes';
import { resolvePageBanner, getFallbackBanner } from '../site/pageBannerResolver';

interface ContentPageProps {
  pageId: string;
}

export default function ContentPage({ pageId }: ContentPageProps) {
  // Try to get content from pages first, then from solutionServicePages
  const content = pages[pageId] || solutionServicePages[pageId];
  const pageTheme = getPageTheme(pageId);
  const [banner, setBanner] = useState(resolvePageBanner(pageId));
  const [imageError, setImageError] = useState(false);
  
  usePageTitle(content?.title || 'Page');

  // Apply page theme CSS variables when theme is present
  useEffect(() => {
    if (pageTheme) {
      document.documentElement.style.setProperty('--page-primary', pageTheme.primary);
      document.documentElement.style.setProperty('--page-background', pageTheme.background);
      if (pageTheme.accent) {
        document.documentElement.style.setProperty('--page-accent', pageTheme.accent);
      } else {
        document.documentElement.style.removeProperty('--page-accent');
      }
    }
    
    return () => {
      // Clean up on unmount
      document.documentElement.style.removeProperty('--page-primary');
      document.documentElement.style.removeProperty('--page-background');
      document.documentElement.style.removeProperty('--page-accent');
    };
  }, [pageTheme]);

  // Handle banner image error - fallback to pageBanners mapping
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      const fallback = getFallbackBanner(pageId);
      if (fallback) {
        setBanner(fallback);
      } else {
        setBanner(undefined);
      }
    }
  };

  if (!content) {
    if (import.meta.env.DEV) {
      console.warn(`ContentPage: Missing content for pageId "${pageId}"`);
    }
    return (
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-4">Content Not Found</h1>
        <p className="text-muted-foreground">
          This page is being prepared. Please check back soon.
        </p>
      </div>
    );
  }

  return (
    <article className={pageTheme ? 'page-themed' : ''}>
      {/* Banner Image */}
      {banner && (
        <div 
          className="w-full border-b border-border/40"
          style={pageTheme ? { backgroundColor: pageTheme.background } : undefined}
        >
          <div className="container py-8 md:py-12">
            <img
              src={banner.imagePath}
              alt={banner.alt}
              onError={handleImageError}
              className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-soft"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            {content.title}
          </h1>
          {pageTheme && (
            <div 
              className="h-1 w-24 rounded-full mb-8"
              style={{ backgroundColor: pageTheme.primary }}
            />
          )}
          {!pageTheme && <div className="mb-8" />}
          <ContentRenderer sections={content.sections} />
        </div>
      </div>
    </article>
  );
}
